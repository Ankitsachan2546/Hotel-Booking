import React from 'react';
import { motion } from 'framer-motion';
import hotelData from '../Data/Hoteldata'; // Import hotelData

const AdminDashboard = () => {
  const totalHotels = hotelData.length; // Calculate total number of hotels

  const dashboardData = [
    {
      title: "All Earnings",
      value: "$30200",
      color: "bg-orange-400",
      icon: "", // Placeholder for chart/icon
    },
    {
      title: "Page Views",
      value: "290+",
      color: "bg-green-400",
      icon: "", // Placeholder for chart/icon
    },
    {
      title: "Total Hotels", // New card for total hotels
      value: totalHotels.toString(),
      color: "bg-indigo-400",
      icon: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          {/* User Profile */}
          <div className="flex items-center gap-2">
            <img src="https://via.placeholder.com/30" alt="Admin Profile" className="w-8 h-8 rounded-full" />
            <span className="text-gray-700">John Doe</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {dashboardData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${item.color} rounded-lg p-6 shadow-md flex flex-col justify-between h-40`}
          >
            <div>
              <p className="text-white text-3xl font-bold">{item.value}</p>
              <p className="text-white text-sm mt-1">{item.title}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-white text-xs opacity-80 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                update : 2:15 am
              </div>
              {/* Placeholder for small chart */}
              <div className="text-white text-2xl font-bold">...</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Hotel Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Hotel</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="hotelName" className="block text-gray-700 text-sm font-bold mb-2">Hotel Name</label>
            <input type="text" id="hotelName" name="hotelName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter hotel name" />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input type="text" id="address" name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter address" />
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price per Night</label>
            <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter price" />
          </div>
          <div>
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input type="text" id="image" name="image" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter image URL" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea id="description" name="description" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter hotel description"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
