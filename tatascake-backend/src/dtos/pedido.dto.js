import Validator from '../utils/validators.js';

class CriarPedidoDTO {
  constructor(data) {
    this.produto = new ProdutoDTO(data.produto);
    this.cliente = new ClientePedidoDTO(data.cliente);
  }

  validate() {
    const errors = [];
    errors.push(...this.produto.validate());
    errors.push(...this.cliente.validate());
    return errors;
  }
}

class ProdutoDTO {
  constructor(data) {
    this.tipo = data?.tipo;
    this.personalizacao = data?.personalizacao;
  }

  validate() {
    const errors = [];

    const tipoError = Validator.required(this.tipo, 'Tipo de produto');
    if (tipoError) errors.push(tipoError);

    const tipoInError = Validator.isIn(this.tipo, ['bolo', 'docinho'], 'Tipo de produto');
    if (tipoInError) errors.push(tipoInError);

    if (this.tipo === 'bolo') {
      if (!this.personalizacao) {
        errors.push('Personalização do bolo é obrigatória');
      } else {
        const p = this.personalizacao;
        
        const tamanhoError = Validator.required(p.tamanho, 'Tamanho do bolo');
        if (tamanhoError) errors.push(tamanhoError);

        const formaError = Validator.required(p.forma, 'Forma do bolo');
        if (formaError) errors.push(formaError);

        const saborError = Validator.required(p.saborMassa, 'Sabor da massa');
        if (saborError) errors.push(saborError);
      }
    }

    return errors;
  }
}

class ClientePedidoDTO {
  constructor(data) {
    this.nomeCompleto = data?.nomeCompleto?.trim();
    this.contato = data?.contato?.trim();
    this.endereco = data?.endereco?.trim();
    this.formaEntrega = data?.formaEntrega;
    this.formaPagamento = data?.formaPagamento;
    this.dataAniversario = data?.dataAniversario;
    this.dataEntrega = data?.dataEntrega;
    this.observacoes = data?.observacoes?.trim();
  }

  validate() {
    const errors = [];

    const nomeError = Validator.required(this.nomeCompleto, 'Nome completo');
    if (nomeError) errors.push(nomeError);

    const nomeMinError = Validator.minLength(this.nomeCompleto, 3, 'Nome completo');
    if (nomeMinError) errors.push(nomeMinError);

    const contatoError = Validator.required(this.contato, 'Contato');
    if (contatoError) errors.push(contatoError);

    const phoneError = Validator.isPhone(this.contato, 'Contato');
    if (phoneError) errors.push(phoneError);

    const entregaError = Validator.required(this.formaEntrega, 'Forma de entrega');
    if (entregaError) errors.push(entregaError);

    const pagamentoError = Validator.required(this.formaPagamento, 'Forma de pagamento');
    if (pagamentoError) errors.push(pagamentoError);

    const dataError = Validator.isFutureDate(this.dataEntrega, 'Data de entrega');
    if (dataError) errors.push(dataError);

    return errors;
  }
}

class PedidoResponseDTO {
  constructor(pedido) {
    this.id = pedido.id;
    this.status = pedido.status;
    this.tipoProduto = pedido.tipoProduto;
    this.personalizacao = pedido.personalizacao;
    this.formaEntrega = pedido.formaEntrega;
    this.formaPagamento = pedido.formaPagamento;
    this.dataEntrega = pedido.dataEntrega;
    this.observacoes = pedido.observacoes;
    this.criadoEm = pedido.criadoEm;
    this.atualizadoEm = pedido.atualizadoEm;
    
    if (pedido.cliente) {
      this.cliente = {
        id: pedido.cliente.id,
        nomeCompleto: pedido.cliente.nomeCompleto,
        contato: pedido.cliente.contato,
        endereco: pedido.cliente.endereco
      };
    }
  }
}

class ListarPedidosResponseDTO {
  constructor(pedidos) {
    this.total = pedidos.length;
    this.pedidos = pedidos.map(p => new PedidoResponseDTO(p));
  }
}

export {
  CriarPedidoDTO,
  ProdutoDTO,
  ClientePedidoDTO,
  PedidoResponseDTO,
  ListarPedidosResponseDTO
};