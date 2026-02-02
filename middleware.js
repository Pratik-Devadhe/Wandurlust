const Listing = require('./module/listing.js');
const Review = require('./module/review.js');

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    return res.redirect("/login");
  }
  
   next();
}


module.exports.savedRedirectUrl = (req ,res , next) =>{
    if(req.session.redirectUrl){
        res.locals.url = req.session.redirectUrl;
        console.log("url ->>>>>>> " , res.locals.url);
    }
    next();
}

module.exports.isOwner = async (req ,res , next) =>{
  let {id} = req.params;
  let list  = await Listing.findById(id);

  
   if(!list.owner.equals(res.locals.currentUser._id)){ 
    req.flash("error" , " you don't have permission to modify");
    return res.redirect(`/listings/${id}`);
   }


   next();
} 


module.exports.isReviewAuthor = async (req , res , next) =>{
      let {reviewId , listingId } = req.params;
      let review = await Review.findById(reviewId);

      if(!res.locals.currentUser._id.equals(review.author)){
            req.flash("error" , "you are not allowed to delete this review");
            return res.redirect(`/listings/${listingId}`);
      } 
     
      next();
}