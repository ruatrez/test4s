# Relatorio de Diagnostico 4S

Gerado em: 2026-07-07T17:56:39.690Z

## Sumario

Casos Playwright: 1. Falhas: 1. Aprovados: 0.

Status CT001-CT022: aprovado 0, reprovado 1, bloqueado 21, nao aplicavel 0.

Problemas registrados: 1.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | bloqueado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT002 | bloqueado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT003 | bloqueado | media | Atalhos da tela Cadastros |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT004 | bloqueado | alta | Cliente e contrato com edicao, persistencia e vinculo |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT005 | bloqueado | alta | Unidade, obra e centro de custo | CT004 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT006 | bloqueado | media | Fornecedores |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT007 | bloqueado | media | Categorias orcamentarias |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT008 | bloqueado | critica | Item orcado com previsto, saldo, comprometido e pago | CT004, CT005, CT007 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT009 | bloqueado | critica | Alteracao de orcamento protegida por usuario comum | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT010 | bloqueado | critica | Exclusao de item orcado por usuario comum e administrador | CT002, CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT011 | bloqueado | media | Colaborador, cargo/faixa e alocacao quando a UI permitir | CT005 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT012 | bloqueado | critica | Requisicao dentro do saldo e acima do saldo | CT008 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT013 | bloqueado | alta | Aprovacao e rejeicao de requisicao | CT012 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT014 | bloqueado | alta | Cotacao com 3 fornecedores, comparativo e vencedor | CT006, CT013 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT015 | reprovado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Could not find available option for: Cotacao concluida \| Cotação concluída | /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT020 | bloqueado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT021 | bloqueado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT022 | bloqueado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT015-ORDEM-COMPRA | critica | CT015 | https://4s.ruatrez.com/ordens-compra | administrador | AUTO-4S-20260707143527 | Executar o caso automatizado "CT015" e observar o resultado registrado. | OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto. | Could not find available option for: Cotacao concluida \| Cotação concluída | Sem comprometimento do orcamento nao ha controle real de compras. | /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png | Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido. | reprovado |

## Detalhes Dos Desvios

### CT015-ORDEM-COMPRA - critica

- Caso: CT015
- Localizacao: https://4s.ruatrez.com/ordens-compra
- Perfil: administrador
- Massa: AUTO-4S-20260707143527
- Passos para reproduzir: Executar o caso automatizado "CT015" e observar o resultado registrado.
- Esperado: OC deve nascer da cotacao, comprometer orcamento e gerar conta a pagar no ponto previsto.
- Obtido: Could not find available option for: Cotacao concluida | Cotação concluída
- Impacto funcional e negocio: Sem comprometimento do orcamento nao ha controle real de compras.
- Recomendacao: Corrigir geracao da OC, vinculos e atualizacao atomica do valor comprometido.
- Status: reprovado
- Evidencia: /home/colatto/repo/R3/test4s/test-results/CT015-ORDEM-COMPRA.png

