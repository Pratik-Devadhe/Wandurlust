const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");


router.get("/", listingController.showListings);

router.get("/new-listing", isLoggedIn, listingController.renderNewListingForm);

router.post(
  "/new",
  isLoggedIn,
  upload.single("image"),
  listingController.addNewListing
);

router
  .route("/:id")
  .get(listingController.renderEachListing)
  .put(
    isLoggedIn,
    isOwner,
    listingController.editListing
  )
  .delete(
    isLoggedIn,
    isOwner,
    listingController.deleteListing
  );

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  listingController.renderEditForm
);

module.exports = router;
