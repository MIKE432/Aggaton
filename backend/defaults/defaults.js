(function() {

    let defaults = {
        sequelizeDb: {
            databaseName: 'aggaton',
            username: 'postgres',
            password: 'Raszczuk145',
            options: {
                host: 'localhost',
                dialect: 'postgres',
                port: 5432
            }
        },
        paths: {
            routes: '*/routes/*.js',
            models: '*/models/*.js',
            accessLists: '*/accessList.js'
        },
        redis: {
            host: 'localhost', 
            port: 6379
        },
        session: {
            secret: '128591cbb12a3b061d58b1b0240d0c06'
        }
    };

    if(process.env.NODE_ENV === "dev") {
        const fs = require('fs')
        if(fs.existsSync(__dirname + "/defaults-local-override.js"))
            require("./defaults-local-override.js")(defaults)
    }

    module.exports = defaults;
})();

// module.exports = (defaults) => {
    
//     defaults.paths = {
//         routes: 'backend/*/routes/*.js',
//         models: 'backend/*/models/*.js',
//         accessLists: 'backend/*/accessList.js'
//     }

//     defaults.sequelizeDb =  {
//         databaseName: 'aggaton',
//         username: 'mike',
//         password: '1211',
//         options: {
//             host: 'localhost',
//             dialect: 'postgres',
//             port: 5432
//         }
//     }
// }
