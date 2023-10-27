import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {

    if(error.type === "wrongData") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
    if(error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if(error.type === "incompleteData") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
    if(error.type === "sameCity") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "invalidDate") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
    
}