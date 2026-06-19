# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03-permissions-workflow.spec.js >> CT002, CT009, CT010, CT020 - permissions, protected budget and workflow decisions
- Location: tests/03-permissions-workflow.spec.js:12:1

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /⏻/i }).first()
    - locator resolved to <button title="Sair">⏻</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal-overlay">…</div> from <main>…</main> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal-overlay">…</div> from <main>…</main> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    29 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="modal-overlay">…</div> from <main>…</main> subtree intercepts pointer events
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
      - button "⊙ Configurações ▶" [ref=e11] [cursor=pointer]:
        - generic [ref=e12]: ⊙
        - generic [ref=e13]: Configurações
        - generic [ref=e14]: ▶
      - generic [ref=e15]:
        - button "◑ Orçamento ▶" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: ◑
          - generic [ref=e18]: Orçamento
          - generic [ref=e19]: ▶
        - button "Itens Orçados" [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Itens Orçados
      - button "◐ Suprimentos ▶" [ref=e23] [cursor=pointer]:
        - generic [ref=e24]: ◐
        - generic [ref=e25]: Suprimentos
        - generic [ref=e26]: ▶
    - generic [ref=e27]:
      - generic [ref=e29]: A
      - generic [ref=e30]:
        - paragraph [ref=e31]: AUTO-4S-20260619155359 Usuario Engenharia
        - paragraph [ref=e32]: ENGENHARIA
      - button "⏻" [ref=e33] [cursor=pointer]
  - main [ref=e34]:
    - generic [ref=e36]: ENGENHARIA
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "Orçamento Base" [level=1] [ref=e41]
          - paragraph [ref=e42]: Itens orçados por obra e categoria
        - button "+ Item Orçado" [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - combobox [ref=e45]:
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
        - combobox [ref=e46]:
          - option "Todas as categorias" [selected]
          - option "AUTO-4S-1781787555185 Categoria"
          - option "AUTO-4S-1781787507433 Categoria"
          - option "AUTO-4S-1781787088837 Categoria"
          - option "AUTO-4S-1781787027511 Categoria"
          - option "AUTO-4S-1781786933497 Categoria"
          - option "AUTO-4S-1781786851917 Categoria"
          - option "AUTO-4S-1781786769827 Categoria"
          - option "PW CT009 20260617184225 Categoria"
          - option "PW CT012 20260617184225 Categoria"
          - option "PW CT012 20260617184145 Categoria"
          - option "PW CT009 20260617183934 Categoria"
          - option "PW CT012 20260617183903 Categoria"
          - option "PW CT009 20260617183009 Categoria"
          - option "PW CT012 20260617182923 Categoria"
          - option "PW CT009 20260617181324 Categoria"
          - option "PW CT009 20260617181227 Categoria"
          - option "PW CT012 20260617181146 Categoria"
          - option "PW CT009 20260617181057 Categoria"
          - option "PW CT009 20260617181022 Categoria"
          - option "PW CT012 20260617180951 Categoria"
          - option "PW CT009 20260617180719 Categoria"
          - option "PW CT012 20260617180638 Categoria"
          - option "PW CT009 20260617180259 Categoria"
          - option "PW CT012 20260617180228 Categoria"
          - option "HML 1781630773579 Materiais"
          - option "HML 1781630633295 Materiais"
          - option "HML 1781630595874 Materiais"
          - option "HML 1781630556505 Materiais"
          - option "HML 1781630434235 Materiais"
          - option "HML 1781630370967 Materiais"
          - option "HML 1781630328305 Materiais"
          - option "HML 1781630075298 Materiais"
          - option "HML 1781630029631 Materiais"
          - option "Teste"
        - textbox "Buscar item..." [ref=e47]
      - generic [ref=e48]:
        - generic [ref=e49]:
          - paragraph [ref=e50]: Orçado
          - paragraph [ref=e51]: R$ 70.620,00
        - generic [ref=e52]:
          - paragraph [ref=e53]: Comprometido
          - paragraph [ref=e54]: R$ 0,00
        - generic [ref=e55]:
          - paragraph [ref=e56]: Pago
          - paragraph [ref=e57]: R$ 0,00
        - generic [ref=e58]:
          - paragraph [ref=e59]: Saldo
          - paragraph [ref=e60]: R$ 70.620,00
      - table [ref=e62]:
        - rowgroup [ref=e63]:
          - row "Código Item Obra Categoria Qtd V.Unit Total Comprometido Pago Saldo" [ref=e64]:
            - columnheader "Código" [ref=e65]
            - columnheader "Item" [ref=e66]
            - columnheader "Obra" [ref=e67]
            - columnheader "Categoria" [ref=e68]
            - columnheader "Qtd" [ref=e69]
            - columnheader "V.Unit" [ref=e70]
            - columnheader "Total" [ref=e71]
            - columnheader "Comprometido" [ref=e72]
            - columnheader "Pago" [ref=e73]
            - columnheader "Saldo" [ref=e74]
            - columnheader [ref=e75]
        - rowgroup [ref=e76]:
          - row "4S-307633-2026 AUTO-4S-1781787555185 Item Alteracao aguardando aprovacao da Diretoria. - AUTO-4S-1781787555185 Categoria 1 un R$ 1.200,00 R$ 1.200,00 R$ 0,00 R$ 0,00 R$ 1.200,00 Solicitar alteração Solicitar exclusão" [ref=e77]:
            - cell "4S-307633-2026" [ref=e78]
            - cell "AUTO-4S-1781787555185 Item Alteracao aguardando aprovacao da Diretoria." [ref=e79]:
              - generic [ref=e80]: AUTO-4S-1781787555185 Item
              - generic [ref=e81]: Alteracao aguardando aprovacao da Diretoria.
            - cell "-" [ref=e82]
            - cell "AUTO-4S-1781787555185 Categoria" [ref=e83]
            - cell "1 un" [ref=e84]
            - cell "R$ 1.200,00" [ref=e85]
            - cell "R$ 1.200,00" [ref=e86]
            - cell "R$ 0,00" [ref=e87]
            - cell "R$ 0,00" [ref=e88]
            - cell "R$ 1.200,00" [ref=e89]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e90]:
              - generic [ref=e91]:
                - button "Solicitar alteração" [active] [ref=e92] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e93] [cursor=pointer]
          - row "4S-669855-2026 AUTO-4S-1781787507433 Item AUTO-4S-1781787507433 Obra AUTO-4S-1781787507433 Categoria 1 un R$ 1.000,00 R$ 1.000,00 R$ 0,00 R$ 0,00 R$ 1.000,00 Solicitar alteração Solicitar exclusão" [ref=e94]:
            - cell "4S-669855-2026" [ref=e95]
            - cell "AUTO-4S-1781787507433 Item" [ref=e96]:
              - generic [ref=e97]: AUTO-4S-1781787507433 Item
            - cell "AUTO-4S-1781787507433 Obra" [ref=e98]
            - cell "AUTO-4S-1781787507433 Categoria" [ref=e99]
            - cell "1 un" [ref=e100]
            - cell "R$ 1.000,00" [ref=e101]
            - cell "R$ 1.000,00" [ref=e102]
            - cell "R$ 0,00" [ref=e103]
            - cell "R$ 0,00" [ref=e104]
            - cell "R$ 1.000,00" [ref=e105]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e106]:
              - generic [ref=e107]:
                - button "Solicitar alteração" [ref=e108] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e109] [cursor=pointer]
          - row "4S-981213-2026 AUTO-4S-1781787088837 Item Alteracao aguardando aprovacao da Diretoria. AUTO-4S-1781787088837 Obra AUTO-4S-1781787088837 Categoria 1 un R$ 1.200,00 R$ 1.200,00 R$ 0,00 R$ 0,00 R$ 1.200,00 Solicitar alteração Solicitar exclusão" [ref=e110]:
            - cell "4S-981213-2026" [ref=e111]
            - cell "AUTO-4S-1781787088837 Item Alteracao aguardando aprovacao da Diretoria." [ref=e112]:
              - generic [ref=e113]: AUTO-4S-1781787088837 Item
              - generic [ref=e114]: Alteracao aguardando aprovacao da Diretoria.
            - cell "AUTO-4S-1781787088837 Obra" [ref=e115]
            - cell "AUTO-4S-1781787088837 Categoria" [ref=e116]
            - cell "1 un" [ref=e117]
            - cell "R$ 1.200,00" [ref=e118]
            - cell "R$ 1.200,00" [ref=e119]
            - cell "R$ 0,00" [ref=e120]
            - cell "R$ 0,00" [ref=e121]
            - cell "R$ 1.200,00" [ref=e122]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e123]:
              - generic [ref=e124]:
                - button "Solicitar alteração" [ref=e125] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e126] [cursor=pointer]
          - row "4S-546021-2026 AUTO-4S-1781787027511 Item AUTO-4S-1781787027511 Obra AUTO-4S-1781787027511 Categoria 1 un R$ 1.200,00 R$ 1.200,00 R$ 0,00 R$ 0,00 R$ 1.200,00 Solicitar alteração Solicitar exclusão" [ref=e127]:
            - cell "4S-546021-2026" [ref=e128]
            - cell "AUTO-4S-1781787027511 Item" [ref=e129]:
              - generic [ref=e130]: AUTO-4S-1781787027511 Item
            - cell "AUTO-4S-1781787027511 Obra" [ref=e131]
            - cell "AUTO-4S-1781787027511 Categoria" [ref=e132]
            - cell "1 un" [ref=e133]
            - cell "R$ 1.200,00" [ref=e134]
            - cell "R$ 1.200,00" [ref=e135]
            - cell "R$ 0,00" [ref=e136]
            - cell "R$ 0,00" [ref=e137]
            - cell "R$ 1.200,00" [ref=e138]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e139]:
              - generic [ref=e140]:
                - button "Solicitar alteração" [ref=e141] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e142] [cursor=pointer]
          - row "4S-327570-2026 AUTO-4S-1781786933497 Item AUTO-4S-1781786933497 Obra AUTO-4S-1781786933497 Categoria 1 un R$ 1.000,00 R$ 1.000,00 R$ 0,00 R$ 0,00 R$ 1.000,00 Solicitar alteração Solicitar exclusão" [ref=e143]:
            - cell "4S-327570-2026" [ref=e144]
            - cell "AUTO-4S-1781786933497 Item" [ref=e145]:
              - generic [ref=e146]: AUTO-4S-1781786933497 Item
            - cell "AUTO-4S-1781786933497 Obra" [ref=e147]
            - cell "AUTO-4S-1781786933497 Categoria" [ref=e148]
            - cell "1 un" [ref=e149]
            - cell "R$ 1.000,00" [ref=e150]
            - cell "R$ 1.000,00" [ref=e151]
            - cell "R$ 0,00" [ref=e152]
            - cell "R$ 0,00" [ref=e153]
            - cell "R$ 1.000,00" [ref=e154]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e155]:
              - generic [ref=e156]:
                - button "Solicitar alteração" [ref=e157] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e158] [cursor=pointer]
          - row "4S-825910-2026 AUTO-4S-1781786851917 Item AUTO-4S-1781786851917 Obra AUTO-4S-1781786851917 Categoria 1 un R$ 1.000,00 R$ 1.000,00 R$ 0,00 R$ 0,00 R$ 1.000,00 Solicitar alteração Solicitar exclusão" [ref=e159]:
            - cell "4S-825910-2026" [ref=e160]
            - cell "AUTO-4S-1781786851917 Item" [ref=e161]:
              - generic [ref=e162]: AUTO-4S-1781786851917 Item
            - cell "AUTO-4S-1781786851917 Obra" [ref=e163]
            - cell "AUTO-4S-1781786851917 Categoria" [ref=e164]
            - cell "1 un" [ref=e165]
            - cell "R$ 1.000,00" [ref=e166]
            - cell "R$ 1.000,00" [ref=e167]
            - cell "R$ 0,00" [ref=e168]
            - cell "R$ 0,00" [ref=e169]
            - cell "R$ 1.000,00" [ref=e170]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e171]:
              - generic [ref=e172]:
                - button "Solicitar alteração" [ref=e173] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e174] [cursor=pointer]
          - row "4S-117325-2026 AUTO-4S-1781786769827 Item AUTO-4S-1781786769827 Obra AUTO-4S-1781786769827 Categoria 1 un R$ 1.000,00 R$ 1.000,00 R$ 0,00 R$ 0,00 R$ 1.000,00 Solicitar alteração Solicitar exclusão" [ref=e175]:
            - cell "4S-117325-2026" [ref=e176]
            - cell "AUTO-4S-1781786769827 Item" [ref=e177]:
              - generic [ref=e178]: AUTO-4S-1781786769827 Item
            - cell "AUTO-4S-1781786769827 Obra" [ref=e179]
            - cell "AUTO-4S-1781786769827 Categoria" [ref=e180]
            - cell "1 un" [ref=e181]
            - cell "R$ 1.000,00" [ref=e182]
            - cell "R$ 1.000,00" [ref=e183]
            - cell "R$ 0,00" [ref=e184]
            - cell "R$ 0,00" [ref=e185]
            - cell "R$ 1.000,00" [ref=e186]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e187]:
              - generic [ref=e188]:
                - button "Solicitar alteração" [ref=e189] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e190] [cursor=pointer]
          - row "4S-666833-2026 1 R3 PW CT009 20260617181022 Categoria 10 un R$ 150,00 R$ 1.500,00 R$ 0,00 R$ 0,00 R$ 1.500,00 Editar Solicitar exclusão" [ref=e191]:
            - cell "4S-666833-2026" [ref=e192]
            - cell "1" [ref=e193]:
              - generic [ref=e194]: "1"
            - cell "R3" [ref=e195]
            - cell "PW CT009 20260617181022 Categoria" [ref=e196]
            - cell "10 un" [ref=e197]
            - cell "R$ 150,00" [ref=e198]
            - cell "R$ 1.500,00" [ref=e199]
            - cell "R$ 0,00" [ref=e200]
            - cell "R$ 0,00" [ref=e201]
            - cell "R$ 1.500,00" [ref=e202]
            - cell "Editar Solicitar exclusão" [ref=e203]:
              - generic [ref=e204]:
                - button "Editar" [ref=e205] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e206] [cursor=pointer]
          - row "4S-479637-2026 PW CT009 20260617184225 Item PW CT009 20260617184225 Obra PW CT009 20260617184225 Categoria 1 un R$ 120,00 R$ 120,00 R$ 0,00 R$ 0,00 R$ 120,00 Solicitar alteração Solicitar exclusão" [ref=e207]:
            - cell "4S-479637-2026" [ref=e208]
            - cell "PW CT009 20260617184225 Item" [ref=e209]:
              - generic [ref=e210]: PW CT009 20260617184225 Item
            - cell "PW CT009 20260617184225 Obra" [ref=e211]
            - cell "PW CT009 20260617184225 Categoria" [ref=e212]
            - cell "1 un" [ref=e213]
            - cell "R$ 120,00" [ref=e214]
            - cell "R$ 120,00" [ref=e215]
            - cell "R$ 0,00" [ref=e216]
            - cell "R$ 0,00" [ref=e217]
            - cell "R$ 120,00" [ref=e218]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e219]:
              - generic [ref=e220]:
                - button "Solicitar alteração" [ref=e221] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e222] [cursor=pointer]
          - row "4S-119743-2026 PW CT012 20260617184225 Item PW CT012 20260617184225 Obra PW CT012 20260617184225 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e223]:
            - cell "4S-119743-2026" [ref=e224]
            - cell "PW CT012 20260617184225 Item" [ref=e225]:
              - generic [ref=e226]: PW CT012 20260617184225 Item
            - cell "PW CT012 20260617184225 Obra" [ref=e227]
            - cell "PW CT012 20260617184225 Categoria" [ref=e228]
            - cell "1 un" [ref=e229]
            - cell "R$ 100,00" [ref=e230]
            - cell "R$ 100,00" [ref=e231]
            - cell "R$ 0,00" [ref=e232]
            - cell "R$ 0,00" [ref=e233]
            - cell "R$ 100,00" [ref=e234]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e235]:
              - generic [ref=e236]:
                - button "Solicitar alteração" [ref=e237] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e238] [cursor=pointer]
          - row "4S-531066-2026 PW CT012 20260617184145 Item PW CT012 20260617184145 Obra PW CT012 20260617184145 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e239]:
            - cell "4S-531066-2026" [ref=e240]
            - cell "PW CT012 20260617184145 Item" [ref=e241]:
              - generic [ref=e242]: PW CT012 20260617184145 Item
            - cell "PW CT012 20260617184145 Obra" [ref=e243]
            - cell "PW CT012 20260617184145 Categoria" [ref=e244]
            - cell "1 un" [ref=e245]
            - cell "R$ 100,00" [ref=e246]
            - cell "R$ 100,00" [ref=e247]
            - cell "R$ 0,00" [ref=e248]
            - cell "R$ 0,00" [ref=e249]
            - cell "R$ 100,00" [ref=e250]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e251]:
              - generic [ref=e252]:
                - button "Solicitar alteração" [ref=e253] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e254] [cursor=pointer]
          - row "4S-701871-2026 PW CT009 20260617183934 Item PW CT009 20260617183934 Obra PW CT009 20260617183934 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e255]:
            - cell "4S-701871-2026" [ref=e256]
            - cell "PW CT009 20260617183934 Item" [ref=e257]:
              - generic [ref=e258]: PW CT009 20260617183934 Item
            - cell "PW CT009 20260617183934 Obra" [ref=e259]
            - cell "PW CT009 20260617183934 Categoria" [ref=e260]
            - cell "1 un" [ref=e261]
            - cell "R$ 100,00" [ref=e262]
            - cell "R$ 100,00" [ref=e263]
            - cell "R$ 0,00" [ref=e264]
            - cell "R$ 0,00" [ref=e265]
            - cell "R$ 100,00" [ref=e266]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e267]:
              - generic [ref=e268]:
                - button "Solicitar alteração" [ref=e269] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e270] [cursor=pointer]
          - row "4S-431844-2026 PW CT012 20260617183903 Item PW CT012 20260617183903 Obra PW CT012 20260617183903 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e271]:
            - cell "4S-431844-2026" [ref=e272]
            - cell "PW CT012 20260617183903 Item" [ref=e273]:
              - generic [ref=e274]: PW CT012 20260617183903 Item
            - cell "PW CT012 20260617183903 Obra" [ref=e275]
            - cell "PW CT012 20260617183903 Categoria" [ref=e276]
            - cell "1 un" [ref=e277]
            - cell "R$ 100,00" [ref=e278]
            - cell "R$ 100,00" [ref=e279]
            - cell "R$ 0,00" [ref=e280]
            - cell "R$ 0,00" [ref=e281]
            - cell "R$ 100,00" [ref=e282]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e283]:
              - generic [ref=e284]:
                - button "Solicitar alteração" [ref=e285] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e286] [cursor=pointer]
          - row "4S-836862-2026 PW CT009 20260617183009 Item PW CT009 20260617183009 Obra PW CT009 20260617183009 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e287]:
            - cell "4S-836862-2026" [ref=e288]
            - cell "PW CT009 20260617183009 Item" [ref=e289]:
              - generic [ref=e290]: PW CT009 20260617183009 Item
            - cell "PW CT009 20260617183009 Obra" [ref=e291]
            - cell "PW CT009 20260617183009 Categoria" [ref=e292]
            - cell "1 un" [ref=e293]
            - cell "R$ 100,00" [ref=e294]
            - cell "R$ 100,00" [ref=e295]
            - cell "R$ 0,00" [ref=e296]
            - cell "R$ 0,00" [ref=e297]
            - cell "R$ 100,00" [ref=e298]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e299]:
              - generic [ref=e300]:
                - button "Solicitar alteração" [ref=e301] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e302] [cursor=pointer]
          - row "4S-788341-2026 PW CT012 20260617182923 Item PW CT012 20260617182923 Obra PW CT012 20260617182923 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e303]:
            - cell "4S-788341-2026" [ref=e304]
            - cell "PW CT012 20260617182923 Item" [ref=e305]:
              - generic [ref=e306]: PW CT012 20260617182923 Item
            - cell "PW CT012 20260617182923 Obra" [ref=e307]
            - cell "PW CT012 20260617182923 Categoria" [ref=e308]
            - cell "1 un" [ref=e309]
            - cell "R$ 100,00" [ref=e310]
            - cell "R$ 100,00" [ref=e311]
            - cell "R$ 0,00" [ref=e312]
            - cell "R$ 0,00" [ref=e313]
            - cell "R$ 100,00" [ref=e314]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e315]:
              - generic [ref=e316]:
                - button "Solicitar alteração" [ref=e317] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e318] [cursor=pointer]
          - row "4S-971581-2026 PW CT009 20260617181324 Item - PW CT009 20260617181324 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e319]:
            - cell "4S-971581-2026" [ref=e320]
            - cell "PW CT009 20260617181324 Item" [ref=e321]:
              - generic [ref=e322]: PW CT009 20260617181324 Item
            - cell "-" [ref=e323]
            - cell "PW CT009 20260617181324 Categoria" [ref=e324]
            - cell "1 un" [ref=e325]
            - cell "R$ 100,00" [ref=e326]
            - cell "R$ 100,00" [ref=e327]
            - cell "R$ 0,00" [ref=e328]
            - cell "R$ 0,00" [ref=e329]
            - cell "R$ 100,00" [ref=e330]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e331]:
              - generic [ref=e332]:
                - button "Solicitar alteração" [ref=e333] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e334] [cursor=pointer]
          - row "4S-200852-2026 PW CT012 20260617181146 Item - PW CT012 20260617181146 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e335]:
            - cell "4S-200852-2026" [ref=e336]
            - cell "PW CT012 20260617181146 Item" [ref=e337]:
              - generic [ref=e338]: PW CT012 20260617181146 Item
            - cell "-" [ref=e339]
            - cell "PW CT012 20260617181146 Categoria" [ref=e340]
            - cell "1 un" [ref=e341]
            - cell "R$ 100,00" [ref=e342]
            - cell "R$ 100,00" [ref=e343]
            - cell "R$ 0,00" [ref=e344]
            - cell "R$ 0,00" [ref=e345]
            - cell "R$ 100,00" [ref=e346]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e347]:
              - generic [ref=e348]:
                - button "Solicitar alteração" [ref=e349] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e350] [cursor=pointer]
          - row "4S-182249-2026 PW CT009 20260617181057 Item - PW CT009 20260617181057 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e351]:
            - cell "4S-182249-2026" [ref=e352]
            - cell "PW CT009 20260617181057 Item" [ref=e353]:
              - generic [ref=e354]: PW CT009 20260617181057 Item
            - cell "-" [ref=e355]
            - cell "PW CT009 20260617181057 Categoria" [ref=e356]
            - cell "1 un" [ref=e357]
            - cell "R$ 100,00" [ref=e358]
            - cell "R$ 100,00" [ref=e359]
            - cell "R$ 0,00" [ref=e360]
            - cell "R$ 0,00" [ref=e361]
            - cell "R$ 100,00" [ref=e362]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e363]:
              - generic [ref=e364]:
                - button "Solicitar alteração" [ref=e365] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e366] [cursor=pointer]
          - row "4S-469412-2026 PW CT012 20260617180951 Item - PW CT012 20260617180951 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e367]:
            - cell "4S-469412-2026" [ref=e368]
            - cell "PW CT012 20260617180951 Item" [ref=e369]:
              - generic [ref=e370]: PW CT012 20260617180951 Item
            - cell "-" [ref=e371]
            - cell "PW CT012 20260617180951 Categoria" [ref=e372]
            - cell "1 un" [ref=e373]
            - cell "R$ 100,00" [ref=e374]
            - cell "R$ 100,00" [ref=e375]
            - cell "R$ 0,00" [ref=e376]
            - cell "R$ 0,00" [ref=e377]
            - cell "R$ 100,00" [ref=e378]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e379]:
              - generic [ref=e380]:
                - button "Solicitar alteração" [ref=e381] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e382] [cursor=pointer]
          - row "4S-112501-2026 PW CT009 20260617180719 Item - PW CT009 20260617180719 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e383]:
            - cell "4S-112501-2026" [ref=e384]
            - cell "PW CT009 20260617180719 Item" [ref=e385]:
              - generic [ref=e386]: PW CT009 20260617180719 Item
            - cell "-" [ref=e387]
            - cell "PW CT009 20260617180719 Categoria" [ref=e388]
            - cell "1 un" [ref=e389]
            - cell "R$ 100,00" [ref=e390]
            - cell "R$ 100,00" [ref=e391]
            - cell "R$ 0,00" [ref=e392]
            - cell "R$ 0,00" [ref=e393]
            - cell "R$ 100,00" [ref=e394]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e395]:
              - generic [ref=e396]:
                - button "Solicitar alteração" [ref=e397] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e398] [cursor=pointer]
          - row "4S-885887-2026 PW CT012 20260617180638 Item - PW CT012 20260617180638 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e399]:
            - cell "4S-885887-2026" [ref=e400]
            - cell "PW CT012 20260617180638 Item" [ref=e401]:
              - generic [ref=e402]: PW CT012 20260617180638 Item
            - cell "-" [ref=e403]
            - cell "PW CT012 20260617180638 Categoria" [ref=e404]
            - cell "1 un" [ref=e405]
            - cell "R$ 100,00" [ref=e406]
            - cell "R$ 100,00" [ref=e407]
            - cell "R$ 0,00" [ref=e408]
            - cell "R$ 0,00" [ref=e409]
            - cell "R$ 100,00" [ref=e410]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e411]:
              - generic [ref=e412]:
                - button "Solicitar alteração" [ref=e413] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e414] [cursor=pointer]
          - row "4S-808544-2026 PW CT009 20260617180259 Item - PW CT009 20260617180259 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e415]:
            - cell "4S-808544-2026" [ref=e416]
            - cell "PW CT009 20260617180259 Item" [ref=e417]:
              - generic [ref=e418]: PW CT009 20260617180259 Item
            - cell "-" [ref=e419]
            - cell "PW CT009 20260617180259 Categoria" [ref=e420]
            - cell "1 un" [ref=e421]
            - cell "R$ 100,00" [ref=e422]
            - cell "R$ 100,00" [ref=e423]
            - cell "R$ 0,00" [ref=e424]
            - cell "R$ 0,00" [ref=e425]
            - cell "R$ 100,00" [ref=e426]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e427]:
              - generic [ref=e428]:
                - button "Solicitar alteração" [ref=e429] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e430] [cursor=pointer]
          - row "4S-680335-2026 PW CT012 20260617180228 Item - PW CT012 20260617180228 Categoria 1 un R$ 100,00 R$ 100,00 R$ 0,00 R$ 0,00 R$ 100,00 Solicitar alteração Solicitar exclusão" [ref=e431]:
            - cell "4S-680335-2026" [ref=e432]
            - cell "PW CT012 20260617180228 Item" [ref=e433]:
              - generic [ref=e434]: PW CT012 20260617180228 Item
            - cell "-" [ref=e435]
            - cell "PW CT012 20260617180228 Categoria" [ref=e436]
            - cell "1 un" [ref=e437]
            - cell "R$ 100,00" [ref=e438]
            - cell "R$ 100,00" [ref=e439]
            - cell "R$ 0,00" [ref=e440]
            - cell "R$ 0,00" [ref=e441]
            - cell "R$ 100,00" [ref=e442]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e443]:
              - generic [ref=e444]:
                - button "Solicitar alteração" [ref=e445] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e446] [cursor=pointer]
          - row "4S-221056-2026 HML 1781630773579 Item Orcado - HML 1781630773579 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e447]:
            - cell "4S-221056-2026" [ref=e448]
            - cell "HML 1781630773579 Item Orcado" [ref=e449]:
              - generic [ref=e450]: HML 1781630773579 Item Orcado
            - cell "-" [ref=e451]
            - cell "HML 1781630773579 Materiais" [ref=e452]
            - cell "10 un" [ref=e453]
            - cell "R$ 1.000,00" [ref=e454]
            - cell "R$ 10.000,00" [ref=e455]
            - cell "R$ 0,00" [ref=e456]
            - cell "R$ 0,00" [ref=e457]
            - cell "R$ 10.000,00" [ref=e458]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e459]:
              - generic [ref=e460]:
                - button "Solicitar alteração" [ref=e461] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e462] [cursor=pointer]
          - row "4S-943111-2026 HML 1781630633295 Item Orcado - HML 1781630633295 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e463]:
            - cell "4S-943111-2026" [ref=e464]
            - cell "HML 1781630633295 Item Orcado" [ref=e465]:
              - generic [ref=e466]: HML 1781630633295 Item Orcado
            - cell "-" [ref=e467]
            - cell "HML 1781630633295 Materiais" [ref=e468]
            - cell "10 un" [ref=e469]
            - cell "R$ 1.000,00" [ref=e470]
            - cell "R$ 10.000,00" [ref=e471]
            - cell "R$ 0,00" [ref=e472]
            - cell "R$ 0,00" [ref=e473]
            - cell "R$ 10.000,00" [ref=e474]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e475]:
              - generic [ref=e476]:
                - button "Solicitar alteração" [ref=e477] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e478] [cursor=pointer]
          - row "4S-935292-2026 HML 1781630595874 Item Orcado - HML 1781630595874 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e479]:
            - cell "4S-935292-2026" [ref=e480]
            - cell "HML 1781630595874 Item Orcado" [ref=e481]:
              - generic [ref=e482]: HML 1781630595874 Item Orcado
            - cell "-" [ref=e483]
            - cell "HML 1781630595874 Materiais" [ref=e484]
            - cell "10 un" [ref=e485]
            - cell "R$ 1.000,00" [ref=e486]
            - cell "R$ 10.000,00" [ref=e487]
            - cell "R$ 0,00" [ref=e488]
            - cell "R$ 0,00" [ref=e489]
            - cell "R$ 10.000,00" [ref=e490]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e491]:
              - generic [ref=e492]:
                - button "Solicitar alteração" [ref=e493] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e494] [cursor=pointer]
          - row "4S-241715-2026 HML 1781630556505 Item Orcado - HML 1781630556505 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e495]:
            - cell "4S-241715-2026" [ref=e496]
            - cell "HML 1781630556505 Item Orcado" [ref=e497]:
              - generic [ref=e498]: HML 1781630556505 Item Orcado
            - cell "-" [ref=e499]
            - cell "HML 1781630556505 Materiais" [ref=e500]
            - cell "10 un" [ref=e501]
            - cell "R$ 1.000,00" [ref=e502]
            - cell "R$ 10.000,00" [ref=e503]
            - cell "R$ 0,00" [ref=e504]
            - cell "R$ 0,00" [ref=e505]
            - cell "R$ 10.000,00" [ref=e506]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e507]:
              - generic [ref=e508]:
                - button "Solicitar alteração" [ref=e509] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e510] [cursor=pointer]
          - row "4S-666481-2026 HML 1781630434235 Item Orcado - HML 1781630434235 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e511]:
            - cell "4S-666481-2026" [ref=e512]
            - cell "HML 1781630434235 Item Orcado" [ref=e513]:
              - generic [ref=e514]: HML 1781630434235 Item Orcado
            - cell "-" [ref=e515]
            - cell "HML 1781630434235 Materiais" [ref=e516]
            - cell "10 un" [ref=e517]
            - cell "R$ 1.000,00" [ref=e518]
            - cell "R$ 10.000,00" [ref=e519]
            - cell "R$ 0,00" [ref=e520]
            - cell "R$ 0,00" [ref=e521]
            - cell "R$ 10.000,00" [ref=e522]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e523]:
              - generic [ref=e524]:
                - button "Solicitar alteração" [ref=e525] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e526] [cursor=pointer]
          - row "4S-625593-2026 HML 1781630370967 Item Orcado - HML 1781630328305 Materiais 10 un R$ 1.000,00 R$ 10.000,00 R$ 0,00 R$ 0,00 R$ 10.000,00 Solicitar alteração Solicitar exclusão" [ref=e527]:
            - cell "4S-625593-2026" [ref=e528]
            - cell "HML 1781630370967 Item Orcado" [ref=e529]:
              - generic [ref=e530]: HML 1781630370967 Item Orcado
            - cell "-" [ref=e531]
            - cell "HML 1781630328305 Materiais" [ref=e532]
            - cell "10 un" [ref=e533]
            - cell "R$ 1.000,00" [ref=e534]
            - cell "R$ 10.000,00" [ref=e535]
            - cell "R$ 0,00" [ref=e536]
            - cell "R$ 0,00" [ref=e537]
            - cell "R$ 10.000,00" [ref=e538]
            - cell "Solicitar alteração Solicitar exclusão" [ref=e539]:
              - generic [ref=e540]:
                - button "Solicitar alteração" [ref=e541] [cursor=pointer]
                - button "Solicitar exclusão" [ref=e542] [cursor=pointer]
      - generic [ref=e544]:
        - generic [ref=e545]:
          - heading "Editar Item Orçado" [level=2] [ref=e546]
          - button "×" [ref=e547] [cursor=pointer]
        - generic [ref=e548]:
          - generic [ref=e549]: Obra *
          - combobox [ref=e550]:
            - option "Selecione..." [selected]
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
        - generic [ref=e551]:
          - generic [ref=e552]: Centro de Custo
          - combobox [ref=e553]:
            - option "Selecione..." [selected]
        - generic [ref=e554]:
          - generic [ref=e555]: Categoria *
          - combobox [ref=e556]:
            - option "Selecione..."
            - option "AUTO-4S-1781787555185 Categoria" [selected]
            - option "AUTO-4S-1781787507433 Categoria"
            - option "AUTO-4S-1781787088837 Categoria"
            - option "AUTO-4S-1781787027511 Categoria"
            - option "AUTO-4S-1781786933497 Categoria"
            - option "AUTO-4S-1781786851917 Categoria"
            - option "AUTO-4S-1781786769827 Categoria"
            - option "PW CT009 20260617184225 Categoria"
            - option "PW CT012 20260617184225 Categoria"
            - option "PW CT012 20260617184145 Categoria"
            - option "PW CT009 20260617183934 Categoria"
            - option "PW CT012 20260617183903 Categoria"
            - option "PW CT009 20260617183009 Categoria"
            - option "PW CT012 20260617182923 Categoria"
            - option "PW CT009 20260617181324 Categoria"
            - option "PW CT009 20260617181227 Categoria"
            - option "PW CT012 20260617181146 Categoria"
            - option "PW CT009 20260617181057 Categoria"
            - option "PW CT009 20260617181022 Categoria"
            - option "PW CT012 20260617180951 Categoria"
            - option "PW CT009 20260617180719 Categoria"
            - option "PW CT012 20260617180638 Categoria"
            - option "PW CT009 20260617180259 Categoria"
            - option "PW CT012 20260617180228 Categoria"
            - option "HML 1781630773579 Materiais"
            - option "HML 1781630633295 Materiais"
            - option "HML 1781630595874 Materiais"
            - option "HML 1781630556505 Materiais"
            - option "HML 1781630434235 Materiais"
            - option "HML 1781630370967 Materiais"
            - option "HML 1781630328305 Materiais"
            - option "HML 1781630075298 Materiais"
            - option "HML 1781630029631 Materiais"
            - option "Teste"
        - generic [ref=e557]:
          - generic [ref=e558]: Nome do Item *
          - textbox [ref=e559]: AUTO-4S-1781787555185 Item
        - generic [ref=e560]:
          - generic [ref=e561]: Descrição
          - textbox [ref=e562]
        - generic [ref=e563]:
          - generic [ref=e564]: Unidade de Medida
          - generic [ref=e565]:
            - combobox [ref=e566]:
              - option "Selecione..."
              - option "un" [selected]
              - option "pc"
              - option "cj"
              - option "cx"
              - option "sc"
              - option "kg"
              - option "t"
              - option "m"
              - option "m2"
              - option "m3"
              - option "L"
              - option "h"
              - option "dia"
              - option "mes"
              - option "vb"
            - button "Cadastrar mais" [ref=e567] [cursor=pointer]
        - generic [ref=e568]:
          - generic [ref=e569]: Quantidade Prevista
          - spinbutton [ref=e570]: "1"
        - generic [ref=e571]:
          - generic [ref=e572]: Valor Unitário Previsto (R$)
          - spinbutton [ref=e573]: "1200"
        - generic [ref=e574]: "Total calculado: R$ 1.200,00"
        - generic [ref=e575]:
          - generic [ref=e576]: Etapa de Referência
          - textbox [ref=e577]: Fase teste
        - generic [ref=e578]:
          - paragraph [ref=e579]: Orcamento bloqueado para edicao direta
          - paragraph [ref=e580]: Este item ja possui etapa definida. Para alterar, informe a justificativa; a solicitacao sera enviada para aprovacao da Diretoria.
          - paragraph [ref=e581]: Ja existe uma solicitacao pendente para este item.
        - generic [ref=e582]:
          - button "Cancelar" [ref=e583] [cursor=pointer]
          - button "Solicitar aprovacao" [ref=e584] [cursor=pointer]
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | function byText(page, text) {
  4   |   return page.getByText(new RegExp(escapeRegex(text), 'i')).first();
  5   | }
  6   | 
  7   | function escapeRegex(text) {
  8   |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  9   | }
  10  | 
  11  | function xpathLiteral(text) {
  12  |   const value = String(text);
  13  |   if (!value.includes("'")) return `'${value}'`;
  14  |   if (!value.includes('"')) return `"${value}"`;
  15  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  16  | }
  17  | 
  18  | async function firstVisible(locators) {
  19  |   for (const locator of locators) {
  20  |     if (await locator.count()) {
  21  |       const first = locator.first();
  22  |       if (await first.isVisible().catch(() => false)) return first;
  23  |     }
  24  |   }
  25  |   return null;
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
> 42  |   await target.click(options);
      |                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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
  126 |     await primarySubmit.click();
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
```