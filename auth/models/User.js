const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        min: [4, 'Too short, min 4 characters are required'],
        min: [32, 'Too long, max 32 characters are required'],
    }
})