// abstract
class ApiError extends Error {
  constructor(code, type, message = "") {
    super(type, message);
    this.code = code;
    this.type = type;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }

  getBody() {
    return [
      {
        code: this.code,
        type: this.type,
        value: this.message,
      },
    ];
  }
}

module.exports = { ApiError };
