const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.MONGODB_URI)
const MongoClient = require('mongodb').MongoClient;
console.log('in the connect.js');


let _db;
console.log('in the connect.js');
const initDb = (callback) => {
    if (_db) {
      console.log('Db is already initialized!');
      return callback(null, _db);
    }
    
    console.log('Initializing database...'); // Add this line to log the initialization
    
    MongoClient.connect(process.env.MONGODB_URI)
      .then((client) => {
        console.log('second function');
        _db = client;
        callback(null, _db);
      })
      .catch((err) => {
        console.log('error');
        callback(err);
      });
    console.log('Done with connect.js');
  };
  

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
