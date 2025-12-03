import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react';

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
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12 max-w-6xl mx-auto">
        {hotelData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
          >
            {/* Hotel Image */}
            <img
              src={item.image}
              alt={item.name || "Hotel"}
              className="w-72 h-56 object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white 
                            bg-gradient-to-t from-black/80 to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-500">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm">{item.address}</p>
              <h2 className="text-md font-bold mt-1">₹{item.price}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MostPicked
