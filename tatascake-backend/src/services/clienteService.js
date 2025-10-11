import prisma from "../config/database.js";

class ClienteService {
  static async criar(dados) {
    this.validarCliente(dados);
    
    const cliente = await prisma.cliente.create({
      data: {
        nomeCompleto: dados.nomeCompleto,
        contato: dados.contato,
        endereco: dados.endereco,
        dataAniversario: dados.dataAniversario ? new Date(dados.dataAniversario) : null
      }
    });
    
    return cliente;
  }

  static async listar() {
    return await prisma.cliente.findMany({
      include: {
        pedidos: true
      },
      orderBy: {
        criadoEm: 'desc'
      }
    });
  }

  static async buscar(id) {
    const cliente = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
      include: {
        pedidos: {
          orderBy: {
            criadoEm: 'desc'
          }
        }
      }
    });
    
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    
    return cliente;
  }

  static async buscarPorContato(contato) {
    return await prisma.cliente.findFirst({
      where: { contato },
      include: {
        pedidos: true
      }
    });
  }

  static async atualizar(id, dados) {
    const cliente = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: {
        nomeCompleto: dados.nomeCompleto,
        contato: dados.contato,
        endereco: dados.endereco,
        dataAniversario: dados.dataAniversario ? new Date(dados.dataAniversario) : null
      }
    });
    
    return cliente;
  }

  static async deletar(id) {
    await prisma.cliente.delete({
      where: { id: parseInt(id) }
    });
    
    return { message: 'Cliente deletado com sucesso' };
  }

  static validarCliente(dados) {
    if (!dados.nomeCompleto || !dados.contato) {
      throw new Error('Nome completo e contato são obrigatórios');
    }
  }
}

export default ClienteService;