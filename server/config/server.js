const path = require("path");

module.exports = {
    port:8080,
    publicFolder: path.join(__dirname, '../../', 'public'),    
    modulesFolder: path.join(__dirname, '../../', 'node_modules'),
    dbUri:'mongodb://localhost/angulartest'
}