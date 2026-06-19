# Relatorio de Diagnostico 4S

Gerado em: 2026-06-19T15:57:14.034Z

## Sumario

Casos Playwright: 6. Falhas: 3. Aprovados: 3.

Problemas registrados: 2.

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT012-REQUISICAO-SALDO | critica | CT012-CT019 - integrated procurement, payment, dashboard and audit flow | https://4s.ruatrez.com/requisicoes | administrador | AUTO-4S-20260619155325 | Executar o caso automatizado "CT012-CT019 - integrated procurement, payment, dashboard and audit flow" e observar a etapa que falhou. | Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar\|confirmar\|enviar\|criar\|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()[22m<br>[2m    - locator resolved to <button>Enviar aprovacao</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div>…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div>…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div>…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | Permitir compra acima do saldo rompe controle financeiro da obra. | /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. | reprovado |
| CT004-CLIENTE-CONTRATO | alta | CT004-CT008 - initial registrations and budget item persist across modules | https://4s.ruatrez.com/clientes/ | administrador | AUTO-4S-20260619155201 | Executar o caso automatizado "CT004-CT008 - initial registrations and budget item persist across modules" e observar a etapa que falhou. | Cliente e contrato devem ser criados, vinculados e persistidos. | [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed<br><br>Locator: getByText(/AUTO-4S-20260619155201 Cliente/i).first()<br>Expected: visible<br>Timeout: 10000ms<br>Error: element(s) not found<br><br>Call log:<br>[2m  - Expect "toBeVisible" with timeout 10000ms[22m<br>[2m  - waiting for getByText(/AUTO-4S-20260619155201 Cliente/i).first()[22m<br> | Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra. | /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png | Corrigir persistencia e relacionamento entre cliente e contrato. | reprovado |

## Detalhes Dos Desvios

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260619155325
- Passos para reproduzir: Executar o caso automatizado "CT012-CT019 - integrated procurement, payment, dashboard and audit flow" e observar a etapa que falhou.
- Esperado: Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada.
- Obtido: locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()[22m
[2m    - locator resolved to <button>Enviar aprovacao</button>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div>…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div>…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    29 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div>…</div> intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png

### CT004-CLIENTE-CONTRATO - alta

- Caso: CT004-CT008 - initial registrations and budget item persist across modules
- Localizacao: https://4s.ruatrez.com/clientes/
- Perfil: administrador
- Massa: AUTO-4S-20260619155201
- Passos para reproduzir: Executar o caso automatizado "CT004-CT008 - initial registrations and budget item persist across modules" e observar a etapa que falhou.
- Esperado: Cliente e contrato devem ser criados, vinculados e persistidos.
- Obtido: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m([22m[2m)[22m failed

Locator: getByText(/AUTO-4S-20260619155201 Cliente/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
[2m  - Expect "toBeVisible" with timeout 10000ms[22m
[2m  - waiting for getByText(/AUTO-4S-20260619155201 Cliente/i).first()[22m

- Impacto funcional e negocio: Sem contrato/cliente nao e possivel iniciar a cadeia financeira da obra.
- Recomendacao: Corrigir persistencia e relacionamento entre cliente e contrato.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT004-CLIENTE-CONTRATO.png

