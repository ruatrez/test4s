const { config } = require('./config');

const prefix = `AUTO-4S-${config.runId}`;

const money = {
  contractValue: 250000,
  budgetQuantity: 100,
  budgetUnitValue: 120,
  requestQuantity: 10,
  requestEstimatedValue: 1200,
  overBudgetEstimatedValue: 999999,
  supplierA: 1175,
  supplierB: 1190,
  supplierC: 1210,
  laborMonthlyCost: 6500,
  laborBenefits: 900,
  paymentPartial: 500,
  paymentFinal: 675
};

const data = {
  prefix,
  client: `${prefix} Cliente`,
  contract: `${prefix} Contrato`,
  unit: `${prefix} Unidade`,
  work: `${prefix} Obra`,
  costCenter: `${prefix} Centro`,
  categories: [
    `${prefix} Mao de obra`,
    `${prefix} Materiais`,
    `${prefix} Equipamentos`,
    `${prefix} Subempreiteiros`,
    `${prefix} Custos indiretos`
  ],
  suppliers: [
    `${prefix} Fornecedor A`,
    `${prefix} Fornecedor B`,
    `${prefix} Fornecedor C`
  ],
  collaborator: `${prefix} Colaborador`,
  role: `${prefix} Cargo`,
  costRange: `${prefix} Faixa`,
  budgetItem: `${prefix} Item orcado material`,
  requisition: `${prefix} Requisicao`,
  overBudgetRequisition: `${prefix} Requisicao acima saldo`,
  quotation: `${prefix} Cotacao`,
  purchaseOrder: `${prefix} OC`,
  payable: `${prefix} Conta`,
  payment: `${prefix} Pagamento`,
  operationalUserName: `${prefix} Usuario Engenharia`,
  operationalUserEmail: `auto-4s-${config.runId}@example.test`,
  money
};

module.exports = { data };
