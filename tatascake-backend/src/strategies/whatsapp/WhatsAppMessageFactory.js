import PedidoCompletoMessageTemplate from './templates/PedidoCompletoMessageTemplate.js';

class WhatsAppMessageFactory {
  static criar(pedido) {
    return new PedidoCompletoMessageTemplate(pedido);
  }

  static criarPorTipo(pedido, tipo = 'completo') {
    switch (tipo) {
      case 'completo':
        return new PedidoCompletoMessageTemplate(pedido);
      default:
        return new PedidoCompletoMessageTemplate(pedido);
    }
  }
}

export default WhatsAppMessageFactory;