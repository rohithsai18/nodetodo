var config = require('./config');

module.exports ={
    getDataBaseConnectionString :function(){
        return 'mongodb://'+config.uname+':'+
        config.password+'@ds119675.mlab.com:19675/mongotodo'
    }

}