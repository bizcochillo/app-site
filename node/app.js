'use strict';

const Hapi = require('@hapi/hapi');

const init = async() => {

    const server = Hapi.server({
        port: 8180,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello world from nodeJS!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(-1);
});

init();