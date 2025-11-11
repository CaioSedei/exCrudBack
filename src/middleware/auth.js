import jwt from 'jsonwebtoken'
import ServiceUser from '../service/user.js'

const JWT_SEGREDO = "Batata"

export default async function authMiddleware(req, res, next) {
    try {

        const token = req.headers['authorization']

        if (!token) {
            throw new Error('Acesso negado!')
        }

        const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)

        const user = await ServiceUser.FindOne(decoded.id)
        req.headers.user = user
        // se der certo
        next()


    } catch (erro) {
        // se der errado
        res.status(403).send({
            data: null,
            msg: erro.message,
            error: true
        })
    }
}