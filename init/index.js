require("dotenv").config();
const mongoose = require("mongoose");
const sampleData = require("./sampledata");
const Listing = require("../module/listing");
const User = require("../module/user");

async function seedDB() {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log("✅ MongoDB connected");

    // 🛑 Do NOT reseed if listings already exist
    const listingCount = await Listing.countDocuments();
    if (listingCount > 0) {
      console.log("ℹ️ Listings already exist, skipping seeding");
      await mongoose.connection.close();
      return;
    }

    // 🔍 find or create demo user
    let demoUser = await User.findOne({ username: "Pratik" });

    if (!demoUser) {
      demoUser = new User({
        username: "Pratik",
        email: "pratik@gmail.com"
      });
      await demoUser.save();
    }

    // ➕ attach owner to listings
    const listingsWithOwner = sampleData.data.map(obj => ({
      ...obj,
      owner: demoUser._id
    }));

    await Listing.insertMany(listingsWithOwner);
    console.log("🏠 Listings inserted with demo as owner");

    // ✅ clean exit for Docker
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding error:", err);
  }
}

seedDB();
