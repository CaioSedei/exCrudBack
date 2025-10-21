import ServiceUser from '../service/user.js'


class ControllerUser {

    FindAll(_, res) {
        try {
            const nomes = ServiceUser.FindAll()
            res.status(200).send({ nomes })
        } catch (error) {
            res.status(500).send({ error: error.menssage })

        }
    }

    FindOne(req, res) {
        try {
            const index = req.params.index
            const nome = ServiceUser.FindOne(index)
            res.status(200).send({ nome })

        } catch (error) {
            res.status(500).send({ error: error.menssage })

        }
    }

    Create(req, res) {
        try {
            const nome = req.body.nome
            // console.log("tiu",nome)
            // console.log("tiuboddy", req.body.nome) EXEMPLO DE VERIFIÇÃO DE ERROS
            ServiceUser.Create(nome)
            res.status(201).send({})

        } catch (error) {
            res.status(500).send({ error: error.menssage })

        }
    }

    Update(req, res) {
        try {
            const index = req.params.index
            const nome = req.body.nome
            ServiceUser.Update(index, nome)
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.menssage })

        }
    }

    Delete(req, res) {
        try {
            const index = req.params.index
            ServiceUser.Delete(index)
            res.status(204).send()

        } catch (error) {
            res.status(500).send({ error: error.menssage })

        }
    }
}

export default new ControllerUser()