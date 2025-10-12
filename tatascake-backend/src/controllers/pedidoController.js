import PedidoService from '../services/pedidoService.js';
import WhatsAppService from '../services/whatsappService.js';
import { 
  PedidoResponseDTO, 
  ListarPedidosResponseDTO 
} from '../dtos/pedido.dto.js';

class PedidoController {
  static async criar(req, res, next) {
    try {
      const pedido = await PedidoService.criarPedido(req.validatedData);
      
      const numeroWhatsApp = process.env.WHATSAPP_NUMERO || '5521999999999';
      const whatsappLink = WhatsAppService.gerarLink(pedido, numeroWhatsApp);
      
      const response = new PedidoResponseDTO(pedido);
      
      res.status(201).json({
        success: true,
        message: 'Pedido criado com sucesso!',
        data: response,
        whatsappLink: whatsappLink
      });
    } catch (error) {
      next(error);
    }
  }

  static async listar(req, res, next) {
    try {
      const pedidos = await PedidoService.listarPedidos();
      const response = new ListarPedidosResponseDTO(pedidos);
      
      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async buscar(req, res, next) {
    try {
      const pedido = await PedidoService.buscarPedido(req.params.id);
      const response = new PedidoResponseDTO(pedido);
      
      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const pedido = await PedidoService.atualizarPedido(req.params.id, req.body);
      const response = new PedidoResponseDTO(pedido);
      
      res.json({
        success: true,
        message: 'Pedido atualizado com sucesso!',
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      await PedidoService.deletarPedido(req.params.id);
      
      res.json({
        success: true,
        message: 'Pedido deletado com sucesso!'
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarStatus(req, res, next) {
    try {
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({
          success: false,
          message: 'Status é obrigatório'
        });
      }

      const statusValidos = [
        'pendente', 
        'confirmado', 
        'em_producao', 
        'pronto', 
        'entregue', 
        'cancelado'
      ];

      if (!statusValidos.includes(status)) {
        return res.status(400).json({
          success: false,
          message: `Status inválido. Use um dos seguintes: ${statusValidos.join(', ')}`
        });
      }

      const pedido = await PedidoService.atualizarStatus(req.params.id, status);
      const response = new PedidoResponseDTO(pedido);
      
      res.json({
        success: true,
        message: 'Status atualizado com sucesso!',
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async gerarLinkWhatsApp(req, res, next) {
    try {
      const pedido = await PedidoService.buscarPedido(req.params.id);
      const numeroWhatsApp = process.env.WHATSAPP_NUMERO || '5521999999999';
      
      const whatsappLink = WhatsAppService.gerarLink(pedido, numeroWhatsApp);
      
      res.json({
        success: true,
        whatsappLink: whatsappLink
      });
    } catch (error) {
      next(error);
    }
  }
}

export default PedidoController;