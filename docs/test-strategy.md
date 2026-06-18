# Estrategia de Testes Automatizados 4S

Esta suite Playwright + TypeScript implementa a validacao descrita no `RoteirodeTestes4S.pdf` para a Fase 1 do APP 4S.

## Execucao

1. Instalar dependencias:

   ```bash
   npm install
   npx playwright install chromium
   ```

2. Rodar smoke:

   ```bash
   npm run test:smoke
   ```

3. Rodar regressao completa:

   ```bash
   npm test
   npm run report
   ```

Variaveis aceitas:

- `BASE_URL`: padrao `https://4s.ruatrez.com`
- `ADMIN_EMAIL`: padrao `hello@ruatrez.com`
- `ADMIN_PASSWORD`: padrao `admin123`, que autenticou no ambiente real durante a execucao inicial
- `OPERATIONAL_EMAIL`: usuario operacional existente, opcional
- `OPERATIONAL_PASSWORD`: senha do usuario operacional, opcional
- `RUN_ID`: identificador da massa de teste
- `BROWSER_EXECUTABLE`: navegador Chromium/Brave local, opcional
- `PW_VIDEO=1`: habilita videos retidos em falha

## Evidencias

Os testes gravam evidencias em:

- `test-results/results.json`
- `test-results/case-results.jsonl`
- `test-results/diagnostics.jsonl`
- `test-results/diagnostic-report.md`
- `test-results/diagnostic-report.html`
- `test-results/artifacts`
- `playwright-report`

## Cobertura

- CT001: login, logout e login invalido.
- CT002: usuarios e permissoes.
- CT003: cadastros rapidos.
- CT004 a CT008: cadastros iniciais, fornecedores, categorias e orcamento.
- CT009 e CT010: orcamento protegido.
- CT011: colaboradores, cargos/faixas e alocacao.
- CT012 a CT019: requisicao, aprovacao, cotacao, OC, contas, pagamentos, dashboard e auditoria.
- CT020: workflow completo.
- CT021: auditoria.
- CT022: rotas principais.

## Severidade

- Critica: bloqueia fluxo financeiro E2E, corrompe saldo/custo real/dashboard ou permite acao sem permissao.
- Alta: quebra aprovacao, persistencia, vinculos entre modulos ou regras centrais.
- Media: falha contornavel de filtro, auditoria incompleta, validacao parcial ou inconsistencia secundaria.
- Baixa: problema visual, texto, mensagem ou usabilidade sem bloqueio operacional.
