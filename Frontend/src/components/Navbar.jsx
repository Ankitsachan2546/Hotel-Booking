import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

    const { navigate, user, setUser } = useContext(AppContext)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Admin Dashboard', path: '/admin-dashboard', adminOnly: true }
    ];


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Logout handled by Clerk


    return (

        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/75 backdrop-blur-2xl border-b border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] py-3`}>
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 opacity-80"></div>

            <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="font-bold text-white text-xl">S</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">StayNow<span className="text-blue-600">.</span></h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-md">
                    {navLinks.map((link, i) => (
                        link.adminOnly ? (
                            user && user.role === 'admin' && (
                                <Link key={i} to={link.path} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${location.pathname === link.path ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}>
                                    {link.name}
                                </Link>
                            )
                        ) : (
                            <Link key={i} to={link.path} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${location.pathname === link.path ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}>
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <SignedIn>
                        <Link
                            to="/my-bookings"
                            className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 text-sm font-bold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>My Bookings</span>
                        </Link>
                        <div className="pl-2">
                            <UserButton afterSignOutUrl="/" appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 border-2 border-slate-100 shadow-sm"
                                }
                            }} />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <button
                            onClick={() => navigate("/login")}
                            className={`px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_30px_-15px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 transition-all duration-300`}>
                            Login
                        </button>
                    </SignedOut>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                        <svg className={`h-6 w-6 text-slate-800`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                    <button className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <div className="flex flex-col items-center gap-6 w-full px-8">
                        {navLinks.map((link, i) => (
                            link.adminOnly ? (
                                user && user.role === 'admin' && (
                                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </Link>
                                )
                            ) : (
                                <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-6 mt-4">
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                            <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">My Bookings</Link>
                        </SignedIn>
                        <SignedOut>
                            <button
                                onClick={() => { navigate("/login"); setIsMenuOpen(false); }}
                                className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30">
                                Log In
                            </button>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar