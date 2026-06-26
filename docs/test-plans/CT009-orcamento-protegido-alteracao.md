# CT009 - Alteracao de orcamento por usuario comum

## Modulo
Orcamento > Itens Orcados e Workflow > Aprovacoes

## Objetivo
Validar que usuario comum nao altera item orcado protegido livremente e que alteracao relevante gera solicitacao com justificativa para aprovacao.

## Pre-condicoes
- CT002 aprovado, com usuario operacional disponivel.
- CT008 aprovado, com item orcado existente.
- Perfil preferencial do usuario comum: Engenharia.

## Dados de teste
- Item: `AUTO-4S-${RUN_ID} Item orcado material`
- Justificativa: `Solicitacao automatizada de alteracao`
- Novo valor unitario sugerido: `121`

## Cenarios e passos
### Cenario 1 - Usuario comum solicita alteracao
1. Fazer login com usuario comum Engenharia.
2. Acessar Orcamento > Itens Orcados.
3. Localizar o item orcado existente.
4. Acionar `Editar` ou `Alterar`.
5. Tentar alterar valor unitario, quantidade ou descricao protegida.
6. Informar justificativa.
7. Enviar solicitacao.

Resultado esperado: usuario comum nao deve alterar diretamente. O sistema deve bloquear, criar pendencia ou indicar que a alteracao aguardara aprovacao.

### Cenario 2 - Aprovar ou rejeitar solicitacao
1. Fazer logout do usuario comum.
2. Entrar com Diretoria ou Administrador.
3. Acessar Workflow > Aprovacoes.
4. Localizar a solicitacao de alteracao.
5. Registrar observacao.
6. Aprovar a solicitacao.
7. Voltar ao Orcamento e conferir se alteracao aprovada foi aplicada.
8. Repetir o fluxo com outra alteracao e rejeitar.
9. Conferir que alteracao rejeitada nao foi aplicada.

Resultado esperado: aprovacao/rejeicao atualiza a situacao do item e mantem rastreabilidade.

### Cenario 3 - Auditoria
1. Acessar Workflow > Auditoria.
2. Pesquisar pelo item ou prefixo `AUTO-4S-${RUN_ID}`.
3. Conferir registro da solicitacao e da decisao.

Resultado esperado: auditoria registra solicitante, aprovador, perfil, data/hora, observacao e acao.

## Evidencias obrigatorias
- Bloqueio ou pendencia gerada para usuario comum.
- Aprovacao/rejeicao no Workflow.
- Efeito no item orcado.
- Log de auditoria.

## Severidade
Critica. Alteracao livre de orcamento compromete governanca financeira.
