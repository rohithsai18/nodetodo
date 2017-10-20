var todoModel = require('../models/modeltodo');

var bodyParser = require('body-parser');
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));
    
    app.get('/api/todos/:uname',function(req,res){
        console.log('fdfds');
        console.log(req.params.uname)
        todoModel.find({ username : req.params.uname},function(err,todos){
            if(err) throw err;
            console.log(todos)
            res.send(todos);
        });
    });

    app.get('/api/todo/:id',function(req,res){
        console.log('fdfdfdss');
        console.log(req.params.id)
       
       
        todoModel.findById({_id : req.params.id},function(err,todos){
            if(err) throw err;
            res.send(todos);
        });
    });


    app.post('/api/todo',function(req,res){
        console.log(req);
        if(req.params.id){
            todoModel.findByIdAndUpdate(req.body.id,{
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            },function(err,todo){
                if(err) throw err;

                res.send('success');
            })
        }
        else{
            var newToDo = todoModel({
                username:'test',
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            });

            newToDo.save(function(err,todo){
                if(err) return err;
                res.send('success');
            });
        }

    });


    app.delete('/api/todo',function(req,res){

        todoModel.findByIdAndRemove(req.body.id,function(err){
            console.log(req.body.id);
            if(err) throw err;
            res.send('success');
        })

    })
}