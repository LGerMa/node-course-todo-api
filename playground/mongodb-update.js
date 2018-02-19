//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const myDataBase = db.db('TodoApp');

  //findOneAndUpdate

  /*myDataBase.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a88f1fcf24296fc5643b4a1')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  myDataBase.collection('Users').findOneAndUpdate({
    name: 'Luis'
  }, {
    $set: {
      name: 'LuisGerardo'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
