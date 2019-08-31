const
    userService = require('../services/userService');

exports.saveUser = (req, res) => {
    //nie chcemy zeby zwracało nam obiekt który zapisaliśmy więc wysyłamy 200 jesli wszystko bedzie ok
    try {
        await userService.saveUser(req.body);
        res.sendStatus(200);
    } catch(err) {
        return res.sendStatus(400);
    }
    
}