const express = require('express'),
      cors = require('cors'),
      path = require('path'),
      passport = require('passport'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      PORT = 9000,
      paths = require('./initConfig'),
      userPassportConfiguration = require('../user/config/userPassportConfiguration');
      
const middleWares = (app) => {
    app.use(cors());
    app.use(express.static('public'));
    app.use(session({ secret: 'swimming' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    userPassportConfiguration(app, passport);
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
