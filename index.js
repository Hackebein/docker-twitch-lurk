const tmi = require('tmi.js');

const opts = {
    identity: {
        id: `${process.env.id}`,
        client: 'q6batx0epp608isickayubi39itsckt',
        username: `${process.env.username}`,
        password: `${process.env.oauth}`,
    },
    connection: {
        reconnect: true,
        secure: true,
    },
    options: {
        debug: true,
    },
    channels: `${process.env.channels}`.split(','),
};

const client = new tmi.client(opts);

client.connect();
