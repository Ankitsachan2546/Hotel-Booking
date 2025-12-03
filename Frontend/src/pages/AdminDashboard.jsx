import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Bed, Menu, X } from 'lucide-react';
import hotelData from '../Data/Hoteldata'; // Import hotelData
import roomData from '../Data/RoomData'; // Import roomData

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const totalHotels = hotelData.length;
  const totalRooms = roomData.length;

  const sidebarItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 'users',
      name: 'Users ID',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'hotels',
      name: 'Hotel List',
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 'rooms',
      name: 'Rooms List',
      icon: <Bed className="w-5 h-5" />
    }
  ];

  const dashboardData = [
    {
      title: "All Earnings",
      value: "$30200",
      color: "bg-orange-400",
      icon: "",
    },
    {
      title: "Page Views",
      value: "290+",
      color: "bg-green-400",
      icon: "",
    },
    {
      title: "Total Hotels",
      value: totalHotels.toString(),
      color: "bg-indigo-400",
      icon: "",
    },
    {
      title: "Total Rooms",
      value: totalRooms.toString(),
      color: "bg-purple-400",
      icon: "",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UsersSection />;
      case 'hotels':
        return <HotelsSection />;
      case 'rooms':
        return <RoomsSection />;
      default:
        return <DashboardSection dashboardData={dashboardData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className={`font-bold text-xl text-gray-800 ${!sidebarOpen && 'hidden'}`}>
            Admin Panel
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className={`${!sidebarOpen && 'hidden'}`}>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 border-t border-gray-200">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
            <img
              src="https://via.placeholder.com/32"
              alt="Admin Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className={`${!sidebarOpen && 'hidden'}`}>
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {sidebarItems.find(item => item.id === activeSection)?.name || 'Dashboard'}
            </h1>
            <div className="text-sm text-gray-500">
              Welcome back, Admin
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Dashboard Section Component
const DashboardSection = ({ dashboardData }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
    </>
  );
};

// Users Section Component
const UsersSection = () => {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', joinDate: '2024-01-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', joinDate: '2024-03-05' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Users Management</h2>
        <p className="text-gray-600 text-sm mt-1">Manage and view all registered users</p>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{user.id}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.joinDate}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Hotels Section Component
const HotelsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Hotels Management</h2>
        <p className="text-gray-600 text-sm mt-1">View and manage all hotels in the system</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelData.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={hotel.images?.[0] || "https://via.placeholder.com/300x200"}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-yellow-500">⭐ {hotel.rating}</span>
                  <span className="font-bold text-blue-600">${hotel.pricePerNight}/night</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 px-3 rounded text-sm hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Rooms Section Component
const RoomsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Rooms Management</h2>
        <p className="text-gray-600 text-sm mt-1">View and manage all rooms across hotels</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomData.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={room.images?.[0] || "https://via.placeholder.com/300x200"}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{room.location}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-yellow-500">⭐ {room.rating}</span>
                  <span className="font-bold text-blue-600">${room.pricePerNight}/night</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 px-3 rounded text-sm hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
