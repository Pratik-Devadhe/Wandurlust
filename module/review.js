const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = Schema({
    rating : {
        type : Number,
        min : 1,
        max: 5,
    },
    comment : String ,
    createdAt:{
        type : Date,
        default : Date.now(),
    },
    listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref : "User",
    }

});

let Review = mongoose.model("Review" , reviewSchema);


module.exports = Review;