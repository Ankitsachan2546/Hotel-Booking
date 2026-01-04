import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import MyBookings from './pages/MyBookings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import Payment from './pages/Payment';

const App = () => {
  const ownerPath = useLocation().pathname.includes("owner");
  const adminPath = useLocation().pathname.includes("admin-dashboard");

  return (
    <div className="w-full mx-auto">
      <Toaster />
      {!(ownerPath || adminPath) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      {!(ownerPath || adminPath) && <Footer />}
    </div>
  );
};

export default App;
