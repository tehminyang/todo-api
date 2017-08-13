const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '598d58bc198698c33edfd415';
if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

var userID = '598d46fa1bd577a63483fd26';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {   
//     console.log('Todo', todo);
// })

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => {
    console.log(e);
})

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by ID', user);
}).catch((e) => {
    console.log(e);
})