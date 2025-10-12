import Validator from '../utils/validators.js';

class CriarClienteDTO {
  constructor(data) {
    this.nomeCompleto = data?.nomeCompleto?.trim();
    this.contato = data?.contato?.trim().replace(/\D/g, '');
    this.endereco = data?.endereco?.trim();
    this.dataAniversario = data?.dataAniversario;
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

    const dataError = Validator.isValidDate(this.dataAniversario, 'Data de aniversário');
    if (dataError) errors.push(dataError);

    return errors;
  }
}

class AtualizarClienteDTO {
  constructor(data) {
    if (data.nomeCompleto !== undefined) {
      this.nomeCompleto = data.nomeCompleto?.trim();
    }
    if (data.contato !== undefined) {
      this.contato = data.contato?.trim().replace(/\D/g, '');
    }
    if (data.endereco !== undefined) {
      this.endereco = data.endereco?.trim();
    }
    if (data.dataAniversario !== undefined) {
      this.dataAniversario = data.dataAniversario;
    }
  }

  validate() {
    const errors = [];

    if (this.nomeCompleto !== undefined) {
      const nomeMinError = Validator.minLength(this.nomeCompleto, 3, 'Nome completo');
      if (nomeMinError) errors.push(nomeMinError);
    }

    if (this.contato !== undefined) {
      const phoneError = Validator.isPhone(this.contato, 'Contato');
      if (phoneError) errors.push(phoneError);
    }

    return errors;
  }
}

class ClienteResponseDTO {
  constructor(cliente, incluirPedidos = false) {
    this.id = cliente.id;
    this.nomeCompleto = cliente.nomeCompleto;
    this.contato = cliente.contato;
    this.endereco = cliente.endereco;
    this.dataAniversario = cliente.dataAniversario;
    this.criadoEm = cliente.criadoEm;
    this.atualizadoEm = cliente.atualizadoEm;

    if (incluirPedidos && cliente.pedidos) {
      this.totalPedidos = cliente.pedidos.length;
      this.pedidos = cliente.pedidos.map(p => ({
        id: p.id,
        tipoProduto: p.tipoProduto,
        status: p.status,
        dataEntrega: p.dataEntrega,
        criadoEm: p.criadoEm
      }));
    }
  }
}

class ListarClientesResponseDTO {
  constructor(clientes) {
    this.total = clientes.length;
    this.clientes = clientes.map(c => new ClienteResponseDTO(c, true));
  }
}

export {
  CriarClienteDTO,
  AtualizarClienteDTO,
  ClienteResponseDTO,
  ListarClientesResponseDTO
};