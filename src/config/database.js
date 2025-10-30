import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db =  new Sequelize({
            database: 'ex_crud_back_node_jp',
            host:'localhost',
            username:'root',
            password:'',
            dialect:'mysql'
        })
    }
}

export default new Database()