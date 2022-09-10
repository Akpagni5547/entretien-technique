export class CustomAPIError extends Error {
  statusCode: number | string;
  constructor(message: string, statusCode: number | string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const createCustomError = (msg: string, statusCode: number | string) => {
  return new CustomAPIError(msg, statusCode);
};

// module.exports = { createCustomError, CustomAPIError };
