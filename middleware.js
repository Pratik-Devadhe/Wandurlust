const Listing = require("./module/listing.js");
const Review = require("./module/review.js");

// ================= LOGIN CHECK =================
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in first");
    return res.redirect("/login");
  }
  next();
};

// ================= SAVE REDIRECT URL =================
module.exports.savedRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.url = req.session.redirectUrl;
  }
  next();
};

// ================= LISTING OWNER CHECK =================
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;

  // ✅ Safety: user must exist
  if (!req.user) {
    req.flash("error", "You must be logged in");
    return res.redirect("/login");
  }

  const listing = await Listing.findById(id);

  // ✅ Safety: listing must exist
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  // ✅ Ownership check
  if (!listing.owner.equals(req.user._id)) {
    req.flash("error", "You don't have permission to modify this listing");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

// ================= REVIEW AUTHOR CHECK =================
module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId, listingId } = req.params;

  if (!req.user) {
    req.flash("error", "You must be logged in");
    return res.redirect("/login");
  }

  const review = await Review.findById(reviewId);

  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${listingId}`);
  }

  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You are not allowed to delete this review");
    return res.redirect(`/listings/${listingId}`);
  }

  next();
};
