const express = require('express')  

const {connectRabbitmq} = require('./rabbitmq.js')

const {send} = require('./rabbitmq.js')

const app = express()

connectRabbitmq()

app.use(express.json())

const port = 8900

app.get('/', (req, res) =>{
    res.send('Hello World! porta 8900')
})

app.post('/users', async (req, res) =>{
    await send(req.body)
    res.status(200).json({
        message:"Mensagem enviada com sucesso"
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})