import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth-page';
import { NavigationPage } from '../pages/navigation-page';
import { config } from '../support/config';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';
import { clickAny, expectPageReady } from '../support/ui';

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT001 - login, logout, invalid login and session access', async ({ page }) => {
  const auth = new AuthPage(page);

  await stepWithDiagnostic(page, {
    id: 'CT001-LOGIN-ADMIN',
    caseId: 'CT001',
    severity: 'critica',
    expected: 'Login administrativo valido deve abrir a aplicacao.',
    impact: 'Sem login administrativo nao ha como validar a Fase 1.',
    recommendation: 'Confirmar credencial ativa e corrigir autenticacao ou ambiente.'
  }, async () => {
    await auth.loginAsAdmin();
    await expectPageReady(page, ['Dashboard']);
  });

  await stepWithDiagnostic(page, {
    id: 'CT001-LOGOUT',
    caseId: 'CT001',
    severity: 'alta',
    expected: 'Logout deve encerrar a sessao e retornar para login.',
    impact: 'Sessao sem encerramento confiavel afeta seguranca e testes multiusuario.',
    recommendation: 'Expor acao de logout clara e invalidar a sessao no backend.'
  }, async () => {
    await auth.logout();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  await stepWithDiagnostic(page, {
    id: 'CT001-LOGIN-INVALIDO',
    caseId: 'CT001',
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

test('CT003 - cadastro shortcuts route to functional screens', async ({ page }) => {
  const auth = new AuthPage(page);
  const navigation = new NavigationPage(page);
  await auth.loginAsAdmin();

  await stepWithDiagnostic(page, {
    id: 'CT003-CADASTROS-RAPIDOS',
    caseId: 'CT003',
    severity: 'media',
    path: 'Cadastros',
    expected: 'Atalhos de cadastros devem abrir as telas principais sem erro tecnico.',
    impact: 'Atalhos quebrados prejudicam onboarding e navegacao operacional.',
    recommendation: 'Corrigir links/rotas dos atalhos de Cadastros.'
  }, async () => {
    await navigation.go(['Cadastros']);
    for (const shortcut of ['Clientes', 'Contratos', 'Obras', 'Centros', 'Fornecedores', 'Categorias', 'Colaboradores']) {
      await clickAny(page, [shortcut]).catch(() => {});
      await expectPageReady(page);
      await navigation.go(['Cadastros']);
    }
  });
});

test('CT022 - main routes load without blank screens or technical errors', async ({ page }) => {
  const auth = new AuthPage(page);
  const navigation = new NavigationPage(page);
  await auth.loginAsAdmin();

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
      caseId: 'CT022',
      severity: 'alta',
      path: route.join(' > '),
      expected: `Tela ${route.join(' > ')} deve carregar com conteudo visivel.`,
      impact: 'Tela quebrada bloqueia validacao funcional e operacao do modulo.',
      recommendation: 'Corrigir rota, permissao, carregamento de dados ou componente frontend da tela.'
    }, async () => {
      await navigation.validateRoute(route);
    });
  }
});
