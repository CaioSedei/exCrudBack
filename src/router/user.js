import express from 'express'
import ControllerUser from '../controller/user.js'


const router = express.Router()




router.get('/users', ControllerUser.FindAll ) //pegar todos
router.get('/user/:id', ControllerUser.FindOne) //pegar um
router.post('/user', ControllerUser.Create) // cadastrar um
router.put('/user/:id', ControllerUser.Update) // alterar um
router.delete('/user/:id', ControllerUser.Delete) //deletar um


export default router
