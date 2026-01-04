import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
            {/* 🌌 Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                        Get in <span className="text-blue-400">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                        We are here to help. Reach out to us for any inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800/50 p-8 lg:p-10 flex flex-col justify-center h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 pl-4">Contact Information</h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 bg-blue-50 p-4 rounded-xl text-blue-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Headquarters</h3>
                                    <p className="mt-1 text-slate-500 font-medium">123 Hotel Street, Booking City, 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 bg-blue-50 p-4 rounded-xl text-blue-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Phone Support</h3>
                                    <p className="mt-1 text-slate-500 font-medium">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="flex-shrink-0 bg-blue-50 p-4 rounded-xl text-blue-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                                    <p className="mt-1 text-slate-500 font-medium">support@staynow.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800/50 p-8 lg:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-8 pl-4">Send Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full rounded-lg border-slate-200 bg-slate-50 focus:bg-white border-2 focus:border-blue-500 focus:ring-0 sm:text-sm p-4 transition-all duration-200 font-medium text-slate-800 placeholder-slate-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full rounded-lg border-slate-200 bg-slate-50 focus:bg-white border-2 focus:border-blue-500 focus:ring-0 sm:text-sm p-4 transition-all duration-200 font-medium text-slate-800 placeholder-slate-400"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="block w-full rounded-lg border-slate-200 bg-slate-50 focus:bg-white border-2 focus:border-blue-500 focus:ring-0 sm:text-sm p-4 transition-all duration-200 font-medium text-slate-800 placeholder-slate-400 resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
