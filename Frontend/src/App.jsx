import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Hotels from './pages/Hotels';   // ✅ use Hotels (plural) file
import HotelDetails from './pages/HotelDetails'; // ✅ new hotel detail page
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import MyBookings from './pages/MyBookings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard

const App = () => {
  const ownerPath = useLocation().pathname.includes("owner");
  const adminPath = useLocation().pathname.includes("admin-dashboard"); // New: check for admin dashboard path

  return (
    <div className="w-full mx-auto">
      <Toaster /> {/* ✅ Toasts will now work without crashing */}
      {!(ownerPath || adminPath) && <Navbar />} {/* Update: hide Navbar for adminPath too */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} /> {/* ✅ Added */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* New: Admin Dashboard Route */}
      </Routes>

      {!(ownerPath || adminPath) && <Footer />} {/* Update: hide Footer for adminPath too */}
    </div>
  );
};

export default App;
