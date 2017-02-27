// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection('Users').insertOne({
    //     name:'Suprince',
    //     age:24,
    //     location:'Patan'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert into users',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.close();
});