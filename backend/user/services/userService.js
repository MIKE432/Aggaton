const
    db = require('../../core/config/sequalize');

const mapUserToResponseModel = (user) => {
    return {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        isExpert: user.isExpert
    }
};

exports.getUser = async (id) => {
    const user = await db.user.findOne({ where: { id } });
    return mapUserToResponseModel(user);
}

exports.saveUser = async (user) => {
    console.log(db.user);
    return db.user.create({
        first_name: user.firstName,
        last_name: user.lastName,
        salt: 'dummy',
        email: user.email,
        password: user.password,
        is_expert: false
    });
}