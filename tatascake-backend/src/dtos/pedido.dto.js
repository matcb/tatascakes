import Validator from '../utils/validators.js';

class CriarPedidoDTO {
  constructor(data) {
    this.itens = data.itens?.map(item => new ItemPedidoDTO(item)) || [];
    this.cliente = new ClientePedidoDTO(data.cliente);
  }

  validate() {
    const errors = [];

    if (!this.itens || this.itens.length === 0) {
      errors.push('Pedido deve ter pelo menos 1 item');
    } else {
      this.itens.forEach((item, index) => {
        const itemErrors = item.validate();
        if (itemErrors.length > 0) {
          errors.push(`Item ${index + 1}: ${itemErrors.join(', ')}`);
        }
      });
    }

    const clienteErrors = this.cliente.validate();
    if (clienteErrors.length > 0) {
      errors.push(...clienteErrors);
    }

    return errors;
  }
}

class ItemPedidoDTO {
  constructor(data) {
    this.tipoProduto = data?.tipoProduto;
    this.quantidade = data?.quantidade || 1;
    this.valorUnitario = data?.valorUnitario;
    this.personalizacao = data?.personalizacao;
  }

  validate() {
    const errors = [];

    const tipoError = Validator.required(this.tipoProduto, 'Tipo de produto');
    if (tipoError) errors.push(tipoError);

    const tipoInError = Validator.isIn(this.tipoProduto, ['bolo', 'docinho'], 'Tipo de produto');
    if (tipoInError) errors.push(tipoInError);

    if (this.quantidade < 1) {
      errors.push('Quantidade deve ser no mínimo 1');
    }

    if (this.tipoProduto === 'bolo') {
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

    if (this.tipoProduto === 'docinho') {
      if (!this.personalizacao?.quantidadeDocinhos) {
        errors.push('Quantidade de docinhos é obrigatória');
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
    this.formaEntrega = pedido.formaEntrega;
    this.formaPagamento = pedido.formaPagamento;
    this.dataEntrega = pedido.dataEntrega;
    this.observacoes = pedido.observacoes;
    this.valorTotal = pedido.valorTotal;
    this.criadoEm = pedido.criadoEm;
    this.atualizadoEm = pedido.atualizadoEm;
    
    if (pedido.itens) {
      this.itens = pedido.itens.map(item => ({
        id: item.id,
        tipoProduto: item.tipoProduto,
        quantidade: item.quantidade,
        valorUnitario: item.valorUnitario,
        personalizacao: item.personalizacao
      }));
    }
    
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
  ItemPedidoDTO,
  ClientePedidoDTO,
  PedidoResponseDTO,
  ListarPedidosResponseDTO
};