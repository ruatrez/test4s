# CT020 - Workflow completo de aprovacao

## Modulo
Workflow > Aprovacoes

## Objetivo
Validar criacao de aprovacoes, decisao por perfil correto, bloqueio de perfil incorreto, rejeicao, bloqueio de avanco sem aprovacao e reflexo na entidade de origem.

## Pre-condicoes
- CT002 aprovado.
- Existir pelo menos uma pendencia gerada por requisicao, cotacao, OC, conta, pagamento ou alteracao de orcamento.
- Usuarios/perfis disponiveis: Administrador e pelo menos um perfil operacional.

## Dados de teste
- Prefixo: `AUTO-4S-${RUN_ID}`
- Observacao de aprovacao: `Aprovacao automatizada de teste`
- Observacao de rejeicao: `Rejeicao automatizada de teste`
- Perfis esperados: Engenharia, Suprimentos, Financeiro, Diretoria e Administrador, conforme etapa.

## Cenarios e passos
### Cenario 1 - Criar pendencia de workflow
1. Executar acao que gere aprovacao, preferencialmente requisicao ou alteracao de orcamento.
2. Acessar Workflow > Aprovacoes.
3. Localizar a pendencia.
4. Conferir entidade, solicitante, valor, modulo e status.

Resultado esperado: pendencia criada com dados suficientes para decisao.

### Cenario 2 - Aprovar com perfil correto
1. Entrar com perfil correto da etapa ou Administrador.
2. Acessar Workflow > Aprovacoes.
3. Abrir pendencia.
4. Acionar `Aprovar`.
5. Informar observacao.
6. Confirmar.
7. Voltar ao modulo de origem.

Resultado esperado: item aprovado atualiza o modulo de origem e pode avancar para a proxima etapa.

### Cenario 3 - Rejeitar aprovacao
1. Criar ou localizar outra pendencia.
2. Abrir com perfil correto ou Administrador.
3. Acionar `Rejeitar`.
4. Informar observacao.
5. Confirmar.
6. Conferir modulo de origem.

Resultado esperado: item rejeitado nao deve avancar.

### Cenario 4 - Bloquear perfil incorreto
1. Entrar com usuario de perfil sem permissao para a etapa.
2. Acessar Workflow > Aprovacoes, se o menu estiver visivel.
3. Tentar aprovar ou rejeitar a pendencia.
4. Se o menu nao estiver visivel, tentar acesso direto a rota, se conhecido.

Resultado esperado: somente perfil correto ou Administrador aprova. Perfil incorreto deve nao ver a acao, receber bloqueio ou ser redirecionado.

### Cenario 5 - Bloquear avanco sem aprovacao anterior
1. Acessar modulo de origem de uma entidade pendente.
2. Tentar executar acao seguinte, como criar cotacao para requisicao pendente.
3. Registrar comportamento.

Resultado esperado: processo nao avanca sem aprovacao anterior.

### Cenario 6 - Auditoria da decisao
1. Acessar Workflow > Auditoria.
2. Pesquisar pelo prefixo.
3. Conferir aprovador, perfil, data, hora, observacao e status final.

Resultado esperado: decisao fica registrada e rastreavel.

## Evidencias obrigatorias
- Pendencia criada.
- Aprovacao com perfil correto.
- Rejeicao.
- Bloqueio de perfil incorreto.
- Bloqueio de avanco indevido.
- Auditoria.

## Severidade
Alta. Aprovacao por perfil indevido quebra governanca do fluxo financeiro.
