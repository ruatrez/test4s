# Validação E2E Automatizada do 4S - Fase 1

  ## Resumo

  Implementar e executar uma suíte Playwright + TypeScript para validar o https://4s.ruatrez.com, cobrindo CT001 a CT022, fluxo financeiro ponta a ponta, permissões, persistência, auditoria, regressão técnica e relatório final com evidências.

  O repositório já possui uma suíte Playwright em JavaScript, helpers reutilizáveis e uma execução anterior com 6 testes, 4 aprovados e 2 reprovados. A implementação deve evoluir essa base para TypeScript, Page Objects e cobertura mais determinística, mantendo os relatórios existentes.

  ## Mudanças Principais

  - Converter a suíte de JavaScript para TypeScript, adicionando tsconfig.json e ajustando playwright.config para
    testes .spec.ts.

  - Organizar Page Objects por domínio:
      - autenticação e sessão
      - navegação/menu
      - cadastros/configurações
      - orçamento
      - suprimentos
      - financeiro
      - workflow/auditoria
      - dashboard

  - Criar massa rastreável com prefixo AUTO-4S-${RUN_ID} para cliente, contrato, unidade, obra, centro de custo, categorias, fornecedores, colaborador, usuário operacional, item orçado, requisições, cotação, OC, conta e pagamentos.

  - Manter credenciais por variáveis:
      - BASE_URL, padrão https://4s.ruatrez.com
      - ADMIN_EMAIL, padrão hello@ruatrez.com
      - ADMIN_PASSWORD, padrão admin123
      - OPERATIONAL_EMAIL e OPERATIONAL_PASSWORD, opcionais
      - RUN_ID, opcional

  - Capturar evidências automáticas:
      - screenshots em falha
      - traces em falha
      - console errors
      - falhas HTTP 4xx/5xx inesperadas
      - dados de teste usados

  - Atualizar o gerador de relatório Markdown/HTML para listar todos os casos CT001-CT022 com status aprovado, reprovado, bloqueado ou nao aplicavel, não apenas falhas capturadas.

  ## Cobertura De Testes

  - 01-smoke.spec.ts
      - CT001: login válido, logout, login inválido, sessão expirada quando observável.
      - CT003: atalhos da tela Cadastros.
      - CT022: rotas principais sem tela em branco, erros JS críticos ou HTTP 5xx.

  - 02-master-data.spec.ts
      - CT004: cliente e contrato, incluindo edição, persistência e vínculo.
      - CT005: unidade, obra e centro de custo.
      - CT006: fornecedores.
      - CT007: categorias orçamentárias.
      - CT011: colaborador, cargo/faixa e alocação quando a UI permitir.

  - 03-budget-labor.spec.ts
      - CT008: item orçado com cálculo de previsto, saldo, comprometido e pago.
      - CT009: alteração de orçamento protegido por usuário comum.
      - CT010: exclusão de item orçado por usuário comum e administrador.

  - 04-procurement-finance-e2e.spec.ts
      - CT012: requisição dentro do saldo e requisição acima do saldo.
      - CT013: aprovação e rejeição de requisição.
      - CT014: cotação com 3 fornecedores, comparativo e vencedor.
      - CT015: ordem de compra a partir da cotação e comprometimento do orçamento.
      - CT016: edição/exclusão de requisição, cotação e OC quando permitido.
      - CT017: contas a pagar, status e filtros.
      - CT018: pagamento parcial, final e tentativa acima do saldo.
      - CT019: dashboard financeiro após compra/pagamento/mão de obra.

  - 05-permissions-audit.spec.ts
      - CT002: criação, edição, inativação e tentativa de login com usuário inativo.
      - CT020: workflow com perfil correto/incorreto, aprovação e rejeição.
      - CT021: auditoria de criação, edição, exclusão/cancelamento e decisões.

  ## Regras De Diagnóstico

  - Classificar severidade conforme o PDF e o plano do usuário:
      - critica: bloqueia fluxo financeiro E2E, pagamento, custo real, dashboard, permissão ou corrompe dados.
      - alta: quebra aprovação, saldo, orçamento protegido, persistência ou vínculo entre módulos.
      - media: falha contornável, filtro, cálculo secundário ou auditoria incompleta.
      - baixa: visual, texto ou mensagem sem bloqueio operacional.

  - Quando a aplicação bloquear exclusão por regra de negócio, tentar cancelamento/inativação; se não existir ação
    permitida, registrar como limitação ou regra observada.

  - Quando um fluxo depender de dado anterior que falhou, marcar os casos dependentes como bloqueado, apontando o CT
    raiz.

  - Registrar passos reproduzíveis, caminho no menu, perfil usado, massa de teste, esperado conforme PDF, obtido,
    impacto e recomendação implementável.

  ## Execução E Aceite

  - Rodar primeiro smoke e mapeamento de rotas.
  - Rodar criação de massa base e validar persistência com refresh, logout/login e usuário autorizado.
  - Rodar fluxo E2E completo:
    Contrato > Obra > Orçamento Base > Mão de Obra > Requisição > Aprovação > Cotação > Fornecedor > Ordem de Compra
    > Contas a Pagar > Pagamento > Custo Real > Dashboard > Auditoria.

  - Rodar cenários negativos obrigatórios:
      - requisição acima do saldo
      - avanço sem aprovação
      - aprovação com perfil incorreto
      - pagamento acima do saldo
      - usuário inativo
      - acesso sem permissão
      - alteração/exclusão de orçamento protegido

  - Gerar:
      - test-results/results.json
      - test-results/diagnostics.jsonl
      - test-results/diagnostic-report.md
      - test-results/diagnostic-report.html
      - playwright-report

  - Critério de aceite: todos os CT001-CT022 ficam aprovados ou registrados como defeito/bloqueio com evidência,
    severidade, impacto e recomendação.

  ## Assumptions

  - A automação pode criar, editar, cancelar, inativar ou excluir dados de teste no ambiente https://4s.ruatrez.com.
  - Os dados criados com prefixo AUTO-4S-* podem permanecer no ambiente se a regra de negócio impedir exclusão.
  - A credencial hello@ruatrez.com / admin123 é administrativa e válida.
  - Se um perfil operacional não existir, a suíte tentará criá-lo; se a criação falhar por regra ou permissão, o caso de permissão será marcado como bloqueado com evidência.

  - O navegador padrão pode continuar sendo Chromium/Brave via BROWSER_EXECUTABLE=/usr/bin/brave-browser, com fallback documentado caso não esteja disponível.
