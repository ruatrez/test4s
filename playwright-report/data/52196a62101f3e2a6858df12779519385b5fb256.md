# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-master-data.spec.ts >> CT006 - fornecedores
- Location: tests/02-master-data.spec.ts:39:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/AUTO-4S-20260626200547 Fornecedor A/i).first()

```

```yaml
- complementary:
  - img "4S Engenharia"
  - text: Núcleo Financeiro
  - navigation:
    - button "◈ Dashboard"
    - button "⊞ Cadastros"
    - button "⊙ Configurações ▶"
    - button "Clientes e Contratos"
    - button "Obras e Centros"
    - button "Fornecedores"
    - button "Categorias Orç."
    - button "Colaboradores"
    - button "Usuários"
    - button "◑ Orçamento ▶"
    - button "◐ Suprimentos ▶"
    - button "◧ Financeiro ▶"
    - button "◫ Workflow ▶"
  - text: H
  - paragraph: Hello
  - paragraph: ADMINISTRADOR
  - button "⏻"
- main:
  - button "⚠ 1 aprovação pendente"
  - text: ADMINISTRADOR
  - heading "Fornecedores" [level=1]
  - paragraph: 87 fornecedores cadastrados
  - button "+ Novo Fornecedor"
  - textbox "Buscar por nome ou CNPJ..."
  - table:
    - rowgroup:
      - row "Razão Social Nome Fantasia CNPJ/CPF Contato Status Cadastrado Ações":
        - columnheader "Razão Social"
        - columnheader "Nome Fantasia"
        - columnheader "CNPJ/CPF"
        - columnheader "Contato"
        - columnheader "Status"
        - columnheader "Cadastrado"
        - columnheader "Ações"
    - rowgroup:
      - row "AUTO-4S-20260623211007 Fornecedor C AUTO-4S-20260623211007 Fornecedor C 606232110072 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623211007 Fornecedor C"
        - cell "AUTO-4S-20260623211007 Fornecedor C"
        - cell "606232110072"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623211007 Fornecedor A AUTO-4S-20260623211007 Fornecedor A 606232110070 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623211007 Fornecedor A"
        - cell "AUTO-4S-20260623211007 Fornecedor A"
        - cell "606232110070"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623211007 Fornecedor B AUTO-4S-20260623211007 Fornecedor B 606232110071 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623211007 Fornecedor B"
        - cell "AUTO-4S-20260623211007 Fornecedor B"
        - cell "606232110071"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623210332 Fornecedor C AUTO-4S-20260623210332 Fornecedor C 606232103322 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623210332 Fornecedor C"
        - cell "AUTO-4S-20260623210332 Fornecedor C"
        - cell "606232103322"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623210332 Fornecedor A AUTO-4S-20260623210332 Fornecedor A 606232103320 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623210332 Fornecedor A"
        - cell "AUTO-4S-20260623210332 Fornecedor A"
        - cell "606232103320"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623210332 Fornecedor B AUTO-4S-20260623210332 Fornecedor B 606232103321 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623210332 Fornecedor B"
        - cell "AUTO-4S-20260623210332 Fornecedor B"
        - cell "606232103321"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623204321 Fornecedor A AUTO-4S-20260623204321 Fornecedor A 606232043210 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623204321 Fornecedor A"
        - cell "AUTO-4S-20260623204321 Fornecedor A"
        - cell "606232043210"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623204321 Fornecedor C AUTO-4S-20260623204321 Fornecedor C 606232043212 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623204321 Fornecedor C"
        - cell "AUTO-4S-20260623204321 Fornecedor C"
        - cell "606232043212"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623204321 Fornecedor B AUTO-4S-20260623204321 Fornecedor B 606232043211 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623204321 Fornecedor B"
        - cell "AUTO-4S-20260623204321 Fornecedor B"
        - cell "606232043211"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623202501 Fornecedor A AUTO-4S-20260623202501 Fornecedor A 606232025010 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623202501 Fornecedor A"
        - cell "AUTO-4S-20260623202501 Fornecedor A"
        - cell "606232025010"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623202501 Fornecedor C AUTO-4S-20260623202501 Fornecedor C 606232025012 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623202501 Fornecedor C"
        - cell "AUTO-4S-20260623202501 Fornecedor C"
        - cell "606232025012"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623202501 Fornecedor B AUTO-4S-20260623202501 Fornecedor B 606232025011 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623202501 Fornecedor B"
        - cell "AUTO-4S-20260623202501 Fornecedor B"
        - cell "606232025011"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623200254 Fornecedor C AUTO-4S-20260623200254 Fornecedor C 606232002542 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623200254 Fornecedor C"
        - cell "AUTO-4S-20260623200254 Fornecedor C"
        - cell "606232002542"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623200254 Fornecedor B AUTO-4S-20260623200254 Fornecedor B 606232002541 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623200254 Fornecedor B"
        - cell "AUTO-4S-20260623200254 Fornecedor B"
        - cell "606232002541"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260623200254 Fornecedor A AUTO-4S-20260623200254 Fornecedor A 606232002540 QA Automatizado ATIVO 23/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260623200254 Fornecedor A"
        - cell "AUTO-4S-20260623200254 Fornecedor A"
        - cell "606232002540"
        - cell "QA Automatizado"
        - cell "ATIVO"
        - cell "23/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782129165886 Fornecedor AUTO-4S-1782129165886 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782129165886 Fornecedor"
        - cell "AUTO-4S-1782129165886 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127946610 Fornecedor AUTO-4S-1782127946610 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127946610 Fornecedor"
        - cell "AUTO-4S-1782127946610 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127823803 Fornecedor AUTO-4S-1782127823803 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127823803 Fornecedor"
        - cell "AUTO-4S-1782127823803 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127653460 Fornecedor AUTO-4S-1782127653460 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127653460 Fornecedor"
        - cell "AUTO-4S-1782127653460 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127524231 Fornecedor AUTO-4S-1782127524231 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127524231 Fornecedor"
        - cell "AUTO-4S-1782127524231 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127428456 Fornecedor AUTO-4S-1782127428456 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127428456 Fornecedor"
        - cell "AUTO-4S-1782127428456 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-1782127051410 Fornecedor AUTO-4S-1782127051410 NF 22.222.222/0001-22 QA ATIVO 22/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-1782127051410 Fornecedor"
        - cell "AUTO-4S-1782127051410 NF"
        - cell "22.222.222/0001-22"
        - cell "QA"
        - cell "ATIVO"
        - cell "22/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 3 AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 3"
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 1 AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 1"
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 2 AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Fornecedor 2"
        - cell "AUTO-4S-COT-OC-LOCAL-20260619170828 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 3 AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 3"
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 2 AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 2"
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 1 AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Fornecedor 1"
        - cell "AUTO-4S-REG-CT012-20260619-CT004CHECK Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 3 AUTO-4S-20260619175640 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 3"
        - cell "AUTO-4S-20260619175640 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 1 AUTO-4S-20260619175640 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 1"
        - cell "AUTO-4S-20260619175640 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 2 AUTO-4S-20260619175640 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 2"
        - cell "AUTO-4S-20260619175640 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 1 AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 1"
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 2 AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 2"
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 3 AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Fornecedor 3"
        - cell "AUTO-4S-PROD-CT012-SALDO-20260619-02 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 3 AUTO-4S-20260619175640 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 3"
        - cell "AUTO-4S-20260619175640 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 1 AUTO-4S-20260619175640 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 1"
        - cell "AUTO-4S-20260619175640 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 2 AUTO-4S-20260619175640 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 2"
        - cell "AUTO-4S-20260619175640 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 3 AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 3"
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 2 AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 2"
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 1 AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Fornecedor 1"
        - cell "AUTO-4S-CT012-SALDO-LOCAL-20260619-01 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 1 AUTO-4S-20260619175640 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 1"
        - cell "AUTO-4S-20260619175640 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 3 AUTO-4S-20260619175640 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 3"
        - cell "AUTO-4S-20260619175640 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-20260619175640 Fornecedor 2 AUTO-4S-20260619175640 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-20260619175640 Fornecedor 2"
        - cell "AUTO-4S-20260619175640 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 1 AUTO-4S-PROD-CT012-019-20260619-01 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 1"
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 3 AUTO-4S-PROD-CT012-019-20260619-01 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 3"
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 2 AUTO-4S-PROD-CT012-019-20260619-01 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Fornecedor 2"
        - cell "AUTO-4S-PROD-CT012-019-20260619-01 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-05 Fornecedor 1 AUTO-4S-FLOW-LOCAL-05 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-05 Fornecedor 1"
        - cell "AUTO-4S-FLOW-LOCAL-05 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-05 Fornecedor 2 AUTO-4S-FLOW-LOCAL-05 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-05 Fornecedor 2"
        - cell "AUTO-4S-FLOW-LOCAL-05 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-05 Fornecedor 3 AUTO-4S-FLOW-LOCAL-05 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-05 Fornecedor 3"
        - cell "AUTO-4S-FLOW-LOCAL-05 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-04 Fornecedor 2 AUTO-4S-FLOW-LOCAL-04 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-04 Fornecedor 2"
        - cell "AUTO-4S-FLOW-LOCAL-04 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-04 Fornecedor 1 AUTO-4S-FLOW-LOCAL-04 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-04 Fornecedor 1"
        - cell "AUTO-4S-FLOW-LOCAL-04 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-04 Fornecedor 3 AUTO-4S-FLOW-LOCAL-04 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-04 Fornecedor 3"
        - cell "AUTO-4S-FLOW-LOCAL-04 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-03 Fornecedor 1 AUTO-4S-FLOW-LOCAL-03 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-03 Fornecedor 1"
        - cell "AUTO-4S-FLOW-LOCAL-03 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-03 Fornecedor 3 AUTO-4S-FLOW-LOCAL-03 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-03 Fornecedor 3"
        - cell "AUTO-4S-FLOW-LOCAL-03 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-03 Fornecedor 2 AUTO-4S-FLOW-LOCAL-03 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-03 Fornecedor 2"
        - cell "AUTO-4S-FLOW-LOCAL-03 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-02 Fornecedor 3 AUTO-4S-FLOW-LOCAL-02 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-02 Fornecedor 3"
        - cell "AUTO-4S-FLOW-LOCAL-02 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-02 Fornecedor 1 AUTO-4S-FLOW-LOCAL-02 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-02 Fornecedor 1"
        - cell "AUTO-4S-FLOW-LOCAL-02 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-02 Fornecedor 2 AUTO-4S-FLOW-LOCAL-02 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-02 Fornecedor 2"
        - cell "AUTO-4S-FLOW-LOCAL-02 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-01 Fornecedor 1 AUTO-4S-FLOW-LOCAL-01 Forn 1 31.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-01 Fornecedor 1"
        - cell "AUTO-4S-FLOW-LOCAL-01 Forn 1"
        - cell "31.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-01 Fornecedor 3 AUTO-4S-FLOW-LOCAL-01 Forn 3 33.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-01 Fornecedor 3"
        - cell "AUTO-4S-FLOW-LOCAL-01 Forn 3"
        - cell "33.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "AUTO-4S-FLOW-LOCAL-01 Fornecedor 2 AUTO-4S-FLOW-LOCAL-01 Forn 2 32.333.333/0001-33 QA Fornecedor ATIVO 19/06/2026 Editar Inativar Excluir":
        - cell "AUTO-4S-FLOW-LOCAL-01 Fornecedor 2"
        - cell "AUTO-4S-FLOW-LOCAL-01 Forn 2"
        - cell "32.333.333/0001-33"
        - cell "QA Fornecedor"
        - cell "ATIVO"
        - cell "19/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "Teste R3 00 ATIVO 17/06/2026 Editar Inativar Excluir":
        - cell "Teste R3"
        - cell
        - cell "00"
        - cell
        - cell "ATIVO"
        - cell "17/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630773579 Fornecedor 1 HML 1781630773579 F1 17816307735791 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630773579 Fornecedor 1"
        - cell "HML 1781630773579 F1"
        - cell "17816307735791"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630633295 Fornecedor 3 HML 1781630633295 F3 17816306332953 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630633295 Fornecedor 3"
        - cell "HML 1781630633295 F3"
        - cell "17816306332953"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630633295 Fornecedor 2 HML 1781630633295 F2 17816306332952 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630633295 Fornecedor 2"
        - cell "HML 1781630633295 F2"
        - cell "17816306332952"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630633295 Fornecedor 1 HML 1781630633295 F1 17816306332951 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630633295 Fornecedor 1"
        - cell "HML 1781630633295 F1"
        - cell "17816306332951"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630595874 Fornecedor 3 HML 1781630595874 F3 17816305958743 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630595874 Fornecedor 3"
        - cell "HML 1781630595874 F3"
        - cell "17816305958743"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630595874 Fornecedor 2 HML 1781630595874 F2 17816305958742 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630595874 Fornecedor 2"
        - cell "HML 1781630595874 F2"
        - cell "17816305958742"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630595874 Fornecedor 1 HML 1781630595874 F1 17816305958741 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630595874 Fornecedor 1"
        - cell "HML 1781630595874 F1"
        - cell "17816305958741"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630556505 Fornecedor 2 HML 1781630556505 F2 17816305565052 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630556505 Fornecedor 2"
        - cell "HML 1781630556505 F2"
        - cell "17816305565052"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630556505 Fornecedor 1 HML 1781630556505 F1 17816305565051 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630556505 Fornecedor 1"
        - cell "HML 1781630556505 F1"
        - cell "17816305565051"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630434235 Fornecedor 3 HML 1781630434235 F3 17816304342353 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630434235 Fornecedor 3"
        - cell "HML 1781630434235 F3"
        - cell "17816304342353"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630434235 Fornecedor 2 HML 1781630434235 F2 17816304342352 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630434235 Fornecedor 2"
        - cell "HML 1781630434235 F2"
        - cell "17816304342352"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630434235 Fornecedor 1 HML 1781630434235 F1 17816304342351 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630434235 Fornecedor 1"
        - cell "HML 1781630434235 F1"
        - cell "17816304342351"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630370967 Fornecedor 3 HML 1781630370967 F3 17816303709673 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630370967 Fornecedor 3"
        - cell "HML 1781630370967 F3"
        - cell "17816303709673"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630370967 Fornecedor 1 HML 1781630370967 F1 17816303709671 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630370967 Fornecedor 1"
        - cell "HML 1781630370967 F1"
        - cell "17816303709671"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630328305 Fornecedor 3 HML 1781630328305 F3 17816303283053 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630328305 Fornecedor 3"
        - cell "HML 1781630328305 F3"
        - cell "17816303283053"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630328305 Fornecedor 2 HML 1781630328305 F2 17816303283052 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630328305 Fornecedor 2"
        - cell "HML 1781630328305 F2"
        - cell "17816303283052"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630328305 Fornecedor 1 HML 1781630328305 F1 17816303283051 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630328305 Fornecedor 1"
        - cell "HML 1781630328305 F1"
        - cell "17816303283051"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630075298 Fornecedor 3 HML 1781630075298 F3 17816300752983 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630075298 Fornecedor 3"
        - cell "HML 1781630075298 F3"
        - cell "17816300752983"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630075298 Fornecedor 2 HML 1781630075298 F2 17816300752982 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630075298 Fornecedor 2"
        - cell "HML 1781630075298 F2"
        - cell "17816300752982"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630075298 Fornecedor 1 HML 1781630075298 F1 17816300752981 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630075298 Fornecedor 1"
        - cell "HML 1781630075298 F1"
        - cell "17816300752981"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630029631 Fornecedor 3 HML 1781630029631 F3 17816300296313 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630029631 Fornecedor 3"
        - cell "HML 1781630029631 F3"
        - cell "17816300296313"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630029631 Fornecedor 2 HML 1781630029631 F2 17816300296312 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630029631 Fornecedor 2"
        - cell "HML 1781630029631 F2"
        - cell "17816300296312"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "HML 1781630029631 Fornecedor 1 HML 1781630029631 F1 17816300296311 QA ATIVO 16/06/2026 Editar Inativar Excluir":
        - cell "HML 1781630029631 Fornecedor 1"
        - cell "HML 1781630029631 F1"
        - cell "17816300296311"
        - cell "QA"
        - cell "ATIVO"
        - cell "16/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "TOCCO MATERIAIS PARA CONSTRUCAO LTDA TOCCO MATERIAIS PARA CONSTRUCAO LTDA 07.193.429/0001-91 CONTATO 01 ATIVO 12/06/2026 Editar Inativar Excluir":
        - cell "TOCCO MATERIAIS PARA CONSTRUCAO LTDA"
        - cell "TOCCO MATERIAIS PARA CONSTRUCAO LTDA"
        - cell "07.193.429/0001-91"
        - cell "CONTATO 01"
        - cell "ATIVO"
        - cell "12/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
      - row "MOHAWK REVESTIMENTOS COCAL DO SUL LTDA MOHAWK REVESTIMENTOS COCAL DO SUL LTDA 86.532.538/0001-62 ATIVO 12/06/2026 Editar Inativar Excluir":
        - cell "MOHAWK REVESTIMENTOS COCAL DO SUL LTDA"
        - cell "MOHAWK REVESTIMENTOS COCAL DO SUL LTDA"
        - cell "86.532.538/0001-62"
        - cell
        - cell "ATIVO"
        - cell "12/06/2026"
        - cell "Editar Inativar Excluir":
          - button "Editar"
          - button "Inativar"
          - button "Excluir"
  - heading "Novo Fornecedor" [level=2]
  - text: Razão Social *
  - textbox "Razão Social *"
  - paragraph: Razão social obrigatória
  - text: Nome Fantasia
  - textbox "Nome Fantasia": AUTO-4S-20260626200547 Fornecedor A
  - text: CNPJ/CPF *
  - textbox "CNPJ/CPF *"
  - paragraph: CNPJ/CPF obrigatório
  - text: Email
  - textbox "Email": auto.4s.20260626200547.fornecedor.a@example.test
  - text: Telefone
  - textbox "Telefone"
  - text: Contato Principal
  - textbox "Contato Principal"
  - text: Status
  - combobox:
    - option "ATIVO" [selected]
    - option "INATIVO"
    - option "BLOQUEADO"
  - button "Cancelar"
  - button "Salvar"
```

# Test source

```ts
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
> 160 |   await expect(byText(page, recordName)).toBeVisible();
      |                                          ^ Error: expect(locator).toBeVisible() failed
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