# Relatorio de Diagnostico 4S

Gerado em: 2026-07-03T18:07:54.100Z

## Sumario

Casos Playwright: 3. Falhas: 0. Aprovados: 3.

Status CT001-CT022: aprovado 3, reprovado 0, bloqueado 19, nao aplicavel 0.

Problemas registrados: 0.

## Matriz CT001-CT022

| CT | Status | Severidade | Titulo | Dependencias | Obtido | Evidencia | Recomendacao |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CT001 | bloqueado | critica | Login valido, logout, login invalido e sessao expirada quando observavel |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT002 | aprovado | alta | Criacao, edicao, inativacao e login bloqueado de usuario inativo |  | Comportamento observado conforme esperado. |  | Revisar matriz de perfis, status de usuario e validacao de login no backend. |
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
| CT015 | bloqueado | critica | Ordem de compra e comprometimento do orcamento | CT014 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT016 | bloqueado | media | Edicao/exclusao/cancelamento de requisicao, cotacao e OC quando permitido | CT012, CT014, CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT017 | bloqueado | critica | Contas a pagar, status e filtros | CT015 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT018 | bloqueado | critica | Pagamento parcial, final e tentativa acima do saldo | CT017 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT019 | bloqueado | alta | Dashboard financeiro apos compra/pagamento/mao de obra | CT011, CT018 | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |
| CT020 | aprovado | alta | Workflow com perfil correto/incorreto, aprovacao e rejeicao | CT002 | Comportamento observado conforme esperado. |  | Aplicar autorizacao no backend e esconder/desabilitar acoes no frontend para perfis sem permissao. |
| CT021 | aprovado | media | Auditoria de criacao, edicao, exclusao/cancelamento e decisoes | CT020 | Comportamento observado conforme esperado. |  | Garantir eventos de auditoria para entidades financeiras, cadastros e workflow. |
| CT022 | bloqueado | alta | Rotas principais sem tela em branco, erros JS criticos ou HTTP 5xx |  | Caso nao executado ou sem registro no diagnostics.jsonl. |  | Executar a suite completa e confirmar se houve interrupcao antes deste CT. |

## Problemas Priorizados

| ID | Severidade | Caso | Caminho | Perfil | Massa | Passos | Esperado | Obtido | Impacto funcional e negocio | Evidencia | Recomendacao | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | - | - | - | Nenhum problema registrado pelos hooks de diagnostico. | - | - | - | aprovado |

## Detalhes Dos Desvios

