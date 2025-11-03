import User from '../model/user.js'

class ServiceUser {
    FindAll() {
        return User.FindAll()
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

    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        await User.create({
            nome, email, senha, ativo
        })
    }

    async Update(id, nome, email, senha, ativos) {
        if (!id | !nome | !email | !senha) {
            throw new Error("Favor preencher todos campos")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`usuário ${id} não foi encontrado`)
        }

        user.nome = nome
        user.email = email
        user.senha = senha
        user.ativo = ativos

        await user.save()
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
}

export default new ServiceUser()