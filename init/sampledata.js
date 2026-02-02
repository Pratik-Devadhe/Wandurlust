const sampleListings = [
  {
    title: "Heritage Haveli Stay",
    description:
      "Experience royal living in this beautifully restored heritage haveli with traditional architecture and modern comforts.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      filename: "heritage-haveli",
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Hilltop Wooden Cottage",
    description:
      "Wake up to misty mornings and panoramic hill views in this cozy wooden cottage surrounded by pine forests.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
      filename: "hilltop-cottage",
    },
    price: 1400,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Desert Camp",
    description:
      "Enjoy a unique desert experience with luxury tents, cultural performances, and starlit skies.",
    image: {
      url: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=60",
      filename: "desert-camp",
    },
    price: 2200,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Backwater Houseboat",
    description:
      "Relax on calm backwaters in a fully furnished traditional houseboat with authentic Kerala cuisine.",
    image: {
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60",
      filename: "houseboat-kerala",
    },
    price: 2000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Tea Plantation Bungalow",
    description:
      "Stay amidst lush tea gardens in this colonial-era bungalow with breathtaking valley views.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Modern City Studio",
    description:
      "A sleek and modern studio apartment located close to nightlife, cafes, and business hubs.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Riverside Bamboo Hut",
    description:
      "Eco-friendly bamboo hut by the riverside, perfect for nature lovers and digital detox.",
    image: {
      url: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Ziro Valley",
    country: "India",
  },
  {
    title: "Beachside Bohemian Villa",
    description:
      "Chill vibes, palm trees, and ocean breeze in this bohemian-style beach villa.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Luxury Sky Apartment",
    description:
      "High-rise luxury apartment offering skyline views, premium amenities, and city convenience.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Forest Treehouse Retreat",
    description:
      "Sleep among the treetops in this secluded treehouse surrounded by dense forest.",
    image: {
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Snow View Alpine Chalet",
    description:
      "Classic alpine chalet with snow-covered mountain views and cozy interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Santorini Cliffside Home",
    description:
      "Whitewashed home perched on cliffs offering breathtaking sunset views over the Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Japanese Zen Ryokan",
    description:
      "Minimalist ryokan with tatami rooms, hot springs, and peaceful Zen aesthetics.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Parisian Artist Apartment",
    description:
      "Charming apartment with vintage décor located near cafes, galleries, and historic streets.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Dubai Marina Luxury Suite",
    description:
      "Ultra-modern suite overlooking the marina with world-class amenities and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Safari Lodge Experience",
    description:
      "Stay close to nature in a luxury safari lodge with guided wildlife experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Masai Mara",
    country: "Kenya",
  },
  {
    title: "Iceland Glass Igloo",
    description:
      "Watch the Northern Lights from your bed in this transparent glass igloo.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Reykjavík",
    country: "Iceland",
  },
  {
    title: "New York Central Loft",
    description:
      "Stylish loft located minutes away from iconic landmarks and vibrant city life.",
    image: {
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Balinese Jungle Villa",
    description:
      "Private villa hidden in the jungle with an infinity pool and serene atmosphere.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Cape Town Ocean View Villa",
    description:
      "Luxury villa offering stunning ocean views and modern interiors near iconic beaches.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Cape Town",
    country: "South Africa",
  },
];

module.exports = { data: sampleListings };
