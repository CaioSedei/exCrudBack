import ServiceUser from '../service/user.js'


class ControllerUser {

    async FindAll(req, res) {
        try {

            const nomes = await ServiceUser.FindAll()
            console.log(nomes)
            res.status(200).send({ nomes })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async FindOne(req, res) {
        try {
            console.log(req.headers.user)
            const id = req.params.id
            const user = await ServiceUser.FindOne(id)
            res.status(200).send({ user })

        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }

    async Create(req, res) {
        try {
            const { nome, email, senha, ativo } = req.body
            // console.log("tiu",nome)
            // console.log("tiuboddy", req.body.nome) EXEMPLO DE VERIFIÇÃO DE ERROS
            await ServiceUser.Create(nome, email, senha, ativo, 1)
            res.status(201).send({})

        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id
            const { nome, email, senha, ativo } = req.body
            ServiceUser.Update(id, nome, email, senha, ativo)
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceUser.Delete(id)
            res.status(204).send("usuario deletado com sucesso")

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceUser.Login(email, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }



    }

}

export default new ControllerUser()