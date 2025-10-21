import ModelUser from '../model/user.js'

class ServiceUser {
    FindAll() {
        return ModelUser.FindAll()
    }

    FindOne(index) {
        //VERIFICAR SE O INDEX É VALIDO
        return ModelUser.FindOne(index)

    }

    Create(nome) {
        return ModelUser.Create(nome)

    }

    Update(index, nome) {
        //VERIFICAR SE O INDEX E NOME SÃO VALIDOS
        ModelUser.Update(index, nome)

    }

    Delete(index) {
        ModelUser.Delete(index)

    }
}

export default new ServiceUser()