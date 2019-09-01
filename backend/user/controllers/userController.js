const
    userService = require('../services/userService');

exports.saveUser = async (req, res) => {
    //nie chcemy zeby zwracało nam obiekt który zapisaliśmy więc wysyłamy 200 jesli wszystko bedzie ok
    console.log(req.headers)
    try {
        console.log(req.body);
        await userService.saveUser(req.body);
        console.log('done')
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
    
}