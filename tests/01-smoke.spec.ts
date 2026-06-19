import { expect, test } from '@playwright/test';
import { AuthPage } from '../support/pages/auth-page';
import { NavigationPage } from '../support/pages/navigation-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';
import { clickAny, expectPageReady } from '../support/ui';

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
});

test('CT001 - login valido, logout, login invalido e sessao expirada quando observavel', async ({ page }) => {
  const auth = new AuthPage(page);

  await stepWithDiagnostic(page, {
    id: 'CT001-AUTH',
    caseId: 'CT001',
    severity: 'critica',
    expected: 'Login valido deve abrir a aplicacao, logout deve encerrar sessao e login invalido deve bloquear acesso.',
    impact: 'Sem autenticacao confiavel nao ha validacao segura dos fluxos da Fase 1.',
    recommendation: 'Confirmar credenciais, invalidacao de sessao e mensagens de erro de autenticacao.'
  }, async () => {
    await auth.loginAsAdmin();
    await expectPageReady(page, ['Dashboard']);
    await auth.logout();
    await auth.expectLoginForm();
    await auth.invalidLogin();
  });
});

test('CT003 - atalhos da tela Cadastros abrem os dominios principais', async ({ page }) => {
  const auth = new AuthPage(page);
  const navigation = new NavigationPage(page);
  await auth.loginAsAdmin();

  await stepWithDiagnostic(page, {
    id: 'CT003-CADASTROS-ATALHOS',
    caseId: 'CT003',
    severity: 'media',
    path: 'Cadastros',
    expected: 'Atalhos de Cadastros devem abrir os cadastros mestres exibidos na tela.',
    impact: 'Atalhos quebrados reduzem produtividade e podem ocultar modulos administrativos.',
    recommendation: 'Corrigir links/rotas dos cards ou botoes da tela Cadastros.'
  }, async () => {
    for (const shortcut of ['Cliente', 'Contrato', 'Unidade', 'Obra', 'Centro de Custo', 'Fornecedor', 'Categoria Orç.', 'Cargo / Função', 'Faixa de Custo', 'Colaborador']) {
      await navigation.openRegistrationsShortcut(shortcut);
    }
  });
});

test('CT022 - rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx', async ({ page }) => {
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

  await stepWithDiagnostic(page, {
    id: 'CT022-ROTAS-PRINCIPAIS',
    caseId: 'CT022',
    severity: 'alta',
    path: 'Menu principal',
    expected: 'Todas as rotas principais devem carregar conteudo visivel sem tela em branco, erro JS critico ou HTTP 5xx.',
    impact: 'Tela quebrada bloqueia validacao funcional e operacao do modulo.',
    recommendation: 'Corrigir rota, permissao, carregamento de dados ou componente frontend da tela afetada.'
  }, async () => {
    await navigation.validateMainRoutes(routes);
    await clickAny(page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
    await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
  });
});
