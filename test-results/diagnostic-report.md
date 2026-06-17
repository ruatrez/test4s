# Relatorio de Diagnostico 4S

Gerado em: 2026-06-17T15:43:51.137Z

## Sumario

Casos Playwright: 6. Falhas: 3. Aprovados: 3.

Problemas registrados: 7.

## Problemas Priorizados

| ID | Severidade | Caso | Localizacao | Impacto | Recomendacao | Evidencia |
| --- | --- | --- | --- | --- | --- | --- |
| CT012-REQUISICAO-SALDO | critica | CT012-CT019 - integrated procurement, payment, dashboard and audit flow | https://4s.ruatrez.com/requisicoes | Permitir compra acima do saldo rompe controle financeiro da obra. | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. | /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png |
| CT009-ORCAMENTO-PROTEGIDO-ALTERACAO | critica | CT002, CT009, CT010, CT020 - permissions, protected budget and workflow decisions | https://4s.ruatrez.com/orcamento | Alteracao livre de orcamento compromete governanca financeira. | Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes. | /home/colatto/repo/R3/4s/test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png |
| CT004-CLIENTE-CONTRATO | alta | CT004-CT008 - initial registrations and budget item persist across modules | https://4s.ruatrez.com/clientes/ | Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra. | Corrigir persistencia e relacionamento entre cliente e contrato. | /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png |
| CONSOLE-1781710732180 | media | CT004-CT008 - initial registrations and budget item persist across modules | https://4s.ruatrez.com/clientes/ | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710732180.png |
| CONSOLE-1781710732181 | media | CT004-CT008 - initial registrations and budget item persist across modules | https://4s.ruatrez.com/clientes/ | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710732181.png |
| CONSOLE-1781710751512 | media | CT012-CT019 - integrated procurement, payment, dashboard and audit flow | https://4s.ruatrez.com/requisicoes | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710751512.png |
| CONSOLE-1781710751565 | media | CT012-CT019 - integrated procurement, payment, dashboard and audit flow | https://4s.ruatrez.com/requisicoes | Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica. | Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada. | /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710751565.png |

## Detalhes Dos Desvios

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260617153905
- Esperado: Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260617153905 Requisicao/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260617153905 Requisicao/i).first()[22m

- Impacto: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png

### CT009-ORCAMENTO-PROTEGIDO-ALTERACAO - critica

- Caso: CT002, CT009, CT010, CT020 - permissions, protected budget and workflow decisions
- Localizacao: https://4s.ruatrez.com/orcamento
- Perfil: administrador
- Massa: AUTO-4S-20260617153921
- Esperado: Usuario comum nao deve alterar item orcado protegido diretamente; deve gerar aprovacao.
- Obtido: Could not find clickable control: Editar | Alterar
- Impacto: Alteracao livre de orcamento compromete governanca financeira.
- Recomendacao: Bloquear edicao direta para perfis nao autorizados e encaminhar solicitacao ao Workflow > Aprovacoes.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT009-ORCAMENTO-PROTEGIDO-ALTERACAO.png

### CT004-CLIENTE-CONTRATO - alta

- Caso: CT004-CT008 - initial registrations and budget item persist across modules
- Localizacao: https://4s.ruatrez.com/clientes/
- Perfil: administrador
- Massa: AUTO-4S-20260617153828
- Esperado: Cliente e contrato devem ser criados, vinculados e persistidos.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260617153828 Cliente/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260617153828 Cliente/i).first()[22m

- Impacto: Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.
- Recomendacao: Corrigir persistencia e relacionamento entre cliente e contrato.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png

### CONSOLE-1781710732180 - media

- Caso: CT004-CT008 - initial registrations and budget item persist across modules
- Localizacao: https://4s.ruatrez.com/clientes/
- Perfil: administrador
- Massa: AUTO-4S-20260617153828
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Falha ao sincronizar logs_auditoria no Lumi: FetchError: [POST] "https://api.lumi.new/lm/p442450294435041280/logs_auditoria/documents": <no response> Failed to fetch
    at async $fetch2 (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:29885:15)
- Impacto: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710732180.png

### CONSOLE-1781710732181 - media

- Caso: CT004-CT008 - initial registrations and budget item persist across modules
- Localizacao: https://4s.ruatrez.com/clientes/
- Perfil: administrador
- Massa: AUTO-4S-20260617153828
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Falha ao sincronizar clientes no Lumi: FetchError: [POST] "https://api.lumi.new/lm/p442450294435041280/clientes/documents": <no response> Failed to fetch
    at async $fetch2 (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:29885:15)
- Impacto: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710732181.png

### CONSOLE-1781710751512 - media

- Caso: CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260617153905
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Falha ao sincronizar requisicoes no Lumi: Error: OPERATION_FAILED: Insufficient permissions to update document
    at D.<anonymous> (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:30394:33)
    at Generator.next (<anonymous>)
    at n (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:30136:11)
- Impacto: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710751512.png

### CONSOLE-1781710751565 - media

- Caso: CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260617153905
- Esperado: A tela nao deve emitir erros JavaScript no console.
- Obtido: Falha ao sincronizar logs_auditoria no Lumi: Error: OPERATION_FAILED: Insufficient permissions to update document
    at D.<anonymous> (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:30394:33)
    at Generator.next (<anonymous>)
    at n (https://4s.ruatrez.com/assets/prerender-D5FRqPTZ.js:30136:11)
- Impacto: Erros de console podem indicar falhas de interface, dados nao renderizados ou regressao tecnica.
- Recomendacao: Corrigir a excecao no frontend e adicionar cobertura automatizada para a tela afetada.
- Evidencia: /home/colatto/repo/R3/4s/test-results/CONSOLE-1781710751565.png

