const aclConstructor = require('acl');

exports.acl = new aclConstructor(new aclConstructor.memoryBackend());

exports.accessList = () => {
    exports.acl.allow([
        {
            roles: ['expert'],
            allows: [{
                resources: '/api/coin/new',
                permissions: '*'
            }]
        }
    ])
}