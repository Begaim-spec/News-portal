 const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const chalk = require ('chalk')
require('dotenv').config()
const server = express()

const authRouter = require('./routers/authRoute')
const newsRouter = require('./routers/news')
const commentRouter = require('./routers/commentRoute')
 server.use(cors())
server.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(chalk.blue("DB IS CONNECTED")))
    .catch(() => console.log(chalk.red('DB IS NOT CONNECTED')))

server.use('/api/v1', authRouter)
server.use('/api/v1/news', newsRouter)
server.use('/api/v1/comments', commentRouter)



server.listen( 8000, () => {
    console.log(chalk.magenta(`Server is running`))
})

