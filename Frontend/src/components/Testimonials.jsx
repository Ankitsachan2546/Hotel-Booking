import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200",
    text: "Reviewing this platform was a delight. The booking process for my business trips has never been smoother. Great job!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    text: "As a travel blogger, I've seen many booking sites. StayNow stands out for its beautiful design and easy navigation.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    text: "Found the perfect suite for my meetings. The descriptions were accurate and the premium feel is real.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    text: "I love the attention to detail. The recommendations were spot on and I had a wonderful stay.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    text: "The visuals on the site are stunning. It truly reflects the quality of hotels listed. Highly recommended.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anjali Rao",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    text: "Seamless experience from start to finish. The customer support was also very responsive.",
    rating: 5,
  },
  {
    id: 7,
    name: "Rahul Khanna",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    text: "Efficient and reliable. I book all my corporate stays through StayNow now. Saves me a lot of time.",
    rating: 5,
  },
  {
    id: 8,
    name: "Meera Reddy",
    role: "Professor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    text: "A user-friendly platform that caters to all age groups. My family vacation was perfectly organized.",
    rating: 5,
  },
  {
    id: 9,
    name: "Arjun Nair",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    text: "The gallery view is excellent. It helps me choose the best scenic locations for my stays.",
    rating: 5,
  },
  {
    id: 10,
    name: "Kavita Joshi",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200",
    text: "I appreciate the curated list of boutique hotels. It's not just about a room, it's about the ambiance.",
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
