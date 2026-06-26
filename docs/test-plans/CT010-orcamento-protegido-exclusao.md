# CT010 - Exclusao de item orcado

## Modulo
Orcamento > Itens Orcados e Workflow > Aprovacoes

## Objetivo
Validar exclusao protegida de item orcado por usuario comum e acao administrativa direta quando permitida.

## Pre-condicoes
- CT002 aprovado.
- CT008 aprovado.
- Existir item orcado sem movimentacao critica ou item especifico para exclusao.

## Dados de teste
- Item: `AUTO-4S-${RUN_ID} Item orcado material`
- Justificativa comum: `Solicitacao automatizada de exclusao`
- Justificativa admin: `Cancelamento automatizado de teste`

## Cenarios e passos
### Cenario 1 - Usuario comum solicita exclusao
1. Fazer login com usuario comum.
2. Acessar Orcamento > Itens Orcados.
3. Localizar item orcado.
4. Acionar `Solicitar exclusao`, `Excluir`, `Remover` ou `Cancelar`.
5. Informar justificativa.
6. Confirmar envio.

Resultado esperado: usuario comum nao remove diretamente. O sistema deve gerar aprovacao pendente para Administrador ou bloquear com mensagem clara.

### Cenario 2 - Administrador decide exclusao solicitada
1. Fazer logout do usuario comum.
2. Entrar como Administrador.
3. Acessar Workflow > Aprovacoes.
4. Localizar pendencia de exclusao.
5. Aprovar ou rejeitar.
6. Voltar ao Orcamento > Itens Orcados.
7. Confirmar efeito da decisao.

Resultado esperado: exclusao aprovada remove, cancela ou inativa o item conforme regra do APP. Rejeicao mantem o item ativo.

### Cenario 3 - Exclusao direta por administrador
1. Como Administrador, localizar outro item orcado de teste sem dependencia.
2. Acionar `Excluir`, `Remover`, `Cancelar` ou `Inativar`.
3. Informar justificativa quando solicitada.
4. Confirmar.
5. Verificar listagem e status do item.

Resultado esperado: Administrador pode executar acao permitida diretamente ou recebe bloqueio de regra de negocio objetivo.

### Cenario 4 - Auditoria
1. Acessar Workflow > Auditoria.
2. Pesquisar pelo prefixo de teste.
3. Validar registros de solicitacao, decisao e exclusao/cancelamento.

Resultado esperado: auditoria registra usuario, perfil, data/hora, justificativa e modulo afetado.

## Evidencias obrigatorias
- Pendencia ou bloqueio para usuario comum.
- Decisao administrativa.
- Estado final do item.
- Registro de auditoria.

## Severidade
Critica. Exclusao indevida remove a base de controle financeiro e afeta saldos.
