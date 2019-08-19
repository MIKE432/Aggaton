const 
    server = require('./core/express'),
    paths = require('./core/initConfig'),
    db = require('./core/config/sequalize');

server.initExpress();