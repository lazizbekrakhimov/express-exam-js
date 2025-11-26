export async function successRes(res, data, message = 'finded', statusCode = 200){
    return res.status(statusCode).json({
        statusCode,
        message: `Movie ${message} successfully`,
        data
    })
}