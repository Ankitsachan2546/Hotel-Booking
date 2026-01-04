import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Rooms = () => {
  const { roomData } = useContext(AppContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  // Filtering
  let filteredRooms = roomData.filter((room) => {
    // Handle cases where room or hotel data might be missing/different structure
    const hotelName = room.hotel?.name || "";
    const location = room.hotel?.address || room.location || "";
    const type = room.roomType || room.name || "";

    // Search combined fields
    const matchesSearch =
      type.toLowerCase().includes(search.toLowerCase()) ||
      hotelName.toLowerCase().includes(search.toLowerCase()) ||
      location.toLowerCase().includes(search.toLowerCase());

    const matchesPrice = price ? room.pricePerNight <= price : true;

    return matchesSearch && matchesPrice;
  });

  // Sorting
  if (sort === "lowToHigh") {
    filteredRooms = [...filteredRooms].sort(
      (a, b) => a.pricePerNight - b.pricePerNight
    );
  } else if (sort === "highToLow") {
    filteredRooms = [...filteredRooms].sort(
      (a, b) => b.pricePerNight - a.pricePerNight
    );
  } else if (sort === "rating") {
    filteredRooms = [...filteredRooms].sort((a, b) => (b.hotel?.rating || 0) - (a.hotel?.rating || 0));
  }

  return (
    <div className="py-24 mt-0 bg-[#F0FDF4] min-h-screen relative overflow-hidden">
      {/* 🎨 Background Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      {/* ✨ Heading Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-teal-600 font-bold tracking-wider uppercase text-sm"
        >
          Comfort & Style
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2"
        >
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600">Rooms</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Choose from cozy budget stays to luxury suites with the best comfort
          and amenities.
        </motion.p>
      </div>

      {/* 🔎 Filter + Sort Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-12 px-6">
        <input
          type="text"
          placeholder="Search by room, hotel or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Filter by Price</option>
          <option value="2000">₹2000 or less</option>
          <option value="5000">₹5000 or less</option>
          <option value="15000">₹15000 or less</option>
          <option value="25000">₹25000 or less</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
          <option value="rating">Rating: High → Low</option>
        </select>
      </div>

      {/* 🛏️ Rooms Grid */}
      <div className="max-w-[1600px] mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={room.images?.[0] || room.image || "https://via.placeholder.com/400x300"}
                  alt={room.roomType}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                  {room.hotel?.name || "Hotel"}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {room.roomType || room.name}
                </h2>
                <p className="text-gray-500 text-sm mb-3 flex-grow line-clamp-2">{room.hotel?.address || room.location}</p>

                <div className="flex items-center justify-between mt-auto">
                  <p className="text-green-600 font-medium">
                    ⭐ {room.hotel?.rating || room.rating || 4.5} / 5
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-teal-600 text-lg">
                      ₹{room.pricePerNight}
                    </span>{" "}
                    / night
                  </p>
                </div>

                <button
                  onClick={() => navigate('/payment', {
                    state: {
                      hotel: {
                        name: room.hotel?.name || "Unknown Hotel",
                        image: room.hotel?.image || room.images?.[0] || "",
                        address: room.hotel?.address || room.location || "",
                        rating: room.hotel?.rating || 4.5
                      },
                      room: {
                        type: room.roomType || room.name,
                        features: room.amenities || []
                      },
                      price: room.pricePerNight
                    }
                  })}
                  className="mt-5 w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition active:scale-95"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg py-10">
            No rooms found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
