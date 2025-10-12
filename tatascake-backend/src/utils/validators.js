class Validator {
  /**
   * Valida se um campo não está vazio
   */
  static required(value, fieldName) {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return `${fieldName} é obrigatório`;
    }
    return null;
  }

  /**
   * Valida tamanho mínimo de string
   */
  static minLength(value, min, fieldName) {
    if (value && value.length < min) {
      return `${fieldName} deve ter no mínimo ${min} caracteres`;
    }
    return null;
  }

  /**
   * Valida tamanho máximo de string
   */
  static maxLength(value, max, fieldName) {
    if (value && value.length > max) {
      return `${fieldName} deve ter no máximo ${max} caracteres`;
    }
    return null;
  }

  /**
   * Valida se valor está em uma lista
   */
  static isIn(value, allowedValues, fieldName) {
    if (value && !allowedValues.includes(value)) {
      return `${fieldName} deve ser um dos seguintes: ${allowedValues.join(', ')}`;
    }
    return null;
  }

  /**
   * Valida formato de telefone (10 ou 11 dígitos)
   */
  static isPhone(value, fieldName = 'Contato') {
    if (!value) return null;
    
    const cleaned = value.replace(/\D/g, '');
    if (!/^\d{10,11}$/.test(cleaned)) {
      return `${fieldName} deve ter 10 ou 11 dígitos`;
    }
    return null;
  }

  /**
   * Valida formato de email
   */
  static isEmail(value, fieldName = 'Email') {
    if (!value) return null;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return `${fieldName} deve ser um email válido`;
    }
    return null;
  }

  /**
   * Valida data não pode ser no passado
   */
  static isFutureDate(value, fieldName) {
    if (!value) return null;
    
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      return `${fieldName} não pode ser no passado`;
    }
    return null;
  }

  /**
   * Valida se data é válida
   */
  static isValidDate(value, fieldName) {
    if (!value) return null;
    
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return `${fieldName} é uma data inválida`;
    }
    return null;
  }

  /**
   * Valida número mínimo
   */
  static min(value, minValue, fieldName) {
    if (value !== undefined && value !== null && value < minValue) {
      return `${fieldName} deve ser no mínimo ${minValue}`;
    }
    return null;
  }

  /**
   * Valida número máximo
   */
  static max(value, maxValue, fieldName) {
    if (value !== undefined && value !== null && value > maxValue) {
      return `${fieldName} deve ser no máximo ${maxValue}`;
    }
    return null;
  }

  /**
   * Valida se é um número
   */
  static isNumber(value, fieldName) {
    if (value !== undefined && value !== null && isNaN(Number(value))) {
      return `${fieldName} deve ser um número`;
    }
    return null;
  }

  /**
   * Valida URL
   */
  static isUrl(value, fieldName = 'URL') {
    if (!value) return null;
    
    try {
      new URL(value);
      return null;
    } catch {
      return `${fieldName} deve ser uma URL válida`;
    }
  }

  /**
   * Valida CPF
   */
  static isCPF(value, fieldName = 'CPF') {
    if (!value) return null;
    
    const cpf = value.replace(/\D/g, '');
    
    if (cpf.length !== 11) {
      return `${fieldName} deve ter 11 dígitos`;
    }
    
    // Validação básica de CPF
    if (/^(\d)\1{10}$/.test(cpf)) {
      return `${fieldName} inválido`;
    }
    
    return null;
  }

  /**
   * Valida múltiplas regras e retorna array de erros
   */
  static validate(value, rules, fieldName) {
    const errors = [];
    
    for (const rule of rules) {
      const error = rule(value, fieldName);
      if (error) {
        errors.push(error);
      }
    }
    
    return errors;
  }
}

export default Validator;