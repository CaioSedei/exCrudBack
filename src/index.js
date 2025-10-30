import express from 'express'
import router from './router/user.js';
import database from './config/database.js';

const app = express();
app.use(express.json())

app.use('/api/v1', router)

const port = 3000;
database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info(`Server is runnig port ${port}`)
        })
    })
    .catch((e) => {
        console.log('não onectou com o banco' + e)
    }
    )


