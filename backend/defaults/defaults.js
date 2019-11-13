'use strict'

module.exports = {
    sequelizeDb: {
        databaseName: 'aggaton',
        username: 'mike',
        password: '1211',
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
}