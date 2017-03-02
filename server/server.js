const express=require('express');
const _ =require('lodash');
const bodyParser=require('body-parser');

var{ObjectID}=require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {mongoose}=require('./db/mongoose');

var app=express();
const port=process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);
    })
})

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send('Id not found');
        }
        res.send({todo});
    },(e)=>{
        return res.status(404).send();
    })
})

app.post('/users',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    var user=new User(body);
    user.save().then(()=>{
       return user.generateAuthToken();
       // res.send(user);   
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

app.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

module.exports={
    app
}