import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom'; // ✅ Import Link correctly

const MostPicked = () => {
  const { hotelData } = useContext(AppContext);

  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8"> {/* Added horizontal padding */}
      {/* Heading Section */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          🌟 Most Picked Hotels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md">
            Explore
          </span>{" "}
          our <span className="font-semibold text-gray-800">top-rated stays</span>,
          loved by guests for <span className="text-purple-600 font-medium">comfort</span>
          and <span className="text-pink-600 font-medium">location</span>.
        </motion.p>
      </div>

      {/* Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12 max-w-[1600px] mx-auto place-items-center">
        {hotelData.slice(0, 5).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white w-full h-[320px]"
          >
            {/* Hotel Image */}
            <img
              src={item.image}
              alt={item.name || "Hotel"}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white 
                            bg-gradient-to-t from-black/80 to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-500">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm">{item.address}</p>
              <h2 className="text-md font-bold mt-1">₹{item.price}</h2>
              <Link to={`/hotels/${item.id}`}>
                <button className="mt-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <Link to="/hotels">
          <button className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-lg shadow-lg hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            View All Hotels <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MostPicked
