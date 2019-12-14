const
    glob = require('glob'),
    paths = require('../defaults/defaults').paths;

const getPaths = (pattern) => {
    return glob.sync(pattern);
}

const initConfig = () => {
    
    let config = {}
    if(process.env.NODE_ENV === "dev") {
        config.models = getPaths(paths.devPaths.models);
        config.routes = getPaths(paths.devPaths.routes);
        config.accessLists = getPaths(paths.devPaths.accessLists);
    } else {
        config.models = getPaths(paths.prodPaths.models);
        config.routes = getPaths(paths.prodPaths.routes);
        config.accessLists = getPaths(paths.prodPaths.accessLists);
    }

    return config;
}

module.exports = initConfig();
