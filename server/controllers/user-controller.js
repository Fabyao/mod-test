const User = require('../models/user');

module.exports = {

    create(req, res) {

        const userViewModel = req.body;

        User.create(userViewModel).then(driver => res.send(driver));
    }
}