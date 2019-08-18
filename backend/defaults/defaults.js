'use strict'

module.exports = {
    sequelizeDb: {
        databaseName: 'aggatondb',
        username: 'michal',
        password: '1211',
        options: {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432
        }

    },
    paths: {
        routes: 'backend/*/routes/*.js',
        models: 'backend/*/models/*.js',
    }
}