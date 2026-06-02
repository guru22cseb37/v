// Central data store for VarkalaVerse
// All Unsplash images - real photographs

export interface TouristPlace {
  id: string;
  name: string;
  type: "beach" | "temple" | "lake" | "adventure" | "viewpoint" | "hidden";
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  location: { lat: number; lng: number };
  address: string;
  scores: {
    friends: number;
    family: number;
    couples: number;
    solo: number;
    photography: number;
    adventure: number;
    nightlife: number;
    budget: number;
  };
  tags: string[];
  entryFee: string;
  bestTime: string;
  isHiddenGem?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  category: "budget" | "midrange" | "premium" | "luxury" | "hostel" | "homestay" | "resort";
  description: string;
  image: string;
  images: string[];
  pricePerNight: number;
  rating: number;
  reviews: number;
  location: { lat: number; lng: number };
  address: string;
  amenities: string[];
  distanceFromBeach: string;
  tags: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  category: "kerala" | "seafood" | "vegetarian" | "cafe" | "finedining" | "streetfood" | "budget";
  description: string;
  image: string;
  priceRange: string;
  rating: number;
  reviews: number;
  popularDishes: string[];
  location: { lat: number; lng: number };
  address: string;
  tags: string[];
  crowdLevel: "low" | "medium" | "high";
  openHours: string;
}

export interface ShoppingSpot {
  id: string;
  name: string;
  category: "souvenirs" | "handmade" | "crafts" | "clothing" | "beachwear" | "jewelry" | "ayurveda";
  description: string;
  image: string;
  priceRange: string;
  location: { lat: number; lng: number };
  address: string;
  tags: string[];
}

// === TOURIST PLACES ===
export const touristPlaces: TouristPlace[] = [
  {
    id: "varkala-beach",
    name: "Varkala Beach (Papanasam Beach)",
    type: "beach",
    description: "The iconic clifftop beach of Kerala – where dramatic red laterite cliffs meet the turquoise Arabian Sea.",
    longDescription: "Varkala Beach, also known as Papanasam, is one of the most unique beaches in India. Dramatic 30-meter high red laterite cliffs plunge directly into the turquoise Arabian Sea. The clifftop promenade is lined with cafes, yoga studios, and souvenir shops. The beach is believed to have holy properties – pilgrims have taken ritual dips here for centuries. Sunset here is legendary.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    ],
    location: { lat: 8.7379, lng: 76.7163 },
    address: "Varkala Beach, Kerala 695141",
    scores: { friends: 5, family: 4, couples: 5, solo: 5, photography: 5, adventure: 3, nightlife: 4, budget: 4 },
    tags: ["Iconic", "Sunset Point", "Swimming", "Cliff Walk", "Pilgrimage"],
    entryFee: "Free",
    bestTime: "November – March",
  },
  {
    id: "kappil-beach",
    name: "Kappil Beach & Backwaters",
    type: "beach",
    description: "A serene, less-crowded beach where a tranquil lake meets the Arabian Sea – a hidden paradise.",
    longDescription: "Kappil Beach is where the Edava-Nadayara Lake meets the Arabian Sea through a narrow strip of land. It's far less crowded than Varkala Beach and offers a completely different experience – you can swim in the lake, walk along the narrow strip between the sea and the lake, and watch fishermen cast their nets. Houseboats are available for lagoon cruises.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
    location: { lat: 8.7742, lng: 76.7035 },
    address: "Kappil, Varkala, Kerala 695143",
    scores: { friends: 4, family: 5, couples: 5, solo: 4, photography: 5, adventure: 3, nightlife: 2, budget: 5 },
    tags: ["Backwaters", "Houseboat", "Peaceful", "Lake", "Photography"],
    entryFee: "Free",
    bestTime: "October – April",
  },
  {
    id: "odayam-beach",
    name: "Odayam Beach",
    type: "beach",
    description: "A pristine, uncrowded beach – Varkala's best-kept secret for those who love solitude and raw nature.",
    longDescription: "Odayam Beach is Varkala's best-kept secret. Just 2km south of the main beach, it's surrounded by paddy fields, coconut trees, and village life. Almost no tourists, just the rhythm of waves and fisher folk. Perfect for morning yoga, quiet walks, and authentic Kerala village experiences.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    location: { lat: 8.7238, lng: 76.7088 },
    address: "Odayam, Varkala, Kerala 695141",
    scores: { friends: 4, family: 3, couples: 5, solo: 5, photography: 4, adventure: 3, nightlife: 1, budget: 5 },
    tags: ["Hidden Gem", "Uncrowded", "Peaceful", "Village Life", "Sunrise"],
    entryFee: "Free",
    bestTime: "November – February",
    isHiddenGem: true,
  },
  {
    id: "black-sand-beach",
    name: "Black Sand Beach",
    type: "beach",
    description: "A mysterious volcanic black-sand beach unlike anything else in Kerala.",
    longDescription: "The Black Sand Beach near Varkala is one of the most striking and unusual beaches on the Kerala coast. The sand here has a dark, volcanic-mineral color due to mineral deposits, creating an otherworldly backdrop. Very few tourists know about it, making it a perfect photography location.",
    image: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800&q=80"],
    location: { lat: 8.728, lng: 76.71 },
    address: "Near Varkala, Kerala",
    scores: { friends: 4, family: 3, couples: 5, solo: 5, photography: 5, adventure: 4, nightlife: 1, budget: 5 },
    tags: ["Unique", "Photography", "Hidden Gem", "Unusual"],
    entryFee: "Free",
    bestTime: "October – March",
    isHiddenGem: true,
  },
  {
    id: "janardanaswamy-temple",
    name: "Janardanaswamy Temple",
    type: "temple",
    description: "A 2,000-year-old sacred Vishnu temple perched atop a cliff – a spiritual crown of Varkala.",
    longDescription: "The Janardanaswamy Temple is one of the most important Vishnu temples in South India, believed to be over 2,000 years old. Perched atop the Varkala cliff, it offers spectacular views of the Arabian Sea. The temple is dedicated to Lord Vishnu (Janardana) and is an important pilgrimage center. The architecture, rituals, and spiritual atmosphere are awe-inspiring.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
    ],
    location: { lat: 8.7396, lng: 76.7178 },
    address: "Janardanaswamy Temple, Varkala, Kerala 695141",
    scores: { friends: 3, family: 5, couples: 4, solo: 5, photography: 4, adventure: 1, nightlife: 1, budget: 5 },
    tags: ["Ancient", "Spiritual", "Architecture", "Must Visit", "Heritage"],
    entryFee: "Free",
    bestTime: "All year (Dawn rituals best)",
  },
  {
    id: "kappil-lake",
    name: "Kappil Lake",
    type: "lake",
    description: "A tranquil backwater lake perfect for kayaking, boating, and spotting migratory birds.",
    longDescription: "Kappil Lake (also called Edava-Nadayara Lake) is a large, beautiful backwater lake just 6km from Varkala. It's a paradise for bird watchers – over 100 species of migratory birds visit during winter. You can hire a canoe or country boat and glide through the mangroves, watching otters and kingfishers. Highly recommended for nature lovers.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"],
    location: { lat: 8.7742, lng: 76.6944 },
    address: "Kappil Lake, Varkala, Kerala",
    scores: { friends: 4, family: 5, couples: 5, solo: 5, photography: 5, adventure: 3, nightlife: 1, budget: 4 },
    tags: ["Bird Watching", "Kayaking", "Boating", "Nature", "Peaceful"],
    entryFee: "Boat: ₹150–500",
    bestTime: "November – February",
  },
  {
    id: "paragliding-varkala",
    name: "Paragliding at Varkala Cliff",
    type: "adventure",
    description: "Soar over the Arabian Sea from Varkala's majestic cliffs – Kerala's most thrilling adventure experience.",
    longDescription: "Paragliding at Varkala Cliff is one of the most adrenaline-pumping experiences in Kerala. Launch from the clifftop and soar over the turquoise Arabian Sea, getting a bird's-eye view of the beach, cliffs, and coastline. Suitable for beginners with tandem flights. The experience typically lasts 10-20 minutes and the views are absolutely unforgettable.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"],
    location: { lat: 8.7379, lng: 76.7155 },
    address: "North Cliff, Varkala, Kerala",
    scores: { friends: 5, family: 3, couples: 5, solo: 5, photography: 5, adventure: 5, nightlife: 2, budget: 2 },
    tags: ["Adventure", "Thrill", "Aerial View", "Bucket List", "Photography"],
    entryFee: "₹1,500 – ₹2,500 per person",
    bestTime: "November – March",
  },
  {
    id: "surfing-varkala",
    name: "Surfing & Water Sports",
    type: "adventure",
    description: "Ride Varkala's consistent waves – ideal for beginners learning to surf on Kerala's coast.",
    longDescription: "Varkala has some of the best consistent waves for surfing in Kerala. Multiple surf schools operate on the beach offering lessons for complete beginners, intermediate surfers, and experienced wave riders. Beyond surfing, you can enjoy kayaking, stand-up paddleboarding, and dolphin-watching boat rides.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80"],
    location: { lat: 8.737, lng: 76.715 },
    address: "Varkala Beach, Kerala",
    scores: { friends: 5, family: 3, couples: 4, solo: 5, photography: 4, adventure: 5, nightlife: 3, budget: 3 },
    tags: ["Surfing", "Water Sports", "Kayaking", "Beginner Friendly", "Fun"],
    entryFee: "₹500 – ₹1,500 (lessons)",
    bestTime: "August – March",
  },
  {
    id: "sunset-point-cliff",
    name: "Helipad Sunset Point",
    type: "viewpoint",
    description: "Varkala's legendary secret sunset viewpoint – breathtaking 270° panoramas of the coast.",
    longDescription: "The Helipad Sunset Point (near the old helipad north of the cliff) is an insider secret among photographers. Arriving here 30 minutes before sunset rewards you with one of the most spectacular panoramic views of the Varkala coastline – a 270-degree sweep from the cliff edges to the horizon. Very few tourists know this spot.",
    image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80"],
    location: { lat: 8.7409, lng: 76.7144 },
    address: "North Cliff Helipad Area, Varkala",
    scores: { friends: 5, family: 4, couples: 5, solo: 5, photography: 5, adventure: 2, nightlife: 3, budget: 5 },
    tags: ["Hidden Gem", "Sunset", "Photography", "Panoramic View", "Romantic"],
    entryFee: "Free",
    bestTime: "October – March",
    isHiddenGem: true,
  },
  {
    id: "sivagiri-mutt",
    name: "Sivagiri Mutt",
    type: "temple",
    description: "A prominent ashram and pilgrimage center founded by the great social reformer Sree Narayana Guru.",
    longDescription: "Spread over 200 acres of undulating terrain, Sivagiri Mutt is the headquarters of the Sree Narayana Dharma Sangham. It houses the tomb of the great social reformer and sage Sree Narayana Guru. Thousands of pilgrims visit every year in yellow attire during the Sivagiri Pilgrimage in late December. It offers an incredibly peaceful atmosphere for meditation.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80"],
    location: { lat: 8.7497, lng: 76.7329 },
    address: "Sivagiri, Varkala, Kerala 695141",
    scores: { friends: 2, family: 5, couples: 3, solo: 5, photography: 4, adventure: 1, nightlife: 1, budget: 5 },
    tags: ["Pilgrimage", "Peaceful", "Ashram", "History"],
    entryFee: "Free",
    bestTime: "All year",
  },
  {
    id: "ponnumthuruthu-island",
    name: "Ponnumthuruthu Island",
    type: "lake",
    description: "The 'Golden Island' located amidst the backwaters, featuring a century-old Shiva-Parvathi temple.",
    longDescription: "Accessible only by a country boat from the Nedunganda village, Ponnumthuruthu Island (Golden Island) is a lush green paradise amidst the Anjengo backwaters. It is famous for a 100-year-old Shiva-Parvathi temple. The journey on the backwaters and the island's serene environment make it a perfect escape from the crowds.",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80"],
    location: { lat: 8.7058, lng: 76.7456 },
    address: "Nedunganda, Varkala, Kerala",
    scores: { friends: 4, family: 5, couples: 5, solo: 4, photography: 5, adventure: 3, nightlife: 1, budget: 4 },
    tags: ["Island", "Hidden Gem", "Temple", "Backwaters", "Boating"],
    entryFee: "Free (Boat ride extra)",
    bestTime: "October – March",
    isHiddenGem: true,
  },
  {
    id: "anjengo-fort",
    name: "Anjengo Fort & Lighthouse",
    type: "viewpoint",
    description: "A 17th-century British fort and towering lighthouse offering panoramic views of the coast.",
    longDescription: "Anjengo (Anchuthengu) Fort was established in 1695 by the British East India Company. It played a major role in the Anglo-Mysore wars. Today, it stands as a quiet historical monument. The nearby 130-foot tall Anjengo Lighthouse offers incredible, sweeping 360-degree views of the sea, backwaters, and dense coconut groves.",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80"],
    location: { lat: 8.6675, lng: 76.7654 },
    address: "Anchuthengu, Varkala, Kerala",
    scores: { friends: 4, family: 4, couples: 5, solo: 4, photography: 5, adventure: 3, nightlife: 1, budget: 5 },
    tags: ["History", "Fort", "Lighthouse", "Viewpoint", "Hidden Gem"],
    entryFee: "Fort: Free | Lighthouse: ₹20",
    bestTime: "October – April (Visit Lighthouse 3PM-5PM)",
    isHiddenGem: true,
  },
  {
    id: "jatayu-earth-center",
    name: "Jatayu Earth's Center",
    type: "adventure",
    description: "The world's largest bird sculpture perched on a massive rock, featuring an adventure park and cable car.",
    longDescription: "While technically 28km from Varkala, Jatayu Earth's Center is a must-visit day trip. It features the world's largest bird sculpture (Jatayu from the Ramayana) sprawling across a massive rock 1,000 feet above sea level. You reach the top via a scenic Swiss-made cable car. It also offers rock climbing, rappelling, and paintball.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"],
    location: { lat: 8.8653, lng: 76.8686 },
    address: "Chadayamangalam, Kollam, Kerala",
    scores: { friends: 5, family: 5, couples: 4, solo: 3, photography: 5, adventure: 5, nightlife: 1, budget: 2 },
    tags: ["World Record", "Cable Car", "Adventure Park", "Day Trip", "Monument"],
    entryFee: "₹400 (Entry) | ₹250 (Cable Car)",
    bestTime: "October – March",
  },
  {
    id: "edava-beach",
    name: "Edava Beach",
    type: "beach",
    description: "A stunning, untouched beach located north of Varkala, bordered by steep laterite cliffs and an estuary.",
    longDescription: "Edava Beach is an incredibly scenic and deserted beach just north of Kappil. The road from Varkala to Edava runs parallel to the Arabian Sea, offering one of the most beautiful coastal drives in India. You will rarely find other tourists here, making it perfect for private sunbathing and watching local fishermen.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"],
    location: { lat: 8.7610, lng: 76.7032 },
    address: "Edava, Varkala, Kerala",
    scores: { friends: 4, family: 4, couples: 5, solo: 5, photography: 5, adventure: 2, nightlife: 1, budget: 5 },
    tags: ["Deserted", "Peaceful", "Coastal Drive", "Estuary"],
    entryFee: "Free",
    bestTime: "November – February",
    isHiddenGem: true,
  },
  {
    id: "varkala-aquarium",
    name: "Varkala Aquarium",
    type: "hidden",
    description: "A unique 3D spiral aquarium showcasing the vibrant marine life of the Arabian Sea.",
    longDescription: "Located between Black Beach and Odayam Beach, the Varkala Aquarium features a continuous spiral walkway that winds past large tanks of exotic fish, sharks, and marine life found along the Kerala coast. It's an excellent, educational 1-hour diversion, particularly popular with families traveling with young children.",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80"],
    location: { lat: 8.7301, lng: 76.7111 },
    address: "Odayam Hatchery, Varkala, Kerala",
    scores: { friends: 2, family: 5, couples: 3, solo: 2, photography: 3, adventure: 1, nightlife: 1, budget: 4 },
    tags: ["Family Friendly", "Indoor", "Marine Life"],
    entryFee: "₹30",
    bestTime: "All year (Great for rainy days)",
  },
  {
    id: "varkala-cultural-center",
    name: "Varkala Cultural Center",
    type: "hidden",
    description: "Experience the magic of Kerala's traditional arts with nightly Kathakali and Kalaripayattu performances.",
    longDescription: "To truly experience Kerala, you must witness its arts. The Varkala Cultural Center near the North Cliff hosts mesmerizing evening performances. Watch the elaborate makeup process of Kathakali (classical dance-drama) followed by the powerful performance, or witness the gravity-defying ancient martial art of Kalaripayattu.",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80"],
    location: { lat: 8.7371, lng: 76.7168 },
    address: "North Cliff, Varkala, Kerala",
    scores: { friends: 4, family: 5, couples: 5, solo: 5, photography: 5, adventure: 1, nightlife: 3, budget: 3 },
    tags: ["Culture", "Dance", "Martial Arts", "Evening Activity", "Authentic"],
    entryFee: "₹350 – ₹500 per show",
    bestTime: "Performances start around 6:00 PM",
  },
  {
    id: "chilakoor-beach",
    name: "Chilakoor Beach",
    type: "beach",
    description: "Famous for its spectacular crimson sunsets and traditional fishing village ambiance.",
    longDescription: "Located about 15km from Varkala town, Chilakoor Beach is lined with casuarina groves and is completely off the traditional tourist map. It's an active fishing village where you can watch fishermen hauling massive nets. The drive to the beach through coastal villages is beautiful, and the sunsets here are considered some of the best in the district.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"],
    location: { lat: 8.7901, lng: 76.6800 },
    address: "Chilakoor, Varkala, Kerala",
    scores: { friends: 4, family: 4, couples: 5, solo: 4, photography: 5, adventure: 1, nightlife: 1, budget: 5 },
    tags: ["Sunset", "Fishing Village", "Offbeat", "Scenic Drive"],
    entryFee: "Free",
    bestTime: "October – March (Sunset)",
    isHiddenGem: true,
  }
];

// === HOTELS ===
export const hotels: Hotel[] = [
  {
    id: "taj-gateway-varkala",
    name: "The Gateway Hotel Janardhanapuram",
    category: "luxury",
    description: "5-star luxury atop the cliffs with panoramic sea views, infinity pool, and world-class spa.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    ],
    pricePerNight: 8500,
    rating: 4.8,
    reviews: 1240,
    location: { lat: 8.7388, lng: 76.7171 },
    address: "Cliff, Varkala, Kerala 695141",
    amenities: ["Infinity Pool", "Spa", "Restaurant", "WiFi", "AC", "Sea View", "Gym", "Bar"],
    distanceFromBeach: "0.1 km",
    tags: ["Luxury", "Sea View", "Infinity Pool", "5-Star"],
  },
  {
    id: "heaven-cliff-resort",
    name: "Heaven Cliff Resort",
    category: "premium",
    description: "Boutique cliff-top resort with stunning sea views, private balconies, and Ayurvedic treatments.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"],
    pricePerNight: 3800,
    rating: 4.6,
    reviews: 876,
    location: { lat: 8.7395, lng: 76.717 },
    address: "North Cliff, Varkala, Kerala",
    amenities: ["Sea View", "Ayurveda", "Restaurant", "WiFi", "AC", "Private Balcony"],
    distanceFromBeach: "0.2 km",
    tags: ["Boutique", "Sea View", "Ayurveda", "Romantic"],
  },
  {
    id: "sea-breeze-varkala",
    name: "Sea Breeze Beach Resort",
    category: "midrange",
    description: "A comfortable, well-reviewed resort steps from the beach with lush gardens.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"],
    pricePerNight: 1800,
    rating: 4.3,
    reviews: 654,
    location: { lat: 8.737, lng: 76.715 },
    address: "Beach Road, Varkala, Kerala",
    amenities: ["Pool", "Restaurant", "WiFi", "AC", "Parking", "Garden"],
    distanceFromBeach: "0.3 km",
    tags: ["Mid-Range", "Garden", "Pool", "Family Friendly"],
  },
  {
    id: "varkala-backpackers",
    name: "Varkala Backpackers Inn",
    category: "hostel",
    description: "The social hub for backpackers – mixed dorms, chill rooftop, and nightly events.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80"],
    pricePerNight: 350,
    rating: 4.5,
    reviews: 1100,
    location: { lat: 8.7375, lng: 76.7162 },
    address: "North Cliff, Varkala, Kerala",
    amenities: ["Common Kitchen", "Rooftop", "WiFi", "Lockers", "Events", "AC"],
    distanceFromBeach: "0.5 km",
    tags: ["Backpacker", "Social", "Budget", "Events"],
  },
  {
    id: "coconut-groove-homestay",
    name: "Coconut Grove Homestay",
    category: "homestay",
    description: "A warm, authentic Kerala homestay with home-cooked food and a family atmosphere.",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80"],
    pricePerNight: 800,
    rating: 4.7,
    reviews: 432,
    location: { lat: 8.736, lng: 76.713 },
    address: "Temple Road, Varkala, Kerala",
    amenities: ["Home Cooking", "Garden", "WiFi", "AC", "Local Experience"],
    distanceFromBeach: "0.8 km",
    tags: ["Homestay", "Authentic", "Home Food", "Local Experience"],
  },
  {
    id: "varkala-nature-resort",
    name: "Varkala Nature Resort",
    category: "resort",
    description: "An eco-resort with Kerala-style cottages surrounded by paddy fields and coconut groves.",
    image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80"],
    pricePerNight: 2500,
    rating: 4.4,
    reviews: 287,
    location: { lat: 8.74, lng: 76.71 },
    address: "Temple Junction, Varkala, Kerala",
    amenities: ["Yoga", "Ayurveda", "Organic Food", "Pool", "WiFi", "Garden"],
    distanceFromBeach: "1.2 km",
    tags: ["Eco-Resort", "Yoga", "Ayurveda", "Nature"],
  },
];

// === RESTAURANTS ===
export const restaurants: Restaurant[] = [
  {
    id: "abba-restaurant",
    name: "Abba Restaurant and Everest German Bakery",
    category: "finedining",
    description: "Famous for its bakery items, pizzas, and multi-cuisine menu right on the cliff.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    priceRange: "300-800",
    rating: 4.5,
    reviews: 1850,
    popularDishes: ["Apple Pie", "Wood-fired Pizza", "Lasagna", "German Bakery Items"],
    location: { lat: 8.7360, lng: 76.7160 },
    address: "North Cliff, Varkala",
    tags: ["Bakery", "Sea View", "Pizza", "Multi-cuisine"],
    crowdLevel: "high",
    openHours: "8:00 AM – 11:00 PM",
  },
  {
    id: "blue-water",
    name: "Blue Water Restaurant",
    category: "seafood",
    description: "Quiet dining experience overlooking the ocean, away from the bustling north cliff.",
    image: "https://images.unsplash.com/photo-1599058917215-fa77e31fdb4d?w=800&q=80",
    priceRange: "400-1000",
    rating: 4.4,
    reviews: 820,
    popularDishes: ["Kerala Fish Curry", "Prawn Roast", "Fresh Catch", "Cocktails"],
    location: { lat: 8.7240, lng: 76.7090 },
    address: "Odayam Beach, Varkala",
    tags: ["Quiet", "Sea View", "Seafood", "Romantic"],
    crowdLevel: "low",
    openHours: "7:30 AM – 10:30 PM",
  },
  {
    id: "cafe-del-mar",
    name: "Café del Mar",
    category: "finedining",
    description: "Fine dining with Mediterranean and Indian fusion cuisine – perfect for a romantic clifftop dinner.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    priceRange: "1500+",
    rating: 4.8,
    reviews: 445,
    popularDishes: ["Lobster Thermidor", "Kerala Sea Bass", "Truffle Risotto", "Mango Panna Cotta"],
    location: { lat: 8.7375, lng: 76.7162 },
    address: "North Cliff, Varkala",
    tags: ["Fine Dining", "Romantic", "Fusion", "Couple Friendly"],
    crowdLevel: "low",
    openHours: "6:00 PM – 11:00 PM",
  },
  {
    id: "clafouti",
    name: "Clafouti Restaurant",
    category: "seafood",
    description: "One of Varkala's most popular seaside dining spots offering incredible ocean views.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    priceRange: "300-900",
    rating: 4.5,
    reviews: 2300,
    popularDishes: ["Tandoori Fish", "Naan", "Prawn Masala", "Continental Breakfast"],
    location: { lat: 8.7350, lng: 76.7160 },
    address: "North Cliff, Varkala",
    tags: ["Popular", "Sea View", "Seafood", "Tandoori"],
    crowdLevel: "high",
    openHours: "7:00 AM – 11:00 PM",
  },
  {
    id: "coffee-temple",
    name: "Coffee Temple",
    category: "cafe",
    description: "The beloved clifftop cafe with panoramic sea views, great coffee, and a legendary breakfast.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    priceRange: "300-700",
    rating: 4.7,
    reviews: 2100,
    popularDishes: ["Banana Pancakes", "Shakshuka", "Filter Coffee", "Açaí Bowl"],
    location: { lat: 8.7375, lng: 76.7162 },
    address: "North Cliff, Varkala",
    tags: ["Sea View", "Breakfast", "Coffee", "Backpacker Favorite"],
    crowdLevel: "high",
    openHours: "7:00 AM – 10:00 PM",
  },
  {
    id: "darjeeling-cafe",
    name: "Darjeeling Cafe",
    category: "cafe",
    description: "Bohemian vibes, ambient lighting, excellent music, and great global cuisine.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    priceRange: "400-800",
    rating: 4.6,
    reviews: 1750,
    popularDishes: ["Momos", "Thukpa", "Pasta", "Cocktails"],
    location: { lat: 8.7380, lng: 76.7165 },
    address: "North Cliff, Varkala",
    tags: ["Bohemian", "Music", "Momos", "Chill Vibe"],
    crowdLevel: "high",
    openHours: "8:00 AM – 11:30 PM",
  },
  {
    id: "gods-own",
    name: "God's Own Country Kitchen",
    category: "kerala",
    description: "A staple for authentic Kerala cuisine served on banana leaves with a sea breeze.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?w=800&q=80",
    priceRange: "200-600",
    rating: 4.5,
    reviews: 1400,
    popularDishes: ["Kerala Sadya", "Beef Fry", "Meen Pollichathu", "Appam"],
    location: { lat: 8.7370, lng: 76.7163 },
    address: "North Cliff, Varkala",
    tags: ["Authentic", "Kerala Food", "Banana Leaf", "Spicy"],
    crowdLevel: "medium",
    openHours: "11:00 AM – 10:30 PM",
  },
  {
    id: "inda-cafe",
    name: "InDa Cafe",
    category: "cafe",
    description: "Tucked slightly away from the cliff, offering beautiful aesthetic interiors and excellent coffee.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    priceRange: "200-600",
    rating: 4.8,
    reviews: 950,
    popularDishes: ["Avocado Toast", "Cold Brew", "Smoothie Bowls", "Vegan Pizza"],
    location: { lat: 8.7390, lng: 76.7170 },
    address: "Kurakkanni, Varkala",
    tags: ["Aesthetic", "Vegan Friendly", "Coffee", "Quiet"],
    crowdLevel: "medium",
    openHours: "8:30 AM – 10:00 PM",
  },
  {
    id: "juice-shack",
    name: "The Juice Shack",
    category: "cafe",
    description: "Fresh tropical juices, smoothie bowls, and healthy snacks with a chilled-out vibe.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80",
    priceRange: "100-300",
    rating: 4.6,
    reviews: 1456,
    popularDishes: ["Watermelon Juice", "Mango Smoothie Bowl", "Avocado Toast", "Fresh Coconut"],
    location: { lat: 8.7375, lng: 76.7162 },
    address: "Cliff Road, Varkala",
    tags: ["Healthy", "Budget Friendly", "Juices", "Vegan"],
    crowdLevel: "medium",
    openHours: "8:00 AM – 8:00 PM",
  },
  {
    id: "puccini-tomaso",
    name: "Puccini Tomaso",
    category: "finedining",
    description: "The best authentic Italian pizzas and pastas in Varkala, featuring a real wood-fired oven.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    priceRange: "500-1200",
    rating: 4.7,
    reviews: 890,
    popularDishes: ["Margherita Pizza", "Ravioli", "Tiramisu", "Garlic Bread"],
    location: { lat: 8.7385, lng: 76.7165 },
    address: "North Cliff, Varkala",
    tags: ["Italian", "Pizza", "Wood Fired", "Pasta"],
    crowdLevel: "medium",
    openHours: "12:00 PM – 11:00 PM",
  },
  {
    id: "sea-rock-cafe",
    name: "Sea Rock Beach Restaurant",
    category: "seafood",
    description: "Fresh catch-of-the-day seafood grilled to perfection, right at the cliff edge.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    priceRange: "700-1500",
    rating: 4.5,
    reviews: 987,
    popularDishes: ["Grilled Tiger Prawns", "Fish Moilee", "Calamari", "Kerala Fish Curry"],
    location: { lat: 8.7375, lng: 76.7162 },
    address: "South Cliff, Varkala",
    tags: ["Seafood", "Sea View", "Grilled", "Fresh Catch"],
    crowdLevel: "high",
    openHours: "12:00 PM – 11:00 PM",
  },
  {
    id: "sreepadmam",
    name: "Sreepadmam Restaurant",
    category: "kerala",
    description: "Authentic Kerala cuisine served on banana leaves – the best local meals at budget prices.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    priceRange: "100-300",
    rating: 4.4,
    reviews: 756,
    popularDishes: ["Kerala Sadya (Feast)", "Fish Curry Rice", "Appam & Stew", "Payasam"],
    location: { lat: 8.7375, lng: 76.7162 },
    address: "Temple Junction, Varkala",
    tags: ["Authentic Kerala", "Budget", "Banana Leaf", "Local Favorite"],
    crowdLevel: "high",
    openHours: "7:00 AM – 9:00 PM",
  },
  {
    id: "sunset-restaurant",
    name: "Sunset Restaurant",
    category: "seafood",
    description: "Incredible views of the sun dipping into the Arabian sea, paired with excellent tandoori.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
    priceRange: "400-900",
    rating: 4.3,
    reviews: 1100,
    popularDishes: ["Tandoori Chicken", "Garlic Naan", "Tiger Prawns", "Mojito"],
    location: { lat: 8.7340, lng: 76.7160 },
    address: "North Cliff, Varkala",
    tags: ["Sunset View", "Tandoori", "Cocktails", "Seafood"],
    crowdLevel: "high",
    openHours: "8:00 AM – 11:00 PM",
  },
  {
    id: "trattorias",
    name: "Trattorias",
    category: "finedining",
    description: "A beautiful multi-cuisine restaurant known for large portions and friendly service.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    priceRange: "300-800",
    rating: 4.4,
    reviews: 1340,
    popularDishes: ["Sizzlers", "Pasta", "Kerala Meals", "Fruit Juices"],
    location: { lat: 8.7378, lng: 76.7160 },
    address: "North Cliff, Varkala",
    tags: ["Multi-cuisine", "Sea View", "Sizzlers"],
    crowdLevel: "medium",
    openHours: "8:00 AM – 11:00 PM",
  },
  {
    id: "white-rabbit",
    name: "White Rabbit Vegetarian Cafe",
    category: "cafe",
    description: "A colorful, vibrant cafe exclusively serving organic, vegetarian, and vegan food.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    priceRange: "200-500",
    rating: 4.7,
    reviews: 650,
    popularDishes: ["Vegan Burger", "Falafel Wrap", "Kombucha", "Gluten-Free Brownie"],
    location: { lat: 8.7390, lng: 76.7168 },
    address: "Kurakkanni Road, Varkala",
    tags: ["Vegan", "Vegetarian", "Organic", "Healthy"],
    crowdLevel: "medium",
    openHours: "9:00 AM – 9:30 PM",
  }
];

// === SHOPPING ===
export const shoppingSpots: ShoppingSpot[] = [
  {
    id: "cliff-market",
    name: "Cliff Market – Souvenir Lane",
    category: "souvenirs",
    description: "The main souvenir strip along the clifftop promenade.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    priceRange: "₹100 – ₹2,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "North Cliff, Varkala",
    tags: ["Souvenirs", "Clothing", "Magnets", "T-Shirts"],
  },
  {
    id: "anjuna-boutique",
    name: "Kerala Handlooms & Crafts",
    category: "handmade",
    description: "Authentic Kerala handloom sarees, kasavu fabrics, and traditional crafts.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    priceRange: "₹500 – ₹5,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Temple Road, Varkala",
    tags: ["Handloom", "Saree", "Kasavu", "Traditional"],
  },
  {
    id: "beach-bohemian",
    name: "Beach Bohemian",
    category: "beachwear",
    description: "Colorful beachwear, harem pants, bohemian dresses, and accessories.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    priceRange: "₹300 – ₹2,500",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Cliff Road, Varkala",
    tags: ["Beachwear", "Bohemian", "Summer Wear", "Trendy"],
  },
  {
    id: "kairali-ayurveda-shop",
    name: "Kairali Ayurveda Store",
    category: "ayurveda",
    description: "Pure Ayurvedic oils, herbal soaps, and traditional medicine products.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    priceRange: "₹150 – ₹3,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Temple Junction, Varkala",
    tags: ["Ayurveda", "Herbal", "Oil", "Natural"],
  },
  {
    id: "tibetan-market",
    name: "Tibetan Market",
    category: "crafts",
    description: "Authentic Tibetan singing bowls, vintage jewelry, and unique Buddhist antiques.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    priceRange: "₹500 – ₹10,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "North Cliff, Varkala",
    tags: ["Antiques", "Jewelry", "Singing Bowls", "Tibetan"],
  },
  {
    id: "temple-road-handicrafts",
    name: "Temple Road Handicrafts",
    category: "handmade",
    description: "Exquisite rosewood and sandalwood carvings, brass lamps, and traditional Kerala antiques.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    priceRange: "₹1,000 – ₹25,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Temple Junction, Varkala",
    tags: ["Antiques", "Wood Carving", "Brass", "Premium"],
  },
  {
    id: "varkala-spice-market",
    name: "Varkala Spice Emporium",
    category: "souvenirs",
    description: "Freshly harvested cardamom, black pepper, cinnamon, vanilla, and pure Kerala tea/coffee.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    priceRange: "₹200 – ₹2,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Beach Road, Varkala",
    tags: ["Spices", "Tea", "Coffee", "Authentic"],
  },
  {
    id: "papaya-boutique",
    name: "Papaya Resort Wear Boutique",
    category: "clothing",
    description: "High-end resort wear, flowy dresses, linen shirts, and custom-tailored beach outfits.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    priceRange: "₹1,500 – ₹8,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "North Cliff, Varkala",
    tags: ["Dresses", "Luxury", "Resort Wear", "Linen"],
  },
  {
    id: "silver-lining",
    name: "The Silver Lining",
    category: "jewelry",
    description: "Handcrafted sterling silver jewelry, semi-precious stones, and bohemian rings.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    priceRange: "₹500 – ₹5,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Cliff Promenade, Varkala",
    tags: ["Silver", "Jewelry", "Rings", "Bohemian"],
  },
  {
    id: "kerala-khadi",
    name: "Kerala Khadi Gramodyog",
    category: "clothing",
    description: "Government-certified pure cotton and khadi dresses, kurtas, and natural fabrics.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    priceRange: "₹400 – ₹3,000",
    location: { lat: 8.7370, lng: 76.7150 },
    address: "Temple Road, Varkala",
    tags: ["Dresses", "Cotton", "Authentic", "Khadi"],
  }
];

// === ITINERARY DATA ===
export interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    activity: string;
    place: string;
    cost: string;
    tip: string;
  }[];
}

export interface ItineraryPlan {
  type: string;
  days: number;
  totalBudget: string;
  itinerary: ItineraryDay[];
}

export const getItinerary = (days: number, tripType: string, budget: string): ItineraryPlan => {
  const isLuxury = budget === "luxury" || tripType === "luxury";
  const isBudget = budget === "budget" || tripType === "backpacker";

  const commonDay1: ItineraryDay = {
    day: 1,
    title: "Arrival & Cliff Discovery",
    activities: [
      { time: "2:00 PM", activity: "Check in to your hotel", place: isLuxury ? "The Gateway Hotel" : isBudget ? "Varkala Backpackers Inn" : "Sea Breeze Beach Resort", cost: isLuxury ? "₹8,500" : isBudget ? "₹350" : "₹1,800", tip: "Book cliff-facing rooms for the best views" },
      { time: "4:00 PM", activity: "First walk along the iconic cliff promenade", place: "North Cliff", cost: "Free", tip: "Head north for fewer crowds" },
      { time: "6:00 PM", activity: "Watch the legendary Varkala sunset", place: "Helipad Sunset Point", cost: "Free", tip: "Arrive 20 min early for the best spot" },
      { time: "8:00 PM", activity: "Dinner with sea views", place: isLuxury ? "Café del Mar" : "Sea Rock Beach Restaurant", cost: isLuxury ? "₹2,000+" : "₹600–₹900", tip: "Try the grilled prawns or fish moilee" },
    ],
  };

  const day2: ItineraryDay = {
    day: 2,
    title: "Temples, Beaches & Adventure",
    activities: [
      { time: "6:30 AM", activity: "Sunrise at the beach + morning dip", place: "Papanasam Beach", cost: "Free", tip: "The sea is calmest at dawn" },
      { time: "8:00 AM", activity: "Breakfast", place: "Coffee Temple", cost: "₹200–₹400", tip: "Try banana pancakes and filter coffee" },
      { time: "10:00 AM", activity: "Visit the ancient Janardanaswamy Temple", place: "Janardanaswamy Temple", cost: "Free", tip: "Dress modestly, no shorts" },
      { time: "12:00 PM", activity: "Authentic Kerala lunch on banana leaf", place: "Sreepadmam Restaurant", cost: "₹120–₹180", tip: "The fish curry rice is legendary" },
      { time: "2:00 PM", activity: tripType === "adventure" ? "Paragliding off the cliff!" : "Surfing lesson or kayaking", place: "North Cliff / Beach", cost: "₹1,500–₹2,500", tip: "Book surf lessons in advance" },
      { time: "6:00 PM", activity: "Sunset clifftop walk + shopping", place: "Cliff Market", cost: "₹200–₹1,000", tip: "Bargain for the best prices" },
    ],
  };

  const day3: ItineraryDay = {
    day: 3,
    title: "Hidden Gems & Backwaters",
    activities: [
      { time: "7:00 AM", activity: "Explore the secret Odayam Beach", place: "Odayam Beach", cost: "Free", tip: "Almost no tourists here – bring your camera" },
      { time: "10:00 AM", activity: "Kappil Lake boat ride through mangroves", place: "Kappil Lake", cost: "₹150–₹500", tip: "Spot migratory birds in winter" },
      { time: "1:00 PM", activity: "Kappil Beach – sea meets backwaters", place: "Kappil Beach", cost: "Free", tip: "Walk the narrow strip between sea and lake" },
      { time: "3:00 PM", activity: "Ayurveda massage session", place: "Local Ayurveda Center", cost: "₹800–₹2,000", tip: "60-min coconut oil massage is bliss" },
      { time: "7:00 PM", activity: "Final dinner & farewell to the cliffs", place: "Cliff restaurant of choice", cost: "₹400–₹2,000", tip: "Walk the cliff one last time" },
    ],
  };

  const itinerary = days === 1 ? [commonDay1] : days === 2 ? [commonDay1, day2] : [commonDay1, day2, day3];

  return {
    type: tripType,
    days,
    totalBudget: isLuxury ? "₹15,000–₹30,000" : isBudget ? "₹2,000–₹4,000" : "₹5,000–₹12,000",
    itinerary,
  };
};

// === TRANSPORT ROUTES ===
export interface TransportRoute {
  from: string;
  mode: "bus" | "train" | "car" | "flight";
  duration: string;
  cost: string;
  details: string;
  icon: string;
}

export const getTransportRoutes = (from: string): TransportRoute[] => {
  const fromLower = from.toLowerCase();
  if (fromLower.includes("aruppukottai") || fromLower.includes("aruppukkottai")) {
    return [
      {
        from: "Aruppukottai",
        mode: "bus",
        duration: "8–9 hours",
        cost: "₹350–₹600",
        details: "Take a bus to Tirunelveli or Nagercoil, then connect to Trivandrum. From Trivandrum (Thampanoor Bus Stand), take a direct bus to Varkala (1.5 hrs, ₹60).",
        icon: "🚌",
      },
      {
        from: "Aruppukottai",
        mode: "train",
        duration: "7–8 hours",
        cost: "₹180–₹900",
        details: "Take a train from Aruppukottai/Virudhunagar to Trivandrum Central (TVC). Then take local train to Varkala Sivagiri Station (30 min). Trains: Nellai Express, Madurai-Trivandrum Express.",
        icon: "🚂",
      },
      {
        from: "Aruppukottai",
        mode: "car",
        duration: "5.5–7 hours",
        cost: "₹1,500–₹2,500 (fuel) or ₹3,500–₹5,000 (cab)",
        details: "Drive via NH44: Aruppukottai → Kovilpatti → Tirunelveli → Nagercoil → Marthandam → Neyyattinkara → Varkala (approx 320 km).",
        icon: "🚗",
      },
      {
        from: "Aruppukottai",
        mode: "flight",
        duration: "3–4 hours (including transfers)",
        cost: "₹3,500–₹8,000",
        details: "Nearest airport: Madurai (IXM), ~45 km away. Fly Madurai → Trivandrum (TRV). Then taxi/bus to Varkala (~60 km, 1.5 hrs). Note: Limited direct flights.",
        icon: "✈️",
      },
    ];
  }
  // Generic routes from any location
  return [
    {
      from,
      mode: "train",
      duration: "Varies",
      cost: "₹100–₹1,500",
      details: `Take a train to Trivandrum Central (TVC) or Varkala Sivagiri Station directly. Varkala Sivagiri is on the Thiruvananthapuram-Shoranur line.`,
      icon: "🚂",
    },
    {
      from,
      mode: "bus",
      duration: "Varies",
      cost: "₹100–₹800",
      details: "Take a bus to Trivandrum (KSRTC or private). From Trivandrum, direct buses to Varkala every 30 mins.",
      icon: "🚌",
    },
    {
      from,
      mode: "car",
      duration: "Varies",
      cost: "Depends on distance",
      details: "Drive to Varkala via NH66 (coastal highway). Well-connected from Trivandrum (55 km) and Kollam (30 km).",
      icon: "🚗",
    },
    {
      from,
      mode: "flight",
      duration: "Varies",
      cost: "₹2,000+",
      details: "Fly to Trivandrum International Airport (TRV). Taxi to Varkala is ~1.5 hours and costs ₹800–₹1,200.",
      icon: "✈️",
    },
  ];
};

// === WEATHER DATA ===
export const weatherData = [
  { month: "Jan", temp: 28, rainfall: 12, crowd: 5, icon: "☀️", status: "Perfect" },
  { month: "Feb", temp: 30, rainfall: 8, crowd: 5, icon: "☀️", status: "Perfect" },
  { month: "Mar", temp: 32, rainfall: 22, crowd: 4, icon: "⛅", status: "Great" },
  { month: "Apr", temp: 33, rainfall: 55, crowd: 3, icon: "⛅", status: "Good" },
  { month: "May", temp: 31, rainfall: 180, crowd: 2, icon: "🌧️", status: "Rainy" },
  { month: "Jun", temp: 28, rainfall: 340, crowd: 1, icon: "⛈️", status: "Monsoon" },
  { month: "Jul", temp: 27, rainfall: 420, crowd: 1, icon: "⛈️", status: "Monsoon" },
  { month: "Aug", temp: 27, rainfall: 380, crowd: 1, icon: "⛈️", status: "Monsoon" },
  { month: "Sep", temp: 28, rainfall: 220, crowd: 2, icon: "🌧️", status: "Receding" },
  { month: "Oct", temp: 29, rainfall: 150, crowd: 3, icon: "⛅", status: "Good" },
  { month: "Nov", temp: 29, rainfall: 45, crowd: 4, icon: "🌤️", status: "Great" },
  { month: "Dec", temp: 28, rainfall: 20, crowd: 5, icon: "☀️", status: "Perfect" },
];

// === PHOTOGRAPHY SPOTS ===
export const photoSpots = [
  {
    id: "cliff-edge-sunrise",
    name: "Cliff Edge at Sunrise",
    type: "Sunrise",
    description: "The first rays of the sun hitting the red laterite cliffs – magical golden-pink light.",
    bestTime: "5:45 AM – 6:30 AM",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80",
    tips: ["Face east for full sun behind you", "Long exposure for wave trails on the cliff"],
    icon: "🌅",
  },
  {
    id: "helipad-sunset",
    name: "Helipad Sunset Panorama",
    type: "Sunset",
    description: "360° golden hour panoramas from the old helipad viewpoint.",
    bestTime: "5:45 PM – 6:30 PM",
    image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80",
    tips: ["Arrive 30 min early", "Use a polarizing filter for the sea"],
    icon: "🌇",
  },
  {
    id: "fishermen-beach",
    name: "Fishermen at Sunrise",
    type: "Lifestyle",
    description: "Traditional Kerala fishermen pulling colorful nets at the water's edge.",
    bestTime: "6:00 AM – 8:00 AM",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80",
    tips: ["Ask permission before photographing", "Silhouette mode works brilliantly"],
    icon: "📸",
  },
  {
    id: "kappil-bridge",
    name: "Kappil Backwater Bridge",
    type: "Landscape",
    description: "The wooden bridge over the backwaters – stunning reflections and golden light.",
    bestTime: "6:00 PM – 7:00 PM",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    tips: ["Reflections are perfect in still mornings", "Include local boats in the frame"],
    icon: "🌊",
  },
];

// === BUDGET CALCULATOR ===
export const calculateBudget = (
  travelers: number,
  days: number,
  hotelCategory: string,
  transportFrom: string
) => {
  const hotelCosts: Record<string, number> = {
    hostel: 350,
    budget: 800,
    midrange: 1800,
    premium: 3800,
    luxury: 8500,
  };

  const transportCosts: Record<string, number> = {
    aruppukottai: 450,
    chennai: 800,
    bangalore: 900,
    mumbai: 3500,
    delhi: 5500,
    trivandrum: 150,
    other: 600,
  };

  const hotelCost = (hotelCosts[hotelCategory] || 1800) * days * Math.ceil(travelers / 2);
  const transport = (transportCosts[transportFrom.toLowerCase()] || 600) * travelers * 2; // round trip
  const foodCost = hotelCategory === "luxury" ? 1500 : hotelCategory === "hostel" ? 300 : 600;
  const food = foodCost * days * travelers;
  const activities = 800 * days * travelers;
  const shopping = 500 * days;
  const misc = Math.round((hotelCost + transport + food + activities + shopping) * 0.1);

  return {
    hotel: hotelCost,
    transport,
    food,
    activities,
    shopping,
    emergency: misc,
    total: hotelCost + transport + food + activities + shopping + misc,
  };
};
