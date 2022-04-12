const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname: String,
    categories: String,
    authorName : String,
    years: Number,


}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users

