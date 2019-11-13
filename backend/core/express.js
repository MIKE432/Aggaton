const express = require('express'),
      cors = require('cors'),
      path = require('path'),
      passport = require('passport'),
      redis = require('redis'),
      session = require('express-session'),
      redisStore = require('connect-redis')(session),
      fileUpload = require('express-fileupload'),
      client = redis.createClient(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      cookieParser = require('cookie-parser'),
      PORT = 8080,
      paths = require('./initConfig'),
      userPassportConfiguration = require('../user/config/userPassportConfiguration'),
      config = require('../defaults/defaults');
      
const middleWares = (app) => {
    app.use(cors());
    app.use(bodyParser.json('type'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: config.session.secret,
        name: 'aggatonCookie',
        store: new redisStore({ 
            port: config.redis.port, 
            host: config.redis.port,
            client: client 
        }),
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: 1800000 }
    }));
    app.use(fileUpload({createParentPath: true}));
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

const initAllowLists = () => {
    paths.accessLists.forEach(allowListPath => {
        require(path.resolve(allowListPath)).accessList()
    })
}

exports.initExpress = () => {
    let app = express();
    
    setHeaders(app);
    middleWares(app);    
    initRouters(app);
    initAllowLists();

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`)
    })
}
