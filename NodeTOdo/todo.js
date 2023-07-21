const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser).json();
let todos = [];
function FindIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i
        }
    }
    return -1;
}




// get element

app.get('/todos', (req, res) => {
    res.json(todos);
})


//create a todo
var c = 1;
app.post('/post', (req, res) => {
    const newtodo = {
        id: c,
        title: req.body.title,
        description: req.body.description
    };
    c = c + 1;
    todos.push(newTodo);
    req.status(201).json(newTodo);

});

