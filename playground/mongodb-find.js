// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id:new ObjectID('58b44a9ff6bd200357a94b22')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(error)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(error)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({
        name:'Suprince'
    }).toArray().then((item)=>{
        console.log(JSON.stringify(item,undefined,2));
    },(error)=>{
        console.log('Cannot find the data');
    })
    //db.close();
}); 