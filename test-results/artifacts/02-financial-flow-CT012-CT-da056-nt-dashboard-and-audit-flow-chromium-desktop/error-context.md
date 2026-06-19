# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-financial-flow.spec.js >> CT012-CT019 - integrated procurement, payment, dashboard and audit flow
- Location: tests/02-financial-flow.spec.js:107:1

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i }).first()
    - locator resolved to <button>Enviar aprovacao</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    29 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div>…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - generic [ref=e5]:
      - img "4S Engenharia" [ref=e7] [cursor=pointer]
      - generic [ref=e8]: Núcleo Financeiro
    - navigation [ref=e9]:
      - button "◈ Dashboard" [ref=e10] [cursor=pointer]:
        - generic [ref=e11]: ◈
        - generic [ref=e12]: Dashboard
      - button "⊞ Cadastros" [ref=e13] [cursor=pointer]:
        - generic [ref=e14]: ⊞
        - generic [ref=e15]: Cadastros
      - button "⊙ Configurações ▶" [ref=e17] [cursor=pointer]:
        - generic [ref=e18]: ⊙
        - generic [ref=e19]: Configurações
        - generic [ref=e20]: ▶
      - button "◑ Orçamento ▶" [ref=e22] [cursor=pointer]:
        - generic [ref=e23]: ◑
        - generic [ref=e24]: Orçamento
        - generic [ref=e25]: ▶
      - generic [ref=e26]:
        - button "◐ Suprimentos ▶" [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: ◐
          - generic [ref=e29]: Suprimentos
          - generic [ref=e30]: ▶
        - button "Requisições" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Requisições
        - button "Cotações" [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: Cotações
        - button "Ordens de Compra" [ref=e35] [cursor=pointer]:
          - generic [ref=e36]: Ordens de Compra
      - button "◧ Financeiro ▶" [ref=e38] [cursor=pointer]:
        - generic [ref=e39]: ◧
        - generic [ref=e40]: Financeiro
        - generic [ref=e41]: ▶
      - button "◫ Workflow ▶" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: ◫
        - generic [ref=e45]: Workflow
        - generic [ref=e46]: ▶
    - generic [ref=e47]:
      - generic [ref=e49]: H
      - generic [ref=e50]:
        - paragraph [ref=e51]: Hello
        - paragraph [ref=e52]: ADMINISTRADOR
      - button "⏻" [ref=e53] [cursor=pointer]
  - main [ref=e54]:
    - generic [ref=e55]:
      - button "⚠ 3 aprovações pendentes" [ref=e56] [cursor=pointer]
      - generic [ref=e57]: ADMINISTRADOR
    - generic [ref=e59]:
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "Requisicoes" [level=1] [ref=e62]
          - paragraph [ref=e63]: 16 requisicoes
        - button "+ Nova Requisicao" [ref=e64] [cursor=pointer]
      - generic [ref=e65]:
        - textbox "Buscar..." [ref=e66]
        - combobox [ref=e67]:
          - option "Todas as obras" [selected]
          - option "AUTO-4S-1781787507433 Obra"
          - option "AUTO-4S-1781787088837 Obra"
          - option "AUTO-4S-1781787027511 Obra"
          - option "AUTO-4S-1781786933497 Obra"
          - option "AUTO-4S-1781786851917 Obra"
          - option "AUTO-4S-1781786769827 Obra"
          - option "AUTO-4S-1781786694588 Obra"
          - option "PW CT009 20260617184225 Obra"
          - option "PW CT012 20260617184225 Obra"
          - option "PW CT012 20260617184145 Obra"
          - option "PW CT009 20260617183934 Obra"
          - option "PW CT012 20260617183903 Obra"
          - option "PW CT009 20260617183009 Obra"
          - option "PW CT012 20260617182923 Obra"
          - option "R3"
          - option "VIA MOBILIDADE - TROCA DE PISOS"
          - option "4S-OBR-053-CAP-VMO"
      - table [ref=e68]:
        - rowgroup [ref=e69]:
          - row "Numero Obra Centro Custo Itens Valor Est. Status Acoes" [ref=e70]:
            - columnheader "Numero" [ref=e71]
            - columnheader "Obra" [ref=e72]
            - columnheader "Centro Custo" [ref=e73]
            - columnheader "Itens" [ref=e74]
            - columnheader "Valor Est." [ref=e75]
            - columnheader "Status" [ref=e76]
            - columnheader "Acoes" [ref=e77]
        - rowgroup [ref=e78]:
          - row "4S-237833-2026 AUTO-4S-1781786933497 Obra AUTO-4S-1781786933497 Centro 1 item(ns) AUTO-4S-1781786933497 Item R$ 100,00 EM APROVACAO Editar Verificar aprovacao Excluir" [ref=e79]:
            - cell "4S-237833-2026" [ref=e80]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e81]
            - cell "AUTO-4S-1781786933497 Centro" [ref=e82]
            - cell "1 item(ns) AUTO-4S-1781786933497 Item" [ref=e83]:
              - text: 1 item(ns)
              - generic [ref=e84]: AUTO-4S-1781786933497 Item
            - cell "R$ 100,00" [ref=e85]
            - cell "EM APROVACAO" [ref=e86]
            - cell "Editar Verificar aprovacao Excluir" [ref=e87]:
              - button "Editar" [ref=e88] [cursor=pointer]
              - button "Verificar aprovacao" [ref=e89] [cursor=pointer]
              - button "Excluir" [ref=e90] [cursor=pointer]
          - row "4S-852170-2026 R3 1 1 item(ns) 1 R$ 15.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e91]:
            - cell "4S-852170-2026" [ref=e92]
            - cell "R3" [ref=e93]
            - cell "1" [ref=e94]
            - cell "1 item(ns) 1" [ref=e95]:
              - text: 1 item(ns)
              - generic [ref=e96]: "1"
            - cell "R$ 15.000,00" [ref=e97]
            - cell "RASCUNHOBLOQUEADA" [ref=e98]
            - cell "Editar Excluir" [ref=e99]:
              - button "Editar" [ref=e100] [cursor=pointer]
              - button "Excluir" [ref=e101] [cursor=pointer]
          - row "4S-480687-2026 AUTO-4S-1781787507433 Obra AUTO-4S-1781787507433 Centro 1 item(ns) AUTO-4S-1781787507433 Item R$ 2.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e102]:
            - cell "4S-480687-2026" [ref=e103]
            - cell "AUTO-4S-1781787507433 Obra" [ref=e104]
            - cell "AUTO-4S-1781787507433 Centro" [ref=e105]
            - cell "1 item(ns) AUTO-4S-1781787507433 Item" [ref=e106]:
              - text: 1 item(ns)
              - generic [ref=e107]: AUTO-4S-1781787507433 Item
            - cell "R$ 2.000,00" [ref=e108]
            - cell "RASCUNHOBLOQUEADA" [ref=e109]
            - cell "Editar Excluir" [ref=e110]:
              - button "Editar" [ref=e111] [cursor=pointer]
              - button "Excluir" [ref=e112] [cursor=pointer]
          - row "4S-230792-2026 AUTO-4S-1781786933497 Obra AUTO-4S-1781786933497 Centro 1 item(ns) AUTO-4S-1781786933497 Item R$ 2.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e113]:
            - cell "4S-230792-2026" [ref=e114]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e115]
            - cell "AUTO-4S-1781786933497 Centro" [ref=e116]
            - cell "1 item(ns) AUTO-4S-1781786933497 Item" [ref=e117]:
              - text: 1 item(ns)
              - generic [ref=e118]: AUTO-4S-1781786933497 Item
            - cell "R$ 2.000,00" [ref=e119]
            - cell "RASCUNHOBLOQUEADA" [ref=e120]
            - cell "Editar Excluir" [ref=e121]:
              - button "Editar" [ref=e122] [cursor=pointer]
              - button "Excluir" [ref=e123] [cursor=pointer]
          - row "4S-548743-2026 AUTO-4S-1781786851917 Obra AUTO-4S-1781786851917 Centro 1 item(ns) AUTO-4S-1781786851917 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e124]:
            - cell "4S-548743-2026" [ref=e125]
            - cell "AUTO-4S-1781786851917 Obra" [ref=e126]
            - cell "AUTO-4S-1781786851917 Centro" [ref=e127]
            - cell "1 item(ns) AUTO-4S-1781786851917 Item" [ref=e128]:
              - text: 1 item(ns)
              - generic [ref=e129]: AUTO-4S-1781786851917 Item
            - cell "R$ 100,00" [ref=e130]
            - cell "RASCUNHO" [ref=e131]
            - cell "Editar Enviar aprovacao Excluir" [ref=e132]:
              - button "Editar" [ref=e133] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e134] [cursor=pointer]
              - button "Excluir" [ref=e135] [cursor=pointer]
          - row "4S-852402-2026 AUTO-4S-1781786769827 Obra AUTO-4S-1781786769827 Centro 1 item(ns) AUTO-4S-1781786769827 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e136]:
            - cell "4S-852402-2026" [ref=e137]
            - cell "AUTO-4S-1781786769827 Obra" [ref=e138]
            - cell "AUTO-4S-1781786769827 Centro" [ref=e139]
            - cell "1 item(ns) AUTO-4S-1781786769827 Item" [ref=e140]:
              - text: 1 item(ns)
              - generic [ref=e141]: AUTO-4S-1781786769827 Item
            - cell "R$ 100,00" [ref=e142]
            - cell "RASCUNHO" [ref=e143]
            - cell "Editar Enviar aprovacao Excluir" [ref=e144]:
              - button "Editar" [ref=e145] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e146] [cursor=pointer]
              - button "Excluir" [ref=e147] [cursor=pointer]
          - row "4S-432322-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 1 item(ns) PW CT009 20260617184225 Item R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e148]:
            - cell "4S-432322-2026" [ref=e149]
            - cell "PW CT009 20260617184225 Obra" [ref=e150]
            - cell "PW CT009 20260617184225 Centro" [ref=e151]
            - cell "1 item(ns) PW CT009 20260617184225 Item" [ref=e152]:
              - text: 1 item(ns)
              - generic [ref=e153]: PW CT009 20260617184225 Item
            - cell "R$ 12.000,00" [ref=e154]
            - cell "RASCUNHOBLOQUEADA" [ref=e155]
            - cell "Editar Excluir" [ref=e156]:
              - button "Editar" [ref=e157] [cursor=pointer]
              - button "Excluir" [ref=e158] [cursor=pointer]
          - row "4S-165544-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e159]:
            - cell "4S-165544-2026" [ref=e160]
            - cell "PW CT009 20260617184225 Obra" [ref=e161]
            - cell "PW CT009 20260617184225 Centro" [ref=e162]
            - cell "0 item(ns)" [ref=e163]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e164]
            - cell "RASCUNHOBLOQUEADA" [ref=e165]
            - cell "Editar Excluir" [ref=e166]:
              - button "Editar" [ref=e167] [cursor=pointer]
              - button "Excluir" [ref=e168] [cursor=pointer]
          - row "4S-435113-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e169]:
            - cell "4S-435113-2026" [ref=e170]
            - cell "PW CT009 20260617184225 Obra" [ref=e171]
            - cell "PW CT009 20260617184225 Centro" [ref=e172]
            - cell "0 item(ns)" [ref=e173]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e174]
            - cell "RASCUNHOBLOQUEADA" [ref=e175]
            - cell "Editar Excluir" [ref=e176]:
              - button "Editar" [ref=e177] [cursor=pointer]
              - button "Excluir" [ref=e178] [cursor=pointer]
          - row "4S-393562-2026 R3 1 1 item(ns) 1 R$ 3.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e179]:
            - cell "4S-393562-2026" [ref=e180]
            - cell "R3" [ref=e181]
            - cell "1" [ref=e182]
            - cell "1 item(ns) 1" [ref=e183]:
              - text: 1 item(ns)
              - generic [ref=e184]: "1"
            - cell "R$ 3.000,00" [ref=e185]
            - cell "RASCUNHOBLOQUEADA" [ref=e186]
            - cell "Editar Excluir" [ref=e187]:
              - button "Editar" [ref=e188] [cursor=pointer]
              - button "Excluir" [ref=e189] [cursor=pointer]
          - row "4S-711572-2026 PW CT012 20260617184225 Obra PW CT012 20260617184225 Centro 1 item(ns) PW CT012 20260617184225 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e190]:
            - cell "4S-711572-2026" [ref=e191]
            - cell "PW CT012 20260617184225 Obra" [ref=e192]
            - cell "PW CT012 20260617184225 Centro" [ref=e193]
            - cell "1 item(ns) PW CT012 20260617184225 Item" [ref=e194]:
              - text: 1 item(ns)
              - generic [ref=e195]: PW CT012 20260617184225 Item
            - cell "R$ 200,00" [ref=e196]
            - cell "RASCUNHOBLOQUEADA" [ref=e197]
            - cell "Editar Excluir" [ref=e198]:
              - button "Editar" [ref=e199] [cursor=pointer]
              - button "Excluir" [ref=e200] [cursor=pointer]
          - row "4S-645894-2026 PW CT012 20260617184145 Obra PW CT012 20260617184145 Centro 1 item(ns) PW CT012 20260617184145 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e201]:
            - cell "4S-645894-2026" [ref=e202]
            - cell "PW CT012 20260617184145 Obra" [ref=e203]
            - cell "PW CT012 20260617184145 Centro" [ref=e204]
            - cell "1 item(ns) PW CT012 20260617184145 Item" [ref=e205]:
              - text: 1 item(ns)
              - generic [ref=e206]: PW CT012 20260617184145 Item
            - cell "R$ 200,00" [ref=e207]
            - cell "RASCUNHOBLOQUEADA" [ref=e208]
            - cell "Editar Excluir" [ref=e209]:
              - button "Editar" [ref=e210] [cursor=pointer]
              - button "Excluir" [ref=e211] [cursor=pointer]
          - row "4S-930525-2026 - - 1 item(ns) HML 1781630370967 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e212]:
            - cell "4S-930525-2026" [ref=e213]
            - cell "-" [ref=e214]
            - cell "-" [ref=e215]
            - cell "1 item(ns) HML 1781630370967 Item Orcado" [ref=e216]:
              - text: 1 item(ns)
              - generic [ref=e217]: HML 1781630370967 Item Orcado
            - cell "R$ 2.000,00" [ref=e218]
            - cell "REJEITADA" [ref=e219]
            - cell "Editar Excluir" [ref=e220]:
              - button "Editar" [ref=e221] [cursor=pointer]
              - button "Excluir" [ref=e222] [cursor=pointer]
          - row "4S-260167-2026 - - 1 item(ns) HML 1781630633295 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e223]:
            - cell "4S-260167-2026" [ref=e224]
            - cell "-" [ref=e225]
            - cell "-" [ref=e226]
            - cell "1 item(ns) HML 1781630633295 Item Orcado" [ref=e227]:
              - text: 1 item(ns)
              - generic [ref=e228]: HML 1781630633295 Item Orcado
            - cell "R$ 2.000,00" [ref=e229]
            - cell "REJEITADA" [ref=e230]
            - cell "Editar Excluir" [ref=e231]:
              - button "Editar" [ref=e232] [cursor=pointer]
              - button "Excluir" [ref=e233] [cursor=pointer]
          - row "4S-911856-2026 - - 1 item(ns) HML 1781630595874 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e234]:
            - cell "4S-911856-2026" [ref=e235]
            - cell "-" [ref=e236]
            - cell "-" [ref=e237]
            - cell "1 item(ns) HML 1781630595874 Item Orcado" [ref=e238]:
              - text: 1 item(ns)
              - generic [ref=e239]: HML 1781630595874 Item Orcado
            - cell "R$ 2.000,00" [ref=e240]
            - cell "REJEITADA" [ref=e241]
            - cell "Editar Excluir" [ref=e242]:
              - button "Editar" [ref=e243] [cursor=pointer]
              - button "Excluir" [ref=e244] [cursor=pointer]
          - row "4S-985811-2026 - - 1 item(ns) HML 1781630773579 Item Orcado R$ 2.000,00 APROVADA Editar Excluir" [ref=e245]:
            - cell "4S-985811-2026" [ref=e246]
            - cell "-" [ref=e247]
            - cell "-" [ref=e248]
            - cell "1 item(ns) HML 1781630773579 Item Orcado" [ref=e249]:
              - text: 1 item(ns)
              - generic [ref=e250]: HML 1781630773579 Item Orcado
            - cell "R$ 2.000,00" [ref=e251]
            - cell "APROVADA" [ref=e252]
            - cell "Editar Excluir" [ref=e253]:
              - button "Editar" [ref=e254] [cursor=pointer]
              - button "Excluir" [ref=e255] [cursor=pointer]
      - generic [ref=e257]:
        - heading "Nova Requisicao" [level=2] [ref=e258]
        - paragraph [ref=e259]: Inclua itens vinculados ao orcamento para validar saldo.
        - generic [ref=e260]:
          - generic [ref=e261]:
            - generic [ref=e262]: Obra *
            - combobox [ref=e263]:
              - option "Selecione..."
              - option "AUTO-4S-1781787507433 Obra" [selected]
              - option "AUTO-4S-1781787088837 Obra"
              - option "AUTO-4S-1781787027511 Obra"
              - option "AUTO-4S-1781786933497 Obra"
              - option "AUTO-4S-1781786851917 Obra"
              - option "AUTO-4S-1781786769827 Obra"
              - option "AUTO-4S-1781786694588 Obra"
              - option "PW CT009 20260617184225 Obra"
              - option "PW CT012 20260617184225 Obra"
              - option "PW CT012 20260617184145 Obra"
              - option "PW CT009 20260617183934 Obra"
              - option "PW CT012 20260617183903 Obra"
              - option "PW CT009 20260617183009 Obra"
              - option "PW CT012 20260617182923 Obra"
              - option "R3"
              - option "VIA MOBILIDADE - TROCA DE PISOS"
              - option "4S-OBR-053-CAP-VMO"
          - generic [ref=e264]:
            - generic [ref=e265]: Centro de custo *
            - combobox [ref=e266]:
              - option "Selecione..."
              - option "AUTO-4S-1781787507433 Centro" [selected]
          - generic [ref=e267]:
            - generic [ref=e268]: Tipo
            - combobox [ref=e269]:
              - option "MATERIAL" [selected]
              - option "SERVICO"
              - option "LOCACAO"
          - generic [ref=e270]:
            - generic [ref=e271]: Data
            - textbox [ref=e272]: 2026-06-19
          - generic [ref=e273]:
            - generic [ref=e274]: Justificativa *
            - textbox [ref=e275]: AUTO-4S-20260619155325 Requisicao
        - generic [ref=e276]:
          - generic [ref=e277]:
            - paragraph [ref=e278]: Itens da requisicao
            - button "+ Item" [ref=e279] [cursor=pointer]
          - generic [ref=e280]:
            - generic [ref=e281]:
              - generic [ref=e282]: Item orcado
              - combobox [ref=e283]:
                - option "Selecione..."
                - option "AUTO-4S-1781787507433 Item - saldo R$ 1.000,00" [selected]
            - generic [ref=e284]:
              - generic [ref=e285]: Qtd.
              - spinbutton [ref=e286]: "10"
            - generic [ref=e287]:
              - generic [ref=e288]: Vlr unit.
              - spinbutton [active] [ref=e289]: "1200"
            - generic [ref=e290]:
              - generic [ref=e291]: Total
              - generic [ref=e292]: R$ 12.000,00
            - button "remover" [ref=e293] [cursor=pointer]
          - generic [ref=e294]: "Total: R$ 12.000,00"
        - generic [ref=e295]:
          - button "Cancelar" [ref=e296] [cursor=pointer]
          - button "Criar Requisicao" [ref=e297] [cursor=pointer]
```

# Test source

```ts
  26  | }
  27  | 
  28  | async function clickAny(page, names, options = {}) {
  29  |   const locators = [];
  30  |   for (const name of names) {
  31  |     const pattern = new RegExp(name, 'i');
  32  |     locators.push(page.getByRole('button', { name: pattern }));
  33  |     locators.push(page.getByRole('link', { name: pattern }));
  34  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  35  |     locators.push(page.getByText(pattern));
  36  |   }
  37  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
  38  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  39  |   }
  40  |   const target = await firstVisible(locators);
  41  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  42  |   await target.click(options);
  43  | }
  44  | 
  45  | async function gotoMenu(page, path) {
  46  |   for (let index = 0; index < path.length; index += 1) {
  47  |     const segment = path[index];
  48  |     const nextSegment = path[index + 1];
  49  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  50  |       continue;
  51  |     }
  52  |     if (nextSegment) {
  53  |       const childVisible = await page.locator('button, a, [role="button"]')
  54  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  55  |         .first()
  56  |         .isVisible()
  57  |         .catch(() => false);
  58  |       if (childVisible) continue;
  59  |     }
  60  |     await clickAny(page, [segment]);
  61  |     await page.waitForLoadState('networkidle').catch(() => {});
  62  |   }
  63  | }
  64  | 
  65  | async function fillField(page, labels, value) {
  66  |   const candidates = [];
  67  |   for (const label of labels) {
  68  |     const patterns = [new RegExp(label, 'i')];
  69  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  70  |     for (const pattern of patterns) {
  71  |       candidates.push(page.getByLabel(pattern));
  72  |       candidates.push(page.getByPlaceholder(pattern));
  73  |     }
  74  |     candidates.push(page.locator(`input[name*="${label}" i]`));
  75  |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  76  |     candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  77  |   }
  78  |   const target = await firstVisible(candidates);
  79  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  80  |   await target.fill(String(value));
  81  | }
  82  | 
  83  | async function chooseOption(page, labels, value) {
  84  |   const candidates = labels.flatMap((label) => [
  85  |     page.getByLabel(new RegExp(label, 'i')),
  86  |     page.locator(`select[name*="${label}" i]`),
  87  |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  88  |   ]);
  89  |   const target = await firstVisible(candidates);
  90  |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  91  | 
  92  |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  93  |   if (tagName === 'select') {
  94  |     const option = await target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  95  |     if (await option.count()) {
  96  |       await target.selectOption({ label: await option.innerText() });
  97  |       return;
  98  |     }
  99  |   }
  100 | 
  101 |   await target.click();
  102 |   await clickAny(page, [value]);
  103 | }
  104 | 
  105 | async function chooseFirstAvailableOption(page, labels) {
  106 |   const candidates = labels.flatMap((label) => [
  107 |     page.getByLabel(new RegExp(label, 'i')),
  108 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  109 |   ]);
  110 |   const target = await firstVisible(candidates);
  111 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  112 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  113 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  114 |     return option ? option.value : '';
  115 |   });
  116 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  117 |   await target.selectOption(optionValue);
  118 | }
  119 | 
  120 | async function submitForm(page) {
  121 |   const primarySubmit = await firstVisible([
  122 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  123 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  124 |   ]);
  125 |   if (primarySubmit) {
> 126 |     await primarySubmit.click();
      |                         ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  127 |   } else {
  128 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  129 |   }
  130 |   await page.waitForLoadState('networkidle').catch(() => {});
  131 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  132 | }
  133 | 
  134 | async function expectPageReady(page, expectedTexts = []) {
  135 |   await expect(page.locator('body')).toBeVisible();
  136 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  137 |   for (const text of expectedTexts) {
  138 |     await expect(byText(page, text)).toBeVisible();
  139 |   }
  140 | }
  141 | 
  142 | async function tryCreateSimpleRecord(page, path, recordName, fields = []) {
  143 |   await gotoMenu(page, path);
  144 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  145 |   for (const field of fields) {
  146 |     if (field.type === 'select') {
  147 |       await chooseOption(page, field.labels, field.value);
  148 |     } else {
  149 |       await fillField(page, field.labels, field.value);
  150 |     }
  151 |   }
  152 |   await submitForm(page);
  153 |   await expect(byText(page, recordName)).toBeVisible();
  154 | }
  155 | 
  156 | async function assertPersistedAfterRefresh(page, text) {
  157 |   await page.reload({ waitUntil: 'networkidle' });
  158 |   await expect(byText(page, text)).toBeVisible();
  159 | }
  160 | 
  161 | module.exports = {
  162 |   byText,
  163 |   clickAny,
  164 |   gotoMenu,
  165 |   fillField,
  166 |   chooseOption,
  167 |   chooseFirstAvailableOption,
  168 |   submitForm,
  169 |   expectPageReady,
  170 |   tryCreateSimpleRecord,
  171 |   assertPersistedAfterRefresh
  172 | };
  173 | 
```