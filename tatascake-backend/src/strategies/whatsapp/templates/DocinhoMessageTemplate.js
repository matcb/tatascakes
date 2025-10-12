class DocinhoMessageTemplate {
  static formatar(item, index) {
    const p = item.personalizacao;
    let texto = `${index}. *DOCINHOS*`;
    
    texto += `\n`;
    
    if (p.quantidadeDocinhos) {
      texto += `   Quantidade: ${p.quantidadeDocinhos} unidades\n`;
    }
    
    if (p.sabor) {
      texto += `   Sabor: ${p.sabor}\n`;
    }
    
    if (p.tipos && Array.isArray(p.tipos) && p.tipos.length > 0) {
      texto += `   Tipos:\n`;
      p.tipos.forEach(tipo => {
        texto += `      - ${tipo}\n`;
      });
    }
    
    if (p.embalagem) {
      texto += `   Embalagem: ${p.embalagem}\n`;
    }
    
    if (p.decoracao) {
      texto += `   Decoracao: ${p.decoracao}\n`;
    }
    
    if (item.quantidade > 1) {
      texto += `   Lotes: ${item.quantidade}\n`;
    }
    
    if (item.valorUnitario) {
      const total = parseFloat(item.valorUnitario) * item.quantidade;
      texto += `   Valor: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    }
    
    return texto;
  }
}

export default DocinhoMessageTemplate;