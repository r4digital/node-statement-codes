export enum Name {
  FeesDebit = 'FEES_DEBIT', // Debito tarifa
  FeesCredit = 'FEES_CREDIT', // Credito tarifa
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
  TedPartnerDebit = 'TED_PARTNER_DEBIT', // Envio TED conta parceiro
  TedPartnerRefundCredit = 'TED_PARTNER_REFUND_CREDIT', // Estorno TED conta parceiro

  // DOC: Documento de Ordem de Credito
  DocSameHolderDebit = 'DOC_SAME_HOLDER_DEBIT', // Envio DOC mesma titularidade
  DocOtherHolderDebit = 'DOC_OTHER_HOLDER_DEBIT', // Envio DOC outra titularidade
  DocSameHolderCredit = 'DOC_SAME_HOLDER_CREDIT', // Recebimento DOC mesma titularidade
  DocOtherHolderCredit = 'DOC_OTHER_HOLDER_CREDIT', // Recebimento DOC outra titularidade
  DocSameHolderRefundCredit = 'DOC_SAME_HOLDER_REFUND_CREDIT', // Estorno DOC mesma titularidade
  DocOtherHolderRefundCredit = 'DOC_OTHER_HOLDER_REFUND_CREDIT', // Estorno DOC outra titularidade

  // TEF: Transferencia Eletronica de Fundos
  TefDebit = 'TEF_DEBIT', // Debito transf. interna entre contas
  TefRefundDebit = 'TEF_REFUND_DEBIT', // Debito estorno transf. interna entre contas
  
  TefCredit = 'TEF_CREDIT', // DEPRECATED - Credito transf. interna entre contas
  TefOtherHolderCredit = 'TEF_OTHER_HOLDER_CREDIT', // Credito transf. interna entre contas de diferente titularidade
  TefSameHolderCredit = 'TEF_SAME_HOLDER_CREDIT', // Credito transf. interna entre contas de mesma titularidade
  
  TefRefundCredit = 'TEF_REFUND_CREDIT', // DEPRECATED - Credito estorno transf. interna entre contas
  TefSameHolderRefundCredit = 'TEF_SAME_HOLDER_REFUND_CREDIT', // Credito estorno transf. interna entre contas de mesma titularidade
  TefOtherHolderRefundCredit = 'TEF_OTHER_HOLDER_REFUND_CREDIT', // Credito estorno transf. interna entre contas de diferente titularidade

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

  PayrollLoanReleaseCredit = 'PAYROLL_LOAN_RELEASE_CREDIT', // Liberacao de emprestimo consignado

  // Pix
  PixInternalDebit = 'PIX_INTERNAL_DEBIT', // Envio de Pix interno
  PixExternalDebit = 'PIX_EXTERNAL_DEBIT', // Envio de Pix externo
  
  PixInternalCredit = 'PIX_INTERNAL_CREDIT', // DEPRECATED - Recebimento de Pix interno
  PixInternalOtherHolderCredit = 'PIX_INTERNAL_OTHER_HOLDER_CREDIT', // Recebimento de Pix interno de diferente titularidade
  PixInternalSameHolderCredit = 'PIX_INTERNAL_SAME_HOLDER_CREDIT', // Recebimento de Pix interno de mesma titularidade
  
  PixExternalCredit = 'PIX_EXTERNAL_CREDIT', // DEPRECATED - Recebimento de Pix externo
  PixExternalOtherHolderCredit = 'PIX_EXTERNAL_OTHER_HOLDER_CREDIT', // Recebimento de Pix externo de diferente titularidade
  PixExternalSameHolderCredit = 'PIX_EXTERNAL_SAME_HOLDER_CREDIT', // Recebimento de Pix externo de mesma titularidade
  
  PixReturnInternalDebit = 'PIX_RETURN_INTERNAL_DEBIT', // DEPRECATED Envio de devolucao de pix interno
  PixReturnInternalDebitOtherHolder = 'PIX_RETURN_INTERNAL_DEBIT_OTHER_HOLDER', // Envio de devolucao de pix interno de diferente titularidade
  PixReturnInternalDebitSameHolder = 'PIX_RETURN_INTERNAL_DEBIT_SAME_HOLDER', // Envio de devolucao de pix interno de mesma titularidade

  PixReturnExternalDebit = 'PIX_RETURN_EXTERNAL_DEBIT', // DEPRECATED - Envio de devolucao de pix externo
  PixReturnExternalDebitOtherHolder ='PIX_RETURN_EXTERNAL_DEBIT_OTHER_HOLDER', // Envio de devolucao de pix externo de diferente titularidade
  PixReturnExternalDebitSameHolder = 'PIX_RETURN_EXTERNAL_DEBIT_SAME_HOLDER', // Envio de devolucao de pix externo com mesma titularidade

  PixReturnInternalCredit = 'PIX_RETURN_INTERNAL_CREDIT', // Recebimento de devolucao de pix interno
  PixReturnExternalCredit = 'PIX_RETURN_EXTERNAL_CREDIT', // Recebimento de devolucao de pix externo
  PixInternalRefundCredit = 'PIX_INTERNAL_REFUND_CREDIT', // Estorno de pix enviado interno
  PixExternalRefundCredit = 'PIX_EXTERNAL_REFUND_CREDIT', // Estorno de pix enviado externo
  
  PixReturnInternalRefundCredit = 'PIX_RETURN_INTERNAL_REFUND_CREDIT', // DEPRECATED - Estorno de devolucao de pix enviada interno
  PixReturnInternalRefundCreditOtherHolder = 'PIX_RETURN_INTERNAL_REFUND_CREDIT_OTHER_HOLDER', // Estorno de devolucao de pix enviada interno de diferente titularidade
  PixReturnInternalRefundCreditSameHolder = 'PIX_RETURN_INTERNAL_REFUND_CREDIT_SAME_HOLDER',  // Estorno de devolucao de pix enviada interno de mesma titularidade

  PixReturnExternalRefundCredit = 'PIX_RETURN_EXTERNAL_REFUND_CREDIT', // DEPRECATED - Estorno de devolucao de pix enviada externo
  PixReturnExternalRefundCreditOtherHolder = 'PIX_RETURN_EXTERNAL_REFUND_CREDIT_OTHER_HOLDER',  // Estorno de devolucao de pix enviada externo de diferente titularidade 
  PixReturnExternalRefundCreditSameHolder = 'PIX_RETURN_EXTERNAL_REFUND_CREDIT_SAME_HOLDER',  // Estorno de devolucao de pix enviada externo de mesma titularidade
  
  PixWithdrawDebit = 'PIX_WITHDRAW_DEBIT', // Envio de Pix Saque
  PixChangePurchaseAmountDebit = 'PIX_CHANGE_PURCHASE_AMOUNT_DEBIT', // Valor da compra informada no pix troco
  PixChangeAvailableCashDebit = 'PIX_CHANGE_AVAILABLE_CASH_DEBIT', // Valor disponibilizado em dinheiro no pix troco
  PixWithdrawRefundCredit = 'PIX_WITHDRAW_REFUND_CREDIT', // Estorno de Pix Saque enviado
  PixChangePurchaseAmountRefundCredit = 'PIX_CHANGE_PURCHASE_AMOUNT_REFUND_CREDIT', // Estorno de valor da compra informada no pix troco
  PixChangeAvailableCashRefundCredit = 'PIX_CHANGE_AVAILABLE_CASH_REFUND_CREDIT', // Estorno de valor disponibilizado em dinheiro no pix troco

  // Investment
  InvestmentDebit = 'INVESTMENT_DEBIT', // Aplicação em investimento
  InvestmentCredit = 'INVESTMENT_CREDIT', // Resgate de investimento
  TransitoryCreditInvestment = 'TRANSITORY_CREDIT_INVESTMENT', // Credito transitório de investimento
  TransitoryDebitInvestment = 'TRANSITORY_DEBIT_INVESTMENT', // Debito transitório de investimento
}

export enum Value {
  FEES_DEBIT = 8,
  FEES_CREDIT = 500,
  FEES_REFUND_CREDIT = 1008,

  ADJUSTMENT_DEBIT = 9000,
  ADJUSTMENT_CREDIT = 9001,

  TED_SAME_HOLDER_DEBIT = 4,
  TED_OTHER_HOLDER_DEBIT = 5,
  TED_SAME_HOLDER_CREDIT = 504,
  TED_OTHER_HOLDER_CREDIT = 505,
  TED_SAME_HOLDER_REFUND_CREDIT = 1004,
  TED_OTHER_HOLDER_REFUND_CREDIT = 1005,
  TED_PARTNER_DEBIT = 10,
  TED_PARTNER_REFUND_CREDIT = 1401,

  DOC_SAME_HOLDER_DEBIT = 2,
  DOC_OTHER_HOLDER_DEBIT = 3,
  DOC_SAME_HOLDER_CREDIT = 502,
  DOC_OTHER_HOLDER_CREDIT = 503,
  DOC_SAME_HOLDER_REFUND_CREDIT = 1002,
  DOC_OTHER_HOLDER_REFUND_CREDIT = 1003,

  TEF_DEBIT = 1,
  TEF_REFUND_DEBIT = 1501,
  
  TEF_CREDIT = 501, // DEPRECATED
  TEF_SAME_HOLDER_CREDIT = 514,
  TEF_OTHER_HOLDER_CREDIT = 513,
  
  TEF_REFUND_CREDIT = 1001, // DEPRECATED
  TEF_OTHER_HOLDER_REFUND_CREDIT = 1513,
  TEF_SAME_HOLDER_REFUND_CREDIT = 1514,

  BILL_PAYMENT_DEBIT = 7,
  BILL_PAYMENT_REFUND_CREDIT = 1007,
  BILL_PAYMENT_TRANSFER_CREDIT = 551,
  BILL_PAYMENT_TRANSFER_DEBIT = 1551,

  CELL_RECHARGE_DEBIT = 6,
  CELL_RECHARGE_REFUND_CREDIT = 1006,

  SALARY_CREDIT = 507,
  SALARY_REFUND_DEBIT = 1507,

  LOAN_RELEASE_CREDIT = 506,
  LOAN_RELEASE_REFUND_DEBIT = 1506,

  PAYROLL_LOAN_RELEASE_CREDIT = 1170,

  PIX_INTERNAL_DEBIT = 101,
  PIX_EXTERNAL_DEBIT = 103,

  PIX_INTERNAL_CREDIT = 603, // DEPRECATED
  PIX_INTERNAL_OTHER_HOLDER_CREDIT = 607,
  PIX_INTERNAL_SAME_HOLDER_CREDIT = 609,

  PIX_EXTERNAL_CREDIT = 604, // DEPRECATED
  PIX_EXTERNAL_OTHER_HOLDER_CREDIT = 611,
  PIX_EXTERNAL_SAME_HOLDER_CREDIT = 613,

  PIX_RETURN_INTERNAL_DEBIT = 106, // DEPRECATED
  PIX_RETURN_INTERNAL_DEBIT_OTHER_HOLDER = 115,
  PIX_RETURN_INTERNAL_DEBIT_SAME_HOLDER = 116,

  PIX_RETURN_EXTERNAL_DEBIT = 102,  // DEPRECATED
  PIX_RETURN_EXTERNAL_DEBIT_OTHER_HOLDER = 113, 
  PIX_RETURN_EXTERNAL_DEBIT_SAME_HOLDER = 114,

  PIX_RETURN_INTERNAL_CREDIT = 601,
  PIX_RETURN_EXTERNAL_CREDIT = 602,
  PIX_INTERNAL_REFUND_CREDIT = 1101,
  PIX_EXTERNAL_REFUND_CREDIT = 1103,

  PIX_RETURN_INTERNAL_REFUND_CREDIT = 1106, // DEPRECATED
  PIX_RETURN_INTERNAL_REFUND_CREDIT_OTHER_HOLDER = 1115,
  PIX_RETURN_INTERNAL_REFUND_CREDIT_SAME_HOLDER = 1116,  

  PIX_RETURN_EXTERNAL_REFUND_CREDIT = 1102,  // DEPRECATED
  PIX_RETURN_EXTERNAL_REFUND_CREDIT_OTHER_HOLDER = 1113,  
  PIX_RETURN_EXTERNAL_REFUND_CREDIT_SAME_HOLDER = 1114,

  PIX_WITHDRAW_DEBIT = 109,
  PIX_CHANGE_PURCHASE_AMOUNT_DEBIT = 111,
  PIX_CHANGE_AVAILABLE_CASH_DEBIT = 112,
  PIX_WITHDRAW_REFUND_CREDIT = 1109,
  PIX_CHANGE_PURCHASE_AMOUNT_REFUND_CREDIT = 1111,
  PIX_CHANGE_AVAILABLE_CASH_REFUND_CREDIT = 1112,
  PIX_EXTERNAL_REFUND_DEBIT = 1604,

  INVESTMENT_DEBIT = 901,
  INVESTMENT_CREDIT = 902,
  TRANSITORY_CREDIT_INVESTMENT = 911,
  TRANSITORY_DEBIT_INVESTMENT = 912,
}
