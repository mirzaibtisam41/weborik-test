class AppResponse {
  constructor({statusCode, message, data = {}}) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = true;
  }
}

module.exports = AppResponse;
