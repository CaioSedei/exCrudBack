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

    Update(id, nome) {
        //VERIFICAR SE O id E NOME SÃO VALIDOS
        User.Update(id, nome)

    }

    Delete(id) {
        User.Delete(id)

    }
}

export default new ServiceUser()