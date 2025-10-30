import ServiceUser from '../service/user.js'


class ControllerUser {

    FindAll(_, res) {
        try {
            const nomes = ServiceUser.FindAll()
            res.status(200).send({ nomes })
        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }

    async FindOne(req, res) {
        try {
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
            await ServiceUser.Create(nome, email, senha, ativo)
            res.status(201).send({})

        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }

    Update(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServiceUser.Update(id, nome)
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }

    Delete(req, res) {
        try {
            const id = req.params.id
            ServiceUser.Delete(id)
            res.status(204).send()

        } catch (error) {
            res.status(500).send({ error: error.message })

        }
    }
}

export default new ControllerUser()