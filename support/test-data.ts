import { config } from './config';

const prefix = `AUTO-4S-${config.runId}`;
const numericRunId = config.runId.replace(/\D/g, '').padEnd(14, '0').slice(-11);

const money = {
  contractValue: 250_000,
  budgetQuantity: 100,
  budgetUnitValue: 120,
  requestQuantity: 10,
  requestEstimatedValue: 120,
  overBudgetEstimatedValue: 999_999,
  supplierA: 1_175,
  supplierB: 1_190,
  supplierC: 1_210,
  laborMonthlyCost: 6_500,
  laborBenefits: 900,
  paymentPartial: 500,
  paymentFinal: 675
};

export const data = {
  prefix,
  runDocument: numericRunId,
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
  laborBudgetItem: `${prefix} Item mao de obra`,
  requisition: `${prefix} Requisicao`,
  rejectedRequisition: `${prefix} Requisicao rejeicao`,
  overBudgetRequisition: `${prefix} Requisicao acima saldo`,
  quotation: `${prefix} Cotacao`,
  purchaseOrder: `${prefix} OC`,
  payable: `${prefix} Conta`,
  payment: `${prefix} Pagamento`,
  operationalUserName: `${prefix} Usuario Engenharia`,
  operationalUserEmail: `auto-4s-${config.runId}@example.test`,
  inactiveUserName: `${prefix} Usuario Inativo`,
  inactiveUserEmail: `auto-4s-inativo-${config.runId}@example.test`,
  money
};

export type TestData = typeof data;
