import WhatsAppMessageStrategy from '../base/WhatsAppMessageStrategy.js';
import BoloMessageTemplate from './BoloMessageTemplate.js';
import DocinhoMessageTemplate from './DocinhoMessageTemplate.js';

class PedidoCompletoMessageTemplate extends WhatsAppMessageStrategy {
  gerarMensagem() {
    const { pedido } = this;
    const cliente = pedido.cliente;

    let mensagem = this.gerarCabecalho();
    mensagem += this.gerarItens();
    mensagem += this.gerarSeparador();
    mensagem += this.gerarDadosCliente(cliente);
    mensagem += this.gerarDadosEntrega();
    mensagem += this.gerarObservacoes();
    mensagem += this.gerarRodape();
    
    return mensagem;
  }

  gerarCabecalho() {
    const { pedido } = this;
    const totalItens = pedido.itens?.length || 0;
    
    let cabecalho = `*NOVO PEDIDO*\n\n`;
    cabecalho += `*ITENS DO PEDIDO* (${totalItens} ${totalItens === 1 ? 'item' : 'itens'})\n`;
    cabecalho += `----------------------------------------\n\n`;
    
    return cabecalho;
  }

  gerarItens() {
    const { pedido } = this;
    let itensTexto = '';
    
    if (!pedido.itens || pedido.itens.length === 0) {
      return 'Nenhum item no pedido\n\n';
    }
    
    pedido.itens.forEach((item, index) => {
      const numeroItem = index + 1;
      
      if (item.tipoProduto === 'bolo') {
        itensTexto += BoloMessageTemplate.formatar(item, numeroItem);
      } else if (item.tipoProduto === 'docinho') {
        itensTexto += DocinhoMessageTemplate.formatar(item, numeroItem);
      } else {
        itensTexto += this.formatarItemGenerico(item, numeroItem);
      }
      
      itensTexto += `\n`;
    });
    
    return itensTexto;
  }

  formatarItemGenerico(item, index) {
    let texto = `${index}. *${item.tipoProduto.toUpperCase()}*`;
    
    if (item.quantidade > 1) {
      texto += ` (x${item.quantidade})`;
    }
    
    texto += `\n`;
    
    if (item.personalizacao) {
      texto += `   ${JSON.stringify(item.personalizacao, null, 2)}\n`;
    }
    
    if (item.valorUnitario) {
      const total = parseFloat(item.valorUnitario) * item.quantidade;
      texto += `   Valor: ${this.formatarValor(total)}\n`;
    }
    
    return texto;
  }

  gerarSeparador() {
    return `----------------------------------------\n\n`;
  }

  gerarDadosCliente(cliente) {
    let texto = `*CLIENTE*\n`;
    texto += `Nome: ${cliente.nomeCompleto}\n`;
    texto += `Contato: ${this.formatarTelefone(cliente.contato)}\n`;
    
    if (cliente.endereco) {
      texto += `Endereco: ${cliente.endereco}\n`;
    }
    
    if (cliente.dataAniversario) {
      texto += `Aniversario: ${this.formatarData(cliente.dataAniversario)}\n`;
    }
    
    texto += `\n`;
    
    return texto;
  }

  gerarDadosEntrega() {
    const { pedido } = this;
    let texto = `*ENTREGA E PAGAMENTO*\n`;
    
    texto += `Entrega: ${pedido.formaEntrega}\n`;
    texto += `Pagamento: ${pedido.formaPagamento}\n`;
    
    if (pedido.dataEntrega) {
      texto += `Data de Entrega: ${this.formatarDataHora(pedido.dataEntrega)}\n`;
    }
    
    if (pedido.valorTotal) {
      texto += `*Valor Total: ${this.formatarValor(pedido.valorTotal)}*\n`;
    }
    
    texto += `\n`;
    
    return texto;
  }

  gerarObservacoes() {
    const { pedido } = this;
    
    if (!pedido.observacoes) {
      return '';
    }
    
    return `*OBSERVACOES*\n${pedido.observacoes}\n\n`;
  }

  gerarRodape() {
    const { pedido } = this;
    
    let rodape = `----------------------------------------\n`;
    rodape += `Pedido #${pedido.id}\n`;
    rodape += `Status: ${pedido.status.toUpperCase()}\n`;
    rodape += `Criado em: ${this.formatarDataHora(pedido.criadoEm)}`;
    
    return rodape;
  }
}

export default PedidoCompletoMessageTemplate;