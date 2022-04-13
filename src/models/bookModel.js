const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required: true
    },
    authorName:String,  
    tags: [String],
    years:{
        type : Number,
        default : 2022,
    },
    stockAvailable : Boolean,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPage:Number,
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


