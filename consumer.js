const amqp = require('amqplib');

const init = async () => {
    const connection = await amqp.connect('amqp://localhost');
    const chanel= await connection.createChannel();

    const queue = 'Dicoding';

    await chanel.assertQueue(queue,{
        durable: true
    });

    chanel.consume(queue, (message) => {
        console.log(`[x] Received ${message.content.toString()}`);
    }, {
        noAck: true
    });
}


init();