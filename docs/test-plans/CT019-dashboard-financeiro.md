# CT019 - Dashboard financeiro

## Modulo
Dashboard

## Objetivo
Validar que indicadores financeiros refletem orcamento, compras, pagamentos, mao de obra, saldos, pendencias e filtros.

## Pre-condicoes
- CT011 aprovado ou registrado como indisponivel se UI nao permitir alocacao.
- CT018 aprovado.
- Usuario administrador ou perfil com acesso ao Dashboard autenticado.

## Dados de teste
- Unidade: `AUTO-4S-${RUN_ID} Unidade`
- Obra: `AUTO-4S-${RUN_ID} Obra`
- Item orcado com previsto `12000`
- OC e pagamentos do fluxo.
- Custo de mao de obra `6500` e beneficios `900`, quando aplicaveis.

## Cenarios e passos
### Cenario 1 - Capturar indicadores antes do fluxo integrado
1. Acessar Dashboard.
2. Aplicar filtro por unidade/obra, se disponivel.
3. Registrar valores de orcado, comprometido, pago, saldo e custo de mao de obra.

Resultado esperado: valores iniciais devem ser coerentes com dados existentes.

### Cenario 2 - Conferir indicadores apos compra e pagamento
1. Garantir que CT015 e CT018 foram executados.
2. Voltar ao Dashboard.
3. Conferir valor orcado.
4. Conferir valor comprometido.
5. Conferir valor pago.
6. Conferir saldo.
7. Conferir custo real.

Resultado esperado: indicadores atualizam automaticamente, sem controle manual externo.

### Cenario 3 - Conferir categorias e alertas
1. Conferir saldo orcamentario por categoria.
2. Conferir contas a pagar da semana.
3. Conferir contas atrasadas.
4. Conferir aprovacoes pendentes.
5. Conferir itens acima do orcamento.
6. Conferir custo de mao de obra por obra.

Resultado esperado: alertas aparecem conforme pendencias reais e valores refletem compras, pagamentos e mao de obra.

### Cenario 4 - Filtro por unidade
1. Selecionar unidade de teste.
2. Validar que cards e graficos mudam para a unidade.
3. Remover filtro.
4. Comparar valores.

Resultado esperado: filtro por unidade altera indicadores de forma coerente e nao quebra a tela.

### Cenario 5 - Validacao tecnica
1. Observar console e requisicoes, se o executor tiver ferramenta para isso.
2. Confirmar ausencia de tela em branco, erro interno, `undefined is not`, `cannot read` ou HTTP 5xx.

Resultado esperado: Dashboard carrega sem erros tecnicos criticos.

## Evidencias obrigatorias
- Indicadores antes/depois.
- Filtro por unidade.
- Alertas financeiros.
- Custo de mao de obra ou indisponibilidade documentada.

## Severidade
Alta. Indicadores inconsistentes prejudicam controle financeiro e rastreabilidade.
