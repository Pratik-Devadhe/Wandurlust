const Listing = require('../module/listing.js');


module.exports.showListings = async(req, res) =>{

  const Listings = await Listing.find({}).populate("owner");
  // console.log(res.locals.currentUser);
  res.render("index.ejs" , {Listings});
};


module.exports.renderNewListingForm = (req , res) =>{
  res.render("add.ejs");
};

module.exports.addNewListing = async (req , res)=>{

    let { title , description , price , location ,country } = req.body;

    if (!req.file) {
    req.flash("error", "Image upload failed");
    return res.redirect("/listings");
  }

    let url = req.file.path;
    let filename = req.file.filename;

    const image = { url , filename };

    const owner = res.locals.currentUser._id;

    let newListing = new Listing({title, description , image , price , location ,country ,  owner });

    await newListing.save();

    res.redirect("/listings");

};

module.exports.renderEachListing = async (req, res , next) =>{
 try{
   let { id } = req.params;
  const list = await Listing.findById(id)
  .populate("owner")
  .populate({
    path: "reviews",
    populate: {
      path: "author",
      select: "username"
    }
  });


  if(!list) {
    next(new ExpressErrorError(500 , "mongoose error"));
  }

  res.render("show.ejs",{list});
  
 }catch(err){
   next(err);
 }

};


module.exports.renderEditForm = async (req ,res)=>{
  
  let { id } = req.params;
  const list = await Listing.findById(id);
  
  res.render("edit.ejs" , {list});

};

module.exports.editListing = async (req  , res) =>{
      
      let {id} = req.params;
      let { listing } = req.body;

     await Listing.findByIdAndUpdate(id , listing , {new : true});
      
      res.redirect(`/listings/${id}`);
};


module.exports.deleteListing = async (req,res , next)=>{

      try{
        let {id}  = req.params;

      await Listing.findByIdAndDelete(id);
  
      res.redirect("/listings");
      }
      catch(err){
        next(err);
      }
};