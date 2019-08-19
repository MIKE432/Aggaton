const
    glob = require('glob'),
    paths = require('../defaults/defaults').paths;

const getPaths = (pattern) => {
    console.log(pattern)
    return glob.sync(pattern);
}

const initConfig = () => {
    
    let config = {}

    config.models = getPaths(paths.models);
    config.routes = getPaths(paths.routes);
    return config;
}

module.exports = initConfig();
