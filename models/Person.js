const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please enter your name']
    }, 
    foodType: {
        type: String
    }
});

module.exports = mongoose.model('Person', PersonSchema);