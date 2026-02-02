const express = require('express');
const router = express.Router();
const {isLoggedIn , isOwner } = require('../middleware.js');
const listingController = require('../controllers/listing.js');
const multer = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({storage : storage});

// Show Listings

router.get("/" , listingController.showListings);



// Add new Lsitings 

router.get("/new-listing" , isLoggedIn , listingController.renderNewListingForm);

router.post("/new" ,  isLoggedIn , upload.single('image') , listingController.addNewListing);
// router.post("/new" , isLoggedIn , upload.single('image') , (req, res) =>{ res.send(req.file)});

// show each listing

router
    .route("/:id")
    .get(listingController.renderEachListing)                       // render the each listing
    .put(isOwner , listingController.editListing)                   // edit the listing
    .delete(isOwner , listingController.deleteListing);             // delete the listing



router.get("/:id/edit" , isOwner , listingController.renderEditForm);// render edit form

module.exports = router;