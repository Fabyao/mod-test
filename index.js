const app = require('./server/app');
const serverConfig = require('./server/config/server')

app.listen(serverConfig.port, () => {   
    console.log('click on http://localhost:' + serverConfig.port);
});