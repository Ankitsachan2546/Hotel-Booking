import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    rating: 5,
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    text: "Imagify improved my workflow dramatically. The interface is clean, modern, and the results are always stunning.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Washington",
    role: "Co-founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    text: "A fantastic tool for designers and marketers alike. Highly recommend for anyone looking to improve their content quality.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sophia Turner",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    text: "The customer service is top-notch and the platform is very intuitive. It makes my projects so much faster to complete.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ethan Clark",
    role: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200",
    text: "I love the variety of templates and the easy customization. It saves me hours every week!",
    rating: 5,
  },
  {
    id: 6,
    name: "Olivia Brown",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200",
    text: "Simply amazing. The results are consistent and professional-looking. Can't imagine working without it now.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8"> {/* Added horizontal padding */}
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          🌟{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            What Our Clients Say
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Hear from our{" "}
          <span className="px-2 py-1 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 rounded-full font-semibold shadow">
            happy clients
          </span>{" "}
          who loved our service and experience.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-80 flex flex-col items-center border border-gray-300 p-8 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300" /* Adjusted responsive widths */
          >
            <img
              className="h-20 w-20 rounded-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <h2 className="text-lg text-gray-900 font-medium mt-4">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.role}</p>

            {/* Rating */}
            <div className="flex items-center justify-center mt-3 gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                    fill="url(#gradStar)"
                  />
                  <defs>
                    <linearGradient id="gradStar" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF532E" />
                      <stop offset="100%" stopColor="#FFC600" />
                    </linearGradient>
                  </defs>
                </svg>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-3 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
