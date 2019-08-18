const express = require('express'),
      cors = require('cors'),
      PORT = 9000,
      paths = require('./findPaths'),
      path = require('path');
      
const middleWares = (app) => {
    app.use(cors());
}

const initRouters = (app) => {
    paths.routes.forEach(routerPath => {
        const appRouter = require(path.resolve(routerPath));
        appRouter(app);
    });
}

exports.initExpress = () => {
    const app = express();

    middleWares(app);    
    initRouters(app);

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`)
    })
}
