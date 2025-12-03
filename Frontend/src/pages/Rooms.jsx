import React, { useState } from "react";
import { motion } from "framer-motion";
import roomData from "../data/roomData";

const Rooms = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  // Filtering
  let filteredRooms = roomData.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(search.toLowerCase()) ||
      room.location.toLowerCase().includes(search.toLowerCase());

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
    filteredRooms = [...filteredRooms].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="py-20 mt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* ✨ Heading Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          🛏️ Explore Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-600 text-transparent bg-clip-text">
            Rooms
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Choose from cozy budget stays to luxury suites with the best comfort
          and amenities.
        </motion.p>
      </div>

      {/* 🔎 Filter + Sort Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-12 px-6">
        <input
          type="text"
          placeholder="Search by name or location..."
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
          <option value="100">$100 or less</option>
          <option value="200">$200 or less</option>
          <option value="300">$300 or less</option>
          <option value="500">$500 or less</option>
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
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {room.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{room.location}</p>
                <p className="text-green-600 font-medium mt-2">
                  ⭐ {room.rating} / 5
                </p>
                <p className="text-gray-700 mt-3">
                  Starting from{" "}
                  <span className="font-semibold text-teal-600">
                    ${room.pricePerNight}
                  </span>{" "}
                  / night
                </p>
                <button className="mt-5 w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No rooms found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
