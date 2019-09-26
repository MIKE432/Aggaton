const
    db = require('../../core/config/sequalize'),
    Crypto = require('crypto-js'),
    crypto = require('crypto');
    

exports.mapUserToResponseModel = (user) => {
    const userTypes = [];

    if (user.is_expert) {
        userTypes.push('expert');
    }
      
    userTypes.push('user');

    console.log('a', user)
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        isExpert: user.is_expert,
        userTypes
    }
};

exports.getUser = async (email, raw) => {
    const user = await db.user.findOne({ where: { email } });
    if(!raw) {
        return exports.mapUserToResponseModel(user);
    }

    return user;
}

exports.saveUser = async (user) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const passwordAndSalt = user.password + salt;
    const password = Crypto.SHA256(passwordAndSalt).toString();

    const createdUser = await db.user.create({
        first_name: user.firstName,
        last_name: user.lastName,
        salt: salt,
        email: user.email,
        password: password,
        is_expert: false
    });
    
    return exports.mapUserToResponseModel(createdUser.dataValues)
}