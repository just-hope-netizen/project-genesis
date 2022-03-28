const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>  {
    MongoClient.connect('mongodb+srv://hope:unemployment@cluster0.etvjj.mongodb.net/userDatabase?retryWrites=true&w=majority')
    .then(client =>{
        console.log('connected');
        _db = client.db()
        callback();
        
    }).catch(err => {
        console.log(err);
    });
};

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'database not connected'
};

exports.mongoConnect =  mongoConnect;
exports.getDb =  getDb;