const mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
    name: String,
    _id_message: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Chat'
    }
});

mongoose.model('Room', roomSchema);