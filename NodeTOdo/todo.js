const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
let todos = [];

function removeAtIndex(arr, index) {
    let newArray = [];
    for (let i = 0; i < newArray.length; i++) {
        if (i !== index) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

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
app.post('/todos', (req, res) => {
    const newtodo = {
        id: c,
        title: req.body.title,
        description: req.body.description
    };
    c = c + 1;
    todos.push(newtodo);
    res.status(201).json(newtodo);

});

//delete

app.delete('/todos/:id', (req, res) => {
    const todoIndex = FindIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    }
    else {
        todos = removeAtIndex(todos, todoIndex);
        res.status(200).send();
    }
});

// for all other routes, return 404
app.use((req, res, next) => {
    res.status(404).send();
});

module.exports = app;
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
