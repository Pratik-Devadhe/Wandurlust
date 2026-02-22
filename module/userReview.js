const mongoose = require("mongoose");
const { Schema } = mongoose;

const userReviewSchema = new Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });  // adds createdAt & updatedAt

const UserReview = mongoose.model("UserReview", userReviewSchema);

module.exports = UserReview;