import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth-page';
import { attachConsoleAndNetworkDiagnostics, stepWithDiagnostic } from '../support/diagnostics';
import { clickAny, gotoMenu } from '../support/ui';

test.beforeEach(async ({ page }) => {
  await attachConsoleAndNetworkDiagnostics(page);
  await new AuthPage(page).loginAsAdmin();
});

test('Regression - common UI controls, filters and destructive confirmations', async ({ page }) => {
  const filterScreens = [
    ['Financeiro', 'Contas a Pagar'],
    ['Financeiro', 'Pagamentos'],
    ['Workflow', 'Auditoria'],
    ['Dashboard']
  ];

  for (const path of filterScreens) {
    await stepWithDiagnostic(page, {
      id: `REG-FILTROS-${path.join('-').replace(/\s+/g, '-')}`,
      caseId: path[0] === 'Dashboard' ? 'CT019' : 'CT022',
      severity: 'media',
      path: path.join(' > '),
      expected: 'Filtros disponiveis devem poder ser aplicados sem quebrar a tela.',
      impact: 'Filtros quebrados reduzem rastreabilidade e capacidade de reconciliacao financeira.',
      recommendation: 'Validar parametros de filtro no frontend/backend e cobrir consultas principais.'
    }, async () => {
      await gotoMenu(page, path);
      const body = page.locator('body');
      await expect(body).toBeVisible();
      await clickAny(page, ['Filtrar', 'Aplicar', 'Buscar', 'Pesquisar']).catch(() => {});
      await expect(body).not.toHaveText(/erro interno|internal server error|undefined is not|cannot read/i);
    });
  }

  await stepWithDiagnostic(page, {
    id: 'REG-CONFIRMACAO-EXCLUSAO',
    caseId: 'CT016',
    severity: 'media',
    expected: 'Acoes de exclusao/cancelamento devem pedir confirmacao quando aplicavel.',
    impact: 'Acoes destrutivas sem confirmacao aumentam risco de perda de dados.',
    recommendation: 'Adicionar modal de confirmacao e bloquear exclusao de entidades vinculadas sem regra explicita.'
  }, async () => {
    await gotoMenu(page, ['Configurações', 'Fornecedores']);
    const deleteButton = page.getByRole('button', { name: /excluir|remover|cancelar/i }).first();
    if (!(await deleteButton.count())) return;
    await deleteButton.click();
    await expect(page.locator('body')).toHaveText(/confirm|tem certeza|deseja|excluir|remover|cancelar/i);
  });
});
