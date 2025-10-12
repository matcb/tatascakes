import prisma from "../config/database.js";
import ClienteService from './clienteService.js';

class PedidoService {
  static async criarPedido(pedidoData) {
    let cliente = await ClienteService.buscarPorContato(pedidoData.cliente.contato);
    
    if (!cliente) {
      cliente = await ClienteService.criar(pedidoData.cliente);
    }
    
    const pedido = await prisma.pedido.create({
      data: {
        clienteId: cliente.id,
        tipoProduto: pedidoData.produto.tipo,
        personalizacao: pedidoData.produto.personalizacao || null,
        formaEntrega: pedidoData.cliente.formaEntrega,
        formaPagamento: pedidoData.cliente.formaPagamento,
        dataEntrega: pedidoData.cliente.dataEntrega ? new Date(pedidoData.cliente.dataEntrega) : null,
        observacoes: pedidoData.cliente.observacoes || null,
        status: 'pendente'
      },
      include: {
        cliente: true
      }
    });
    
    return pedido;
  }

  static async listarPedidos() {
    return await prisma.pedido.findMany({
      include: {
        cliente: true
      },
      orderBy: {
        criadoEm: 'desc'
      }
    });
  }

  static async buscarPedido(id) {
    const pedido = await prisma.pedido.findUnique({
      where: { id: parseInt(id) },
      include: {
        cliente: true
      }
    });
    
    if (!pedido) {
      throw new Error('Pedido não encontrado');
    }
    
    return pedido;
  }

  static async atualizarPedido(id, pedidoData) {
    const pedido = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: {
        tipoProduto: pedidoData.tipoProduto,
        personalizacao: pedidoData.personalizacao,
        formaEntrega: pedidoData.formaEntrega,
        formaPagamento: pedidoData.formaPagamento,
        dataEntrega: pedidoData.dataEntrega ? new Date(pedidoData.dataEntrega) : null,
        observacoes: pedidoData.observacoes,
        status: pedidoData.status
      },
      include: {
        cliente: true
      }
    });
    
    return pedido;
  }

  static async atualizarStatus(id, status) {
    const pedido = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        cliente: true
      }
    });
    
    return pedido;
  }

  static async deletarPedido(id) {
    await prisma.pedido.delete({
      where: { id: parseInt(id) }
    });
  }

  static gerarMensagemWhatsApp(pedido) {
    const cliente = pedido.cliente;
    let mensagem = `🎂 *NOVO PEDIDO* 🎂\n\n`;
    
    mensagem += `📦 *PRODUTO*\n`;
    mensagem += `Tipo: ${pedido.tipoProduto.toUpperCase()}\n\n`;
    
    if (pedido.tipoProduto === 'bolo' && pedido.personalizacao) {
      const p = pedido.personalizacao;
      mensagem += `🎨 *PERSONALIZAÇÃO DO BOLO*\n`;
      mensagem += `Tamanho: ${p.tamanho}\n`;
      mensagem += `Forma: ${p.forma}\n`;
      mensagem += `Sabor da Massa: ${p.saborMassa}\n`;
      if (p.corMassa) mensagem += `Cor da Massa: ${p.corMassa}\n`;
      if (p.saborRecheio) mensagem += `Sabor do Recheio: ${p.saborRecheio}\n`;
      if (p.quantidadeRecheio) mensagem += `Quantidade de Recheio: ${p.quantidadeRecheio}\n`;
      if (p.tema) mensagem += `Tema: ${p.tema}\n`;
      if (p.topo) mensagem += `Topo: ${p.topo}\n`;
      if (p.gliter !== undefined) mensagem += `Gliter: ${p.gliter ? 'Sim' : 'Não'}\n`;
      mensagem += `\n`;
    }
    
    mensagem += `👤 *CLIENTE*\n`;
    mensagem += `Nome: ${cliente.nomeCompleto}\n`;
    mensagem += `Contato: ${cliente.contato}\n`;
    if (cliente.endereco) mensagem += `Endereço: ${cliente.endereco}\n`;
    if (cliente.dataAniversario) {
      const data = new Date(cliente.dataAniversario).toLocaleDateString('pt-BR');
      mensagem += `Data de Aniversário: ${data}\n`;
    }
    mensagem += `\n`;
    
    mensagem += `📍 *ENTREGA E PAGAMENTO*\n`;
    mensagem += `Forma de Entrega: ${pedido.formaEntrega}\n`;
    mensagem += `Forma de Pagamento: ${pedido.formaPagamento}\n`;
    if (pedido.dataEntrega) {
      const data = new Date(pedido.dataEntrega).toLocaleDateString('pt-BR');
      mensagem += `Data de Entrega: ${data}\n`;
    }
    mensagem += `\n`;
    
    if (pedido.observacoes) {
      mensagem += `📝 *OBSERVAÇÕES*\n${pedido.observacoes}\n\n`;
    }
    
    mensagem += `🆔 Pedido #${pedido.id}`;
    
    return encodeURIComponent(mensagem);
  }

  static gerarLinkWhatsApp(pedido, numeroWhatsApp) {
    const mensagem = this.gerarMensagemWhatsApp(pedido);
    return `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  }
}

export default PedidoService;