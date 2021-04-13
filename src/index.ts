export enum Name {
  FeesDebit = 'FEES_DEBIT', // Debito tarifa
  FeesRefundCredit = 'FEES_REFUND_CREDIT', // Credito estorno tarifa

  AdjustmentDebit = 'ADJUSTMENT_DEBIT', // Ajuste a debito
  AdjustmentCredit = 'ADJUSTMENT_CREDIT', // Ajuste a credito

  // TED: Transferencia Eletronica Disponível
  TedSameHolderDebit = 'TED_SAME_HOLDER_DEBIT', // Envio TED mesma titularidade
  TedOtherHolderDebit = 'TED_OTHER_HOLDER_DEBIT', // Envio TED outra titularidade
  TedSameHolderCredit = 'TED_SAME_HOLDER_CREDIT', // Recebimento TED mesma titularidade
  TedOtherHolderCredit = 'TED_OTHER_HOLDER_CREDIT', // Recebimento TED outra titularidade
  TedSameHolderRefundCredit = 'TED_SAME_HOLDER_REFUND_CREDIT', // Estorno TED mesma titularidade
  TedOtherHolderRefundCredit = 'TED_OTHER_HOLDER_REFUND_CREDIT', // Estorno TED outra titularidade

  // DOC: Documento de Ordem de Credito
  DocSameHolderDebit = 'DOC_SAME_HOLDER_DEBIT', // Envio DOC mesma titularidade
  DocOtherHolderDebit = 'DOC_OTHER_HOLDER_DEBIT', // Envio DOC outra titularidade
  DocSameHolderCredit = 'DOC_SAME_HOLDER_CREDIT', // Recebimento DOC mesma titularidade
  DocOtherHolderCredit = 'DOC_OTHER_HOLDER_CREDIT', // Recebimento DOC outra titularidade
  DocSameHolderRefundCredit = 'DOC_SAME_HOLDER_REFUND_CREDIT', // Estorno DOC mesma titularidade
  DocOtherHolderRefundCredit = 'DOC_OTHER_HOLDER_REFUND_CREDIT', // Estorno DOC outra titularidade

  // TEF: Transferencia Eletronica de Fundos
  TefDebit = 'TEF_DEBIT', // Debito transf. interna entre contas
  TefCredit = 'TEF_CREDIT', // Credito transf. interna entre contas
  TefRefundCredit = 'TEF_REFUND_CREDIT', // Credito estorno transf. interna entre contas
  TefRefundDebit = 'TEF_REFUND_DEBIT', // Debito estorno transf. interna entre contas

  // Pagamento de contas
  BillPaymentDebit = 'BILL_PAYMENT_DEBIT', // Pagamento de contas tributos e impostos
  BillPaymentRefundCredit = 'BILL_PAYMENT_REFUND_CREDIT', // Estorno pagamento de contas tributos e impostos
  BillPaymentTransferCredit = 'BILL_PAYMENT_TRANSFER_CREDIT',
  BillPaymentTransferDebit = 'BILL_PAYMENT_TRANSFER_DEBIT',

  CellRechargeDebit = 'CELL_RECHARGE_DEBIT', // Recarga celular
  CellRechargeRefundCredit = 'CELL_RECHARGE_REFUND_CREDIT', // Estorno recarga celular

  SalaryCredit = 'SALARY_CREDIT', // Salário
  SalaryRefundDebit = 'SALARY_REFUND_DEBIT', // Estorno salário

  LoanReleaseCredit = 'LOAN_RELEASE_CREDIT', // Liberacao emprestimo ou financiamento
  LoanReleaseRefundDebit = 'LOAN_RELEASE_REFUND_DEBIT', // Estorno liberacao emprestimo ou financiamento
}

export enum Value {
  FEES_DEBIT = 8,
  FEES_REFUND_CREDIT = 1008,

  ADJUSTMENT_DEBIT = 9000,
  ADJUSTMENT_CREDIT = 9001,

  TED_SAME_HOLDER_DEBIT = 4,
  TED_OTHER_HOLDER_DEBIT = 5,
  TED_SAME_HOLDER_CREDIT = 504,
  TED_OTHER_HOLDER_CREDIT = 505,
  TED_SAME_HOLDER_REFUND_CREDIT = 1004,
  TED_OTHER_HOLDER_REFUND_CREDIT = 1005,

  DOC_SAME_HOLDER_DEBIT = 2,
  DOC_OTHER_HOLDER_DEBIT = 3,
  DOC_SAME_HOLDER_CREDIT = 502,
  DOC_OTHER_HOLDER_CREDIT = 503,
  DOC_SAME_HOLDER_REFUND_CREDIT = 1002,
  DOC_OTHER_HOLDER_REFUND_CREDIT = 1003,

  TEF_DEBIT = 1,
  TEF_CREDIT = 501,
  TEF_REFUND_CREDIT = 1001,
  TEF_REFUND_DEBIT = 1501,

  BILL_PAYMENT_DEBIT = 7,
  BILL_PAYMENT_REFUND_CREDIT = 1007,
  BILL_PAYMENT_TRANSFER_CREDIT = -1,
  BILL_PAYMENT_TRANSFER_DEBIT = -1,

  CELL_RECHARGE_DEBIT = 6,
  CELL_RECHARGE_REFUND_CREDIT = 1006,

  SALARY_CREDIT = 507,
  SALARY_REFUND_DEBIT = 1507,

  LOAN_RELEASE_CREDIT = 506,
  LOAN_RELEASE_REFUND_DEBIT = 1506,
}
