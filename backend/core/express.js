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
    app.use(bodyParser.json('type'));
    app.use(express.static('public'));
    app.use(session({ secret: 'swimming' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    userPassportConfiguration(app, passport);
}


const setHeaders = (app) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Content-Type"
        );
        next();
    });
}

const initRouters = (app) => {
    paths.routes.forEach(routerPath => {
        const appRouter = require(path.resolve(routerPath));
        appRouter(app);
    });
}

exports.initExpress = () => {
    let app = express();
    
    setHeaders(app);
    middleWares(app);    
    initRouters(app);

    app.listen(PORT, () => {
        
        console.log(`App is listening on port ${PORT}!`)
    })
}
