const rabbitmq = require('amqplib')

let connection;
let channel;

async function connectRabbitmq() {
    connection = await rabbitmq.connect("amqp://rabbitmq:rabbitmq@rabbitmq_management:5672")

    channel = await connection.createChannel()

    console.log("conectou com rabbitmq")
}

async function send(pessoa) {
    const mensagem = await channel.sendToQueue("create_users", Buffer.from(JSON.stringify(pessoa)) )
}

module.exports = {connectRabbitmq, send}

