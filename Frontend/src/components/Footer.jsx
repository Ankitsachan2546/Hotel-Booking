import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {


    return (
        <footer className="bg-[#020617] text-slate-300 py-16 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                {/* Brand Section */}
                <div className="lg:col-span-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-6 inline-block">StudyNow.</h1>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Experience the epitome of luxury and comfort. Whether you're traveling for business or leisure, we curate the finest stays just for you.
                    </p>
                    <div className="flex gap-4 mt-6">
                        {/* Social Icons Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all cursor-pointer">
                            <span className="font-bold">fb</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all cursor-pointer">
                            <span className="font-bold">tw</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all cursor-pointer">
                            <span className="font-bold">in</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                        <li><a href="/hotels" className="hover:text-blue-400 transition-colors">Find Hotels</a></li>
                        <li><a href="/rooms" className="hover:text-blue-400 transition-colors">Browse Rooms</a></li>
                        <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Support</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Cancellation Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Subscribe</h3>
                    <p className="text-slate-400 text-sm mb-4">Join our newsletter for the latest updates and exclusive offers.</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500"
                        />
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all text-sm">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
                <p>&copy; 2024 StayNow Hospitality. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Cookies</span>
                </div>
            </div>
        </footer>
    );
};



export default Footer