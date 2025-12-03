import React from 'react';
import Hero from '../components/Hero';
import MostPicked from '../components/MostPicked';
import PopularRooms from '../components/PopularRooms'; // ✅ Import added
import Testimonials from '../components/Testimonials';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className='py-24'>
      {/* Hero Section */}
      <Hero />

      {/* Most Picked Hotels Section */}
      <MostPicked />

      {/* Popular Rooms Section */}
      <PopularRooms />  {/* ✅ Added here */}

      <Testimonials />


      <NewsLetter />
    </div>
  );
};

export default Home;
