# CT011 - Colaboradores, cargos, faixas e alocacoes

## Modulo
Configuracoes > Colaboradores

## Objetivo
Validar cadastro de estrutura de mao de obra, alocacao em obra/competencia, calculo de custo e impacto no dashboard.

## Pre-condicoes
- CT005 aprovado, com obra e centro de custo disponiveis.
- Usuario administrador autenticado.

## Dados de teste
- Cargo: `AUTO-4S-${RUN_ID} Cargo`
- Faixa de custo: `AUTO-4S-${RUN_ID} Faixa`
- Colaborador: `AUTO-4S-${RUN_ID} Colaborador`
- Obra: `AUTO-4S-${RUN_ID} Obra`
- Centro de custo: `AUTO-4S-${RUN_ID} Centro`
- Custo mensal: `6500`
- Beneficios: `900`
- Competencia: mes corrente ou proxima competencia aceita pelo APP.

## Cenarios e passos
### Cenario 1 - Criar cargo e faixa
1. Acessar Configuracoes > Colaboradores.
2. Identificar abas ou secoes de cargos/funcoes e faixas de custo.
3. Criar cargo/funcao de teste.
4. Criar faixa de custo vinculada ao cargo, se o APP exigir.
5. Informar custo mensal, salario base ou valor equivalente.
6. Salvar.

Resultado esperado: cargo e faixa ficam disponiveis para cadastro de colaborador.

### Cenario 2 - Criar colaborador
1. Acionar criacao de colaborador.
2. Preencher nome do colaborador.
3. Selecionar cargo e faixa.
4. Informar custo mensal `6500`.
5. Preencher campos obrigatorios.
6. Salvar.
7. Confirmar colaborador na listagem.

Resultado esperado: colaborador cadastrado e persistido.

### Cenario 3 - Criar alocacao em obra
1. Abrir colaborador ou secao de alocacoes.
2. Criar alocacao.
3. Selecionar obra e centro de custo.
4. Informar competencia.
5. Informar custo mensal, encargos, beneficios ou rateio quando campos existirem.
6. Salvar.

Resultado esperado: alocacao vinculada a obra, centro e competencia.

### Cenario 4 - Rateio e edicao quando disponiveis
1. Se a UI permitir mais de uma obra, criar segunda alocacao ou rateio.
2. Ajustar percentual ou valor.
3. Salvar.
4. Editar a alocacao.
5. Excluir, cancelar ou inativar alocacao de teste quando permitido.

Resultado esperado: rateio e edicao devem recalcular ou persistir conforme regra. Exclusao deve ser confirmada ou bloqueada com mensagem clara.

### Cenario 5 - Impacto no Dashboard
1. Acessar Dashboard.
2. Filtrar pela unidade/obra, se disponivel.
3. Conferir custo de mao de obra.
4. Conferir custo real da obra.

Resultado esperado: custo de mao de obra deve compor custo real e indicadores financeiros quando o fluxo estiver disponivel.

## Evidencias obrigatorias
- Cargo/faixa criados.
- Colaborador cadastrado.
- Alocacao por obra.
- Indicador de mao de obra no Dashboard ou registro de indisponibilidade.

## Severidade
Media. Mao de obra ausente distorce custo real e dashboard financeiro.
