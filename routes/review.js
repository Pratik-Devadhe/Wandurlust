const express = require('express');
const router = express.Router();
const {savedRedirectUrl , isLoggedIn , isReviewAuthor } = require('../middleware.js');
const Review = require('../module/review.js');
const Listing = require('../module/listing.js');
const reviewController = require('../controllers/review.js')

router.post("/:id" , isLoggedIn , savedRedirectUrl , reviewController.addReview );

router.delete("/:reviewId/:listingId" , isLoggedIn , isReviewAuthor , reviewController.deleteReview);

module.exports = router;