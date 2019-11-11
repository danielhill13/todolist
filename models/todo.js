const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

