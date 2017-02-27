//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id:new ObjectID('58b451aff6bd200357a94cea')
    //     },{
    //         $set:{
    //             completed:true
    //         }
    //     },{
    //         returnOriginal:false
    //     }).then((result)=>{
    //         console.log(result);
    //     })

    db.collection('Users')
        .findOneAndUpdate({
            _id:new ObjectID('58b44de2f6bd200357a94c04')
        },{
            $set:{
                name:'Suprince',
            },
            $inc:{
                age:1
            }
        },{
            returnOriginal:false
        }).then((result)=>{
            console.log(result);
        })

    //db.close();
}); 