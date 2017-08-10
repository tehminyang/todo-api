// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //         console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);    
    // });

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //         console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);    
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //         console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);    
    // });

    db.collection('Users').deleteMany({name: 'Tim Yang'}).then((result) => {
            console.log(result);
    }, (err) => {
        console.log('Unable to fetch Todos', err);    
    });

    db.collection('Users').findOneAndDelete({name: 'Jenn'}).then((result) => {
            console.log(result);
    }, (err) => {
        console.log('Unable to fetch Todos', err);    
    });

    // db.close();
});