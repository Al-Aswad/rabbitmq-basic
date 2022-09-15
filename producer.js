const amqp = require('amqplib');

const init = async () => {
    const connection = await amqp.connect('amqp://localhost');
    const chanel= await connection.createChannel();

    const queue = 'Dicoding';
    const messsage= 'Selamat Belajar message broker dengan RabbitMQ';


    await chanel.assertQueue(queue,{
        durable: true
    });

    await chanel.sendToQueue(queue, Buffer.from(messsage));
    console.log(`[x] Sent ${messsage}`);

    setTimeout(() => {
        connection.close();
      }, 1000);
};


init();