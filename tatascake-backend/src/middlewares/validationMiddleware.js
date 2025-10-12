class ValidationError extends Error {
  constructor(errors) {
    super('Erro de validação');
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.errors = errors;
  }
}

const validateDTO = (DTOClass) => {
  return (req, res, next) => {
    try {
      const dto = new DTOClass(req.body);
      const errors = dto.validate();

      if (errors.length > 0) {
        throw new ValidationError(errors);
      }

      req.validatedData = dto;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          success: false,
          message: 'Erro de validação',
          errors: error.errors
        });
      }
      next(error);
    }
  };
};

export { validateDTO, ValidationError };