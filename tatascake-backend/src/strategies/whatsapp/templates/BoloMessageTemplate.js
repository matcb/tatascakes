class BoloMessageTemplate {
  static formatar(item, index) {
    const p = item.personalizacao;
    let texto = `${index}. *BOLO*`;
    
    if (item.quantidade > 1) {
      texto += ` (x${item.quantidade})`;
    }
    
    texto += `\n`;
    texto += `   Tamanho: ${p.tamanho}\n`;
    texto += `   Forma: ${p.forma}\n`;
    texto += `   Massa: ${p.saborMassa}\n`;
    
    if (p.corMassa) {
      texto += `   Cor: ${p.corMassa}\n`;
    }
    
    if (p.saborRecheio) {
      texto += `   Recheio: ${p.saborRecheio}`;
      if (p.quantidadeRecheio) {
        texto += ` (${p.quantidadeRecheio})`;
      }
      texto += `\n`;
    }
    
    if (p.tema) {
      texto += `   Tema: ${p.tema}\n`;
    }
    
    if (p.topo) {
      texto += `   Topo: ${p.topo}\n`;
    }
    
    if (p.gliter !== undefined && p.gliter !== null) {
      texto += `   Gliter: ${p.gliter ? 'Sim' : 'Nao'}\n`;
    }
    
    if (item.valorUnitario) {
      const total = parseFloat(item.valorUnitario) * item.quantidade;
      texto += `   Valor: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    }
    
    return texto;
  }
}

export default BoloMessageTemplate;