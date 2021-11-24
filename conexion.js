var mongoose = require('mongoose');
const monngodb_url = 'mongodb://localhost:27017/Inmobiliaria?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
//const monngodb_url = 'mongodb://mongodbuser:mongodb_123456789@dbclase4a-shard-00-00.cvnpc.mongodb.net:27017,dbclase4a-shard-00-01.cvnpc.mongodb.net:27017,dbclase4a-shard-00-02.cvnpc.mongodb.net:27017/Inmobiliaria?ssl=true&replicaSet=atlas-dlxizx-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(monngodb_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("mongodb esta conectado");
}).catch((error) => {
    console.log("mongodb no esta conectado");
    console.log(error);
});