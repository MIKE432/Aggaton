const aclConstructor = require('acl');

exports.acl = new aclConstructor(new aclConstructor.memoryBackend());

exports.accessList = () => {
    exports.acl.allow([
        {
            roles: ['expert'],
            allows: [{
                resources: '/api/coin/formdata',
                permissions: '*'
            }, {
                resources: '/api/coin/:id',
                permissions: '*'
            }, {
                resources: '/api/coin',
                permissions: '*'
            }, {
                resources: '/api/expertcoins',
                permissions: '*'
            }, {
                resources: '/api/coin/:id/reverse',
                permissions: '*'
            }, {
                resources: '/api/coin/:id/averse',
                permissions: '*'
            }, {
                resources: '/api/coin/new',
                permissions: '*'
            }]
        }
    ])
}