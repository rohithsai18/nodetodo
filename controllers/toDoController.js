var todoModel = require('../models/modeltodo');


module.exports = function(app){
    
    app.get('/api/setuptodos',function(req,res){
        var starterToDo =[
            {
                username:'test',
                todo:'drink milk',
                isDone:false,
                hasAttachment:false
            
            },
            {
                username:'test',
                todo:'feed dog',
                isDone:false,
                hasAttachment:false
            
            }
        ]
    
        todoModel.create(starterToDo,function(err,results){
            res.send(results);
        });
    
    });
    
    

}