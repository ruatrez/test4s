const { test, expect } = require('@playwright/test');
const { config } = require('../support/config');
const { login, logout } = require('../support/auth');
const { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } = require('../support/diagnostics');
const { clickAny, expectPageReady, gotoMenu } = require('../support/ui');

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT001 - login, logout and invalid login behavior', async ({ page }) => {
  await stepWithDiagnostic(page, {
    id: 'CT001-LOGIN-ADMIN',
    severity: 'critica',
    expected: 'Login administrativo valido deve abrir a aplicacao.',
    impact: 'Sem login administrativo nao ha como validar a Fase 1.',
    recommendation: 'Confirmar credencial ativa e corrigir autenticacao ou ambiente.'
  }, async () => {
    await login(page);
    await expectPageReady(page, ['Dashboard']);
  });

  await stepWithDiagnostic(page, {
    id: 'CT001-LOGOUT',
    severity: 'alta',
    expected: 'Logout deve encerrar a sessao e retornar para login.',
    impact: 'Sessao sem encerramento confiavel afeta seguranca e testes multiusuario.',
    recommendation: 'Expor acao de logout clara e invalidar a sessao no backend.'
  }, async () => {
    await logout(page);
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  await stepWithDiagnostic(page, {
    id: 'CT001-LOGIN-INVALIDO',
    severity: 'alta',
    expected: 'Login invalido deve exibir erro e bloquear acesso.',
    impact: 'Falha nessa regra compromete controle de acesso.',
    recommendation: 'Validar credenciais no servidor e retornar mensagem de erro clara.'
  }, async () => {
    await page.goto(config.baseURL, { waitUntil: 'networkidle' });
    await page.locator('input[type="email"], input[name*="email" i]').first().fill('invalid@example.test');
    await page.locator('input[type="password"]').first().fill('wrong-password');
    await clickAny(page, ['Entrar', 'Login', 'Acessar']);
    await expect(page.locator('body')).toHaveText(/invalid|inval|erro|senha|credencial/i);
  });
});

test('CT022 - main routes load without blank screens or technical errors', async ({ page }) => {
  await login(page);

  const routes = [
    ['Dashboard'],
    ['Cadastros'],
    ['Configurações', 'Clientes e Contratos'],
    ['Configurações', 'Obras e Centros'],
    ['Configurações', 'Fornecedores'],
    ['Configurações', 'Categorias'],
    ['Configurações', 'Colaboradores'],
    ['Configurações', 'Usuários'],
    ['Orçamento', 'Itens Orçados'],
    ['Suprimentos', 'Requisições'],
    ['Suprimentos', 'Cotações'],
    ['Suprimentos', 'Ordens de Compra'],
    ['Financeiro', 'Contas a Pagar'],
    ['Financeiro', 'Pagamentos'],
    ['Workflow', 'Aprovações'],
    ['Workflow', 'Auditoria']
  ];

  for (const route of routes) {
    await stepWithDiagnostic(page, {
      id: `CT022-${route.join('-').replace(/\s+/g, '-')}`,
      severity: 'alta',
      path: route.join(' > '),
      expected: `Tela ${route.join(' > ')} deve carregar com conteudo visivel.`,
      impact: 'Tela quebrada bloqueia validacao funcional e operacao do modulo.',
      recommendation: 'Corrigir rota, permissao, carregamento de dados ou componente frontend da tela.'
    }, async () => {
      await gotoMenu(page, route);
      await expectPageReady(page);
    });
  }
});
