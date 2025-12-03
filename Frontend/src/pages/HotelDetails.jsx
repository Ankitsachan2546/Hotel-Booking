
import React from "react";
import { useParams, Link } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();

  // Dummy hotels data (same Hotels.jsx ke hotels array se lo)
  const hotels = [
    {
      name: "Hotel Taj Palace",
      location: "Mumbai",
      price: "₹5000/night",
      rating: "4.8/5",
      image: "https://source.unsplash.com/400x250/?hotel,luxury",
      description: "Hotel Taj Palace offers world-class luxury with a blend of traditional Indian hospitality. Enjoy premium rooms, rooftop dining, spa, and an unforgettable experience."
    },
    {
      name: "Hotel Oberoi",
      location: "Delhi",
      price: "₹4000/night",
      rating: "4.6/5",
      image: "https://source.unsplash.com/400x250/?hotel,modern",
      description: "Located in the heart of Delhi, Hotel Oberoi provides elegant rooms, fine dining, and modern amenities. Perfect for business and leisure travelers."
    },
    {
      name: "Hotel Leela",
      location: "Bangalore",
      price: "₹4500/night",
      rating: "4.7/5",
      image: "https://source.unsplash.com/400x250/?resort,pool",
      description: "Hotel Leela is known for its beautiful gardens, luxurious rooms, and exquisite food. Ideal for family vacations and business conferences."
    },
  ];

  // Get selected hotel by index
  const hotel = hotels[id];

  if (!hotel) {
    return <h2 className="text-center text-xl font-semibold mt-10">Hotel not found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Hotel Image */}
        <img src={hotel.image} alt={hotel.name} className="w-full h-80 object-cover" />

        <div className="p-6">
          {/* Hotel Info */}
          <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
          <p className="text-gray-500 mt-2">{hotel.location}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-semibold text-indigo-600">{hotel.price}</span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-medium">
              ⭐ {hotel.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-5 leading-relaxed">{hotel.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Book Now
            </button>
            <Link
              to="/hotels"
              className="flex-1 text-center bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Back to Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
