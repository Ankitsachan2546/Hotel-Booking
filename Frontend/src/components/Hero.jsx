import React, { useState } from 'react'
import { motion } from "motion/react"
import { assets, cities, homePageData } from '../assets/assets'
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/hotels', { state: { search: destination } });
    };

    return (
        <div className="relative bg-gradient-to-br from-stone-50 via-orange-50 to-stone-50 
                        min-h-[80vh] flex flex-col justify-center items-center overflow-hidden">

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] 
                            opacity-20 pointer-events-none"></div>

            {/* Hero Content */}
            <main className='relative z-10 flex flex-col md:flex-row items-center 
                             max-md:text-center justify-between w-full max-w-7xl mx-auto'> {/* Added horizontal padding for smaller screens */}

                {/* Left side content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col items-center md:items-start"
                >
                    {/* Heading */}
                    <h1 className='bg-gradient-to-r from-amber-700 via-orange-600 to-stone-700 
                                   bg-clip-text text-transparent font-bold 
                                   text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight text-center md:text-left'>
                        Forget Busy Work, <br /> Start Your Next Vacation
                    </h1>

                    {/* Paragraph with animated highlight */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className='mt-4 max-w-md text-sm sm:text-base leading-relaxed 
                                   text-gray-600 text-center md:text-left mx-auto md:mx-0'
                    >
                        We provide everything you need to enjoy your holiday with family.{" "}
                        <motion.span
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="bg-gradient-to-r from-orange-500 via-amber-600 to-stone-500 
                                       bg-[length:200%_200%] bg-clip-text text-transparent font-semibold"
                        >
                            Time to create another memorable moment.
                        </motion.span>
                    </motion.p>

                    {/* Gradient Glow Button */}
                    <div className='flex flex-col md:flex-row items-center mt-8 gap-3'>
                        <Link to="/hotels">
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0px 0px 20px rgba(0, 150, 255, 0.8)"
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className='bg-gradient-to-r from-amber-500 to-orange-600 text-white 
                                           rounded-full px-8 py-3 text-sm font-medium flex items-center 
                                           cursor-pointer shadow-lg hover:shadow-orange-400/50 w-full md:w-auto'
                            >
                                Show More
                            </motion.button>
                        </Link>
                    </div>

                    {/* Stats Section */}
                    <div className='flex flex-wrap items-center justify-center md:justify-start gap-8 sm:gap-16 mt-8'> {/* Adjusted gap and justification */}
                        {homePageData.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className='flex items-center flex-col'
                            >
                                <img src={item.icon} alt={item.title} className='w-8 h-8' />
                                <div className='flex items-center gap-1 my-4'>
                                    <p className='text-paragraph font-bold text-lg'>{item.value}</p>
                                    <p className='text-paragraph capitalize'>{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right side hero image with smooth zoom in-out */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0 md:ml-auto"
                >
                    <img
                        src={assets.hero_img}
                        alt="hero"
                        className="w-full rounded-2xl object-cover shadow-lg"
                    />
                </motion.div>
            </main>

            {/* Search Form */}
            <form onSubmit={handleSearch} className='relative z-10 max-w-4xl w-full mx-auto bg-white text-gray-800 rounded-xl px-4 py-6 flex flex-col md:flex-row 
                              items-center justify-center gap-6 mt-24 shadow-xl border border-gray-100 sm:px-8 lg:px-10' > {/* Adjusted padding and centering */}

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar_icon} alt='' className='w-4 h-4' />
                        <label htmlFor="destinationInput">Select Location </label>
                    </div>
                    <input
                        list='destinations'
                        id="destinationInput"
                        type="text"
                        className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full"
                        placeholder="Type here"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    />
                    <datalist id='destinations'>
                        {cities.map((city, index) => (
                            <option key={index} value={city} />
                        ))}
                    </datalist>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar_icon} alt='' className='w-4 h-4' />
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar_icon} alt='' className='w-4 h-4' />
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input
                        id="checkOut"
                        type="date"
                        className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">People</label>
                    <input
                        min={1}
                        max={4}
                        id="guests"
                        type="number"
                        className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                        placeholder="0"
                    />
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className='flex items-center justify-center gap-1 
                               rounded-full bg-gradient-to-r from-amber-500 to-orange-600 
                               py-3 px-8 text-white cursor-pointer shadow-lg 
                               hover:shadow-orange-500/50 w-full md:w-auto font-medium transition-all duration-300 hover:scale-105 mt-4 md:mt-0'>
                    <span>Search</span>
                </button>
            </form>
        </div>
    )
}

export default Hero
