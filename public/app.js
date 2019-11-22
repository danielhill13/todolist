
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
    
    $('.list').on('click', 'span', function(){
        removeTodo($(this).parent());
    })
})

function removeTodo(todo){
    var theId = todo.data('id');
    $.ajax({
        method: "DELETE",
        url: '/api/todos/' + theId
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}



function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
})
}
function createTodo(){
    var usrInput = $('#todoInput').val()
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo){
        $('#todoInput').val("")
    addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}
function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>')
    newTodo.data('id', todo._id);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

// function deleteTodo(todo){
//     $.
// }
