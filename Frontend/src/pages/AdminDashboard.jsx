import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Bed, Menu, X, Home } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";
import { AppContext } from '../context/AppContext';

const AdminDashboard = () => {
  const { hotelData, setHotelData, roomData, setRoomData, addHotel, addRoom, navigate } = useContext(AppContext);

  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Local state for modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const [isEditHotelModalOpen, setIsEditHotelModalOpen] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);

  const totalHotels = hotelData.length;
  const totalRooms = roomData.length;

  // --- Room Handlers ---
  const handleDeleteRoom = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      setRoomData(prev => prev.filter(room => room.id !== id));
    }
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setIsEditModalOpen(true);
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRoomData(prev => prev.map(room => (room.id === updatedRoom.id ? updatedRoom : room)));
    setIsEditModalOpen(false);
    setEditingRoom(null);
  };

  const handleAddRoom = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imageFile = formData.get('image');

    const processRoom = (imageUrl) => {
      const newRoom = {
        name: formData.get('name'),
        location: formData.get('location'),
        pricePerNight: parseInt(formData.get('price')),
        images: [imageUrl],
        amenities: ["WiFi", "AC"],
        rating: 4.0,
        isAvailable: true
      };
      addRoom(newRoom);
      e.target.reset();
      alert("Room added successfully!");
    };

    if (imageFile instanceof File && imageFile.size > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        processRoom(reader.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      // Fallback default image if no file selected
      processRoom("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3");
    }
  };

  // --- Hotel Handlers ---
  const handleDeleteHotel = (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      setHotelData(prev => prev.filter(hotel => hotel.id !== id));
    }
  };

  const handleEditHotel = (hotel) => {
    setEditingHotel(hotel);
    setIsEditHotelModalOpen(true);
  };

  const handleUpdateHotel = (updatedHotel) => {
    setHotelData(prev => prev.map(hotel => (hotel.id === updatedHotel.id ? updatedHotel : hotel)));
    setIsEditHotelModalOpen(false);
    setEditingHotel(null);
  };

  const handleAddHotel = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imageFile = formData.get('image');

    const processHotel = (imageUrl) => {
      const newHotel = {
        name: formData.get('hotelName'),
        address: formData.get('address'),
        location: formData.get('address'),
        price: parseInt(formData.get('price')),
        image: imageUrl,
        images: [imageUrl],
        description: formData.get('description'),
        rating: 4.5,
        amenities: ["WiFi", "Pool"]
      };
      addHotel(newHotel);
      e.target.reset();
      alert("Hotel added successfully!");
    };

    if (imageFile instanceof File && imageFile.size > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        processHotel(reader.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      // Fallback default image
      processHotel("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3");
    }
  };

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
    },
    {
      id: 'home',
      name: 'Back to Home',
      icon: <Home className="w-5 h-5" />
    }
  ];

  const dashboardData = [
    {
      title: "Total Earnings",
      value: "$30,200",
      color: "from-pink-500 to-rose-500",
      icon: "💰",
    },
    {
      title: "Page Views",
      value: "2,900+",
      color: "from-cyan-500 to-blue-500",
      icon: "eye",
    },
    {
      title: "Total Hotels",
      value: totalHotels.toString(),
      color: "from-violet-500 to-purple-500",
      icon: "building",
    },
    {
      title: "Total Rooms",
      value: totalRooms.toString(),
      color: "from-amber-400 to-orange-500",
      icon: "bed",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UsersSection />;
      case 'hotels':
        return <HotelsSection
          hotels={hotelData}
          onDelete={handleDeleteHotel}
          onEdit={handleEditHotel}
        />;
      case 'rooms':
        return <RoomsSection
          rooms={roomData}
          onDelete={handleDeleteRoom}
          onEdit={handleEditRoom}
        />;
      default:
        return <DashboardSection
          dashboardData={dashboardData}
          onAddHotel={handleAddHotel}
          onAddRoom={handleAddRoom}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex font-sans text-slate-100 overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      {/* 🌌 Background Ambient Effects */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🌑 Glass Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-24'} bg-slate-900/40 backdrop-blur-xl border-r border-slate-700/50 flex flex-col z-50 transition-all duration-300`}>
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'hidden'}`}>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="font-bold text-white text-lg">S</span>
            </div>
            <h2 className="font-bold text-xl tracking-wide text-white">StayNow<span className="text-cyan-400">.</span></h2>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6 mx-auto" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-3 mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'home') {
                  navigate('/');
                } else {
                  setActiveSection(item.id);
                }
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${activeSection === item.id && item.id !== 'home'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <span className={`relative z-10 transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.id === 'home' && <Home className="w-5 h-5" />}
                {item.id === 'dashboard' && <Building className="w-5 h-5" />}
                {item.id === 'users' && <Users className="w-5 h-5" />}
                {item.id === 'hotels' && <Building className="w-5 h-5" />}
                {item.id === 'rooms' && <Bed className="w-5 h-5" />}
              </span>

              <span className={`${!sidebarOpen && 'hidden'} font-medium relative z-10`}>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 mt-auto">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'} bg-slate-800/40 border border-slate-700/50 p-3 rounded-2xl backdrop-blur-md`}>
            <UserButton afterSignOutUrl="/" appearance={{
              elements: {
                avatarBox: "w-10 h-10 border-2 border-slate-500"
              }
            }} />
            <div className={`${!sidebarOpen && 'hidden'} overflow-hidden`}>
              <p className="text-sm font-bold text-white truncate">Administrator</p>
              <p className="text-xs text-slate-400 truncate">admin@staynow.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0f172a]">
        {/* Top Bar - Dark Glass */}
        <div className="h-20 px-8 flex justify-between items-center z-40 sticky top-0">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              {sidebarItems.find(item => item.id === activeSection)?.name || 'Dashboard'}
            </h1>
            <p className="text-sm text-slate-400 font-medium mt-1">
              Welcome back, Admin
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800/50 border border-slate-700/50 text-cyan-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-900/20 backdrop-blur-sm">
              ✨ Premium Pro
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 pb-8 overflow-y-auto relative scrollbar-hide">
          <div className="relative z-10 max-w-7xl mx-auto mt-6">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Edit Room Modal */}
      {isEditModalOpen && (
        <EditRoomModal
          room={editingRoom}
          onSave={handleUpdateRoom}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {/* Edit Hotel Modal */}
      {isEditHotelModalOpen && (
        <EditHotelModal
          hotel={editingHotel}
          onSave={handleUpdateHotel}
          onClose={() => setIsEditHotelModalOpen(false)}
        />
      )}
    </div>
  );
};

// Dashboard Section Component
const DashboardSection = ({ dashboardData, onAddHotel, onAddRoom }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {dashboardData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-gradient-to-br ${item.color}`}
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{item.title}</p>
                <h3 className="text-3xl font-black text-white tracking-tight">{item.value}</h3>
              </div>
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-inner text-white">
                {/* Icons based on title could be added here */}
                <div className="font-xl">{index === 0 ? '💰' : index === 1 ? '👁️' : index === 2 ? '🏨' : '🛏️'}</div>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:blur-xl transition-all"></div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Hotel Section */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-xl border border-white/5 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Add New Hotel</h2>
          <form onSubmit={onAddHotel} className="grid grid-cols-1 gap-5 relative z-10">
            <div>
              <label htmlFor="hotelName" className="block text-slate-300 text-sm font-bold mb-2">Hotel Name</label>
              <input type="text" name="hotelName" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-purple-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="e.g. The Grand Palace" />
            </div>
            <div>
              <label htmlFor="address" className="block text-slate-300 text-sm font-bold mb-2">Address</label>
              <input type="text" name="address" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-purple-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="e.g. 123 Main St, New York" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="price" className="block text-slate-300 text-sm font-bold mb-2">Price ($)</label>
                <input type="number" name="price" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-purple-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="500" />
              </div>
              <div>
                <label htmlFor="image" className="block text-slate-300 text-sm font-bold mb-2">Upload Image</label>
                <input type="file" name="image" accept="image/*" className="block w-full text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer" />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-slate-300 text-sm font-bold mb-2">Description</label>
              <textarea name="description" rows="3" className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-purple-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors resize-none" placeholder="Brief description of the hotel"></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 hover:-translate-y-1 transition-all duration-300">
                Add Hotel
              </button>
            </div>
          </form>
        </div>

        {/* Add Room Section */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-xl border border-white/5 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Add New Room</h2>
          <form onSubmit={onAddRoom} className="grid grid-cols-1 gap-5 relative z-10">
            <div>
              <label htmlFor="name" className="block text-slate-300 text-sm font-bold mb-2">Room Name</label>
              <input type="text" name="name" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-cyan-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="e.g. Executive Suite" />
            </div>
            <div>
              <label htmlFor="location" className="block text-slate-300 text-sm font-bold mb-2">Location / City</label>
              <input type="text" name="location" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-cyan-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="e.g. Mumbai" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="price" className="block text-slate-300 text-sm font-bold mb-2">Price ($)</label>
                <input type="number" name="price" required className="block w-full rounded-xl border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 border focus:border-cyan-500 focus:ring-0 px-4 py-3 text-white placeholder-slate-500 transition-colors" placeholder="250" />
              </div>
              <div>
                <label htmlFor="image" className="block text-slate-300 text-sm font-bold mb-2">Upload Image</label>
                <input type="file" name="image" accept="image/*" className="block w-full text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 cursor-pointer" />
              </div>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-bold mb-2">Features</label>
              <div className="text-slate-400 text-sm bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">Default amenities (WiFi, AC) will be added automatically.</div>
            </div>
            <div className="flex justify-end mt-auto">
              <button type="submit" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-cyan-900/20 hover:shadow-cyan-700/40 hover:-translate-y-1 transition-all duration-300">
                Add Room
              </button>
            </div>
          </form>
        </div>
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
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
        <div>
          <h2 className="text-2xl font-bold text-white">Users Management</h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Manage and view all registered users</p>
        </div>
        <button className="bg-cyan-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 hover:-translate-y-0.5 transition-all">
          Export CSV
        </button>
      </div>

      <div className="p-8">
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-900/50">
          <table className="min-w-full table-auto">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-300">#{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 font-medium">
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold border border-slate-700 text-slate-300">{user.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full border ${user.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{user.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-cyan-400 hover:text-cyan-300 font-bold mr-4 hover:underline">Edit</button>
                    <button className="text-rose-500 hover:text-rose-400 font-bold hover:underline">Delete</button>
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
const HotelsSection = ({ hotels, onDelete, onEdit }) => {
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
        <div>
          <h2 className="text-2xl font-bold text-white">Hotels Management</h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">View and manage all hotels in the system</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/50 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hotel.image || hotel.images?.[0] || "https://via.placeholder.com/300x200"}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-yellow-500 shadow-sm border border-white/10">
                  {hotel.rating} ⭐
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2 truncate group-hover:text-purple-400 transition-colors">{hotel.name}</h3>
                <p className="text-slate-400 text-sm mb-4 flex items-center gap-1 truncate">
                  📍 {hotel.location}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-slate-500">Starting from</span>
                  <span className="font-black text-xl text-cyan-400">${hotel.pricePerNight}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(hotel)}
                    className="flex-1 bg-white/5 text-slate-300 py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-purple-600 hover:text-white transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(hotel.id)}
                    className="flex-1 bg-rose-500/10 text-rose-500 py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all"
                  >
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
const RoomsSection = ({ rooms, onDelete, onEdit }) => {
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
        <div>
          <h2 className="text-2xl font-bold text-white">Rooms Management</h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">View and manage all rooms across hotels</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/50 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.images?.[0] || "https://via.placeholder.com/300x200"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-emerald-500/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-emerald-400 shadow-sm uppercase tracking-wide border border-emerald-500/30">
                  Available
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2 truncate group-hover:text-cyan-400 transition-colors">{room.name}</h3>
                <p className="text-slate-400 text-sm mb-4 flex items-center gap-1 truncate">
                  🏨 {room.location}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded text-slate-300 uppercase tracking-wide">Standard</span>
                  <span className="font-black text-xl text-purple-400">${room.pricePerNight}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(room)}
                    className="flex-1 bg-white/5 text-slate-300 py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-cyan-600 hover:text-white transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(room.id)}
                    className="flex-1 bg-rose-500/10 text-rose-500 py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all"
                  >
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

// Edit Room Modal Component
const EditRoomModal = ({ room, onSave, onClose }) => {
  const [formData, setFormData] = useState(room);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Edit Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Room Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price Per Night ($)</label>
            <input
              type="number"
              name="pricePerNight"
              value={formData.pricePerNight}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Edit Hotel Modal Component
const EditHotelModal = ({ hotel, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    ...hotel,
    description: hotel.description || "",
    isAvailable: hotel.isAvailable ?? true
  });

  const [imagePreview, setImagePreview] = useState(hotel.images?.[0] || "");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        alert("File is too large! Please choose an image under 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        setFormData(prev => ({
          ...prev,
          image: base64String,
          images: [base64String]
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Edit Hotel Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hotel Image</label>
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-500 mt-2">Recommended size: 800x600px</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hotel Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price Per Night ($)</label>
              <input
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rating (0-5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Enter hotel description..."
            ></textarea>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label className="text-sm font-medium text-gray-700">Mark as Active</label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
