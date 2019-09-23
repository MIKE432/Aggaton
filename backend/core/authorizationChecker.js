exports.isAllowed = acl => (req, res, next) => {
    const userTypes = (req.user) ? req.user.userTypes : ['guest'];
    if(userTypes[0] === 'guest') {
        return res.sendStatus(401)
    }

    acl.areAnyRolesAllowed(userTypes, req.route.path, req.method.toLowerCase(), (err, allowed) => {
        if(allowed) {
            next();
        } else if(err) {
            return res.sendStatus(500);
        } else {
            return res.sendStatus(403);
        }
    } )

}