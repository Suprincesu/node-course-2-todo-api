const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='58b5179c33f5812a1e504a87';

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log(todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id',todo);
}).catch((e)=>{
    console.log(e);
});