# CT003 - Cadastros rapidos

## Modulo
Cadastros

## Objetivo
Validar que os atalhos da tela Cadastros redirecionam para as telas corretas dos dominios principais.

## Pre-condicoes
- Usuario administrador autenticado.
- CT001 aprovado.

## Dados de teste
Nao requer criacao de dados.

## Cenarios e passos
### Cenario 1 - Validar todos os atalhos principais
1. Acessar Cadastros.
2. Identificar os atalhos disponiveis.
3. Acionar o atalho de Cliente.
4. Confirmar que a tela de Clientes e Contratos ou area equivalente abriu.
5. Voltar para Cadastros.
6. Repetir para Contrato.
7. Repetir para Unidade.
8. Repetir para Obra.
9. Repetir para Centro de Custo.
10. Repetir para Fornecedor.
11. Repetir para Categoria Orc.
12. Repetir para Cargo / Funcao.
13. Repetir para Faixa de Custo.
14. Repetir para Colaborador.

Resultado esperado: cada atalho deve abrir a tela funcional correta, sem erro tecnico, rota vazia ou redirecionamento incorreto.

### Cenario 2 - Atalho indisponivel ou agrupado
1. Se algum atalho do PDF nao existir, registrar o atalho ausente.
2. Verificar se a funcao esta agrupada em outra tela, como Colaboradores ou Obras e Centros.
3. Registrar o caminho real encontrado.

Resultado esperado: todos os dominios devem ser acessiveis por atalho direto ou por agrupamento claro.

## Evidencias obrigatorias
- Screenshot da tela Cadastros.
- Screenshot ou URL de cada destino validado.
- Lista de atalhos ausentes ou agrupados, se houver.

## Severidade
Media. Atalhos quebrados reduzem produtividade e podem ocultar modulos administrativos.
