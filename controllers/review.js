const Listing = require("../module/listing.js");
const Review = require('../module/review.js');

module.exports.addReview = async (req, res) => {
  
  let {id} = req.params;

  let { rating , comment} = req.body;
  let author = res.locals.currentUser._id;

  let listing = await Listing.findById(id);
  let review = new Review({rating ,comment , author , listing : listing.id });
  
  await review.save();

  listing.reviews.push(review._id);
  await listing.save();

  req.flash("success" , "review added");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteReview = async (req, res)=>{
    let {reviewId , listingId } = req.params;
    // Remove review reference from listing
    await Listing.findByIdAndUpdate(listingId, {
      $pull: { reviews: reviewId }
    });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success" , "Review Deleted");
    res.redirect(`/listings/${listingId}`);

  
};