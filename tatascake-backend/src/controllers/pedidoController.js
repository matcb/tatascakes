import PedidoService from '../services/pedidoService.js';

class PedidoController {
  static async criar(req, res, next) {
    try {
      const pedido = await PedidoService.criarPedido(req.body);
      
      const numeroWhatsApp = process.env.WHATSAPP_NUMERO;
      const linkWhatsApp = PedidoService.gerarLinkWhatsApp(pedido, numeroWhatsApp);
      
      res.status(201).json({
        success: true,
        message: 'Pedido criado com sucesso!',
        pedido,
        whatsappLink: linkWhatsApp
      });
    } catch (error) {
      next(error);
    }
  }

  static async listar(req, res, next) {
    try {
      const pedidos = await PedidoService.listarPedidos();
      res.json({
        success: true,
        quantidade: pedidos.length,
        pedidos
      });
    } catch (error) {
      next(error);
    }
  }

  static async buscar(req, res, next) {
    try {
      const pedido = await PedidoService.buscarPedido(req.params.id);
      res.json({
        success: true,
        pedido
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const pedido = await PedidoService.atualizarPedido(req.params.id, req.body);
      res.json({
        success: true,
        message: 'Pedido atualizado com sucesso!',
        pedido
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const resultado = await PedidoService.deletarPedido(req.params.id);
      res.json({
        success: true,
        ...resultado
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarStatus(req, res, next) {
    try {
      const { status } = req.body;
      const pedido = await PedidoService.atualizarStatus(req.params.id, status);
      res.json({
        success: true,
        message: 'Status atualizado com sucesso!',
        pedido
      });
    } catch (error) {
      next(error);
    }
  }
}

export default PedidoController;