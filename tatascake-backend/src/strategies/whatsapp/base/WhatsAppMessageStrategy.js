class WhatsAppMessageStrategy {
  constructor(pedido) {
    this.pedido = pedido;
  }

  gerarMensagem() {
    throw new Error('Método gerarMensagem() deve ser implementado');
  }

  formatarData(data) {
    if (!data) return null;
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  formatarHora(data) {
    if (!data) return null;
    const date = new Date(data);
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatarDataHora(data) {
    if (!data) return null;
    const dataFormatada = this.formatarData(data);
    const horaFormatada = this.formatarHora(data);
    return `${dataFormatada} às ${horaFormatada}`;
  }

  formatarTelefone(telefone) {
    if (!telefone) return '';
    const limpo = telefone.replace(/\D/g, '');
    if (limpo.length === 11) {
      return `(${limpo.slice(0, 2)}) ${limpo.slice(2, 7)}-${limpo.slice(7)}`;
    }
    if (limpo.length === 10) {
      return `(${limpo.slice(0, 2)}) ${limpo.slice(2, 6)}-${limpo.slice(6)}`;
    }
    return telefone;
  }

  formatarValor(valor) {
    if (!valor) return null;
    return parseFloat(valor).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  obterEmojiFormaEntrega(formaEntrega) {
    const formaLower = formaEntrega?.toLowerCase() || '';
    if (formaLower.includes('entrega')) return '🚚';
    if (formaLower.includes('retirar') || formaLower.includes('retirada')) return '🏪';
    return '📦';
  }

  obterEmojiPagamento(formaPagamento) {
    const pagamentoLower = formaPagamento?.toLowerCase() || '';
    if (pagamentoLower.includes('pix')) return '💳';
    if (pagamentoLower.includes('dinheiro')) return '💵';
    if (pagamentoLower.includes('cartão') || pagamentoLower.includes('cartao')) return '💳';
    if (pagamentoLower.includes('transferência') || pagamentoLower.includes('transferencia')) return '🏦';
    return '💰';
  }
}

export default WhatsAppMessageStrategy;