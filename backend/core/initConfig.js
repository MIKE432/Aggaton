const
    glob = require('glob'),
    paths = require('../defaults/defaults').paths;

const getPaths = (pattern) => {
    return glob.sync(pattern);
}

const initConfig = () => {
    
    let config = {}

    config.models = getPaths(paths.models);
    config.routes = getPaths(paths.routes);
    config.accessLists = getPaths(paths.accessLists);
    return config;
}

module.exports = initConfig();
