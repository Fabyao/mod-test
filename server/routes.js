const userController = require('./controllers/user-controller');
const serverConfig = require('./config/server')

module.exports = (app) => {
    app.post('/api/users', userController.create);

    app.get('*', function (req, res) {
        res.sendFile(serverConfig.publicFolder + '/index.html');      
    });
};