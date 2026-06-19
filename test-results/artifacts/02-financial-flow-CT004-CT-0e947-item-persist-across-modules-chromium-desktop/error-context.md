# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-financial-flow.spec.js >> CT004-CT008 - initial registrations and budget item persist across modules
- Location: tests/02-financial-flow.spec.js:21:1

# Error details

```
Error: Could not find field: unidade
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
      - generic [ref=e16]:
        - button "⊙ Configurações ▶" [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: ⊙
          - generic [ref=e19]: Configurações
          - generic [ref=e20]: ▶
        - button "Clientes e Contratos" [ref=e21] [cursor=pointer]:
          - generic [ref=e22]: Clientes e Contratos
        - button "Obras e Centros" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: Obras e Centros
        - button "Fornecedores" [ref=e25] [cursor=pointer]:
          - generic [ref=e26]: Fornecedores
        - button "Categorias Orç." [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Categorias Orç.
        - button "Colaboradores" [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Colaboradores
        - button "Usuários" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Usuários
      - button "◑ Orçamento ▶" [ref=e34] [cursor=pointer]:
        - generic [ref=e35]: ◑
        - generic [ref=e36]: Orçamento
        - generic [ref=e37]: ▶
      - button "◐ Suprimentos ▶" [ref=e39] [cursor=pointer]:
        - generic [ref=e40]: ◐
        - generic [ref=e41]: Suprimentos
        - generic [ref=e42]: ▶
      - button "◧ Financeiro ▶" [ref=e44] [cursor=pointer]:
        - generic [ref=e45]: ◧
        - generic [ref=e46]: Financeiro
        - generic [ref=e47]: ▶
      - button "◫ Workflow ▶" [ref=e49] [cursor=pointer]:
        - generic [ref=e50]: ◫
        - generic [ref=e51]: Workflow
        - generic [ref=e52]: ▶
    - generic [ref=e53]:
      - generic [ref=e55]: H
      - generic [ref=e56]:
        - paragraph [ref=e57]: Hello
        - paragraph [ref=e58]: ADMINISTRADOR
      - button "⏻" [ref=e59] [cursor=pointer]
  - main [ref=e60]:
    - generic [ref=e61]:
      - button "⚠ 3 aprovações pendentes" [ref=e62] [cursor=pointer]
      - generic [ref=e63]: ADMINISTRADOR
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Obras e Centros" [level=1] [ref=e67]
        - generic [ref=e68]:
          - button "+ Unidade" [active] [ref=e69] [cursor=pointer]
          - button "+ Centro de Custo" [ref=e70] [cursor=pointer]
          - button "+ Obra" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - button "Obras" [ref=e73] [cursor=pointer]
        - button "Unidades" [ref=e74] [cursor=pointer]
        - button "Centros" [ref=e75] [cursor=pointer]
      - table [ref=e77]:
        - rowgroup [ref=e78]:
          - row "Código Nome Cidade/UF Início Prev. Gerente Status" [ref=e79]:
            - columnheader "Código" [ref=e80]
            - columnheader "Nome" [ref=e81]
            - columnheader "Cidade/UF" [ref=e82]
            - columnheader "Início Prev." [ref=e83]
            - columnheader "Gerente" [ref=e84]
            - columnheader "Status" [ref=e85]
            - columnheader [ref=e86]
        - rowgroup [ref=e87]:
          - row "4S-780150-2026 AUTO-4S-PROD-CT012-019-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e88]:
            - cell "4S-780150-2026" [ref=e89]
            - cell "AUTO-4S-PROD-CT012-019-20260619-01 Obra" [ref=e90]
            - cell "Sao Paulo/SP" [ref=e91]
            - cell "2026-06-19" [ref=e92]
            - cell "QA" [ref=e93]
            - cell "EM ANDAMENTO" [ref=e94]
            - cell "Editar Excluir" [ref=e95]:
              - generic [ref=e96]:
                - button "Editar" [ref=e97] [cursor=pointer]
                - button "Excluir" [ref=e98] [cursor=pointer]
          - row "4S-133189-2026 AUTO-4S-PROD-CT004-008-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e99]:
            - cell "4S-133189-2026" [ref=e100]
            - cell "AUTO-4S-PROD-CT004-008-20260619-01 Obra" [ref=e101]
            - cell "Sao Paulo/SP" [ref=e102]
            - cell "2026-06-19" [ref=e103]
            - cell "QA" [ref=e104]
            - cell "EM ANDAMENTO" [ref=e105]
            - cell "Editar Excluir" [ref=e106]:
              - generic [ref=e107]:
                - button "Editar" [ref=e108] [cursor=pointer]
                - button "Excluir" [ref=e109] [cursor=pointer]
          - row "4S-637554-2026 AUTO-4S-REG-CT004-08 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e110]:
            - cell "4S-637554-2026" [ref=e111]
            - cell "AUTO-4S-REG-CT004-08 Obra" [ref=e112]
            - cell "Sao Paulo/SP" [ref=e113]
            - cell "2026-06-19" [ref=e114]
            - cell "QA" [ref=e115]
            - cell "EM ANDAMENTO" [ref=e116]
            - cell "Editar Excluir" [ref=e117]:
              - generic [ref=e118]:
                - button "Editar" [ref=e119] [cursor=pointer]
                - button "Excluir" [ref=e120] [cursor=pointer]
          - row "4S-488458-2026 AUTO-4S-FLOW-LOCAL-05 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e121]:
            - cell "4S-488458-2026" [ref=e122]
            - cell "AUTO-4S-FLOW-LOCAL-05 Obra" [ref=e123]
            - cell "Sao Paulo/SP" [ref=e124]
            - cell "2026-06-19" [ref=e125]
            - cell "QA" [ref=e126]
            - cell "EM ANDAMENTO" [ref=e127]
            - cell "Editar Excluir" [ref=e128]:
              - generic [ref=e129]:
                - button "Editar" [ref=e130] [cursor=pointer]
                - button "Excluir" [ref=e131] [cursor=pointer]
          - row "4S-587454-2026 AUTO-4S-FLOW-LOCAL-04 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e132]:
            - cell "4S-587454-2026" [ref=e133]
            - cell "AUTO-4S-FLOW-LOCAL-04 Obra" [ref=e134]
            - cell "Sao Paulo/SP" [ref=e135]
            - cell "2026-06-19" [ref=e136]
            - cell "QA" [ref=e137]
            - cell "EM ANDAMENTO" [ref=e138]
            - cell "Editar Excluir" [ref=e139]:
              - generic [ref=e140]:
                - button "Editar" [ref=e141] [cursor=pointer]
                - button "Excluir" [ref=e142] [cursor=pointer]
          - row "4S-404119-2026 AUTO-4S-FLOW-LOCAL-03 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e143]:
            - cell "4S-404119-2026" [ref=e144]
            - cell "AUTO-4S-FLOW-LOCAL-03 Obra" [ref=e145]
            - cell "Sao Paulo/SP" [ref=e146]
            - cell "2026-06-19" [ref=e147]
            - cell "QA" [ref=e148]
            - cell "EM ANDAMENTO" [ref=e149]
            - cell "Editar Excluir" [ref=e150]:
              - generic [ref=e151]:
                - button "Editar" [ref=e152] [cursor=pointer]
                - button "Excluir" [ref=e153] [cursor=pointer]
          - row "4S-816332-2026 AUTO-4S-FLOW-LOCAL-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e154]:
            - cell "4S-816332-2026" [ref=e155]
            - cell "AUTO-4S-FLOW-LOCAL-02 Obra" [ref=e156]
            - cell "Sao Paulo/SP" [ref=e157]
            - cell "2026-06-19" [ref=e158]
            - cell "QA" [ref=e159]
            - cell "EM ANDAMENTO" [ref=e160]
            - cell "Editar Excluir" [ref=e161]:
              - generic [ref=e162]:
                - button "Editar" [ref=e163] [cursor=pointer]
                - button "Excluir" [ref=e164] [cursor=pointer]
          - row "4S-375404-2026 AUTO-4S-FLOW-LOCAL-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e165]:
            - cell "4S-375404-2026" [ref=e166]
            - cell "AUTO-4S-FLOW-LOCAL-01 Obra" [ref=e167]
            - cell "Sao Paulo/SP" [ref=e168]
            - cell "2026-06-19" [ref=e169]
            - cell "QA" [ref=e170]
            - cell "EM ANDAMENTO" [ref=e171]
            - cell "Editar Excluir" [ref=e172]:
              - generic [ref=e173]:
                - button "Editar" [ref=e174] [cursor=pointer]
                - button "Excluir" [ref=e175] [cursor=pointer]
          - row "4S-945148-2026 AUTO-4S-VERIFY-20260619-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e176]:
            - cell "4S-945148-2026" [ref=e177]
            - cell "AUTO-4S-VERIFY-20260619-02 Obra" [ref=e178]
            - cell "Sao Paulo/SP" [ref=e179]
            - cell "2026-06-19" [ref=e180]
            - cell "QA" [ref=e181]
            - cell "EM ANDAMENTO" [ref=e182]
            - cell "Editar Excluir" [ref=e183]:
              - generic [ref=e184]:
                - button "Editar" [ref=e185] [cursor=pointer]
                - button "Excluir" [ref=e186] [cursor=pointer]
          - row "4S-422718-2026 AUTO-4S-1781886239507 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e187]:
            - cell "4S-422718-2026" [ref=e188]
            - cell "AUTO-4S-1781886239507 Obra" [ref=e189]
            - cell "Sao Paulo/SP" [ref=e190]
            - cell "2026-06-19" [ref=e191]
            - cell "QA" [ref=e192]
            - cell "EM ANDAMENTO" [ref=e193]
            - cell "Editar Excluir" [ref=e194]:
              - generic [ref=e195]:
                - button "Editar" [ref=e196] [cursor=pointer]
                - button "Excluir" [ref=e197] [cursor=pointer]
          - row "4S-199557-2026 AUTO-4S-1781886161086 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e198]:
            - cell "4S-199557-2026" [ref=e199]
            - cell "AUTO-4S-1781886161086 Obra" [ref=e200]
            - cell "Sao Paulo/SP" [ref=e201]
            - cell "2026-06-19" [ref=e202]
            - cell "QA" [ref=e203]
            - cell "EM ANDAMENTO" [ref=e204]
            - cell "Editar Excluir" [ref=e205]:
              - generic [ref=e206]:
                - button "Editar" [ref=e207] [cursor=pointer]
                - button "Excluir" [ref=e208] [cursor=pointer]
          - row "4S-562180-2026 AUTO-4S-1781787507433 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e209]:
            - cell "4S-562180-2026" [ref=e210]
            - cell "AUTO-4S-1781787507433 Obra" [ref=e211]
            - cell "Sao Paulo/SP" [ref=e212]
            - cell [ref=e213]
            - cell "QA" [ref=e214]
            - cell "EM ANDAMENTO" [ref=e215]
            - cell "Editar Excluir" [ref=e216]:
              - generic [ref=e217]:
                - button "Editar" [ref=e218] [cursor=pointer]
                - button "Excluir" [ref=e219] [cursor=pointer]
          - row "4S-892389-2026 AUTO-4S-1781787088837 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e220]:
            - cell "4S-892389-2026" [ref=e221]
            - cell "AUTO-4S-1781787088837 Obra" [ref=e222]
            - cell "Sao Paulo/SP" [ref=e223]
            - cell [ref=e224]
            - cell "QA" [ref=e225]
            - cell "EM ANDAMENTO" [ref=e226]
            - cell "Editar Excluir" [ref=e227]:
              - generic [ref=e228]:
                - button "Editar" [ref=e229] [cursor=pointer]
                - button "Excluir" [ref=e230] [cursor=pointer]
          - row "4S-715839-2026 AUTO-4S-1781787027511 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e231]:
            - cell "4S-715839-2026" [ref=e232]
            - cell "AUTO-4S-1781787027511 Obra" [ref=e233]
            - cell "Sao Paulo/SP" [ref=e234]
            - cell [ref=e235]
            - cell "QA" [ref=e236]
            - cell "EM ANDAMENTO" [ref=e237]
            - cell "Editar Excluir" [ref=e238]:
              - generic [ref=e239]:
                - button "Editar" [ref=e240] [cursor=pointer]
                - button "Excluir" [ref=e241] [cursor=pointer]
          - row "4S-221926-2026 AUTO-4S-1781786933497 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e242]:
            - cell "4S-221926-2026" [ref=e243]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e244]
            - cell "Sao Paulo/SP" [ref=e245]
            - cell [ref=e246]
            - cell "QA" [ref=e247]
            - cell "EM ANDAMENTO" [ref=e248]
            - cell "Editar Excluir" [ref=e249]:
              - generic [ref=e250]:
                - button "Editar" [ref=e251] [cursor=pointer]
                - button "Excluir" [ref=e252] [cursor=pointer]
          - row "4S-525307-2026 AUTO-4S-1781786851917 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e253]:
            - cell "4S-525307-2026" [ref=e254]
            - cell "AUTO-4S-1781786851917 Obra" [ref=e255]
            - cell "Sao Paulo/SP" [ref=e256]
            - cell [ref=e257]
            - cell "QA" [ref=e258]
            - cell "EM ANDAMENTO" [ref=e259]
            - cell "Editar Excluir" [ref=e260]:
              - generic [ref=e261]:
                - button "Editar" [ref=e262] [cursor=pointer]
                - button "Excluir" [ref=e263] [cursor=pointer]
          - row "4S-237596-2026 AUTO-4S-1781786769827 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e264]:
            - cell "4S-237596-2026" [ref=e265]
            - cell "AUTO-4S-1781786769827 Obra" [ref=e266]
            - cell "Sao Paulo/SP" [ref=e267]
            - cell [ref=e268]
            - cell "QA" [ref=e269]
            - cell "EM ANDAMENTO" [ref=e270]
            - cell "Editar Excluir" [ref=e271]:
              - generic [ref=e272]:
                - button "Editar" [ref=e273] [cursor=pointer]
                - button "Excluir" [ref=e274] [cursor=pointer]
          - row "4S-310435-2026 AUTO-4S-1781786694588 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e275]:
            - cell "4S-310435-2026" [ref=e276]
            - cell "AUTO-4S-1781786694588 Obra" [ref=e277]
            - cell "Sao Paulo/SP" [ref=e278]
            - cell [ref=e279]
            - cell "QA" [ref=e280]
            - cell "EM ANDAMENTO" [ref=e281]
            - cell "Editar Excluir" [ref=e282]:
              - generic [ref=e283]:
                - button "Editar" [ref=e284] [cursor=pointer]
                - button "Excluir" [ref=e285] [cursor=pointer]
          - row "4S-929174-2026 PW CT009 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e286]:
            - cell "4S-929174-2026" [ref=e287]
            - cell "PW CT009 20260617184225 Obra" [ref=e288]
            - cell "Sao Paulo/" [ref=e289]
            - cell [ref=e290]
            - cell "Playwright" [ref=e291]
            - cell "EM ANDAMENTO" [ref=e292]
            - cell "Editar Excluir" [ref=e293]:
              - generic [ref=e294]:
                - button "Editar" [ref=e295] [cursor=pointer]
                - button "Excluir" [ref=e296] [cursor=pointer]
          - row "4S-286261-2026 PW CT012 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e297]:
            - cell "4S-286261-2026" [ref=e298]
            - cell "PW CT012 20260617184225 Obra" [ref=e299]
            - cell "Sao Paulo/" [ref=e300]
            - cell [ref=e301]
            - cell "Playwright" [ref=e302]
            - cell "EM ANDAMENTO" [ref=e303]
            - cell "Editar Excluir" [ref=e304]:
              - generic [ref=e305]:
                - button "Editar" [ref=e306] [cursor=pointer]
                - button "Excluir" [ref=e307] [cursor=pointer]
          - row "4S-580879-2026 PW CT012 20260617184145 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e308]:
            - cell "4S-580879-2026" [ref=e309]
            - cell "PW CT012 20260617184145 Obra" [ref=e310]
            - cell "Sao Paulo/" [ref=e311]
            - cell [ref=e312]
            - cell "Playwright" [ref=e313]
            - cell "EM ANDAMENTO" [ref=e314]
            - cell "Editar Excluir" [ref=e315]:
              - generic [ref=e316]:
                - button "Editar" [ref=e317] [cursor=pointer]
                - button "Excluir" [ref=e318] [cursor=pointer]
          - row "4S-596769-2026 PW CT009 20260617183934 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e319]:
            - cell "4S-596769-2026" [ref=e320]
            - cell "PW CT009 20260617183934 Obra" [ref=e321]
            - cell "Sao Paulo/" [ref=e322]
            - cell [ref=e323]
            - cell "Playwright" [ref=e324]
            - cell "EM ANDAMENTO" [ref=e325]
            - cell "Editar Excluir" [ref=e326]:
              - generic [ref=e327]:
                - button "Editar" [ref=e328] [cursor=pointer]
                - button "Excluir" [ref=e329] [cursor=pointer]
          - row "4S-198804-2026 PW CT012 20260617183903 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e330]:
            - cell "4S-198804-2026" [ref=e331]
            - cell "PW CT012 20260617183903 Obra" [ref=e332]
            - cell "Sao Paulo/" [ref=e333]
            - cell [ref=e334]
            - cell "Playwright" [ref=e335]
            - cell "EM ANDAMENTO" [ref=e336]
            - cell "Editar Excluir" [ref=e337]:
              - generic [ref=e338]:
                - button "Editar" [ref=e339] [cursor=pointer]
                - button "Excluir" [ref=e340] [cursor=pointer]
          - row "4S-566187-2026 PW CT009 20260617183009 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e341]:
            - cell "4S-566187-2026" [ref=e342]
            - cell "PW CT009 20260617183009 Obra" [ref=e343]
            - cell "Sao Paulo/" [ref=e344]
            - cell [ref=e345]
            - cell "Playwright" [ref=e346]
            - cell "EM ANDAMENTO" [ref=e347]
            - cell "Editar Excluir" [ref=e348]:
              - generic [ref=e349]:
                - button "Editar" [ref=e350] [cursor=pointer]
                - button "Excluir" [ref=e351] [cursor=pointer]
          - row "4S-896044-2026 PW CT012 20260617182923 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e352]:
            - cell "4S-896044-2026" [ref=e353]
            - cell "PW CT012 20260617182923 Obra" [ref=e354]
            - cell "Sao Paulo/" [ref=e355]
            - cell [ref=e356]
            - cell "Playwright" [ref=e357]
            - cell "EM ANDAMENTO" [ref=e358]
            - cell "Editar Excluir" [ref=e359]:
              - generic [ref=e360]:
                - button "Editar" [ref=e361] [cursor=pointer]
                - button "Excluir" [ref=e362] [cursor=pointer]
          - row "4S-629466-2026 R3 /RJ EM ANDAMENTO Editar Excluir" [ref=e363]:
            - cell "4S-629466-2026" [ref=e364]
            - cell "R3" [ref=e365]
            - cell "/RJ" [ref=e366]
            - cell [ref=e367]
            - cell [ref=e368]
            - cell "EM ANDAMENTO" [ref=e369]
            - cell "Editar Excluir" [ref=e370]:
              - generic [ref=e371]:
                - button "Editar" [ref=e372] [cursor=pointer]
                - button "Excluir" [ref=e373] [cursor=pointer]
          - row "4S-587288-2026 VIA MOBILIDADE - TROCA DE PISOS SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e374]:
            - cell "4S-587288-2026" [ref=e375]
            - cell "VIA MOBILIDADE - TROCA DE PISOS" [ref=e376]
            - cell "SÃO PAULO/SP" [ref=e377]
            - cell "2025-01-01" [ref=e378]
            - cell "GERENTE 01" [ref=e379]
            - cell "EM ANDAMENTO" [ref=e380]
            - cell "Editar Excluir" [ref=e381]:
              - generic [ref=e382]:
                - button "Editar" [ref=e383] [cursor=pointer]
                - button "Excluir" [ref=e384] [cursor=pointer]
          - row "4S-901172-2026 4S-OBR-053-CAP-VMO SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e385]:
            - cell "4S-901172-2026" [ref=e386]
            - cell "4S-OBR-053-CAP-VMO" [ref=e387]
            - cell "SÃO PAULO/SP" [ref=e388]
            - cell "2025-01-01" [ref=e389]
            - cell "GERENTE 01" [ref=e390]
            - cell "EM ANDAMENTO" [ref=e391]
            - cell "Editar Excluir" [ref=e392]:
              - generic [ref=e393]:
                - button "Editar" [ref=e394] [cursor=pointer]
                - button "Excluir" [ref=e395] [cursor=pointer]
      - generic [ref=e397]:
        - generic [ref=e398]:
          - heading "Nova Unidade" [level=2] [ref=e399]
          - button "×" [ref=e400] [cursor=pointer]
        - generic [ref=e401]:
          - generic [ref=e402]: Nome *
          - textbox [ref=e403]
        - generic [ref=e404]:
          - generic [ref=e405]: Descrição
          - textbox [ref=e406]
        - generic [ref=e407]:
          - generic [ref=e408]: Status
          - combobox [ref=e409]:
            - option "Selecione..." [selected]
            - option "Ativo"
            - option "Inativo"
        - generic [ref=e410]:
          - button "Cancelar" [ref=e411] [cursor=pointer]
          - button "Salvar" [ref=e412] [cursor=pointer]
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
> 79  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
      |                      ^ Error: Could not find field: unidade
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