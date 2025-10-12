import prisma from "../config/database.js";
import ClienteService from './clienteService.js';

class PedidoService {
  static async criarPedido(pedidoData) {
    let cliente = await ClienteService.buscarPorContato(pedidoData.cliente.contato);
    
    if (!cliente) {
      cliente = await ClienteService.criar(pedidoData.cliente);
    }
    
    let valorTotal = null;
    if (pedidoData.itens.some(item => item.valorUnitario)) {
      valorTotal = pedidoData.itens.reduce((total, item) => {
        return total + (item.valorUnitario * item.quantidade);
      }, 0);
    }
    
    const pedido = await prisma.pedido.create({
      data: {
        clienteId: cliente.id,
        formaEntrega: pedidoData.cliente.formaEntrega,
        formaPagamento: pedidoData.cliente.formaPagamento,
        dataEntrega: pedidoData.cliente.dataEntrega ? new Date(pedidoData.cliente.dataEntrega) : null,
        observacoes: pedidoData.cliente.observacoes || null,
        valorTotal: valorTotal,
        status: 'pendente',
        itens: {
          create: pedidoData.itens.map(item => ({
            tipoProduto: item.tipoProduto,
            quantidade: item.quantidade,
            valorUnitario: item.valorUnitario || null,
            personalizacao: item.personalizacao || null
          }))
        }
      },
      include: {
        cliente: true,
        itens: true
      }
    });
    
    return pedido;
  }

  static async listarPedidos() {
    return await prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: true
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
        cliente: true,
        itens: true
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
        formaEntrega: pedidoData.formaEntrega,
        formaPagamento: pedidoData.formaPagamento,
        dataEntrega: pedidoData.dataEntrega ? new Date(pedidoData.dataEntrega) : null,
        observacoes: pedidoData.observacoes,
        status: pedidoData.status
      },
      include: {
        cliente: true,
        itens: true
      }
    });
    
    return pedido;
  }

  static async atualizarStatus(id, status) {
    const pedido = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        cliente: true,
        itens: true
      }
    });
    
    return pedido;
  }

  static async deletarPedido(id) {
    await prisma.pedido.delete({
      where: { id: parseInt(id) }
    });
  }
}

export default PedidoService;