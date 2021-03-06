//On appelle tous les modules dont on a besoin
const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const database = require('./database/database')
var debug = require('debug')('backend_project:server');


const usersRouter = require('./routes/users');
const indexRouter = require('./routes/auth');

app.use('/', (req,res,next)=>{
    res.send('hello')
    next()
});
app.use('/users', usersRouter);

const port = normalizePort(process.env.PORT);
server.listen(port, () => {
    console.log(`server is running on ${port}`)
});
server.on('error', onError);
server.on('listening', onListening);

database.connect();
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
