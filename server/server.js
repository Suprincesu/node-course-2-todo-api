const express=require('express');
const _ =require('lodash');
const bodyParser=require('body-parser');

var{ObjectID}=require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {mongoose}=require('./db/mongoose');

var app=express();

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

app.listen(3000,()=>{
    console.log('Started on port 3000');
})

module.exports={
    app
}