const 
    express = require('./core/express'),
    paths = require('./core/findPaths'),
    db = require('./core/config/sequalize');

    console.log(db)

express.initExpress();