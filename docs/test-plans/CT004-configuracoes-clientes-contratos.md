# CT004 - Clientes e contratos

## Modulo
Configuracoes > Clientes e Contratos

## Objetivo
Validar cadastro, edicao, exclusao quando permitida, persistencia e vinculo entre cliente e contrato.

## Pre-condicoes
- Usuario administrador autenticado.
- CT001 aprovado.

## Dados de teste
- Cliente: `AUTO-4S-${RUN_ID} Cliente`
- Razao social: `AUTO-4S-${RUN_ID} Cliente SA`
- Documento: valor numerico unico derivado de `RUN_ID`.
- E-mail: `cliente.auto@example.test`
- Contato: `QA Automatizado`
- Contrato: `AUTO-4S-${RUN_ID} Contrato`
- Valor contratado: `250000`

## Cenarios e passos
### Cenario 1 - Criar cliente
1. Acessar Configuracoes > Clientes e Contratos.
2. Acionar criacao de cliente.
3. Preencher razao social, nome fantasia, documento, e-mail, contato principal e status Ativo.
4. Salvar.
5. Confirmar mensagem de sucesso, se exibida.
6. Pesquisar pelo cliente.

Resultado esperado: cliente deve aparecer na lista e nos controles de selecao relacionados.

### Cenario 2 - Editar cliente
1. Abrir o cliente criado.
2. Alterar contato principal para `QA Automatizado Editado`.
3. Salvar.
4. Atualizar a pagina.
5. Abrir novamente o cliente.

Resultado esperado: alteracao deve persistir apos refresh.

### Cenario 3 - Criar contrato vinculado
1. Na mesma tela ou aba de contratos, acionar criacao de contrato.
2. Selecionar o cliente criado.
3. Informar nome do contrato e valor contratado `250000`.
4. Preencher campos obrigatorios adicionais.
5. Salvar.
6. Pesquisar pelo contrato.

Resultado esperado: contrato deve ficar vinculado ao cliente e disponivel para criacao de obra.

### Cenario 4 - Persistencia apos novo acesso
1. Atualizar a pagina.
2. Confirmar cliente e contrato.
3. Fazer logout.
4. Fazer login novamente como administrador.
5. Acessar Configuracoes > Clientes e Contratos.
6. Confirmar cliente e contrato.

Resultado esperado: dados devem persistir em base compartilhada, nao apenas no navegador.

### Cenario 5 - Exclusao, cancelamento ou inativacao
1. Tentar excluir os registros de teste se ainda nao tiverem vinculos.
2. Confirmar exclusao quando solicitado.
3. Se bloqueado por regra de negocio, tentar cancelar ou inativar.
4. Registrar mensagem e comportamento.

Resultado esperado: exclusao funciona quando permitida. Se houver vinculo, o sistema deve bloquear com mensagem clara ou permitir cancelamento/inativacao.

## Evidencias obrigatorias
- Cliente salvo.
- Contrato vinculado ao cliente.
- Persistencia apos refresh e novo login.
- Mensagem de bloqueio ou confirmacao de exclusao/inativacao.

## Severidade
Alta. Sem cliente e contrato nao e possivel iniciar a cadeia financeira da obra.
