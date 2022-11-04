class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(request){
        this.todos = this.todo_data.todo.push((request.body));
        return this.todo_data.todo;
    }

    delete_todo(req){
        for (var i =0; i < this.todo_data.todo.length; i++) {
             if (this.todo_data.todo[i].title == req.params.title) {
                 this.todo_data.todo.splice(i,1);
                 break;
             }
         }
         return this.todo_data.todo;
     }

     update_todo(request) {
        console.log('request---', request.params.id)
        for(let todoData of this.todo_data.todo) {
            if (todoData.title == request.params.id){
                todoData.description=request.body.description
            }
        }
        return this.todo_data.todo
    }
}


module.exports= todoservice;