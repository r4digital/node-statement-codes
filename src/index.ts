namespace StatementCode {
  export enum Name {
    FeesDebit = 'FEES_DEBIT', // Tarifa

    // TED: Transferência Eletrônica Disponível
    TedSameHolderDebit = 'TED_SAME_HOLDER_DEBIT', // Envio TED mesma titularidade
    TedOtherHolderDebit = 'TED_OTHER_HOLDER_DEBIT', // Envio TED outra titularidade
    TedSameHolderCredit = 'TED_SAME_HOLDER_CREDIT', // Recebimento TED mesma titularidade
    TedOtherHolderCredit = 'TED_OTHER_HOLDER_CREDIT', // Recebimento TED outra titularidade
    TedSameHolderRefundCredit = 'TED_SAME_HOLDER_REFUND_CREDIT', // Estorno TED mesma titularidade
    TedOtherHolderRefundCredit = 'TED_OTHER_HOLDER_REFUND_CREDIT', // Estorno TED outra titularidade

    // TEF: Transferência Eletrônica Financeira
    TefSameHolderDebit = 'TEF_SAME_HOLDER_DEBIT', // Envio TEF mesma titularidade
    TefOtherHolderDebit = 'TEF_OTHER_HOLDER_DEBIT', // Envio TEF outra titularidade
    TefSameHolderCredit = 'TEF_SAME_HOLDER_CREDIT', // Recebimento TEF mesma titularidade
    TefOtherHolderCredit = 'TEF_OTHER_HOLDER_CREDIT', // Recebimento TEF outra titularidade

    // DOC: Documento de Ordem de Crédito
    DocSameHolderDebit = 'DOC_SAME_HOLDER_DEBIT', // Envio DOC mesma titularidade
    DocOtherHolderDebit = 'DOC_OTHER_HOLDER_DEBIT', // Envio DOC outra titularidade
    DocSameHolderCredit = 'DOC_SAME_HOLDER_CREDIT', // Recebimento DOC mesma titularidade
    DocOtherHolderCredit = 'DOC_OTHER_HOLDER_CREDIT', // Recebimento DOC outra titularidade
    DocSameHolderRefundCredit = 'DOC_SAME_HOLDER_REFUND_CREDIT', // Estorno DOC mesma titularidade
    DocOtherHolderRefundCredit = 'DOC_OTHER_HOLDER_REFUND_CREDIT', // Estorno DOC outra titularidade
  }

  export enum Value {
    FEES_DEBIT = 8,

    TED_SAME_HOLDER_DEBIT = 4,
    TED_OTHER_HOLDER_DEBIT = 5,
    TED_SAME_HOLDER_CREDIT = 504,
    TED_OTHER_HOLDER_CREDIT = 505,
    TED_SAME_HOLDER_REFUND_CREDIT = 1004,
    TED_OTHER_HOLDER_REFUND_CREDIT = 1005,

    TEF_SAME_HOLDER_DEBIT = 1014,
    TEF_OTHER_HOLDER_DEBIT = 1015,
    TEF_SAME_HOLDER_CREDIT = 1024,
    TEF_OTHER_HOLDER_CREDIT = 1025,

    DOC_SAME_HOLDER_DEBIT = 2,
    DOC_OTHER_HOLDER_DEBIT = 3,
    DOC_SAME_HOLDER_CREDIT = 502,
    DOC_OTHER_HOLDER_CREDIT = 503,
    DOC_SAME_HOLDER_REFUND_CREDIT = 1002,
    DOC_OTHER_HOLDER_REFUND_CREDIT = 1003,
  }
}

export default StatementCode;
