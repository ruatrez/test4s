  # Plano de Análise e Validação Automatizada do 4S

  ## Resumo

  Executar uma validação E2E completa da Fase 1 do APP 4S em https://4s.ruatrez.com, usando Playwright + TypeScript,
  com login administrativo hello@ruatrez.com / admin123, criação de massa rastreável e limpeza/cancelamento dos
  dados de teste quando permitido.

  O roteiro base será o PDF RoteirodeTestes4S.pdf, que cobre o fluxo: Contrato > Obra > Orçamento Base > Mão de Obra
  > Requisição > Aprovação > Cotação > Fornecedor > Ordem de Compra > Contas a Pagar > Pagamento > Custo Real >
  Dashboard > Auditoria.

  ## Estratégia de Validação

  - Confirmar acesso ao ambiente, login, logout, sessão expirada e login inválido.
  - Mapear menu lateral e rotas reais contra a estrutura descrita no PDF:
    Dashboard, Cadastros, Configurações, Orçamento, Suprimentos, Financeiro, Workflow.

  - Criar massa com prefixo único, por exemplo AUTO-4S-YYYYMMDD-HHMM, incluindo:
    cliente, contrato, unidade, obra, centro de custo, categorias, fornecedores, colaborador, item orçado,
    requisições, cotação, OC, conta e pagamentos.

  - Validar persistência após salvar, atualizar página, logout/login e consulta com usuário autorizado.
  - Validar permissões com pelo menos dois perfis:
    administrador e um usuário operacional criado/selecionado durante o teste.

  - Registrar evidências automáticas:
    screenshots, vídeos Playwright, traces, console errors, network failures e dados usados no teste.

  ## Implementação Dos Testes

  - Criar suíte Playwright com Page Objects para:
    autenticação, navegação/menu, cadastros, orçamento, suprimentos, financeiro, workflow, auditoria e dashboard.

  - Implementar testes principais:
    CT001 a CT022 do PDF, agrupados por domínio funcional.

  - Implementar um cenário E2E principal:
    cadastro inicial > orçamento > requisição > aprovação > cotação > OC > conta a pagar > pagamento parcial/final >
    custo real > dashboard > auditoria.

  - Implementar cenários negativos obrigatórios:
    requisição acima do saldo, avanço sem aprovação, aprovação com perfil incorreto, pagamento acima do saldo,
    usuário inativo, acesso sem permissão, exclusão/alteração de orçamento protegido.

  - Implementar regressão visual e técnica:
    telas em branco, erros JS, falhas HTTP 4xx/5xx, botões quebrados, filtros sem efeito, campos obrigatórios sem
    validação, cálculos divergentes e dados que somem após refresh.

  ## Relatório De Diagnóstico

  Gerar relatório final em Markdown/HTML com uma tabela de problemas contendo:

  - ID do problema
  - Severidade: crítica, alta, média ou baixa
  - Caso de teste relacionado
  - Caminho exato no sistema
  - Perfil usado
  - Dados de teste usados
  - Passos para reproduzir
  - Resultado esperado conforme PDF
  - Resultado obtido na aplicação
  - Impacto funcional e impacto na regra de negócio
  - Evidências anexas: screenshot, vídeo ou trace
  - Recomendação implementável para correção
  - Status: aprovado, reprovado, bloqueado ou não aplicável

  Critério de severidade:

  - Crítica: impede fluxo financeiro E2E, compromete pagamento/custo real/dashboard, permite operação sem permissão
    ou corrompe dados.

  - Alta: quebra regra central de aprovação, saldo, orçamento protegido, persistência ou vínculo entre módulos.
  - Média: falha funcional contornável, filtro incorreto, cálculo secundário inconsistente ou auditoria incompleta.
  - Baixa: problemas visuais, textos, mensagens pouco claras ou inconsistências sem bloqueio operacional.

  ## Test Plan

  - Smoke inicial:
    login, menu, carregamento das rotas principais, console/network errors.

  - Funcional por módulo:
    CT001 a CT022 conforme o PDF.

  - E2E integrado:
    compra completa com atualização de orçamento, financeiro, dashboard e auditoria.

  - Permissões:
    administrador, diretoria, engenharia, suprimentos, financeiro e operacional quando disponíveis.

  - Regressão:
    repetir fluxo após refresh, logout/login, troca de usuário e exclusão/cancelamento de massa.

  - Aceite:
    todos os critérios do PDF devem estar aprovados ou listados como defeito com evidência, severidade e
    recomendação.

  ## Assumptions

  - A automação pode criar, editar e excluir/cancelar dados de teste.
  - Dados criados serão prefixados e rastreáveis.
  - Quando exclusão não for permitida por regra de negócio, o teste deve cancelar/inativar o registro ou reportar a
    impossibilidade.

  - A credencial hello@ruatrez.com / admin123 é a credencial administrativa válida para a análise.
  - Se o ambiente estiver indisponível, a execução será marcada como bloqueada com evidência de DNS, HTTP, login ou
    erro técnico.
