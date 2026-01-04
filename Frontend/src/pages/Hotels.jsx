import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Hotels = () => {
  const { hotelData } = useContext(AppContext);
  const location = useLocation();
  const [search, setSearch] = useState(location.state?.search || ""); // ✅ Init from state
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  // Filtering
  let filteredHotels = hotelData.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.address.toLowerCase().includes(search.toLowerCase()); // ✅ Check address

    const matchesPrice = price ? hotel.price <= parseInt(price) : true;

    return matchesSearch && matchesPrice;
  });

  // Sorting
  if (sort === "lowToHigh") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => a.price - b.price
    );
  } else if (sort === "highToLow") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => b.price - a.price
    );
  } else if (sort === "rating") {
    filteredHotels = [...filteredHotels].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="py-24 mt-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen relative font-sans overflow-hidden">
      {/* 🌅 Golden Hour Ambient Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100 rounded-full mix-blend-multiply filter blur-[96px] opacity-40"></div>

      {/* ✨ Heading Section */}
      <div className="text-center mb-16 relative z-10 pt-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-700 font-bold tracking-widest uppercase text-xs border border-amber-200 py-1 px-3 rounded-full bg-white/50 backdrop-blur-sm"
        >
          Luxury Stays
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-slate-900 mt-5 tracking-tight drop-shadow-sm"
        >
          Explore Our <span className="text-amber-600">Premium Hotels</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl text-slate-700 max-w-2xl mx-auto font-medium"
        >
          Discover handpicked hotels offering premium comfort, amazing views,
          and top-notch hospitality.
        </motion.p>
      </div>

      {/* 🔎 Filter + Sort Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-12 px-6">
        <input
          type="text"
          placeholder="Search by name or city (e.g. Kanpur)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">Filter by Price</option>
          <option value="5000">₹5,000 or less</option>
          <option value="10000">₹10,000 or less</option>
          <option value="20000">₹20,000 or less</option>
          <option value="50000">₹50,000 or less</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
          <option value="rating">Rating: High → Low</option>
        </select>
      </div>

      {/* 🏨 Hotels Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                <Link to={`/hotels/${hotel.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {hotel.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{hotel.address}</p>
                <p className="text-amber-600 font-medium mt-2">
                  ⭐ {hotel.rating} / 5
                </p>
                <p className="text-gray-700 mt-3">
                  Starting from{" "}
                  <span className="font-semibold text-gray-900">
                    ₹{hotel.price}
                  </span>{" "}
                  / night
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No hotels found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Hotels;
