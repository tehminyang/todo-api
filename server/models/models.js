

// var newTodo = new Todo({
//     text: 'cook dinner',
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: 'cook dinner',
//     completed: true,
//     completedAt: 123
// });

// var otherTodo = new Todo({
//     text: 'wash car',
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo');
// });



var newUser = new User({
    email: 'mekmek@gmail.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo');
});

