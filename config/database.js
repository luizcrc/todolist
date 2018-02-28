const mongoose = require('mongoose');

// Só para retirar a msg de advertencia.
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo');