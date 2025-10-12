import { WhatsAppMessageFactory } from '../strategies/whatsapp/index.js';

class WhatsAppService {
  static gerarMensagem(pedido, tipoTemplate = 'completo') {
    const strategy = WhatsAppMessageFactory.criarPorTipo(pedido, tipoTemplate);
    const mensagem = strategy.gerarMensagem();
    return encodeURIComponent(mensagem);
  }

  static gerarLink(pedido, numeroWhatsApp, tipoTemplate = 'completo') {
    const mensagem = this.gerarMensagem(pedido, tipoTemplate);
    
    const numeroLimpo = numeroWhatsApp.replace(/\D/g, '');
    
    return `https://wa.me/${numeroLimpo}?text=${mensagem}`;
  }

  static validarNumero(numero) {
    const numeroLimpo = numero.replace(/\D/g, '');
    
    if (numeroLimpo.length >= 10 && numeroLimpo.length <= 13) {
      return true;
    }
    
    return false;
  }
}

export default WhatsAppService;