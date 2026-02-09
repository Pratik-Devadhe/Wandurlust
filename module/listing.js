const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new mongoose.Schema({
    title : String,
    description : String,
    image: {
    url : String ,
    filename : String,
  },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
          type : Schema.Types.ObjectId,
          ref : "Review"
        },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
}

}); 

const Listing = mongoose.model("Listing" , schema);

module.exports = Listing;