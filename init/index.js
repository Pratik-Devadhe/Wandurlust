const mongoose = require('mongoose');
const sampleData = require('./sampledata');
const Listing = require('../module/listing');
const User = require('../module/user');

main()
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

async function insertData() {
  // ❌ clear old listings
  await Listing.deleteMany({});

  // 🔍 check if demo user already exists
  let demoUser = await User.findOne({ username: "Pratik" });

  // ➕ create demo user if not exists
  if (!demoUser) {
    demoUser = new User({
      username: "Pratik",
      email: "pratik@gmail.com"   // required if your schema needs it
    });

    await demoUser.save();
    
  }

  // ✅ attach demo user's ObjectId to all listings
  const listingsWithOwner = sampleData.data.map(obj => ({
    ...obj,
    owner: demoUser._id
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("🏠 Listings inserted with demo as owner");
}

insertData();
