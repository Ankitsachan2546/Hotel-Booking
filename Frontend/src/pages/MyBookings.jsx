import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CreditCard, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  const { bookings } = useContext(AppContext);

  if (!bookings || bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 mt-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Bookings Yet</h2>
          <p className="text-gray-500 mb-6">You haven't booked any rooms yet. Explore our hotels and find your perfect stay!</p>
          <Link to="/hotels" className="block w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Browse Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Bookings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-48">
                <img src={booking.hotelImage || "https://via.placeholder.com/400x300"} alt={booking.hotelName} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {booking.status}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{booking.hotelName}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="line-clamp-1">{booking.hotelAddress}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Room Type</span>
                    <span className="font-medium text-gray-800">{booking.roomType}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Price Paid</span>
                    <span className="font-bold text-amber-600">₹{booking.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium text-gray-800">{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Payment</span>
                    <span className="font-medium text-gray-800 flex items-center gap-1">
                      <CreditCard className="w-3 h-3" /> {booking.paymentMethod}
                    </span>
                  </div>
                </div>

                <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                  View Receipt
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;