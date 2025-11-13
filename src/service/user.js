import User from '../model/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "Batata"
const SALT = 10

class ServiceUser {

    FindAll() {
        return User.findAll()
    }

    async FindOne(id) {
        //VERIFICAR SE O id É VALIDO
        if (!id) {
            throw new Error('Favor informar o ID')
        }
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        return user

    }

    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCrip,
            ativo,
            permissao
        })
    }

    async Update(id, nome, email, senha,ativo) {
        const oldUser = await User.findByPk(id)
        oldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldUser.senha

        oldUser.nome = nome || oldUser.nome
        oldUser.email = email || oldUser.email
        oldUser.ativo = ativo || oldUser.ativo

        oldUser.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error("Informar ID valido")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`usuário ${id} não foi encontrado`)
        }

        await user.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }
        const user = await User.findOne({ where: { email } })

        if (
            !user
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign({ id: user.id, nome: user.nome, permissao: user.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )

    }
}

export default new ServiceUser()