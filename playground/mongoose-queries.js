const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5add43bdd4e96d2107f727fd1';

if (!ObjectID.isValid(id)){
  console.log('Id not valid');
}*/
/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => {
  console.log(e);
});*/


var user_id = '5ad7f5ee8768061c982fc6d4';

User.findById(user_id).then((user) => {
  if (!user){
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
});

/*User.find({
  _id:user_id
}).then((users) => {
  console.log('Users', users)
});*/
