import add_icon from "./add_icon.png";
import bath_icon from "./bath_icon.png";
import bed_icon from "./bed_icon.png";
import calendar_icon from "./calendar_icon.png";
import camera_icon from "./camera_icon.png";
import dashboard_icon from "./dashboard_icon.png";
import delete_icon from "./delete_icon.png";
import dining_icon from "./dining_icon.png";
import edit_icon from "./edit_icon.png";
import freezer_icon from "./freezer_icon.png";
import hero_img from "./hero_img.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import location_icon from "./location_icon.png";
import location from "./location.png";
import logo from "./logo.png";
import meter_icon from "./meter_icon.png";
import offer_img1 from "./offer_img1.png";
import offer_img2 from "./offer_img2.png";
import offer_img3 from "./offer_img3.png";
import offer_img4 from "./offer_img4.png";
import offer_img5 from "./offer_img5.png";
import profile_icon from "./profile_icon.png";
import room_icon from "./room_icon.png";
import tv_icon from "./tv_icon.png";
import user_icon from "./user_icon.png";
import users_icon from "./users_icon.png";
import wifi_icon from "./wifi_icon.png";

export const assets = {
  hero_img,
  user_icon,
  location,
  calendar_icon,
  profile_icon,
  add_icon,
  delete_icon,
  edit_icon,
  logo,
  freezer_icon,
  dashboard_icon,
};

export const cities = [
  "Kanpur",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Goa",
  "Jaipur",
  "Udaipur",
  "Agra",
  "Varanasi",
  "Manali",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
];
export const homePageData = [
  {
    icon: users_icon,
    title: "users",
    value: "2500",
  },
  {
    icon: camera_icon,
    title: "treasures",
    value: "400",
  },
  {
    icon: location_icon,
    title: "cities",
    value: "200",
  },
];

export const hotelsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    name: "Landmark Hotel",
    address: "10, The Mall, Kanpur, Uttar Pradesh 208001",
    rating: 4.8,
    price: 3500,
    amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
    ownerName: "Rajesh Gupta",
    contactNumber: "+91 98765 43210",
    roomOptions: [
      { type: "AC Single Bed", price: 3500, features: ["AC", "Single Bed", "WiFi"] },
      { type: "AC Double Bed", price: 4500, features: ["AC", "Double Bed", "WiFi", "TV"] },
      { type: "Non-AC Single Bed", price: 2500, features: ["Fan", "Single Bed", "WiFi"] },
      { type: "Non-AC Double Bed", price: 3200, features: ["Fan", "Double Bed", "WiFi"] },
    ]
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    name: "Taj Mahal Palace",
    address: "Apollo Bunder, Mumbai, Maharashtra 400001",
    rating: 4.9,
    price: 25000,
    amenities: ["WiFi", "Sea View", "Pool", "Bar"],
    ownerName: "Tata Group",
    contactNumber: "+91 22 6665 3366",
    roomOptions: [
      { type: "Luxury Sea View", price: 25000, features: ["AC", "King Bed", "Sea View", "Bathtub"] },
      { type: "City View Suite", price: 20000, features: ["AC", "King Bed", "City View"] },
    ]
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
    name: "The Oberoi",
    address: "Dr. Zakir Hussain Marg, New Delhi, Delhi 110003",
    rating: 4.9,
    price: 18000,
    amenities: ["WiFi", "Luxury Dining", "Spa", "Gym"],
    ownerName: "Oberoi Group",
    contactNumber: "+91 11 2436 3030",
    roomOptions: [
      { type: "Premier Room", price: 18000, features: ["AC", "King Bed", "Golf Course View"] },
      { type: "Deluxe Room", price: 15000, features: ["AC", "Queen Bed", "City View"] },
    ]
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
    name: "Rambagh Palace",
    address: "Bhawani Singh Rd, Jaipur, Rajasthan 302005",
    rating: 4.9,
    price: 45000,
    amenities: ["WiFi", "Heritage Walk", "Royal Dining", "Gardens"],
    ownerName: "Taj Hotels",
    contactNumber: "+91 141 238 5700",
    roomOptions: [
      { type: "Palace Room", price: 45000, features: ["AC", "King Bed", "Garden View"] },
      { type: "Historical Suite", price: 60000, features: ["AC", "King Bed", "Private Terrace"] },
    ]
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    name: "ITC Grand Chola",
    address: "63, Mount Rd, Guindy, Chennai, Tamil Nadu 600032",
    rating: 4.8,
    price: 12000,
    amenities: ["WiFi", "Luxury Spa", "Multiple Pools", "Fine Dining"],
    ownerName: "ITC Hotels",
    contactNumber: "+91 44 2220 0000",
    roomOptions: [
      { type: "Executive Club", price: 12000, features: ["AC", "Queen Bed", "Pool View"] },
      { type: "Towers Room", price: 15000, features: ["AC", "King Bed", "Lounge Access"] },
    ]
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop",
    name: "The Leela Palace",
    address: "Adyar Seaface, Chennai, Tamil Nadu 600028",
    rating: 4.8,
    price: 15000,
    amenities: ["WiFi", "Sea View", "Butler Service", "Banquet Hall"],
    ownerName: "Leela Group",
    contactNumber: "+91 44 3366 1234",
    roomOptions: [
      { type: "Grand City View", price: 15000, features: ["AC", "King Bed", "City View"] },
      { type: "Royal Sea View", price: 18000, features: ["AC", "King Bed", "Sea View"] },
    ]
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    name: "Umaid Bhawan Palace",
    address: "Circuit House Rd, Jodhpur, Rajasthan 342006",
    rating: 5.0,
    price: 60000,
    amenities: ["WiFi", "Museum", "Vintage Cars", "Royal Dining"],
    ownerName: "Taj Hotels",
    contactNumber: "+91 291 251 0101",
    roomOptions: [
      { type: "Palace Room", price: 60000, features: ["AC", "King Bed", "Garden View"] },
      { type: "Royal Suite", price: 85000, features: ["AC", "King Bed", "Private Butler"] },
    ]
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
    name: "Wildflower Hall",
    address: "Chharabra, Shimla, Himachal Pradesh 171012",
    rating: 4.9,
    price: 28000,
    amenities: ["WiFi", "Mountain View", "Spa", "Nature Walks"],
    ownerName: "Oberoi Group",
    contactNumber: "+91 177 264 8585",
    roomOptions: [
      { type: "Premier Mountain View", price: 28000, features: ["Heater", "King Bed", "Mountain View"] },
      { type: "Deluxe Garden View", price: 24000, features: ["Heater", "Queen Bed", "Garden View"] },
    ]
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    name: "Regency Hotel",
    address: "Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005",
    rating: 4.5,
    price: 4500,
    amenities: ["WiFi", "Banquet", "Restaurant", "Bar"],
    ownerName: "Vikram Singh",
    contactNumber: "+91 512 223 4567",
    roomOptions: [
      { type: "AC Deluxe", price: 4500, features: ["AC", "Double Bed", "WiFi"] },
      { type: "Non-AC Standard", price: 3000, features: ["Fan", "Double Bed", "WiFi"] },
      { type: "AC Single", price: 3500, features: ["AC", "Single Bed", "WiFi"] },
    ]
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    name: "Trident Hotel",
    address: "Nariman Point, Mumbai, Maharashtra 400021",
    rating: 4.7,
    price: 18000,
    amenities: ["WiFi", "Sea View", "Pool", "Spa"],
    ownerName: "Oberoi Group",
    contactNumber: "+91 22 6632 4343",
    roomOptions: [
      { type: "Premier Ocean View", price: 18000, features: ["AC", "King Bed", "Ocean View"] },
      { type: "Superior City View", price: 15000, features: ["AC", "Queen Bed", "City View"] },
    ]
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop",
    name: "Taj Palace",
    address: "Sardar Patel Marg, New Delhi, Delhi 110021",
    rating: 4.8,
    price: 16000,
    amenities: ["WiFi", "Luxury Dining", "Pool", "Golf"],
    ownerName: "Taj Hotels",
    contactNumber: "+91 11 2611 0202",
    roomOptions: [
      { type: "Superior Room", price: 16000, features: ["AC", "King Bed", "Pool View"] },
      { type: "Deluxe Room", price: 14000, features: ["AC", "Queen Bed", "City View"] },
    ]
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600&h=400&fit=crop",
    name: "Fairmont Jaipur",
    address: "Riico, Kukas, Jaipur, Rajasthan 302028",
    rating: 4.8,
    price: 22000,
    amenities: ["WiFi", "Royal Decor", "Spa", "Pool"],
    ownerName: "Accor Group",
    contactNumber: "+91 142 642 0000",
    roomOptions: [
      { type: "Fairmont Room", price: 22000, features: ["AC", "King Bed", "Aravalli View"] },
      { type: "Fairmont Gold", price: 28000, features: ["AC", "King Bed", "Lounge Access"] },
    ]
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
    name: "RAAS Jodhpur",
    address: "Tunwar ji ka Jhalra, Makrana Mohalla, Jodhpur, Rajasthan 342001",
    rating: 4.9,
    price: 20000,
    amenities: ["WiFi", "Fort View", "Pool", "Dining"],
    ownerName: "RAAS Hotels",
    contactNumber: "+91 291 263 6455",
    roomOptions: [
      { type: "Luxury Room", price: 20000, features: ["AC", "King Bed", "Fort View"] },
      { type: "Garden Room", price: 16000, features: ["AC", "Queen Bed", "Garden View"] },
    ]
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&h=400&fit=crop",
    name: "The Oberoi Cecil",
    address: "Chaura Maidan, Shimla, Himachal Pradesh 171004",
    rating: 4.8,
    price: 19000,
    amenities: ["WiFi", "Valley View", "Spa", "Heritage"],
    ownerName: "Oberoi Group",
    contactNumber: "+91 177 280 4848",
    roomOptions: [
      { type: "Luxury Room", price: 19000, features: ["Heater", "King Bed", "Valley View"] },
      { type: "Premier Room", price: 22000, features: ["Heater", "King Bed", "Valley View"] },
    ]
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    name: "Hyatt Regency",
    address: "Ashram Road, Ahmedabad, Gujarat 380014",
    rating: 4.8,
    price: 13500,
    amenities: ["WiFi", "River View", "Pool", "Italian Dining"],
    ownerName: "Hyatt Group",
    contactNumber: "+91 79 4017 1234",
    roomOptions: [
      { type: "King Room", price: 13500, features: ["AC", "King Bed", "River View"] },
      { type: "Regency Suite", price: 18000, features: ["AC", "King Bed", "Lounge Access"] },
    ]
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    name: "Grand Hyatt",
    address: "Bambolim, Goa 403201",
    rating: 4.9,
    price: 22000,
    amenities: ["Beach Access", "Casino", "Spa", "Pool"],
    ownerName: "Hyatt",
    contactNumber: "+91 832 123 4567",
    roomOptions: [
      { type: "Bay View Room", price: 22000, features: ["AC", "King Bed", "Balcony"] },
      { type: "Grand Suite", price: 35000, features: ["AC", "Jacuzzi", "Ocean View"] },
    ]
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
    name: "JW Marriott",
    address: "Vittal Mallya Rd, Bangalore, Karnataka 560001",
    rating: 4.8,
    price: 16000,
    amenities: ["Luxury Dining", "Rooftop Bar", "Gym", "Pool"],
    ownerName: "Marriott",
    contactNumber: "+91 80 1234 5678",
    roomOptions: [
      { type: "Executive Room", price: 16000, features: ["AC", "King Bed", "Park View"] },
      { type: "Club Suite", price: 25000, features: ["Lounge Access", "AC", "Bathtub"] },
    ]
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop",
    name: "Novotel",
    address: "Nagar Road, Pune, Maharashtra 411014",
    rating: 4.5,
    price: 8000,
    amenities: ["Business Center", "WiFi", "Pool", "Bar"],
    ownerName: "Accor",
    contactNumber: "+91 20 1234 5678",
    roomOptions: [
      { type: "Standard Room", price: 8000, features: ["AC", "Queen Bed", "City View"] },
      { type: "Premier Room", price: 11000, features: ["AC", "King Bed", "Lounge Access"] },
    ]
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    name: "Radisson Blu",
    address: "Ring Road, Indore, Madhya Pradesh 452010",
    rating: 4.6,
    price: 7500,
    amenities: ["Spa", "WiFi", "Gym", "Pool"],
    ownerName: "Radisson",
    contactNumber: "+91 731 123 4567",
    roomOptions: [
      { type: "Superior Room", price: 7500, features: ["AC", "Twin Bed", "City View"] },
      { type: "Business Class", price: 10000, features: ["AC", "King Bed", "Free Breakfast"] },
    ]
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    name: "The Lalit",
    address: "Jagatpura Road, Jaipur, Rajasthan 302017",
    rating: 4.7,
    price: 9000,
    amenities: ["Cultural Shows", "Pool", "Spa", "Dining"],
    ownerName: "The Lalit Suri",
    contactNumber: "+91 141 123 4567",
    roomOptions: [
      { type: "Deluxe Room", price: 9000, features: ["AC", "King Bed", "Courtyard View"] },
      { type: "Luxury Suite", price: 15000, features: ["AC", "Private Terrace", "Bathtub"] },
    ]
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
    name: "Lemon Tree Premier",
    address: "Hitech City, Hyderabad, Telangana 500081",
    rating: 4.4,
    price: 6000,
    amenities: ["WiFi", "Gym", "Cafe", "pool"],
    ownerName: "Lemon Tree",
    contactNumber: "+91 40 1234 5678",
    roomOptions: [
      { type: "Superior Room", price: 6000, features: ["AC", "Queen Bed", "City View"] },
      { type: "Executive Room", price: 8000, features: ["AC", "King Bed", "Work Desk"] },
    ]
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    name: "Vivanta by Taj",
    address: "Race Course Road, Coimbatore, Tamil Nadu 641018",
    rating: 4.8,
    price: 11000,
    amenities: ["Luxury Spa", "Pool", "Bar", "WiFi"],
    ownerName: "Taj Hotels",
    contactNumber: "+91 422 123 4567",
    roomOptions: [
      { type: "Superior Charm", price: 11000, features: ["AC", "King Bed", "Pool View"] },
      { type: "Premium Indulgence", price: 14000, features: ["AC", "King Bed", "City View"] },
    ]
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    name: "Holiday Inn",
    address: "Aerocity, New Delhi, Delhi 110037",
    rating: 4.5,
    price: 8500,
    amenities: ["Airport Transfer", "WiFi", "Pool", "Dining"],
    ownerName: "IHG",
    contactNumber: "+91 11 1234 5678",
    roomOptions: [
      { type: "Standard Room", price: 8500, features: ["AC", "Queen Bed", "Runway View"] },
      { type: "Executive Club", price: 12000, features: ["Lounge Access", "AC", "King Bed"] },
    ]
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
    name: "The Westin",
    address: "Rajarhat, Kolkata, West Bengal 700156",
    rating: 4.9,
    price: 13000,
    amenities: ["Heavenly Bed", "Spa", "Pool", "Gym"],
    ownerName: "Marriott",
    contactNumber: "+91 33 1234 5678",
    roomOptions: [
      { type: "Deluxe Room", price: 13000, features: ["AC", "King Bed", "Lake View"] },
      { type: "Westin Club", price: 18000, features: ["Lounge Access", "AC", "Bathtub"] },
    ]
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
    name: "Crowne Plaza",
    address: "Bund Garden Road, Pune, Maharashtra 411001",
    rating: 4.6,
    price: 9500,
    amenities: ["Business Center", "WiFi", "Pool", "Dining"],
    ownerName: "IHG",
    contactNumber: "+91 20 2345 6789",
    roomOptions: [
      { type: "Standard Room", price: 9500, features: ["AC", "Queen Bed", "City View"] },
      { type: "Club Room", price: 12500, features: ["Lounge Access", "AC", "King Bed"] },
    ]
  },
];
export const roomsData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelsData[0],
    roomType: "AC Deluxe Room",
    pricePerNight: 2000,
    description:
      "Comfortable AC room with modern amenities. Perfect for a relaxing stay in Kanpur.",
    amenities: ["AC", "WiFi", "TV", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelsData[0],
    roomType: "Non-AC Standard Room",
    pricePerNight: 1500,
    description:
      "Budget-friendly Non-AC room with essential amenities. Clean and comfortable.",
    amenities: ["Fan", "WiFi", "TV", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelsData[1],
    roomType: "Sea View Suite",
    pricePerNight: 18000,
    description:
      "Luxurious suite with breathtaking views of the Arabian Sea. Experience the heritage of Taj.",
    amenities: ["Sea View", "AC", "Bathtub", "Butler Service"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelsData[2],
    roomType: "Premier Room",
    pricePerNight: 14000,
    description:
      "Elegant room with views of the Delhi Golf Course. Modern luxury meets traditional hospitality.",
    amenities: ["Golf Course View", "AC", "Smart TV", "Spa Access"],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  {
    _id: "67f763a1197ac559e4089b72",
    hotel: hotelsData[3],
    roomType: "Royal Suite",
    pricePerNight: 30000,
    description:
      "Live like royalty in this opulent suite. Authentic Rajasthani decor and world-class service.",
    amenities: ["Private Courtyard", "AC", "Jacuzzi", "Royal Breakfast"],
    images: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    ],
    isAvailable: false,
    createdAt: "2025-04-10T06:22:25.185Z",
    updatedAt: "2025-04-10T06:22:25.185Z",
    __v: 0,
  },
  {
    _id: "67f76385197ac559e4089b6a",
    hotel: hotelsData[4],
    roomType: "ITC One",
    pricePerNight: 10000,
    description:
      "Exclusive room for the discerning traveler. Access to the ITC One lounge and personalized service.",
    amenities: [
      "Lounge Access",
      "AC",
      "Massage Chair",
      "Butler Service",
    ],
    images: [
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:21:57.442Z",
    updatedAt: "2025-04-10T06:21:57.442Z",
    __v: 0,
  },
  {
    _id: "67f76385197ac559e4089b6d",
    hotel: hotelsData[6], // Umaid Bhawan
    roomType: "Maharaja Suite",
    pricePerNight: 50000,
    description:
      "The ultimate royal experience. Stay in the actual residence of the Maharaja of Jodhpur.",
    amenities: ["Royal Decor", "AC", "Private Butler", "Museum Access"],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:21:57.442Z",
    updatedAt: "2025-04-10T06:21:57.442Z",
    __v: 0,
  },
  {
    _id: "67f76385197ac559e4089b6e",
    hotel: hotelsData[7], // Wildflower Hall
    roomType: "Mountain View Room",
    pricePerNight: 25000,
    description:
      "Wake up to the majestic Himalayas. A serene retreat in the lap of nature.",
    amenities: ["Mountain View", "Heater", "Balcony", "Spa Access"],
    images: [
      "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=600&h=400&fit=crop",
    ],
    isAvailable: true,
    createdAt: "2025-04-10T06:21:57.442Z",
    updatedAt: "2025-04-10T06:21:57.442Z",
    __v: 0,
  },
  {
    _id: "dummy_room_01",
    hotel: hotelsData[15], // Grand Hyatt Goa (Index 15 if array continues, but be careful with indices. Let's use direct object or just assume update works.)
    // Actually, in this file hotelsData is defined above. If I added items to it, they are at indices 15-24.
    // But currently 'hotelsData' variable here refers to the const defined above. 
    // Javascript execution order means the array is populated. 
    // Wait, I just edited the file text. So hotelsData[15] will be valid after the file is parsed.
    // However, for safety in this static file, I should verify if I can reference indices that low down.
    // Yes, standard JS array access.
    roomType: "Bay View Room",
    pricePerNight: 22000,
    description: "Stunning views of the bay from your private balcony.",
    amenities: ["AC", "WiFi", "Balcony", "Mini Bar"],
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_02",
    hotel: hotelsData[16], // JW Marriott
    roomType: "Executive Room",
    pricePerNight: 16000,
    description: "Spacious room with modern amenities and park view.",
    amenities: ["AC", "WiFi", "Work Desk", "Bathtub"],
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_03",
    hotel: hotelsData[17], // Novotel
    roomType: "Standard Room",
    pricePerNight: 8000,
    description: "Cozy and comfortable room for business travelers.",
    amenities: ["AC", "WiFi", "TV", "Coffee Maker"],
    images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_04",
    hotel: hotelsData[18], // Radisson Blu
    roomType: "Business Class",
    pricePerNight: 10000,
    description: "Includes access to the business lounge and free breakfast.",
    amenities: ["AC", "WiFi", "Lounge Access", "Breakfast"],
    images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_05",
    hotel: hotelsData[19], // The Lalit
    roomType: "Luxury Suite",
    pricePerNight: 15000,
    description: "Opulent suite with traditional Rajasthani decor.",
    amenities: ["AC", "WiFi", "Private Terrace", "Bathtub"],
    images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_06",
    hotel: hotelsData[20], // Lemon Tree
    roomType: "Executive Room",
    pricePerNight: 8000,
    description: "Smart room designed for productivity and relaxation.",
    amenities: ["AC", "WiFi", "Work Desk", "Ergonomic Chair"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_07",
    hotel: hotelsData[21], // Vivanta
    roomType: "Premium Indulgence",
    pricePerNight: 14000,
    description: "Indulge in luxury with city views and premium amenities.",
    amenities: ["AC", "WiFi", "Rain Shower", "Minibar"],
    images: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_08",
    hotel: hotelsData[22], // Holiday Inn
    roomType: "Executive Club",
    pricePerNight: 12000,
    description: "Access to the exclusive club lounge.",
    amenities: ["AC", "WiFi", "Lounge Access", "King Bed"],
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_09",
    hotel: hotelsData[23], // Westin
    roomType: "Westin Club",
    pricePerNight: 18000,
    description: "Recharge in the signature Heavenly Bed.",
    amenities: ["AC", "WiFi", "Bathtub", "Lake View"],
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_10",
    hotel: hotelsData[24], // Crowne Plaza
    roomType: "Club Room",
    pricePerNight: 12500,
    description: "Modern room with access to club facilities.",
    amenities: ["AC", "WiFi", "Lounge Access", "Pool View"],
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_11",
    hotel: hotelsData[0], // Landmark
    roomType: "Executive Suite",
    pricePerNight: 6000,
    description: "Premium suite with extra space and luxury amenities.",
    amenities: ["AC", "WiFi", "Living Area", "Bathtub"],
    images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
  {
    _id: "dummy_room_12",
    hotel: hotelsData[5], // The Leela
    roomType: "Royal Club",
    pricePerNight: 20000,
    description: "Royal treatment with exclusive club benefits.",
    amenities: ["AC", "WiFi", "Butler Service", "Sea View"],
    images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop"],
    isAvailable: true,
  },
];

export const bookingData = [
  {
    _id: "67f76839994a731e97d3b8ce",

    room: roomsData[1],
    hotel: hotelsData[1],
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 350,
    guests: 2,
    status: "confirmed",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",

    room: roomsData[0],
    hotel: hotelsData[0],
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 450,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",

    room: roomsData[2],
    hotel: hotelsData[2],
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 280,
    guests: 1,
    status: "cancelled",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];
