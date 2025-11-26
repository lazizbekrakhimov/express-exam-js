export function errRes(res, error) {
    const statusCode = error.statusCode;
    const message = error.message;
    return res.status(statusCode).json({
        statusCode,
        message
    })
}