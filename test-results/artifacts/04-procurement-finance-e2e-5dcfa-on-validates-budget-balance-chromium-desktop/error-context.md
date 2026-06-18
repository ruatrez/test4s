# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-procurement-finance-e2e.spec.ts >> CT012 - requisition validates budget balance
- Location: tests/04-procurement-finance-e2e.spec.ts:16:5

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
      - button "⚠ 2 aprovações pendentes" [ref=e56] [cursor=pointer]
      - generic [ref=e57]: ADMINISTRADOR
    - generic [ref=e59]:
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "Requisicoes" [level=1] [ref=e62]
          - paragraph [ref=e63]: 18 requisicoes
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
          - row "4S-852170-2026 R3 1 1 item(ns) 1 R$ 15.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e79]:
            - cell "4S-852170-2026" [ref=e80]
            - cell "R3" [ref=e81]
            - cell "1" [ref=e82]
            - cell "1 item(ns) 1" [ref=e83]:
              - text: 1 item(ns)
              - generic [ref=e84]: "1"
            - cell "R$ 15.000,00" [ref=e85]
            - cell "RASCUNHOBLOQUEADA" [ref=e86]
            - cell "Editar Excluir" [ref=e87]:
              - button "Editar" [ref=e88] [cursor=pointer]
              - button "Excluir" [ref=e89] [cursor=pointer]
          - row "4S-144258-2026 AUTO-4S-1781787507433 Obra AUTO-4S-1781787507433 Centro 1 item(ns) AUTO-4S-1781787507433 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e90]:
            - cell "4S-144258-2026" [ref=e91]
            - cell "AUTO-4S-1781787507433 Obra" [ref=e92]
            - cell "AUTO-4S-1781787507433 Centro" [ref=e93]
            - cell "1 item(ns) AUTO-4S-1781787507433 Item" [ref=e94]:
              - text: 1 item(ns)
              - generic [ref=e95]: AUTO-4S-1781787507433 Item
            - cell "R$ 100,00" [ref=e96]
            - cell "RASCUNHO" [ref=e97]
            - cell "Editar Enviar aprovacao Excluir" [ref=e98]:
              - button "Editar" [ref=e99] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e100] [cursor=pointer]
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
          - row "4S-237833-2026 AUTO-4S-1781786933497 Obra AUTO-4S-1781786933497 Centro 1 item(ns) AUTO-4S-1781786933497 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e124]:
            - cell "4S-237833-2026" [ref=e125]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e126]
            - cell "AUTO-4S-1781786933497 Centro" [ref=e127]
            - cell "1 item(ns) AUTO-4S-1781786933497 Item" [ref=e128]:
              - text: 1 item(ns)
              - generic [ref=e129]: AUTO-4S-1781786933497 Item
            - cell "R$ 100,00" [ref=e130]
            - cell "RASCUNHO" [ref=e131]
            - cell "Editar Enviar aprovacao Excluir" [ref=e132]:
              - button "Editar" [ref=e133] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e134] [cursor=pointer]
              - button "Excluir" [ref=e135] [cursor=pointer]
          - row "4S-548743-2026 AUTO-4S-1781786851917 Obra AUTO-4S-1781786851917 Centro 1 item(ns) AUTO-4S-1781786851917 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e136]:
            - cell "4S-548743-2026" [ref=e137]
            - cell "AUTO-4S-1781786851917 Obra" [ref=e138]
            - cell "AUTO-4S-1781786851917 Centro" [ref=e139]
            - cell "1 item(ns) AUTO-4S-1781786851917 Item" [ref=e140]:
              - text: 1 item(ns)
              - generic [ref=e141]: AUTO-4S-1781786851917 Item
            - cell "R$ 100,00" [ref=e142]
            - cell "RASCUNHO" [ref=e143]
            - cell "Editar Enviar aprovacao Excluir" [ref=e144]:
              - button "Editar" [ref=e145] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e146] [cursor=pointer]
              - button "Excluir" [ref=e147] [cursor=pointer]
          - row "4S-852402-2026 AUTO-4S-1781786769827 Obra AUTO-4S-1781786769827 Centro 1 item(ns) AUTO-4S-1781786769827 Item R$ 100,00 RASCUNHO Editar Enviar aprovacao Excluir" [ref=e148]:
            - cell "4S-852402-2026" [ref=e149]
            - cell "AUTO-4S-1781786769827 Obra" [ref=e150]
            - cell "AUTO-4S-1781786769827 Centro" [ref=e151]
            - cell "1 item(ns) AUTO-4S-1781786769827 Item" [ref=e152]:
              - text: 1 item(ns)
              - generic [ref=e153]: AUTO-4S-1781786769827 Item
            - cell "R$ 100,00" [ref=e154]
            - cell "RASCUNHO" [ref=e155]
            - cell "Editar Enviar aprovacao Excluir" [ref=e156]:
              - button "Editar" [ref=e157] [cursor=pointer]
              - button "Enviar aprovacao" [ref=e158] [cursor=pointer]
              - button "Excluir" [ref=e159] [cursor=pointer]
          - row "4S-432322-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 1 item(ns) PW CT009 20260617184225 Item R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e160]:
            - cell "4S-432322-2026" [ref=e161]
            - cell "PW CT009 20260617184225 Obra" [ref=e162]
            - cell "PW CT009 20260617184225 Centro" [ref=e163]
            - cell "1 item(ns) PW CT009 20260617184225 Item" [ref=e164]:
              - text: 1 item(ns)
              - generic [ref=e165]: PW CT009 20260617184225 Item
            - cell "R$ 12.000,00" [ref=e166]
            - cell "RASCUNHOBLOQUEADA" [ref=e167]
            - cell "Editar Excluir" [ref=e168]:
              - button "Editar" [ref=e169] [cursor=pointer]
              - button "Excluir" [ref=e170] [cursor=pointer]
          - row "4S-165544-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e171]:
            - cell "4S-165544-2026" [ref=e172]
            - cell "PW CT009 20260617184225 Obra" [ref=e173]
            - cell "PW CT009 20260617184225 Centro" [ref=e174]
            - cell "0 item(ns)" [ref=e175]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e176]
            - cell "RASCUNHOBLOQUEADA" [ref=e177]
            - cell "Editar Excluir" [ref=e178]:
              - button "Editar" [ref=e179] [cursor=pointer]
              - button "Excluir" [ref=e180] [cursor=pointer]
          - row "4S-435113-2026 PW CT009 20260617184225 Obra PW CT009 20260617184225 Centro 0 item(ns) R$ 12.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e181]:
            - cell "4S-435113-2026" [ref=e182]
            - cell "PW CT009 20260617184225 Obra" [ref=e183]
            - cell "PW CT009 20260617184225 Centro" [ref=e184]
            - cell "0 item(ns)" [ref=e185]: 0 item(ns)
            - cell "R$ 12.000,00" [ref=e186]
            - cell "RASCUNHOBLOQUEADA" [ref=e187]
            - cell "Editar Excluir" [ref=e188]:
              - button "Editar" [ref=e189] [cursor=pointer]
              - button "Excluir" [ref=e190] [cursor=pointer]
          - row "4S-393562-2026 R3 1 1 item(ns) 1 R$ 3.000,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e191]:
            - cell "4S-393562-2026" [ref=e192]
            - cell "R3" [ref=e193]
            - cell "1" [ref=e194]
            - cell "1 item(ns) 1" [ref=e195]:
              - text: 1 item(ns)
              - generic [ref=e196]: "1"
            - cell "R$ 3.000,00" [ref=e197]
            - cell "RASCUNHOBLOQUEADA" [ref=e198]
            - cell "Editar Excluir" [ref=e199]:
              - button "Editar" [ref=e200] [cursor=pointer]
              - button "Excluir" [ref=e201] [cursor=pointer]
          - row "4S-711572-2026 PW CT012 20260617184225 Obra PW CT012 20260617184225 Centro 1 item(ns) PW CT012 20260617184225 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e202]:
            - cell "4S-711572-2026" [ref=e203]
            - cell "PW CT012 20260617184225 Obra" [ref=e204]
            - cell "PW CT012 20260617184225 Centro" [ref=e205]
            - cell "1 item(ns) PW CT012 20260617184225 Item" [ref=e206]:
              - text: 1 item(ns)
              - generic [ref=e207]: PW CT012 20260617184225 Item
            - cell "R$ 200,00" [ref=e208]
            - cell "RASCUNHOBLOQUEADA" [ref=e209]
            - cell "Editar Excluir" [ref=e210]:
              - button "Editar" [ref=e211] [cursor=pointer]
              - button "Excluir" [ref=e212] [cursor=pointer]
          - row "4S-645894-2026 PW CT012 20260617184145 Obra PW CT012 20260617184145 Centro 1 item(ns) PW CT012 20260617184145 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e213]:
            - cell "4S-645894-2026" [ref=e214]
            - cell "PW CT012 20260617184145 Obra" [ref=e215]
            - cell "PW CT012 20260617184145 Centro" [ref=e216]
            - cell "1 item(ns) PW CT012 20260617184145 Item" [ref=e217]:
              - text: 1 item(ns)
              - generic [ref=e218]: PW CT012 20260617184145 Item
            - cell "R$ 200,00" [ref=e219]
            - cell "RASCUNHOBLOQUEADA" [ref=e220]
            - cell "Editar Excluir" [ref=e221]:
              - button "Editar" [ref=e222] [cursor=pointer]
              - button "Excluir" [ref=e223] [cursor=pointer]
          - row "4S-469309-2026 PW CT012 20260617183903 Obra PW CT012 20260617183903 Centro 1 item(ns) PW CT012 20260617183903 Item R$ 200,00 RASCUNHOBLOQUEADA Editar Excluir" [ref=e224]:
            - cell "4S-469309-2026" [ref=e225]
            - cell "PW CT012 20260617183903 Obra" [ref=e226]
            - cell "PW CT012 20260617183903 Centro" [ref=e227]
            - cell "1 item(ns) PW CT012 20260617183903 Item" [ref=e228]:
              - text: 1 item(ns)
              - generic [ref=e229]: PW CT012 20260617183903 Item
            - cell "R$ 200,00" [ref=e230]
            - cell "RASCUNHOBLOQUEADA" [ref=e231]
            - cell "Editar Excluir" [ref=e232]:
              - button "Editar" [ref=e233] [cursor=pointer]
              - button "Excluir" [ref=e234] [cursor=pointer]
          - row "4S-930525-2026 - - 1 item(ns) HML 1781630370967 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e235]:
            - cell "4S-930525-2026" [ref=e236]
            - cell "-" [ref=e237]
            - cell "-" [ref=e238]
            - cell "1 item(ns) HML 1781630370967 Item Orcado" [ref=e239]:
              - text: 1 item(ns)
              - generic [ref=e240]: HML 1781630370967 Item Orcado
            - cell "R$ 2.000,00" [ref=e241]
            - cell "REJEITADA" [ref=e242]
            - cell "Editar Excluir" [ref=e243]:
              - button "Editar" [ref=e244] [cursor=pointer]
              - button "Excluir" [ref=e245] [cursor=pointer]
          - row "4S-260167-2026 - - 1 item(ns) HML 1781630633295 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e246]:
            - cell "4S-260167-2026" [ref=e247]
            - cell "-" [ref=e248]
            - cell "-" [ref=e249]
            - cell "1 item(ns) HML 1781630633295 Item Orcado" [ref=e250]:
              - text: 1 item(ns)
              - generic [ref=e251]: HML 1781630633295 Item Orcado
            - cell "R$ 2.000,00" [ref=e252]
            - cell "REJEITADA" [ref=e253]
            - cell "Editar Excluir" [ref=e254]:
              - button "Editar" [ref=e255] [cursor=pointer]
              - button "Excluir" [ref=e256] [cursor=pointer]
          - row "4S-911856-2026 - - 1 item(ns) HML 1781630595874 Item Orcado R$ 2.000,00 REJEITADA Editar Excluir" [ref=e257]:
            - cell "4S-911856-2026" [ref=e258]
            - cell "-" [ref=e259]
            - cell "-" [ref=e260]
            - cell "1 item(ns) HML 1781630595874 Item Orcado" [ref=e261]:
              - text: 1 item(ns)
              - generic [ref=e262]: HML 1781630595874 Item Orcado
            - cell "R$ 2.000,00" [ref=e263]
            - cell "REJEITADA" [ref=e264]
            - cell "Editar Excluir" [ref=e265]:
              - button "Editar" [ref=e266] [cursor=pointer]
              - button "Excluir" [ref=e267] [cursor=pointer]
          - row "4S-985811-2026 - - 1 item(ns) HML 1781630773579 Item Orcado R$ 2.000,00 APROVADA Editar Excluir" [ref=e268]:
            - cell "4S-985811-2026" [ref=e269]
            - cell "-" [ref=e270]
            - cell "-" [ref=e271]
            - cell "1 item(ns) HML 1781630773579 Item Orcado" [ref=e272]:
              - text: 1 item(ns)
              - generic [ref=e273]: HML 1781630773579 Item Orcado
            - cell "R$ 2.000,00" [ref=e274]
            - cell "APROVADA" [ref=e275]
            - cell "Editar Excluir" [ref=e276]:
              - button "Editar" [ref=e277] [cursor=pointer]
              - button "Excluir" [ref=e278] [cursor=pointer]
      - generic [ref=e280]:
        - heading "Nova Requisicao" [level=2] [ref=e281]
        - paragraph [ref=e282]: Inclua itens vinculados ao orcamento para validar saldo.
        - generic [ref=e283]:
          - generic [ref=e284]:
            - generic [ref=e285]: Obra *
            - combobox [ref=e286]:
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
          - generic [ref=e287]:
            - generic [ref=e288]: Centro de custo *
            - combobox [ref=e289]:
              - option "Selecione..."
              - option "AUTO-4S-1781787507433 Centro" [selected]
          - generic [ref=e290]:
            - generic [ref=e291]: Tipo
            - combobox [ref=e292]:
              - option "MATERIAL" [selected]
              - option "SERVICO"
              - option "LOCACAO"
          - generic [ref=e293]:
            - generic [ref=e294]: Data
            - textbox [ref=e295]: 2026-06-18
          - generic [ref=e296]:
            - generic [ref=e297]: Justificativa *
            - textbox [ref=e298]: AUTO-4S-20260618191551 Requisicao
        - generic [ref=e299]:
          - generic [ref=e300]:
            - paragraph [ref=e301]: Itens da requisicao
            - button "+ Item" [ref=e302] [cursor=pointer]
          - generic [ref=e303]:
            - generic [ref=e304]:
              - generic [ref=e305]: Item orcado
              - combobox [ref=e306]:
                - option "Selecione..."
                - option "AUTO-4S-1781787507433 Item - saldo R$ 1.000,00" [selected]
            - generic [ref=e307]:
              - generic [ref=e308]: Qtd.
              - spinbutton [ref=e309]: "10"
            - generic [ref=e310]:
              - generic [ref=e311]: Vlr unit.
              - spinbutton [active] [ref=e312]: "1200"
            - generic [ref=e313]:
              - generic [ref=e314]: Total
              - generic [ref=e315]: R$ 12.000,00
            - button "remover" [ref=e316] [cursor=pointer]
          - generic [ref=e317]: "Total: R$ 12.000,00"
        - generic [ref=e318]:
          - button "Cancelar" [ref=e319] [cursor=pointer]
          - button "Criar Requisicao" [ref=e320] [cursor=pointer]
```

# Test source

```ts
  30  | }
  31  | 
  32  | export async function clickAny(page: Page, names: Array<string | number>, options = {}) {
  33  |   const locators: Locator[] = [];
  34  |   for (const name of names) {
  35  |     const pattern = new RegExp(escapeRegex(name), 'i');
  36  |     locators.push(page.getByRole('button', { name: pattern }));
  37  |     locators.push(page.getByRole('link', { name: pattern }));
  38  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  39  |     locators.push(page.getByText(pattern));
  40  |   }
  41  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(String(name)))) {
  42  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  43  |   }
  44  |   const target = await firstVisible(locators);
  45  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  46  |   await target.click(options);
  47  | }
  48  | 
  49  | export async function gotoMenu(page: Page, menuPath: string[]) {
  50  |   for (let index = 0; index < menuPath.length; index += 1) {
  51  |     const segment = menuPath[index];
  52  |     const nextSegment = menuPath[index + 1];
  53  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  54  |       continue;
  55  |     }
  56  |     if (nextSegment) {
  57  |       const childVisible = await page.locator('button, a, [role="button"]')
  58  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  59  |         .first()
  60  |         .isVisible()
  61  |         .catch(() => false);
  62  |       if (childVisible) continue;
  63  |     }
  64  |     await clickAny(page, [segment]);
  65  |     await page.waitForLoadState('networkidle').catch(() => {});
  66  |   }
  67  | }
  68  | 
  69  | export async function fillField(page: Page, labels: string[], value: string | number) {
  70  |   const candidates: Locator[] = [];
  71  |   for (const label of labels) {
  72  |     const patterns = [new RegExp(label, 'i')];
  73  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  74  |     for (const pattern of patterns) {
  75  |       candidates.push(page.getByLabel(pattern));
  76  |       candidates.push(page.getByPlaceholder(pattern));
  77  |     }
  78  |     candidates.push(page.locator(`input[name*="${label}" i]`));
  79  |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  80  |     candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  81  |   }
  82  |   const target = await firstVisible(candidates);
  83  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
  84  |   await target.fill(String(value));
  85  | }
  86  | 
  87  | export async function chooseOption(page: Page, labels: string[], value: string) {
  88  |   const candidates = labels.flatMap((label) => [
  89  |     page.getByLabel(new RegExp(label, 'i')),
  90  |     page.locator(`select[name*="${label}" i]`),
  91  |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  92  |   ]);
  93  |   const target = await firstVisible(candidates);
  94  |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  95  | 
  96  |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  97  |   if (tagName === 'select') {
  98  |     const option = await target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  99  |     if (await option.count()) {
  100 |       await target.selectOption({ label: await option.innerText() });
  101 |       return;
  102 |     }
  103 |   }
  104 | 
  105 |   await target.click();
  106 |   await clickAny(page, [value]);
  107 | }
  108 | 
  109 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  110 |   const candidates = labels.flatMap((label) => [
  111 |     page.getByLabel(new RegExp(label, 'i')),
  112 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  113 |   ]);
  114 |   const target = await firstVisible(candidates);
  115 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  116 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  117 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  118 |     return option ? option.value : '';
  119 |   });
  120 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  121 |   await target.selectOption(optionValue);
  122 | }
  123 | 
  124 | export async function submitForm(page: Page) {
  125 |   const primarySubmit = await firstVisible([
  126 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  127 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  128 |   ]);
  129 |   if (primarySubmit) {
> 130 |     await primarySubmit.click();
      |                         ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  131 |   } else {
  132 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  133 |   }
  134 |   await page.waitForLoadState('networkidle').catch(() => {});
  135 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  136 | }
  137 | 
  138 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  139 |   await expect(page.locator('body')).toBeVisible();
  140 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not|cannot read/i);
  141 |   for (const text of expectedTexts) {
  142 |     await expect(byText(page, text)).toBeVisible();
  143 |   }
  144 | }
  145 | 
  146 | export async function tryCreateSimpleRecord(page: Page, menuPath: string[], recordName: string, fields: FieldInput[] = []) {
  147 |   await gotoMenu(page, menuPath);
  148 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  149 |   for (const field of fields) {
  150 |     if (field.type === 'select') {
  151 |       await chooseOption(page, field.labels, field.value);
  152 |     } else {
  153 |       await fillField(page, field.labels, field.value);
  154 |     }
  155 |   }
  156 |   await submitForm(page);
  157 |   await expect(byText(page, recordName)).toBeVisible();
  158 | }
  159 | 
  160 | export async function assertPersistedAfterRefresh(page: Page, text: string) {
  161 |   await page.reload({ waitUntil: 'networkidle' });
  162 |   await expect(byText(page, text)).toBeVisible();
  163 | }
  164 | 
```