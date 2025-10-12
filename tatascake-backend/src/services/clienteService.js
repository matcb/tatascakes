import prisma from '../config/database.js';

class ClienteService {
  static async criar(clienteData) {
    const cliente = await prisma.cliente.create({
      data: {
        nomeCompleto: clienteData.nomeCompleto,
        contato: clienteData.contato,
        endereco: clienteData.endereco,
        dataAniversario: clienteData.dataAniversario ? new Date(clienteData.dataAniversario) : null
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
    const contatoLimpo = contato.replace(/\D/g, '');
    
    return await prisma.cliente.findFirst({
      where: { contato: contatoLimpo },
      include: {
        pedidos: true
      }
    });
  }

  static async atualizar(id, clienteData) {
    const dataToUpdate = {};
    
    if (clienteData.nomeCompleto !== undefined) dataToUpdate.nomeCompleto = clienteData.nomeCompleto;
    if (clienteData.contato !== undefined) dataToUpdate.contato = clienteData.contato;
    if (clienteData.endereco !== undefined) dataToUpdate.endereco = clienteData.endereco;
    if (clienteData.dataAniversario !== undefined) {
      dataToUpdate.dataAniversario = clienteData.dataAniversario ? new Date(clienteData.dataAniversario) : null;
    }

    const cliente = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: dataToUpdate
    });
    
    return cliente;
  }

  static async deletar(id) {
    const cliente = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
      include: { pedidos: true }
    });

    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }

    if (cliente.pedidos.length > 0) {
      throw new Error('Não é possível deletar cliente com pedidos. Delete os pedidos primeiro.');
    }

    await prisma.cliente.delete({
      where: { id: parseInt(id) }
    });
  }
}

export default ClienteService;