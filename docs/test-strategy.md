# Estrategia de Testes Automatizados 4S

Esta suite implementa a validacao descrita no `RoteirodeTestes4S.pdf` para a Fase 1 do APP 4S.

## Execucao

1. Instalar dependencias:

   ```bash
   npm install
   npx playwright install brave
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

## Evidencias

Os testes gravam evidencias em:

- `test-results/results.json`
- `test-results/diagnostics.jsonl`
- `test-results/diagnostic-report.md`
- `test-results/artifacts`
- `playwright-report`

## Cobertura

- CT001: login, logout e login invalido.
- CT002: usuarios e permissoes.
- CT004 a CT008: cadastros iniciais, fornecedores, categorias e orcamento.
- CT009 e CT010: orcamento protegido.
- CT012 a CT019: requisicao, aprovacao, cotacao, OC, contas, pagamentos, dashboard e auditoria.
- CT020: workflow completo.
- CT022: rotas principais.

## Severidade

- Critica: bloqueia fluxo financeiro E2E, corrompe saldo/custo real/dashboard ou permite acao sem permissao.
- Alta: quebra aprovacao, persistencia, vinculos entre modulos ou regras centrais.
- Media: falha contornavel de filtro, auditoria incompleta, validacao parcial ou inconsistencia secundaria.
- Baixa: problema visual, texto, mensagem ou usabilidade sem bloqueio operacional.
