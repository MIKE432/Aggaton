'use strict'

module.exports = {
    sequelizeDb: {
        databaseName: 'Aggaton',
        username: 'chris',
        password: 'chris',
        options: {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432
        }

    },
    paths: {
        prodPaths: {
            routes: '*/routes/*.js',
            models: '*/models/*.js',
            accessLists: '*/accessList.js'
        },
        devPaths: {
            routes: 'backend/*/routes/*.js',
            models: 'backend/*/models/*.js',
            accessLists: 'backend/*/accessList.js'
        }
    },
    redis: {
        host: 'localhost', 
        port: 6379
    },
    session: {
        secret: '128591cbb12a3b061d58b1b0240d0c06'
    }
}