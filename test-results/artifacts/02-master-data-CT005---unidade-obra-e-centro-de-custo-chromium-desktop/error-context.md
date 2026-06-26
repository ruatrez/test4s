# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT005 - unidade, obra e centro de custo
- Location: tests/02-master-data.spec.ts:25:5

# Error details

```
Error: Could not find field: obra
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
      - button "⚠ 1 aprovação pendente" [ref=e62] [cursor=pointer]
      - generic [ref=e63]: ADMINISTRADOR
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Obras e Centros" [level=1] [ref=e67]
        - generic [ref=e68]:
          - button "+ Unidade" [ref=e69] [cursor=pointer]
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
          - row "4S-907935-2026 AUTO-4S-20260623211007 Obra Sao Paulo/ EM ANDAMENTO Editar Excluir" [ref=e88]:
            - cell "4S-907935-2026" [ref=e89]
            - cell "AUTO-4S-20260623211007 Obra" [ref=e90]
            - cell "Sao Paulo/" [ref=e91]
            - cell [ref=e92]
            - cell [ref=e93]
            - cell "EM ANDAMENTO" [ref=e94]
            - cell "Editar Excluir" [ref=e95]:
              - generic [ref=e96]:
                - button "Editar" [ref=e97] [cursor=pointer]
                - button "Excluir" [ref=e98] [cursor=pointer]
          - row "4S-360971-2026 AUTO-4S-20260623210332 Obra Sao Paulo/ EM ANDAMENTO Editar Excluir" [ref=e99]:
            - cell "4S-360971-2026" [ref=e100]
            - cell "AUTO-4S-20260623210332 Obra" [ref=e101]
            - cell "Sao Paulo/" [ref=e102]
            - cell [ref=e103]
            - cell [ref=e104]
            - cell "EM ANDAMENTO" [ref=e105]
            - cell "Editar Excluir" [ref=e106]:
              - generic [ref=e107]:
                - button "Editar" [ref=e108] [cursor=pointer]
                - button "Excluir" [ref=e109] [cursor=pointer]
          - row "4S-780058-2026 AUTO-4S-20260623204321 Obra Sao Paulo/ EM ANDAMENTO Editar Excluir" [ref=e110]:
            - cell "4S-780058-2026" [ref=e111]
            - cell "AUTO-4S-20260623204321 Obra" [ref=e112]
            - cell "Sao Paulo/" [ref=e113]
            - cell [ref=e114]
            - cell [ref=e115]
            - cell "EM ANDAMENTO" [ref=e116]
            - cell "Editar Excluir" [ref=e117]:
              - generic [ref=e118]:
                - button "Editar" [ref=e119] [cursor=pointer]
                - button "Excluir" [ref=e120] [cursor=pointer]
          - row "4S-977298-2026 AUTO-4S-20260623202501 Obra Sao Paulo/ EM ANDAMENTO Editar Excluir" [ref=e121]:
            - cell "4S-977298-2026" [ref=e122]
            - cell "AUTO-4S-20260623202501 Obra" [ref=e123]
            - cell "Sao Paulo/" [ref=e124]
            - cell [ref=e125]
            - cell [ref=e126]
            - cell "EM ANDAMENTO" [ref=e127]
            - cell "Editar Excluir" [ref=e128]:
              - generic [ref=e129]:
                - button "Editar" [ref=e130] [cursor=pointer]
                - button "Excluir" [ref=e131] [cursor=pointer]
          - row "4S-983000-2026 AUTO-4S-20260623202351 Obra Sao Paulo/ EM ANDAMENTO Editar Excluir" [ref=e132]:
            - cell "4S-983000-2026" [ref=e133]
            - cell "AUTO-4S-20260623202351 Obra" [ref=e134]
            - cell "Sao Paulo/" [ref=e135]
            - cell [ref=e136]
            - cell [ref=e137]
            - cell "EM ANDAMENTO" [ref=e138]
            - cell "Editar Excluir" [ref=e139]:
              - generic [ref=e140]:
                - button "Editar" [ref=e141] [cursor=pointer]
                - button "Excluir" [ref=e142] [cursor=pointer]
          - row "4S-628906-2026 AUTO-4S-1782129165886 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e143]:
            - cell "4S-628906-2026" [ref=e144]
            - cell "AUTO-4S-1782129165886 Obra" [ref=e145]
            - cell "Sao Paulo/SP" [ref=e146]
            - cell "2026-01-01" [ref=e147]
            - cell [ref=e148]
            - cell "EM ANDAMENTO" [ref=e149]
            - cell "Editar Excluir" [ref=e150]:
              - generic [ref=e151]:
                - button "Editar" [ref=e152] [cursor=pointer]
                - button "Excluir" [ref=e153] [cursor=pointer]
          - row "4S-484912-2026 AUTO-4S-1782127946610 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e154]:
            - cell "4S-484912-2026" [ref=e155]
            - cell "AUTO-4S-1782127946610 Obra" [ref=e156]
            - cell "Sao Paulo/SP" [ref=e157]
            - cell "2026-01-01" [ref=e158]
            - cell [ref=e159]
            - cell "EM ANDAMENTO" [ref=e160]
            - cell "Editar Excluir" [ref=e161]:
              - generic [ref=e162]:
                - button "Editar" [ref=e163] [cursor=pointer]
                - button "Excluir" [ref=e164] [cursor=pointer]
          - row "4S-703356-2026 AUTO-4S-1782127823803 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e165]:
            - cell "4S-703356-2026" [ref=e166]
            - cell "AUTO-4S-1782127823803 Obra" [ref=e167]
            - cell "Sao Paulo/SP" [ref=e168]
            - cell "2026-01-01" [ref=e169]
            - cell [ref=e170]
            - cell "EM ANDAMENTO" [ref=e171]
            - cell "Editar Excluir" [ref=e172]:
              - generic [ref=e173]:
                - button "Editar" [ref=e174] [cursor=pointer]
                - button "Excluir" [ref=e175] [cursor=pointer]
          - row "4S-524603-2026 AUTO-4S-1782127653460 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e176]:
            - cell "4S-524603-2026" [ref=e177]
            - cell "AUTO-4S-1782127653460 Obra" [ref=e178]
            - cell "Sao Paulo/SP" [ref=e179]
            - cell "2026-01-01" [ref=e180]
            - cell [ref=e181]
            - cell "EM ANDAMENTO" [ref=e182]
            - cell "Editar Excluir" [ref=e183]:
              - generic [ref=e184]:
                - button "Editar" [ref=e185] [cursor=pointer]
                - button "Excluir" [ref=e186] [cursor=pointer]
          - row "4S-274871-2026 AUTO-4S-1782127524231 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e187]:
            - cell "4S-274871-2026" [ref=e188]
            - cell "AUTO-4S-1782127524231 Obra" [ref=e189]
            - cell "Sao Paulo/SP" [ref=e190]
            - cell "2026-01-01" [ref=e191]
            - cell [ref=e192]
            - cell "EM ANDAMENTO" [ref=e193]
            - cell "Editar Excluir" [ref=e194]:
              - generic [ref=e195]:
                - button "Editar" [ref=e196] [cursor=pointer]
                - button "Excluir" [ref=e197] [cursor=pointer]
          - row "4S-580563-2026 AUTO-4S-1782127428456 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e198]:
            - cell "4S-580563-2026" [ref=e199]
            - cell "AUTO-4S-1782127428456 Obra" [ref=e200]
            - cell "Sao Paulo/SP" [ref=e201]
            - cell "2026-01-01" [ref=e202]
            - cell [ref=e203]
            - cell "EM ANDAMENTO" [ref=e204]
            - cell "Editar Excluir" [ref=e205]:
              - generic [ref=e206]:
                - button "Editar" [ref=e207] [cursor=pointer]
                - button "Excluir" [ref=e208] [cursor=pointer]
          - row "4S-841828-2026 AUTO-4S-1782127051410 Obra Sao Paulo/SP 2026-01-01 EM ANDAMENTO Editar Excluir" [ref=e209]:
            - cell "4S-841828-2026" [ref=e210]
            - cell "AUTO-4S-1782127051410 Obra" [ref=e211]
            - cell "Sao Paulo/SP" [ref=e212]
            - cell "2026-01-01" [ref=e213]
            - cell [ref=e214]
            - cell "EM ANDAMENTO" [ref=e215]
            - cell "Editar Excluir" [ref=e216]:
              - generic [ref=e217]:
                - button "Editar" [ref=e218] [cursor=pointer]
                - button "Excluir" [ref=e219] [cursor=pointer]
          - row "4S-305694-2026 AUTO-4S-COT-OC-LOCAL-20260619170828 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e220]:
            - cell "4S-305694-2026" [ref=e221]
            - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Obra" [ref=e222]
            - cell "Sao Paulo/SP" [ref=e223]
            - cell "2026-06-19" [ref=e224]
            - cell "QA" [ref=e225]
            - cell "EM ANDAMENTO" [ref=e226]
            - cell "Editar Excluir" [ref=e227]:
              - generic [ref=e228]:
                - button "Editar" [ref=e229] [cursor=pointer]
                - button "Excluir" [ref=e230] [cursor=pointer]
          - row "4S-844496-2026 AUTO-4S-REG-CT012-20260619-CT004CHECK Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e231]:
            - cell "4S-844496-2026" [ref=e232]
            - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Obra" [ref=e233]
            - cell "Sao Paulo/SP" [ref=e234]
            - cell "2026-06-19" [ref=e235]
            - cell "QA" [ref=e236]
            - cell "EM ANDAMENTO" [ref=e237]
            - cell "Editar Excluir" [ref=e238]:
              - generic [ref=e239]:
                - button "Editar" [ref=e240] [cursor=pointer]
                - button "Excluir" [ref=e241] [cursor=pointer]
          - row "4S-719191-2026 AUTO-4S-20260619175525 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e242]:
            - cell "4S-719191-2026" [ref=e243]
            - cell "AUTO-4S-20260619175525 Obra" [ref=e244]
            - cell "Sao Paulo/SP" [ref=e245]
            - cell "2026-06-19" [ref=e246]
            - cell "QA" [ref=e247]
            - cell "EM ANDAMENTO" [ref=e248]
            - cell "Editar Excluir" [ref=e249]:
              - generic [ref=e250]:
                - button "Editar" [ref=e251] [cursor=pointer]
                - button "Excluir" [ref=e252] [cursor=pointer]
          - row "4S-628246-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e253]:
            - cell "4S-628246-2026" [ref=e254]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e255]
            - cell "Sao Paulo/SP" [ref=e256]
            - cell "2026-06-19" [ref=e257]
            - cell "QA" [ref=e258]
            - cell "EM ANDAMENTO" [ref=e259]
            - cell "Editar Excluir" [ref=e260]:
              - generic [ref=e261]:
                - button "Editar" [ref=e262] [cursor=pointer]
                - button "Excluir" [ref=e263] [cursor=pointer]
          - row "4S-504790-2026 AUTO-4S-PROD-CT012-SALDO-20260619-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e264]:
            - cell "4S-504790-2026" [ref=e265]
            - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Obra" [ref=e266]
            - cell "Sao Paulo/SP" [ref=e267]
            - cell "2026-06-19" [ref=e268]
            - cell "QA" [ref=e269]
            - cell "EM ANDAMENTO" [ref=e270]
            - cell "Editar Excluir" [ref=e271]:
              - generic [ref=e272]:
                - button "Editar" [ref=e273] [cursor=pointer]
                - button "Excluir" [ref=e274] [cursor=pointer]
          - row "4S-439568-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e275]:
            - cell "4S-439568-2026" [ref=e276]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e277]
            - cell "Sao Paulo/SP" [ref=e278]
            - cell "2026-06-19" [ref=e279]
            - cell "QA" [ref=e280]
            - cell "EM ANDAMENTO" [ref=e281]
            - cell "Editar Excluir" [ref=e282]:
              - generic [ref=e283]:
                - button "Editar" [ref=e284] [cursor=pointer]
                - button "Excluir" [ref=e285] [cursor=pointer]
          - row "4S-326678-2026 AUTO-4S-CT004-008-LOCAL-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e286]:
            - cell "4S-326678-2026" [ref=e287]
            - cell "AUTO-4S-CT004-008-LOCAL-20260619-01 Obra" [ref=e288]
            - cell "Sao Paulo/SP" [ref=e289]
            - cell "2026-06-19" [ref=e290]
            - cell "QA" [ref=e291]
            - cell "EM ANDAMENTO" [ref=e292]
            - cell "Editar Excluir" [ref=e293]:
              - generic [ref=e294]:
                - button "Editar" [ref=e295] [cursor=pointer]
                - button "Excluir" [ref=e296] [cursor=pointer]
          - row "4S-619188-2026 AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e297]:
            - cell "4S-619188-2026" [ref=e298]
            - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Obra" [ref=e299]
            - cell "Sao Paulo/SP" [ref=e300]
            - cell "2026-06-19" [ref=e301]
            - cell "QA" [ref=e302]
            - cell "EM ANDAMENTO" [ref=e303]
            - cell "Editar Excluir" [ref=e304]:
              - generic [ref=e305]:
                - button "Editar" [ref=e306] [cursor=pointer]
                - button "Excluir" [ref=e307] [cursor=pointer]
          - row "4S-818803-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e308]:
            - cell "4S-818803-2026" [ref=e309]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e310]
            - cell "Sao Paulo/SP" [ref=e311]
            - cell "2026-06-19" [ref=e312]
            - cell "QA" [ref=e313]
            - cell "EM ANDAMENTO" [ref=e314]
            - cell "Editar Excluir" [ref=e315]:
              - generic [ref=e316]:
                - button "Editar" [ref=e317] [cursor=pointer]
                - button "Excluir" [ref=e318] [cursor=pointer]
          - row "4S-780150-2026 AUTO-4S-PROD-CT012-019-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e319]:
            - cell "4S-780150-2026" [ref=e320]
            - cell "AUTO-4S-PROD-CT012-019-20260619-01 Obra" [ref=e321]
            - cell "Sao Paulo/SP" [ref=e322]
            - cell "2026-06-19" [ref=e323]
            - cell "QA" [ref=e324]
            - cell "EM ANDAMENTO" [ref=e325]
            - cell "Editar Excluir" [ref=e326]:
              - generic [ref=e327]:
                - button "Editar" [ref=e328] [cursor=pointer]
                - button "Excluir" [ref=e329] [cursor=pointer]
          - row "4S-133189-2026 AUTO-4S-PROD-CT004-008-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e330]:
            - cell "4S-133189-2026" [ref=e331]
            - cell "AUTO-4S-PROD-CT004-008-20260619-01 Obra" [ref=e332]
            - cell "Sao Paulo/SP" [ref=e333]
            - cell "2026-06-19" [ref=e334]
            - cell "QA" [ref=e335]
            - cell "EM ANDAMENTO" [ref=e336]
            - cell "Editar Excluir" [ref=e337]:
              - generic [ref=e338]:
                - button "Editar" [ref=e339] [cursor=pointer]
                - button "Excluir" [ref=e340] [cursor=pointer]
          - row "4S-637554-2026 AUTO-4S-REG-CT004-08 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e341]:
            - cell "4S-637554-2026" [ref=e342]
            - cell "AUTO-4S-REG-CT004-08 Obra" [ref=e343]
            - cell "Sao Paulo/SP" [ref=e344]
            - cell "2026-06-19" [ref=e345]
            - cell "QA" [ref=e346]
            - cell "EM ANDAMENTO" [ref=e347]
            - cell "Editar Excluir" [ref=e348]:
              - generic [ref=e349]:
                - button "Editar" [ref=e350] [cursor=pointer]
                - button "Excluir" [ref=e351] [cursor=pointer]
          - row "4S-488458-2026 AUTO-4S-FLOW-LOCAL-05 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e352]:
            - cell "4S-488458-2026" [ref=e353]
            - cell "AUTO-4S-FLOW-LOCAL-05 Obra" [ref=e354]
            - cell "Sao Paulo/SP" [ref=e355]
            - cell "2026-06-19" [ref=e356]
            - cell "QA" [ref=e357]
            - cell "EM ANDAMENTO" [ref=e358]
            - cell "Editar Excluir" [ref=e359]:
              - generic [ref=e360]:
                - button "Editar" [ref=e361] [cursor=pointer]
                - button "Excluir" [ref=e362] [cursor=pointer]
          - row "4S-587454-2026 AUTO-4S-FLOW-LOCAL-04 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e363]:
            - cell "4S-587454-2026" [ref=e364]
            - cell "AUTO-4S-FLOW-LOCAL-04 Obra" [ref=e365]
            - cell "Sao Paulo/SP" [ref=e366]
            - cell "2026-06-19" [ref=e367]
            - cell "QA" [ref=e368]
            - cell "EM ANDAMENTO" [ref=e369]
            - cell "Editar Excluir" [ref=e370]:
              - generic [ref=e371]:
                - button "Editar" [ref=e372] [cursor=pointer]
                - button "Excluir" [ref=e373] [cursor=pointer]
          - row "4S-404119-2026 AUTO-4S-FLOW-LOCAL-03 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e374]:
            - cell "4S-404119-2026" [ref=e375]
            - cell "AUTO-4S-FLOW-LOCAL-03 Obra" [ref=e376]
            - cell "Sao Paulo/SP" [ref=e377]
            - cell "2026-06-19" [ref=e378]
            - cell "QA" [ref=e379]
            - cell "EM ANDAMENTO" [ref=e380]
            - cell "Editar Excluir" [ref=e381]:
              - generic [ref=e382]:
                - button "Editar" [ref=e383] [cursor=pointer]
                - button "Excluir" [ref=e384] [cursor=pointer]
          - row "4S-816332-2026 AUTO-4S-FLOW-LOCAL-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e385]:
            - cell "4S-816332-2026" [ref=e386]
            - cell "AUTO-4S-FLOW-LOCAL-02 Obra" [ref=e387]
            - cell "Sao Paulo/SP" [ref=e388]
            - cell "2026-06-19" [ref=e389]
            - cell "QA" [ref=e390]
            - cell "EM ANDAMENTO" [ref=e391]
            - cell "Editar Excluir" [ref=e392]:
              - generic [ref=e393]:
                - button "Editar" [ref=e394] [cursor=pointer]
                - button "Excluir" [ref=e395] [cursor=pointer]
          - row "4S-375404-2026 AUTO-4S-FLOW-LOCAL-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e396]:
            - cell "4S-375404-2026" [ref=e397]
            - cell "AUTO-4S-FLOW-LOCAL-01 Obra" [ref=e398]
            - cell "Sao Paulo/SP" [ref=e399]
            - cell "2026-06-19" [ref=e400]
            - cell "QA" [ref=e401]
            - cell "EM ANDAMENTO" [ref=e402]
            - cell "Editar Excluir" [ref=e403]:
              - generic [ref=e404]:
                - button "Editar" [ref=e405] [cursor=pointer]
                - button "Excluir" [ref=e406] [cursor=pointer]
          - row "4S-945148-2026 AUTO-4S-VERIFY-20260619-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e407]:
            - cell "4S-945148-2026" [ref=e408]
            - cell "AUTO-4S-VERIFY-20260619-02 Obra" [ref=e409]
            - cell "Sao Paulo/SP" [ref=e410]
            - cell "2026-06-19" [ref=e411]
            - cell "QA" [ref=e412]
            - cell "EM ANDAMENTO" [ref=e413]
            - cell "Editar Excluir" [ref=e414]:
              - generic [ref=e415]:
                - button "Editar" [ref=e416] [cursor=pointer]
                - button "Excluir" [ref=e417] [cursor=pointer]
          - row "4S-422718-2026 AUTO-4S-1781886239507 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e418]:
            - cell "4S-422718-2026" [ref=e419]
            - cell "AUTO-4S-1781886239507 Obra" [ref=e420]
            - cell "Sao Paulo/SP" [ref=e421]
            - cell "2026-06-19" [ref=e422]
            - cell "QA" [ref=e423]
            - cell "EM ANDAMENTO" [ref=e424]
            - cell "Editar Excluir" [ref=e425]:
              - generic [ref=e426]:
                - button "Editar" [ref=e427] [cursor=pointer]
                - button "Excluir" [ref=e428] [cursor=pointer]
          - row "4S-199557-2026 AUTO-4S-1781886161086 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e429]:
            - cell "4S-199557-2026" [ref=e430]
            - cell "AUTO-4S-1781886161086 Obra" [ref=e431]
            - cell "Sao Paulo/SP" [ref=e432]
            - cell "2026-06-19" [ref=e433]
            - cell "QA" [ref=e434]
            - cell "EM ANDAMENTO" [ref=e435]
            - cell "Editar Excluir" [ref=e436]:
              - generic [ref=e437]:
                - button "Editar" [ref=e438] [cursor=pointer]
                - button "Excluir" [ref=e439] [cursor=pointer]
          - row "4S-562180-2026 AUTO-4S-1781787507433 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e440]:
            - cell "4S-562180-2026" [ref=e441]
            - cell "AUTO-4S-1781787507433 Obra" [ref=e442]
            - cell "Sao Paulo/SP" [ref=e443]
            - cell [ref=e444]
            - cell "QA" [ref=e445]
            - cell "EM ANDAMENTO" [ref=e446]
            - cell "Editar Excluir" [ref=e447]:
              - generic [ref=e448]:
                - button "Editar" [ref=e449] [cursor=pointer]
                - button "Excluir" [ref=e450] [cursor=pointer]
          - row "4S-892389-2026 AUTO-4S-1781787088837 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e451]:
            - cell "4S-892389-2026" [ref=e452]
            - cell "AUTO-4S-1781787088837 Obra" [ref=e453]
            - cell "Sao Paulo/SP" [ref=e454]
            - cell [ref=e455]
            - cell "QA" [ref=e456]
            - cell "EM ANDAMENTO" [ref=e457]
            - cell "Editar Excluir" [ref=e458]:
              - generic [ref=e459]:
                - button "Editar" [ref=e460] [cursor=pointer]
                - button "Excluir" [ref=e461] [cursor=pointer]
          - row "4S-715839-2026 AUTO-4S-1781787027511 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e462]:
            - cell "4S-715839-2026" [ref=e463]
            - cell "AUTO-4S-1781787027511 Obra" [ref=e464]
            - cell "Sao Paulo/SP" [ref=e465]
            - cell [ref=e466]
            - cell "QA" [ref=e467]
            - cell "EM ANDAMENTO" [ref=e468]
            - cell "Editar Excluir" [ref=e469]:
              - generic [ref=e470]:
                - button "Editar" [ref=e471] [cursor=pointer]
                - button "Excluir" [ref=e472] [cursor=pointer]
          - row "4S-221926-2026 AUTO-4S-1781786933497 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e473]:
            - cell "4S-221926-2026" [ref=e474]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e475]
            - cell "Sao Paulo/SP" [ref=e476]
            - cell [ref=e477]
            - cell "QA" [ref=e478]
            - cell "EM ANDAMENTO" [ref=e479]
            - cell "Editar Excluir" [ref=e480]:
              - generic [ref=e481]:
                - button "Editar" [ref=e482] [cursor=pointer]
                - button "Excluir" [ref=e483] [cursor=pointer]
          - row "4S-525307-2026 AUTO-4S-1781786851917 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e484]:
            - cell "4S-525307-2026" [ref=e485]
            - cell "AUTO-4S-1781786851917 Obra" [ref=e486]
            - cell "Sao Paulo/SP" [ref=e487]
            - cell [ref=e488]
            - cell "QA" [ref=e489]
            - cell "EM ANDAMENTO" [ref=e490]
            - cell "Editar Excluir" [ref=e491]:
              - generic [ref=e492]:
                - button "Editar" [ref=e493] [cursor=pointer]
                - button "Excluir" [ref=e494] [cursor=pointer]
          - row "4S-237596-2026 AUTO-4S-1781786769827 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e495]:
            - cell "4S-237596-2026" [ref=e496]
            - cell "AUTO-4S-1781786769827 Obra" [ref=e497]
            - cell "Sao Paulo/SP" [ref=e498]
            - cell [ref=e499]
            - cell "QA" [ref=e500]
            - cell "EM ANDAMENTO" [ref=e501]
            - cell "Editar Excluir" [ref=e502]:
              - generic [ref=e503]:
                - button "Editar" [ref=e504] [cursor=pointer]
                - button "Excluir" [ref=e505] [cursor=pointer]
          - row "4S-310435-2026 AUTO-4S-1781786694588 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e506]:
            - cell "4S-310435-2026" [ref=e507]
            - cell "AUTO-4S-1781786694588 Obra" [ref=e508]
            - cell "Sao Paulo/SP" [ref=e509]
            - cell [ref=e510]
            - cell "QA" [ref=e511]
            - cell "EM ANDAMENTO" [ref=e512]
            - cell "Editar Excluir" [ref=e513]:
              - generic [ref=e514]:
                - button "Editar" [ref=e515] [cursor=pointer]
                - button "Excluir" [ref=e516] [cursor=pointer]
          - row "4S-929174-2026 PW CT009 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e517]:
            - cell "4S-929174-2026" [ref=e518]
            - cell "PW CT009 20260617184225 Obra" [ref=e519]
            - cell "Sao Paulo/" [ref=e520]
            - cell [ref=e521]
            - cell "Playwright" [ref=e522]
            - cell "EM ANDAMENTO" [ref=e523]
            - cell "Editar Excluir" [ref=e524]:
              - generic [ref=e525]:
                - button "Editar" [ref=e526] [cursor=pointer]
                - button "Excluir" [ref=e527] [cursor=pointer]
          - row "4S-286261-2026 PW CT012 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e528]:
            - cell "4S-286261-2026" [ref=e529]
            - cell "PW CT012 20260617184225 Obra" [ref=e530]
            - cell "Sao Paulo/" [ref=e531]
            - cell [ref=e532]
            - cell "Playwright" [ref=e533]
            - cell "EM ANDAMENTO" [ref=e534]
            - cell "Editar Excluir" [ref=e535]:
              - generic [ref=e536]:
                - button "Editar" [ref=e537] [cursor=pointer]
                - button "Excluir" [ref=e538] [cursor=pointer]
          - row "4S-580879-2026 PW CT012 20260617184145 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e539]:
            - cell "4S-580879-2026" [ref=e540]
            - cell "PW CT012 20260617184145 Obra" [ref=e541]
            - cell "Sao Paulo/" [ref=e542]
            - cell [ref=e543]
            - cell "Playwright" [ref=e544]
            - cell "EM ANDAMENTO" [ref=e545]
            - cell "Editar Excluir" [ref=e546]:
              - generic [ref=e547]:
                - button "Editar" [ref=e548] [cursor=pointer]
                - button "Excluir" [ref=e549] [cursor=pointer]
          - row "4S-596769-2026 PW CT009 20260617183934 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e550]:
            - cell "4S-596769-2026" [ref=e551]
            - cell "PW CT009 20260617183934 Obra" [ref=e552]
            - cell "Sao Paulo/" [ref=e553]
            - cell [ref=e554]
            - cell "Playwright" [ref=e555]
            - cell "EM ANDAMENTO" [ref=e556]
            - cell "Editar Excluir" [ref=e557]:
              - generic [ref=e558]:
                - button "Editar" [ref=e559] [cursor=pointer]
                - button "Excluir" [ref=e560] [cursor=pointer]
          - row "4S-198804-2026 PW CT012 20260617183903 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e561]:
            - cell "4S-198804-2026" [ref=e562]
            - cell "PW CT012 20260617183903 Obra" [ref=e563]
            - cell "Sao Paulo/" [ref=e564]
            - cell [ref=e565]
            - cell "Playwright" [ref=e566]
            - cell "EM ANDAMENTO" [ref=e567]
            - cell "Editar Excluir" [ref=e568]:
              - generic [ref=e569]:
                - button "Editar" [ref=e570] [cursor=pointer]
                - button "Excluir" [ref=e571] [cursor=pointer]
          - row "4S-566187-2026 PW CT009 20260617183009 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e572]:
            - cell "4S-566187-2026" [ref=e573]
            - cell "PW CT009 20260617183009 Obra" [ref=e574]
            - cell "Sao Paulo/" [ref=e575]
            - cell [ref=e576]
            - cell "Playwright" [ref=e577]
            - cell "EM ANDAMENTO" [ref=e578]
            - cell "Editar Excluir" [ref=e579]:
              - generic [ref=e580]:
                - button "Editar" [ref=e581] [cursor=pointer]
                - button "Excluir" [ref=e582] [cursor=pointer]
          - row "4S-896044-2026 PW CT012 20260617182923 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e583]:
            - cell "4S-896044-2026" [ref=e584]
            - cell "PW CT012 20260617182923 Obra" [ref=e585]
            - cell "Sao Paulo/" [ref=e586]
            - cell [ref=e587]
            - cell "Playwright" [ref=e588]
            - cell "EM ANDAMENTO" [ref=e589]
            - cell "Editar Excluir" [ref=e590]:
              - generic [ref=e591]:
                - button "Editar" [ref=e592] [cursor=pointer]
                - button "Excluir" [ref=e593] [cursor=pointer]
          - row "4S-629466-2026 R3 /RJ EM ANDAMENTO Editar Excluir" [ref=e594]:
            - cell "4S-629466-2026" [ref=e595]
            - cell "R3" [ref=e596]
            - cell "/RJ" [ref=e597]
            - cell [ref=e598]
            - cell [ref=e599]
            - cell "EM ANDAMENTO" [ref=e600]
            - cell "Editar Excluir" [ref=e601]:
              - generic [ref=e602]:
                - button "Editar" [ref=e603] [cursor=pointer]
                - button "Excluir" [ref=e604] [cursor=pointer]
          - row "4S-587288-2026 VIA MOBILIDADE - TROCA DE PISOS SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e605]:
            - cell "4S-587288-2026" [ref=e606]
            - cell "VIA MOBILIDADE - TROCA DE PISOS" [ref=e607]
            - cell "SÃO PAULO/SP" [ref=e608]
            - cell "2025-01-01" [ref=e609]
            - cell "GERENTE 01" [ref=e610]
            - cell "EM ANDAMENTO" [ref=e611]
            - cell "Editar Excluir" [ref=e612]:
              - generic [ref=e613]:
                - button "Editar" [ref=e614] [cursor=pointer]
                - button "Excluir" [ref=e615] [cursor=pointer]
          - row "4S-901172-2026 4S-OBR-053-CAP-VMO SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e616]:
            - cell "4S-901172-2026" [ref=e617]
            - cell "4S-OBR-053-CAP-VMO" [ref=e618]
            - cell "SÃO PAULO/SP" [ref=e619]
            - cell "2025-01-01" [ref=e620]
            - cell "GERENTE 01" [ref=e621]
            - cell "EM ANDAMENTO" [ref=e622]
            - cell "Editar Excluir" [ref=e623]:
              - generic [ref=e624]:
                - button "Editar" [ref=e625] [cursor=pointer]
                - button "Excluir" [ref=e626] [cursor=pointer]
      - generic [ref=e628]:
        - generic [ref=e629]:
          - heading "Nova Unidade" [level=2] [ref=e630]
          - button "×" [ref=e631] [cursor=pointer]
        - generic [ref=e632]:
          - generic [ref=e633]: Nome da Unidade *
          - textbox "Nome da Unidade *" [active] [ref=e634]: AUTO-4S-20260626200345 Unidade
        - generic [ref=e635]:
          - generic [ref=e636]: Descrição
          - textbox "Descrição" [ref=e637]
        - generic [ref=e638]:
          - generic [ref=e639]: Status
          - combobox "Status" [ref=e640]:
            - option "Selecione..." [selected]
            - option "Ativo"
            - option "Inativo"
        - generic [ref=e641]:
          - button "Cancelar" [ref=e642] [cursor=pointer]
          - button "Salvar" [ref=e643] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect, type Locator, type Page } from '@playwright/test';
  2   | 
  3   | export type FieldSpec = {
  4   |   labels: string[];
  5   |   value: string | number;
  6   |   type?: 'select' | 'text';
  7   | };
  8   | 
  9   | export function byText(page: Page, text: string | RegExp) {
  10  |   const pattern = typeof text === 'string' ? new RegExp(escapeRegex(text), 'i') : text;
  11  |   return page.getByText(pattern).first();
  12  | }
  13  | 
  14  | export function escapeRegex(text: string) {
  15  |   return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  16  | }
  17  | 
  18  | function xpathLiteral(text: string) {
  19  |   const value = String(text);
  20  |   if (!value.includes("'")) return `'${value}'`;
  21  |   if (!value.includes('"')) return `"${value}"`;
  22  |   return `concat('${value.replace(/'/g, "',\"'\",'")}')`;
  23  | }
  24  | 
  25  | export async function firstVisible(locators: Locator[]) {
  26  |   for (const locator of locators) {
  27  |     if (await locator.count()) {
  28  |       const first = locator.first();
  29  |       if (await first.isVisible().catch(() => false)) return first;
  30  |     }
  31  |   }
  32  |   return null;
  33  | }
  34  | 
  35  | export async function clickAny(page: Page, names: string[], options: Parameters<Locator['click']>[0] = {}) {
  36  |   const locators: Locator[] = [];
  37  |   for (const name of names) {
  38  |     const pattern = new RegExp(name, 'i');
  39  |     locators.push(page.getByRole('button', { name: pattern }));
  40  |     locators.push(page.getByRole('link', { name: pattern }));
  41  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: pattern }));
  42  |     locators.push(page.getByText(pattern));
  43  |   }
  44  |   if (names.some((name) => /novo|nova|adicionar|cadastrar|criar/i.test(name))) {
  45  |     locators.push(page.locator('button, a, [role="button"]').filter({ hasText: /^\s*\+/ }));
  46  |   }
  47  |   const target = await firstVisible(locators);
  48  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
  49  |   await target.click(options);
  50  | }
  51  | 
  52  | export async function gotoMenu(page: Page, path: string[]) {
  53  |   for (let index = 0; index < path.length; index += 1) {
  54  |     const segment = path[index];
  55  |     const nextSegment = path[index + 1];
  56  |     if (segment === 'Dashboard' && await page.getByRole('heading', { name: /dashboard/i }).count()) {
  57  |       continue;
  58  |     }
  59  |     if (nextSegment) {
  60  |       const childVisible = await page.locator('button, a, [role="button"]')
  61  |         .filter({ hasText: new RegExp(escapeRegex(nextSegment), 'i') })
  62  |         .first()
  63  |         .isVisible()
  64  |         .catch(() => false);
  65  |       if (childVisible) continue;
  66  |     }
  67  |     await clickAny(page, [segment]);
  68  |     await page.waitForLoadState('networkidle').catch(() => {});
  69  |   }
  70  | }
  71  | 
  72  | export async function fillField(page: Page, labels: string[], value: string | number) {
  73  |   const candidates: Locator[] = [];
  74  |   for (const label of labels) {
  75  |     const patterns = [new RegExp(label, 'i')];
  76  |     if (/^email$/i.test(label)) patterns.push(/e-?mail/i);
  77  |     for (const pattern of patterns) {
  78  |       candidates.push(page.getByLabel(pattern));
  79  |       candidates.push(page.getByPlaceholder(pattern));
  80  |     }
  81  |     candidates.push(page.locator(`input[name*="${label}" i]`));
  82  |     candidates.push(page.locator(`textarea[name*="${label}" i]`));
  83  |     candidates.push(page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and (./input or ./textarea)]//*[self::input or self::textarea]`));
  84  |   }
  85  |   const target = await firstVisible(candidates);
> 86  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
      |                      ^ Error: Could not find field: obra
  87  |   await target.fill(String(value));
  88  | }
  89  | 
  90  | export async function chooseOption(page: Page, labels: string[], value: string) {
  91  |   const candidates = labels.flatMap((label) => [
  92  |     page.getByLabel(new RegExp(label, 'i')),
  93  |     page.locator(`select[name*="${label}" i]`),
  94  |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  95  |   ]);
  96  |   const target = await firstVisible(candidates);
  97  |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  98  | 
  99  |   const tagName = await target.evaluate((element) => element.tagName.toLowerCase()).catch(() => '');
  100 |   if (tagName === 'select') {
  101 |     const option = target.locator('option').filter({ hasText: new RegExp(escapeRegex(value), 'i') }).first();
  102 |     if (await option.count()) {
  103 |       await target.selectOption({ label: await option.innerText() });
  104 |       return;
  105 |     }
  106 |   }
  107 | 
  108 |   await target.click();
  109 |   await clickAny(page, [value]);
  110 | }
  111 | 
  112 | export async function chooseFirstAvailableOption(page: Page, labels: string[]) {
  113 |   const candidates = labels.flatMap((label) => [
  114 |     page.getByLabel(new RegExp(label, 'i')),
  115 |     page.locator(`xpath=//*[starts-with(normalize-space(.), ${xpathLiteral(label)}) and ./select]//select`)
  116 |   ]);
  117 |   const target = await firstVisible(candidates);
  118 |   if (!target) throw new Error(`Could not find select/control: ${labels.join(' | ')}`);
  119 |   const optionValue = await target.locator('option').evaluateAll((options) => {
  120 |     const option = options.find((item) => item.value && !/selecione|todas/i.test(item.textContent || ''));
  121 |     return option ? option.value : '';
  122 |   });
  123 |   if (!optionValue) throw new Error(`Could not find available option for: ${labels.join(' | ')}`);
  124 |   await target.selectOption(optionValue);
  125 | }
  126 | 
  127 | export async function submitForm(page: Page) {
  128 |   const primarySubmit = await firstVisible([
  129 |     page.getByRole('button', { name: /^(salvar|cadastrar|criar|confirmar|enviar)$/i }),
  130 |     page.locator('button, [role="button"]').filter({ hasText: /salvar|confirmar|enviar|criar|cadastrar/i }).filter({ hasNotText: /cadastrar mais/i })
  131 |   ]);
  132 |   if (primarySubmit) {
  133 |     await primarySubmit.click();
  134 |   } else {
  135 |     await clickAny(page, ['Salvar', 'Cadastrar', 'Criar', 'Confirmar', 'Enviar']);
  136 |   }
  137 |   await page.waitForLoadState('networkidle').catch(() => {});
  138 |   await page.getByText(/salvando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => {});
  139 | }
  140 | 
  141 | export async function expectPageReady(page: Page, expectedTexts: string[] = []) {
  142 |   await expect(page.locator('body')).toBeVisible();
  143 |   await expect(page.locator('body')).not.toHaveText(/erro interno|internal server error|not found|undefined is not/i);
  144 |   for (const text of expectedTexts) {
  145 |     await expect(byText(page, text)).toBeVisible();
  146 |   }
  147 | }
  148 | 
  149 | export async function tryCreateSimpleRecord(page: Page, path: string[], recordName: string, fields: FieldSpec[] = []) {
  150 |   await gotoMenu(page, path);
  151 |   await clickAny(page, ['Novo', 'Adicionar', 'Cadastrar', 'Criar']);
  152 |   for (const field of fields) {
  153 |     if (field.type === 'select') {
  154 |       await chooseOption(page, field.labels, String(field.value));
  155 |     } else {
  156 |       await fillField(page, field.labels, field.value);
  157 |     }
  158 |   }
  159 |   await submitForm(page);
  160 |   await expect(byText(page, recordName)).toBeVisible();
  161 | }
  162 | 
  163 | export async function assertPersistedAfterRefresh(page: Page, text: string) {
  164 |   await page.reload({ waitUntil: 'networkidle' });
  165 |   await expect(byText(page, text)).toBeVisible();
  166 | }
  167 | 
  168 | export async function tryEditCurrentRecord(page: Page, fields: FieldSpec[]) {
  169 |   await clickAny(page, ['Editar', 'Alterar']).catch(() => {});
  170 |   for (const field of fields) {
  171 |     if (field.type === 'select') {
  172 |       await chooseOption(page, field.labels, String(field.value)).catch(() => {});
  173 |     } else {
  174 |       await fillField(page, field.labels, field.value).catch(() => {});
  175 |     }
  176 |   }
  177 |   await submitForm(page);
  178 | }
  179 | 
  180 | export async function tryCancelInactivateOrDelete(page: Page) {
  181 |   await clickAny(page, ['Cancelar', 'Inativar', 'Excluir', 'Remover']);
  182 |   await fillField(page, ['justificativa', 'observacao', 'observação'], 'Acao automatizada de teste').catch(() => {});
  183 |   await clickAny(page, ['Confirmar', 'Salvar', 'Sim', 'Enviar']).catch(() => {});
  184 |   await page.waitForLoadState('networkidle').catch(() => {});
  185 | }
  186 | 
```