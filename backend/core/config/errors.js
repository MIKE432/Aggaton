class RequestError extends Error {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}


exports.BadRequestError = class BadRequestError extends RequestError {
    constructor(message) {
        super(400, message)
    }
}

exports.UnauthorizedError = class UnauthorizedError extends RequestError {
    constructor(message) {
        super(401, message)
    }
} 

exports.NotFoundError = class NotFoundError extends RequestError {
    constructor(message) {
        super(404, message)
    }
} 

exports.NotFoundError = class NotFoundError extends RequestError {
    constructor(message) {
        super(404, message)
    }
}