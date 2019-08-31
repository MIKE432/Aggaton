module.exports = (app) => {
    app.route('/signin').all()
        .post()
}