# CT022 - Validacao tecnica de rotas e entidades

## Modulo
Todas as telas principais da Fase 1

## Objetivo
Validar que as rotas principais carregam sem tela em branco, erro tecnico critico ou falhas HTTP inesperadas, e que entidades minimas da Fase 1 existem ou podem ser acessadas.

## Pre-condicoes
- CT001 aprovado.
- Usuario administrador autenticado.
- Executor com capacidade de registrar console e rede quando possivel.

## Dados de teste
Nao requer criacao de dados. Pode usar prefixo `AUTO-4S-${RUN_ID}` para validar entidades criadas por CTs anteriores.

## Rotas obrigatorias
- Dashboard
- Cadastros
- Configuracoes > Clientes e Contratos
- Configuracoes > Obras e Centros
- Configuracoes > Fornecedores
- Configuracoes > Categorias Orc.
- Configuracoes > Colaboradores
- Configuracoes > Usuarios
- Orcamento > Itens Orcados
- Suprimentos > Requisicoes
- Suprimentos > Cotacoes
- Suprimentos > Ordens de Compra
- Financeiro > Contas a Pagar
- Financeiro > Pagamentos
- Workflow > Aprovacoes
- Workflow > Auditoria

## Cenarios e passos
### Cenario 1 - Carregamento das rotas principais
1. Entrar como administrador.
2. Acessar Dashboard.
3. Confirmar conteudo visivel.
4. Acessar cada rota obrigatoria da lista.
5. Em cada rota, aguardar carregamento.
6. Confirmar que ha conteudo funcional, formulario, tabela, card ou mensagem de estado vazio.

Resultado esperado: todas as rotas principais carregam sem tela em branco.

### Cenario 2 - Validacao tecnica por tela
1. Em cada rota, observar mensagens de erro no corpo da pagina.
2. Registrar se aparecer `erro interno`, `internal server error`, `undefined is not`, `cannot read`, `not found` ou equivalente.
3. Se houver ferramenta de rede, registrar respostas HTTP 4xx/5xx inesperadas.
4. Se houver console, registrar excecoes JavaScript.

Resultado esperado: nenhuma tela deve apresentar erro tecnico critico, excecao nao tratada ou HTTP 5xx inesperado.

### Cenario 3 - Filtros e acoes basicas
1. Nas telas com filtros, acionar `Filtrar`, `Aplicar`, `Buscar` ou `Pesquisar`.
2. Limpar filtros se existir controle.
3. Confirmar que a tela permanece funcional.

Resultado esperado: filtros nao quebram a renderizacao nem geram erro tecnico.

### Cenario 4 - Entidades minimas da Fase 1
1. Confirmar que existem telas ou controles para cliente, contrato, unidade, obra, centro, fornecedor, categoria, colaborador, item orcado, requisicao, cotacao, OC, conta, pagamento, aprovacao e auditoria.
2. Se algum dominio nao existir, registrar rota ausente e impacto.
3. Se um dominio estiver agrupado em outra tela, registrar caminho real.

Resultado esperado: entidades minimas existem no ambiente e APP esta apto para teste funcional.

## Evidencias obrigatorias
- Screenshot de cada rota principal ou amostragem com registro de sucesso.
- Lista de rotas com status carregou/erro.
- Logs de console/rede quando disponiveis.
- Entidades ausentes ou agrupadas, se houver.

## Severidade
Alta. Tela quebrada bloqueia validacao funcional e operacao do modulo.
