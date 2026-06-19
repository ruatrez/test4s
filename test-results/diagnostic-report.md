# Relatorio de Diagnostico 4S

Gerado em: 2026-06-19T17:58:52.332Z

## Sumario

Casos Playwright: 6. Falhas: 2. Aprovados: 4.

Problemas registrados: 2.

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT012-REQUISICAO-SALDO | critica | CT012-CT019 - integrated procurement, payment, dashboard and audit flow | https://4s.ruatrez.com/requisicoes | administrador | AUTO-4S-20260619175640 | Executar o caso automatizado "CT012-CT019 - integrated procurement, payment, dashboard and audit flow" e observar a etapa que falhou. | Requisicao dentro do saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada. | locator.click: Timeout 15000ms exceeded.<br>Call log:<br>[2m  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar\|confirmar\|enviar\|criar\|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()[22m<br>[2m    - locator resolved to <button>Enviar aprovacao</button>[22m<br>[2m  - attempting click action[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m    - waiting 20ms[22m<br>[2m    2 × waiting for element to be visible, enabled and stable[22m<br>[2m      - element is visible, enabled and stable[22m<br>[2m      - scrolling into view if needed[22m<br>[2m      - done scrolling[22m<br>[2m      - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m<br>[2m    - retrying click action[22m<br>[2m      - waiting 100ms[22m<br>[2m    29 × waiting for element to be visible, enabled and stable[22m<br>[2m       - element is visible, enabled and stable[22m<br>[2m       - scrolling into view if needed[22m<br>[2m       - done scrolling[22m<br>[2m       - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m<br>[2m     - retrying click action[22m<br>[2m       - waiting 500ms[22m<br> | Permitir compra acima do saldo rompe controle financeiro da obra. | /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png | Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes. | reprovado |
| CT005-OBRA-CENTRO | alta | CT004-CT008 - initial registrations and budget item persist across modules | https://4s.ruatrez.com/obras | administrador | AUTO-4S-20260619175525 | Executar o caso automatizado "CT004-CT008 - initial registrations and budget item persist across modules" e observar a etapa que falhou. | Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes. | Could not find field: unidade | Falha nesse cadastro impede orcamento, requisicao e financeiro. | /home/colatto/repo/R3/4s/test-results/CT005-OBRA-CENTRO.png | Revisar obrigatoriedade, vinculos e persistencia de obras/centros. | reprovado |

## Detalhes Dos Desvios

### CT012-REQUISICAO-SALDO - critica

- Caso: CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Localizacao: https://4s.ruatrez.com/requisicoes
- Perfil: administrador
- Massa: AUTO-4S-20260619175640
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
[2m      - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    29 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="modal-overlay" data-testid="requisicao-modal-overlay">…</div> intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m

- Impacto funcional e negocio: Permitir compra acima do saldo rompe controle financeiro da obra.
- Recomendacao: Validar saldo no backend antes de avancar status e bloquear cotacao de requisicoes excedentes.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT012-REQUISICAO-SALDO.png

### CT005-OBRA-CENTRO - alta

- Caso: CT004-CT008 - initial registrations and budget item persist across modules
- Localizacao: https://4s.ruatrez.com/obras
- Perfil: administrador
- Massa: AUTO-4S-20260619175525
- Passos para reproduzir: Executar o caso automatizado "CT004-CT008 - initial registrations and budget item persist across modules" e observar a etapa que falhou.
- Esperado: Unidade, obra e centro de custo devem ficar disponiveis para os modulos seguintes.
- Obtido: Could not find field: unidade
- Impacto funcional e negocio: Falha nesse cadastro impede orcamento, requisicao e financeiro.
- Recomendacao: Revisar obrigatoriedade, vinculos e persistencia de obras/centros.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/4s/test-results/CT005-OBRA-CENTRO.png

