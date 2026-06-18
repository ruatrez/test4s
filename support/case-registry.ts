export type CaseStatus = 'aprovado' | 'reprovado' | 'bloqueado' | 'nao aplicavel';
export type Severity = 'critica' | 'alta' | 'media' | 'baixa';

export type CaseDefinition = {
  id: string;
  title: string;
  path: string;
  severity: Severity;
  expected: string;
};

export const caseRegistry: CaseDefinition[] = [
  {
    id: 'CT001',
    title: 'Login e acesso inicial',
    path: 'Tela de Login',
    severity: 'critica',
    expected: 'Login valido permite acesso, login invalido exibe erro, logout encerra sessao e usuarios acessam somente telas permitidas.'
  },
  {
    id: 'CT002',
    title: 'Usuarios e permissoes',
    path: 'Configurações > Usuários',
    severity: 'alta',
    expected: 'Usuario e salvo, perfil altera permissoes, usuario inativo nao opera e regras de exclusao protegida sao respeitadas.'
  },
  {
    id: 'CT003',
    title: 'Cadastros rapidos',
    path: 'Cadastros',
    severity: 'media',
    expected: 'Atalhos direcionam corretamente para clientes, contratos, obras, centros, fornecedores, categorias, cargos, faixas e colaboradores.'
  },
  {
    id: 'CT004',
    title: 'Clientes e contratos',
    path: 'Configurações > Clientes e Contratos',
    severity: 'alta',
    expected: 'Cliente e contrato sao salvos, vinculados, editaveis, removiveis quando permitido e persistem apos novo acesso.'
  },
  {
    id: 'CT005',
    title: 'Obras, unidades e centros de custo',
    path: 'Configurações > Obras e Centros',
    severity: 'alta',
    expected: 'Unidade, obra e centro de custo sao criados, vinculados e disponiveis para orcamento, requisicoes e financeiro.'
  },
  {
    id: 'CT006',
    title: 'Fornecedores',
    path: 'Configurações > Fornecedores',
    severity: 'media',
    expected: 'Fornecedores sao salvos, editaveis e disponiveis em cotacoes e ordens de compra.'
  },
  {
    id: 'CT007',
    title: 'Categorias orcamentarias',
    path: 'Configurações > Categorias Orc.',
    severity: 'media',
    expected: 'Categorias sao salvas e ficam disponiveis para itens orcados e movimentos.'
  },
  {
    id: 'CT008',
    title: 'Orcamento base da obra',
    path: 'Orçamento > Itens Orçados',
    severity: 'critica',
    expected: 'Item orcado calcula valor previsto, exibe saldo/comprometido/pago e fica disponivel para requisicoes.'
  },
  {
    id: 'CT009',
    title: 'Alteracao de orcamento por usuario comum',
    path: 'Orçamento > Itens Orçados',
    severity: 'critica',
    expected: 'Usuario comum nao altera item protegido diretamente; solicitacao fica pendente e decisao gera auditoria.'
  },
  {
    id: 'CT010',
    title: 'Exclusao de item orcado',
    path: 'Orçamento > Itens Orçados',
    severity: 'critica',
    expected: 'Exclusao por usuario comum gera aprovacao; administrador decide ou executa acao conforme regra; auditoria registra.'
  },
  {
    id: 'CT011',
    title: 'Colaboradores, cargos, faixas e alocacoes',
    path: 'Configurações > Colaboradores',
    severity: 'alta',
    expected: 'Colaborador e alocacao sao vinculados a obra e custo de mao de obra compoe custo real e dashboard.'
  },
  {
    id: 'CT012',
    title: 'Requisicoes com itens',
    path: 'Suprimentos > Requisições',
    severity: 'critica',
    expected: 'Requisicao com saldo segue para aprovacao; acima do saldo fica bloqueada ou sinalizada e nao gera cotacao.'
  },
  {
    id: 'CT013',
    title: 'Aprovacao de requisicao',
    path: 'Workflow > Aprovações',
    severity: 'alta',
    expected: 'Aprovacao libera cotacao, rejeicao bloqueia continuidade e status/historico sao atualizados.'
  },
  {
    id: 'CT014',
    title: 'Cotacoes e comparativo',
    path: 'Suprimentos > Cotações',
    severity: 'alta',
    expected: 'Cotacao vinculada compara fornecedores, registra vencedor, persiste e bloqueia aquisicao sem saldo.'
  },
  {
    id: 'CT015',
    title: 'Ordem de compra',
    path: 'Suprimentos > Ordens de Compra',
    severity: 'critica',
    expected: 'OC nasce da cotacao, reflete itens vencedores, compromete orcamento e gera conta a pagar no ponto previsto.'
  },
  {
    id: 'CT016',
    title: 'Edicao e exclusao de requisicoes, cotacoes e OC',
    path: 'Suprimentos',
    severity: 'media',
    expected: 'Edicoes persistem, exclusoes pedem confirmacao, filhos vinculados e valores comprometidos sao tratados e auditoria registra.'
  },
  {
    id: 'CT017',
    title: 'Contas a pagar',
    path: 'Financeiro > Contas a Pagar',
    severity: 'critica',
    expected: 'Conta automatica/manual aparece com status e saldo coerentes; filtros, edicao, exclusao e dashboard funcionam.'
  },
  {
    id: 'CT018',
    title: 'Pagamentos',
    path: 'Financeiro > Pagamentos',
    severity: 'critica',
    expected: 'Pagamentos parcial/final atualizam conta, status, orcamento e custo real; pagamento acima do saldo e bloqueado.'
  },
  {
    id: 'CT019',
    title: 'Dashboard financeiro',
    path: 'Dashboard',
    severity: 'alta',
    expected: 'Indicadores refletem orcado, comprometido, pago, saldo, mao de obra, alertas e contas conforme fluxo real.'
  },
  {
    id: 'CT020',
    title: 'Workflow completo de aprovacao',
    path: 'Workflow > Aprovações',
    severity: 'alta',
    expected: 'Somente perfil correto ou administrador aprova; rejeicao bloqueia avanco e modulo de origem/auditoria refletem a decisao.'
  },
  {
    id: 'CT021',
    title: 'Auditoria',
    path: 'Workflow > Auditoria',
    severity: 'alta',
    expected: 'Criacao, edicao, exclusao/cancelamento e aprovacoes registram quem fez, o que fez, quando e modulo afetado.'
  },
  {
    id: 'CT022',
    title: 'Validacao tecnica de rotas e entidades',
    path: 'Todas as telas principais da Fase 1',
    severity: 'alta',
    expected: 'Todas as rotas carregam sem tela quebrada e entidades minimas existem para teste funcional.'
  }
];

export function getCaseDefinition(caseId: string) {
  return caseRegistry.find((item) => item.id === caseId);
}
