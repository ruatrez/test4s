# CT021 - Auditoria

## Modulo
Workflow > Auditoria

## Objetivo
Validar que a auditoria registra criacao, edicao, exclusao/cancelamento, aprovacoes e rejeicoes com usuario, data/hora e modulo afetado.

## Pre-condicoes
- CT020 aprovado ou existir eventos auditaveis gerados por CTs anteriores.
- Usuario administrador ou Diretoria autenticado.

## Dados de teste
- Prefixo: `AUTO-4S-${RUN_ID}`
- Entidades geradas: cliente, contrato, obra, item orcado, requisicao, cotacao, OC, conta e pagamento.

## Cenarios e passos
### Cenario 1 - Auditar criacao
1. Criar um cadastro simples de teste ou usar cadastro criado nos CTs anteriores.
2. Acessar Workflow > Auditoria.
3. Pesquisar pelo prefixo.
4. Localizar evento de criacao.

Resultado esperado: evento mostra quem criou, quando criou, modulo afetado e entidade.

### Cenario 2 - Auditar edicao
1. Editar um cadastro ou documento de teste.
2. Acessar Auditoria.
3. Pesquisar pela entidade.
4. Localizar evento de edicao.

Resultado esperado: edicao aparece no historico, com usuario, data/hora e acao.

### Cenario 3 - Auditar exclusao, cancelamento ou inativacao
1. Excluir, cancelar ou inativar entidade de teste quando permitido.
2. Acessar Auditoria.
3. Pesquisar pela entidade.
4. Conferir evento.

Resultado esperado: exclusao/cancelamento/inativacao aparece no historico.

### Cenario 4 - Auditar aprovacao e rejeicao
1. Gerar uma aprovacao e aprovar.
2. Gerar outra aprovacao e rejeitar.
3. Acessar Auditoria.
4. Pesquisar pelo prefixo.
5. Conferir eventos de aprovacao e rejeicao.

Resultado esperado: decisoes aparecem com aprovador, perfil, data/hora, observacao e modulo de origem.

### Cenario 5 - Qualidade dos dados de auditoria
1. Para cada evento encontrado, validar se ha identificacao de usuario.
2. Validar se ha data e horario.
3. Validar se ha tipo da acao.
4. Validar se ha modulo ou entidade afetada.
5. Validar se a informacao permite rastrear impacto no orcamento e custo real quando aplicavel.

Resultado esperado: logs ajudam a rastrear quem fez, o que fez, quando fez e qual modulo foi afetado.

## Evidencias obrigatorias
- Log de criacao.
- Log de edicao.
- Log de exclusao/cancelamento.
- Log de aprovacao/rejeicao.
- Exemplo de registro com usuario, data/hora e entidade.

## Severidade
Media. Auditoria incompleta reduz rastreabilidade e capacidade de apuracao.
