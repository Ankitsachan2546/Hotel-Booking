import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Star, Users } from 'lucide-react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="w-full relative overflow-hidden pt-20">

      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10 w-full h-full"></div>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=900&fit=crop"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-20 max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Redefining Your Stay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light opacity-90"
          >
            StayNow connects you with the world's most luxurious and comfortable hotels.
            Experience hospitality like never before.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src={assets.hero_img || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&fit=crop"}
              alt="Our Story"
              className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded with a passion for travel and a commitment to excellence, StayNow began as a simple idea:
              to make finding the perfect hotel effortless. We believe that where you stay shapes your entire journey.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Today, we partner with top-rated hotels across India to offer you curated experiences,
              whether you're traveling for business, leisure, or a romantic getaway. Our promise is simple:
              Premium stays, unbeatable prices, and memories that last a lifetime.
            </p>
            <Link to="/hotels">
              <button className="mt-4 px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-amber-600 transition-colors">
                Discover Hotels
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Values */}
      <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose StayNow?</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We go the extra mile to ensure your booking experience is seamless and your stay is unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-10 h-10 text-amber-500" />,
              title: "Secure Booking",
              desc: "Your data and payments are protected with top-tier security standards."
            },
            {
              icon: <Star className="w-10 h-10 text-amber-500" />,
              title: "Premium Hotels",
              desc: "Hand-picked hotels ensuring luxury, comfort, and exceptional service."
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-amber-500" />,
              title: "Best Price Guarantee",
              desc: "We match prices to ensure you get the best deal for your stay."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-amber-50 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16 lg:px-24">
          {[
            { value: "50+", label: "Cities" },
            { value: "100+", label: "Hotels" },
            { value: "10k+", label: "Happy Guests" },
            { value: "4.8", label: "App Rating" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</h2>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Experience Luxury?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Don't just dream about it. Book your perfect getaway with StayNow today.
        </p>
        <Link to="/hotels">
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Book Your Stay Now
          </button>
        </Link>
      </section>

    </div>
  );
};

export default About;