# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-permissions-audit.spec.ts >> CT020 - workflow com perfil correto/incorreto, aprovacao e rejeicao
- Location: tests/05-permissions-audit.spec.ts:39:5

# Error details

```
Error: Could not find clickable control: Workflow
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
      - button "◑ Orçamento ▶" [ref=e16] [cursor=pointer]:
        - generic [ref=e17]: ◑
        - generic [ref=e18]: Orçamento
        - generic [ref=e19]: ▶
      - button "◐ Suprimentos ▶" [ref=e21] [cursor=pointer]:
        - generic [ref=e22]: ◐
        - generic [ref=e23]: Suprimentos
        - generic [ref=e24]: ▶
    - generic [ref=e25]:
      - generic [ref=e27]: A
      - generic [ref=e28]:
        - paragraph [ref=e29]: AUTO-4S-20260619211150 Usuario Engenharia
        - paragraph [ref=e30]: ENGENHARIA
      - button "⏻" [ref=e31] [cursor=pointer]
  - main [ref=e32]:
    - generic [ref=e34]: ENGENHARIA
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Obras e Centros" [level=1] [ref=e38]
        - generic [ref=e39]:
          - button "+ Unidade" [ref=e40] [cursor=pointer]
          - button "+ Centro de Custo" [ref=e41] [cursor=pointer]
          - button "+ Obra" [ref=e42] [cursor=pointer]
      - generic [ref=e43]:
        - button "Obras" [ref=e44] [cursor=pointer]
        - button "Unidades" [ref=e45] [cursor=pointer]
        - button "Centros" [ref=e46] [cursor=pointer]
      - table [ref=e48]:
        - rowgroup [ref=e49]:
          - row "Código Nome Cidade/UF Início Prev. Gerente Status" [ref=e50]:
            - columnheader "Código" [ref=e51]
            - columnheader "Nome" [ref=e52]
            - columnheader "Cidade/UF" [ref=e53]
            - columnheader "Início Prev." [ref=e54]
            - columnheader "Gerente" [ref=e55]
            - columnheader "Status" [ref=e56]
            - columnheader [ref=e57]
        - rowgroup [ref=e58]:
          - row "4S-305694-2026 AUTO-4S-COT-OC-LOCAL-20260619170828 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e59]:
            - cell "4S-305694-2026" [ref=e60]
            - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Obra" [ref=e61]
            - cell "Sao Paulo/SP" [ref=e62]
            - cell "2026-06-19" [ref=e63]
            - cell "QA" [ref=e64]
            - cell "EM ANDAMENTO" [ref=e65]
            - cell "Editar Excluir" [ref=e66]:
              - generic [ref=e67]:
                - button "Editar" [ref=e68] [cursor=pointer]
                - button "Excluir" [ref=e69] [cursor=pointer]
          - row "4S-844496-2026 AUTO-4S-REG-CT012-20260619-CT004CHECK Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e70]:
            - cell "4S-844496-2026" [ref=e71]
            - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Obra" [ref=e72]
            - cell "Sao Paulo/SP" [ref=e73]
            - cell "2026-06-19" [ref=e74]
            - cell "QA" [ref=e75]
            - cell "EM ANDAMENTO" [ref=e76]
            - cell "Editar Excluir" [ref=e77]:
              - generic [ref=e78]:
                - button "Editar" [ref=e79] [cursor=pointer]
                - button "Excluir" [ref=e80] [cursor=pointer]
          - row "4S-719191-2026 AUTO-4S-20260619175525 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e81]:
            - cell "4S-719191-2026" [ref=e82]
            - cell "AUTO-4S-20260619175525 Obra" [ref=e83]
            - cell "Sao Paulo/SP" [ref=e84]
            - cell "2026-06-19" [ref=e85]
            - cell "QA" [ref=e86]
            - cell "EM ANDAMENTO" [ref=e87]
            - cell "Editar Excluir" [ref=e88]:
              - generic [ref=e89]:
                - button "Editar" [ref=e90] [cursor=pointer]
                - button "Excluir" [ref=e91] [cursor=pointer]
          - row "4S-628246-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e92]:
            - cell "4S-628246-2026" [ref=e93]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e94]
            - cell "Sao Paulo/SP" [ref=e95]
            - cell "2026-06-19" [ref=e96]
            - cell "QA" [ref=e97]
            - cell "EM ANDAMENTO" [ref=e98]
            - cell "Editar Excluir" [ref=e99]:
              - generic [ref=e100]:
                - button "Editar" [ref=e101] [cursor=pointer]
                - button "Excluir" [ref=e102] [cursor=pointer]
          - row "4S-504790-2026 AUTO-4S-PROD-CT012-SALDO-20260619-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e103]:
            - cell "4S-504790-2026" [ref=e104]
            - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Obra" [ref=e105]
            - cell "Sao Paulo/SP" [ref=e106]
            - cell "2026-06-19" [ref=e107]
            - cell "QA" [ref=e108]
            - cell "EM ANDAMENTO" [ref=e109]
            - cell "Editar Excluir" [ref=e110]:
              - generic [ref=e111]:
                - button "Editar" [ref=e112] [cursor=pointer]
                - button "Excluir" [ref=e113] [cursor=pointer]
          - row "4S-439568-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e114]:
            - cell "4S-439568-2026" [ref=e115]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e116]
            - cell "Sao Paulo/SP" [ref=e117]
            - cell "2026-06-19" [ref=e118]
            - cell "QA" [ref=e119]
            - cell "EM ANDAMENTO" [ref=e120]
            - cell "Editar Excluir" [ref=e121]:
              - generic [ref=e122]:
                - button "Editar" [ref=e123] [cursor=pointer]
                - button "Excluir" [ref=e124] [cursor=pointer]
          - row "4S-326678-2026 AUTO-4S-CT004-008-LOCAL-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e125]:
            - cell "4S-326678-2026" [ref=e126]
            - cell "AUTO-4S-CT004-008-LOCAL-20260619-01 Obra" [ref=e127]
            - cell "Sao Paulo/SP" [ref=e128]
            - cell "2026-06-19" [ref=e129]
            - cell "QA" [ref=e130]
            - cell "EM ANDAMENTO" [ref=e131]
            - cell "Editar Excluir" [ref=e132]:
              - generic [ref=e133]:
                - button "Editar" [ref=e134] [cursor=pointer]
                - button "Excluir" [ref=e135] [cursor=pointer]
          - row "4S-619188-2026 AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e136]:
            - cell "4S-619188-2026" [ref=e137]
            - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Obra" [ref=e138]
            - cell "Sao Paulo/SP" [ref=e139]
            - cell "2026-06-19" [ref=e140]
            - cell "QA" [ref=e141]
            - cell "EM ANDAMENTO" [ref=e142]
            - cell "Editar Excluir" [ref=e143]:
              - generic [ref=e144]:
                - button "Editar" [ref=e145] [cursor=pointer]
                - button "Excluir" [ref=e146] [cursor=pointer]
          - row "4S-818803-2026 AUTO-4S-20260619175640 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e147]:
            - cell "4S-818803-2026" [ref=e148]
            - cell "AUTO-4S-20260619175640 Obra" [ref=e149]
            - cell "Sao Paulo/SP" [ref=e150]
            - cell "2026-06-19" [ref=e151]
            - cell "QA" [ref=e152]
            - cell "EM ANDAMENTO" [ref=e153]
            - cell "Editar Excluir" [ref=e154]:
              - generic [ref=e155]:
                - button "Editar" [ref=e156] [cursor=pointer]
                - button "Excluir" [ref=e157] [cursor=pointer]
          - row "4S-780150-2026 AUTO-4S-PROD-CT012-019-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e158]:
            - cell "4S-780150-2026" [ref=e159]
            - cell "AUTO-4S-PROD-CT012-019-20260619-01 Obra" [ref=e160]
            - cell "Sao Paulo/SP" [ref=e161]
            - cell "2026-06-19" [ref=e162]
            - cell "QA" [ref=e163]
            - cell "EM ANDAMENTO" [ref=e164]
            - cell "Editar Excluir" [ref=e165]:
              - generic [ref=e166]:
                - button "Editar" [ref=e167] [cursor=pointer]
                - button "Excluir" [ref=e168] [cursor=pointer]
          - row "4S-133189-2026 AUTO-4S-PROD-CT004-008-20260619-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e169]:
            - cell "4S-133189-2026" [ref=e170]
            - cell "AUTO-4S-PROD-CT004-008-20260619-01 Obra" [ref=e171]
            - cell "Sao Paulo/SP" [ref=e172]
            - cell "2026-06-19" [ref=e173]
            - cell "QA" [ref=e174]
            - cell "EM ANDAMENTO" [ref=e175]
            - cell "Editar Excluir" [ref=e176]:
              - generic [ref=e177]:
                - button "Editar" [ref=e178] [cursor=pointer]
                - button "Excluir" [ref=e179] [cursor=pointer]
          - row "4S-637554-2026 AUTO-4S-REG-CT004-08 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e180]:
            - cell "4S-637554-2026" [ref=e181]
            - cell "AUTO-4S-REG-CT004-08 Obra" [ref=e182]
            - cell "Sao Paulo/SP" [ref=e183]
            - cell "2026-06-19" [ref=e184]
            - cell "QA" [ref=e185]
            - cell "EM ANDAMENTO" [ref=e186]
            - cell "Editar Excluir" [ref=e187]:
              - generic [ref=e188]:
                - button "Editar" [ref=e189] [cursor=pointer]
                - button "Excluir" [ref=e190] [cursor=pointer]
          - row "4S-488458-2026 AUTO-4S-FLOW-LOCAL-05 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e191]:
            - cell "4S-488458-2026" [ref=e192]
            - cell "AUTO-4S-FLOW-LOCAL-05 Obra" [ref=e193]
            - cell "Sao Paulo/SP" [ref=e194]
            - cell "2026-06-19" [ref=e195]
            - cell "QA" [ref=e196]
            - cell "EM ANDAMENTO" [ref=e197]
            - cell "Editar Excluir" [ref=e198]:
              - generic [ref=e199]:
                - button "Editar" [ref=e200] [cursor=pointer]
                - button "Excluir" [ref=e201] [cursor=pointer]
          - row "4S-587454-2026 AUTO-4S-FLOW-LOCAL-04 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e202]:
            - cell "4S-587454-2026" [ref=e203]
            - cell "AUTO-4S-FLOW-LOCAL-04 Obra" [ref=e204]
            - cell "Sao Paulo/SP" [ref=e205]
            - cell "2026-06-19" [ref=e206]
            - cell "QA" [ref=e207]
            - cell "EM ANDAMENTO" [ref=e208]
            - cell "Editar Excluir" [ref=e209]:
              - generic [ref=e210]:
                - button "Editar" [ref=e211] [cursor=pointer]
                - button "Excluir" [ref=e212] [cursor=pointer]
          - row "4S-404119-2026 AUTO-4S-FLOW-LOCAL-03 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e213]:
            - cell "4S-404119-2026" [ref=e214]
            - cell "AUTO-4S-FLOW-LOCAL-03 Obra" [ref=e215]
            - cell "Sao Paulo/SP" [ref=e216]
            - cell "2026-06-19" [ref=e217]
            - cell "QA" [ref=e218]
            - cell "EM ANDAMENTO" [ref=e219]
            - cell "Editar Excluir" [ref=e220]:
              - generic [ref=e221]:
                - button "Editar" [ref=e222] [cursor=pointer]
                - button "Excluir" [ref=e223] [cursor=pointer]
          - row "4S-816332-2026 AUTO-4S-FLOW-LOCAL-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e224]:
            - cell "4S-816332-2026" [ref=e225]
            - cell "AUTO-4S-FLOW-LOCAL-02 Obra" [ref=e226]
            - cell "Sao Paulo/SP" [ref=e227]
            - cell "2026-06-19" [ref=e228]
            - cell "QA" [ref=e229]
            - cell "EM ANDAMENTO" [ref=e230]
            - cell "Editar Excluir" [ref=e231]:
              - generic [ref=e232]:
                - button "Editar" [ref=e233] [cursor=pointer]
                - button "Excluir" [ref=e234] [cursor=pointer]
          - row "4S-375404-2026 AUTO-4S-FLOW-LOCAL-01 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e235]:
            - cell "4S-375404-2026" [ref=e236]
            - cell "AUTO-4S-FLOW-LOCAL-01 Obra" [ref=e237]
            - cell "Sao Paulo/SP" [ref=e238]
            - cell "2026-06-19" [ref=e239]
            - cell "QA" [ref=e240]
            - cell "EM ANDAMENTO" [ref=e241]
            - cell "Editar Excluir" [ref=e242]:
              - generic [ref=e243]:
                - button "Editar" [ref=e244] [cursor=pointer]
                - button "Excluir" [ref=e245] [cursor=pointer]
          - row "4S-945148-2026 AUTO-4S-VERIFY-20260619-02 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e246]:
            - cell "4S-945148-2026" [ref=e247]
            - cell "AUTO-4S-VERIFY-20260619-02 Obra" [ref=e248]
            - cell "Sao Paulo/SP" [ref=e249]
            - cell "2026-06-19" [ref=e250]
            - cell "QA" [ref=e251]
            - cell "EM ANDAMENTO" [ref=e252]
            - cell "Editar Excluir" [ref=e253]:
              - generic [ref=e254]:
                - button "Editar" [ref=e255] [cursor=pointer]
                - button "Excluir" [ref=e256] [cursor=pointer]
          - row "4S-422718-2026 AUTO-4S-1781886239507 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e257]:
            - cell "4S-422718-2026" [ref=e258]
            - cell "AUTO-4S-1781886239507 Obra" [ref=e259]
            - cell "Sao Paulo/SP" [ref=e260]
            - cell "2026-06-19" [ref=e261]
            - cell "QA" [ref=e262]
            - cell "EM ANDAMENTO" [ref=e263]
            - cell "Editar Excluir" [ref=e264]:
              - generic [ref=e265]:
                - button "Editar" [ref=e266] [cursor=pointer]
                - button "Excluir" [ref=e267] [cursor=pointer]
          - row "4S-199557-2026 AUTO-4S-1781886161086 Obra Sao Paulo/SP 2026-06-19 QA EM ANDAMENTO Editar Excluir" [ref=e268]:
            - cell "4S-199557-2026" [ref=e269]
            - cell "AUTO-4S-1781886161086 Obra" [ref=e270]
            - cell "Sao Paulo/SP" [ref=e271]
            - cell "2026-06-19" [ref=e272]
            - cell "QA" [ref=e273]
            - cell "EM ANDAMENTO" [ref=e274]
            - cell "Editar Excluir" [ref=e275]:
              - generic [ref=e276]:
                - button "Editar" [ref=e277] [cursor=pointer]
                - button "Excluir" [ref=e278] [cursor=pointer]
          - row "4S-562180-2026 AUTO-4S-1781787507433 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e279]:
            - cell "4S-562180-2026" [ref=e280]
            - cell "AUTO-4S-1781787507433 Obra" [ref=e281]
            - cell "Sao Paulo/SP" [ref=e282]
            - cell [ref=e283]
            - cell "QA" [ref=e284]
            - cell "EM ANDAMENTO" [ref=e285]
            - cell "Editar Excluir" [ref=e286]:
              - generic [ref=e287]:
                - button "Editar" [ref=e288] [cursor=pointer]
                - button "Excluir" [ref=e289] [cursor=pointer]
          - row "4S-892389-2026 AUTO-4S-1781787088837 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e290]:
            - cell "4S-892389-2026" [ref=e291]
            - cell "AUTO-4S-1781787088837 Obra" [ref=e292]
            - cell "Sao Paulo/SP" [ref=e293]
            - cell [ref=e294]
            - cell "QA" [ref=e295]
            - cell "EM ANDAMENTO" [ref=e296]
            - cell "Editar Excluir" [ref=e297]:
              - generic [ref=e298]:
                - button "Editar" [ref=e299] [cursor=pointer]
                - button "Excluir" [ref=e300] [cursor=pointer]
          - row "4S-715839-2026 AUTO-4S-1781787027511 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e301]:
            - cell "4S-715839-2026" [ref=e302]
            - cell "AUTO-4S-1781787027511 Obra" [ref=e303]
            - cell "Sao Paulo/SP" [ref=e304]
            - cell [ref=e305]
            - cell "QA" [ref=e306]
            - cell "EM ANDAMENTO" [ref=e307]
            - cell "Editar Excluir" [ref=e308]:
              - generic [ref=e309]:
                - button "Editar" [ref=e310] [cursor=pointer]
                - button "Excluir" [ref=e311] [cursor=pointer]
          - row "4S-221926-2026 AUTO-4S-1781786933497 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e312]:
            - cell "4S-221926-2026" [ref=e313]
            - cell "AUTO-4S-1781786933497 Obra" [ref=e314]
            - cell "Sao Paulo/SP" [ref=e315]
            - cell [ref=e316]
            - cell "QA" [ref=e317]
            - cell "EM ANDAMENTO" [ref=e318]
            - cell "Editar Excluir" [ref=e319]:
              - generic [ref=e320]:
                - button "Editar" [ref=e321] [cursor=pointer]
                - button "Excluir" [ref=e322] [cursor=pointer]
          - row "4S-525307-2026 AUTO-4S-1781786851917 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e323]:
            - cell "4S-525307-2026" [ref=e324]
            - cell "AUTO-4S-1781786851917 Obra" [ref=e325]
            - cell "Sao Paulo/SP" [ref=e326]
            - cell [ref=e327]
            - cell "QA" [ref=e328]
            - cell "EM ANDAMENTO" [ref=e329]
            - cell "Editar Excluir" [ref=e330]:
              - generic [ref=e331]:
                - button "Editar" [ref=e332] [cursor=pointer]
                - button "Excluir" [ref=e333] [cursor=pointer]
          - row "4S-237596-2026 AUTO-4S-1781786769827 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e334]:
            - cell "4S-237596-2026" [ref=e335]
            - cell "AUTO-4S-1781786769827 Obra" [ref=e336]
            - cell "Sao Paulo/SP" [ref=e337]
            - cell [ref=e338]
            - cell "QA" [ref=e339]
            - cell "EM ANDAMENTO" [ref=e340]
            - cell "Editar Excluir" [ref=e341]:
              - generic [ref=e342]:
                - button "Editar" [ref=e343] [cursor=pointer]
                - button "Excluir" [ref=e344] [cursor=pointer]
          - row "4S-310435-2026 AUTO-4S-1781786694588 Obra Sao Paulo/SP QA EM ANDAMENTO Editar Excluir" [ref=e345]:
            - cell "4S-310435-2026" [ref=e346]
            - cell "AUTO-4S-1781786694588 Obra" [ref=e347]
            - cell "Sao Paulo/SP" [ref=e348]
            - cell [ref=e349]
            - cell "QA" [ref=e350]
            - cell "EM ANDAMENTO" [ref=e351]
            - cell "Editar Excluir" [ref=e352]:
              - generic [ref=e353]:
                - button "Editar" [ref=e354] [cursor=pointer]
                - button "Excluir" [ref=e355] [cursor=pointer]
          - row "4S-929174-2026 PW CT009 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e356]:
            - cell "4S-929174-2026" [ref=e357]
            - cell "PW CT009 20260617184225 Obra" [ref=e358]
            - cell "Sao Paulo/" [ref=e359]
            - cell [ref=e360]
            - cell "Playwright" [ref=e361]
            - cell "EM ANDAMENTO" [ref=e362]
            - cell "Editar Excluir" [ref=e363]:
              - generic [ref=e364]:
                - button "Editar" [ref=e365] [cursor=pointer]
                - button "Excluir" [ref=e366] [cursor=pointer]
          - row "4S-286261-2026 PW CT012 20260617184225 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e367]:
            - cell "4S-286261-2026" [ref=e368]
            - cell "PW CT012 20260617184225 Obra" [ref=e369]
            - cell "Sao Paulo/" [ref=e370]
            - cell [ref=e371]
            - cell "Playwright" [ref=e372]
            - cell "EM ANDAMENTO" [ref=e373]
            - cell "Editar Excluir" [ref=e374]:
              - generic [ref=e375]:
                - button "Editar" [ref=e376] [cursor=pointer]
                - button "Excluir" [ref=e377] [cursor=pointer]
          - row "4S-580879-2026 PW CT012 20260617184145 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e378]:
            - cell "4S-580879-2026" [ref=e379]
            - cell "PW CT012 20260617184145 Obra" [ref=e380]
            - cell "Sao Paulo/" [ref=e381]
            - cell [ref=e382]
            - cell "Playwright" [ref=e383]
            - cell "EM ANDAMENTO" [ref=e384]
            - cell "Editar Excluir" [ref=e385]:
              - generic [ref=e386]:
                - button "Editar" [ref=e387] [cursor=pointer]
                - button "Excluir" [ref=e388] [cursor=pointer]
          - row "4S-596769-2026 PW CT009 20260617183934 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e389]:
            - cell "4S-596769-2026" [ref=e390]
            - cell "PW CT009 20260617183934 Obra" [ref=e391]
            - cell "Sao Paulo/" [ref=e392]
            - cell [ref=e393]
            - cell "Playwright" [ref=e394]
            - cell "EM ANDAMENTO" [ref=e395]
            - cell "Editar Excluir" [ref=e396]:
              - generic [ref=e397]:
                - button "Editar" [ref=e398] [cursor=pointer]
                - button "Excluir" [ref=e399] [cursor=pointer]
          - row "4S-198804-2026 PW CT012 20260617183903 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e400]:
            - cell "4S-198804-2026" [ref=e401]
            - cell "PW CT012 20260617183903 Obra" [ref=e402]
            - cell "Sao Paulo/" [ref=e403]
            - cell [ref=e404]
            - cell "Playwright" [ref=e405]
            - cell "EM ANDAMENTO" [ref=e406]
            - cell "Editar Excluir" [ref=e407]:
              - generic [ref=e408]:
                - button "Editar" [ref=e409] [cursor=pointer]
                - button "Excluir" [ref=e410] [cursor=pointer]
          - row "4S-566187-2026 PW CT009 20260617183009 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e411]:
            - cell "4S-566187-2026" [ref=e412]
            - cell "PW CT009 20260617183009 Obra" [ref=e413]
            - cell "Sao Paulo/" [ref=e414]
            - cell [ref=e415]
            - cell "Playwright" [ref=e416]
            - cell "EM ANDAMENTO" [ref=e417]
            - cell "Editar Excluir" [ref=e418]:
              - generic [ref=e419]:
                - button "Editar" [ref=e420] [cursor=pointer]
                - button "Excluir" [ref=e421] [cursor=pointer]
          - row "4S-896044-2026 PW CT012 20260617182923 Obra Sao Paulo/ Playwright EM ANDAMENTO Editar Excluir" [ref=e422]:
            - cell "4S-896044-2026" [ref=e423]
            - cell "PW CT012 20260617182923 Obra" [ref=e424]
            - cell "Sao Paulo/" [ref=e425]
            - cell [ref=e426]
            - cell "Playwright" [ref=e427]
            - cell "EM ANDAMENTO" [ref=e428]
            - cell "Editar Excluir" [ref=e429]:
              - generic [ref=e430]:
                - button "Editar" [ref=e431] [cursor=pointer]
                - button "Excluir" [ref=e432] [cursor=pointer]
          - row "4S-629466-2026 R3 /RJ EM ANDAMENTO Editar Excluir" [ref=e433]:
            - cell "4S-629466-2026" [ref=e434]
            - cell "R3" [ref=e435]
            - cell "/RJ" [ref=e436]
            - cell [ref=e437]
            - cell [ref=e438]
            - cell "EM ANDAMENTO" [ref=e439]
            - cell "Editar Excluir" [ref=e440]:
              - generic [ref=e441]:
                - button "Editar" [ref=e442] [cursor=pointer]
                - button "Excluir" [ref=e443] [cursor=pointer]
          - row "4S-587288-2026 VIA MOBILIDADE - TROCA DE PISOS SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e444]:
            - cell "4S-587288-2026" [ref=e445]
            - cell "VIA MOBILIDADE - TROCA DE PISOS" [ref=e446]
            - cell "SÃO PAULO/SP" [ref=e447]
            - cell "2025-01-01" [ref=e448]
            - cell "GERENTE 01" [ref=e449]
            - cell "EM ANDAMENTO" [ref=e450]
            - cell "Editar Excluir" [ref=e451]:
              - generic [ref=e452]:
                - button "Editar" [ref=e453] [cursor=pointer]
                - button "Excluir" [ref=e454] [cursor=pointer]
          - row "4S-901172-2026 4S-OBR-053-CAP-VMO SÃO PAULO/SP 2025-01-01 GERENTE 01 EM ANDAMENTO Editar Excluir" [ref=e455]:
            - cell "4S-901172-2026" [ref=e456]
            - cell "4S-OBR-053-CAP-VMO" [ref=e457]
            - cell "SÃO PAULO/SP" [ref=e458]
            - cell "2025-01-01" [ref=e459]
            - cell "GERENTE 01" [ref=e460]
            - cell "EM ANDAMENTO" [ref=e461]
            - cell "Editar Excluir" [ref=e462]:
              - generic [ref=e463]:
                - button "Editar" [ref=e464] [cursor=pointer]
                - button "Excluir" [ref=e465] [cursor=pointer]
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
> 48  |   if (!target) throw new Error(`Could not find clickable control: ${names.join(' | ')}`);
      |                      ^ Error: Could not find clickable control: Workflow
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
  86  |   if (!target) throw new Error(`Could not find field: ${labels.join(' | ')}`);
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
```