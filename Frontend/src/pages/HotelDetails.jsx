import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hotelData } = useContext(AppContext);

  // Find hotel by ID
  const hotel = hotelData.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <h2 className="text-center text-xl font-semibold mt-10">Hotel not found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Hotel Image */}
        <div className="relative h-64 md:h-96">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">{hotel.name}</h1>
            <p className="text-sm md:text-lg opacity-90">{hotel.address}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Hotel Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <p className="text-gray-600 text-lg max-w-2xl">Experience luxury and comfort at {hotel.name}. Perfect for your stay in {hotel.address.split(',')[1]}.</p>
              <div className="flex gap-3 mt-4">
                {hotel.amenities?.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{amenity}</span>
                )) || <span className="text-gray-400 text-sm">Amenities info needed</span>}
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-3xl font-bold text-amber-600">₹{hotel.price}</p>
              <p className="text-gray-500 text-sm">Starting Price / Night</p>
              <div className="mt-2 text-yellow-500 font-medium">⭐ {hotel.rating} / 5 Rating</div>
            </div>
          </div>

          <hr className="border-gray-200 my-8" />

          {/* Room Options Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Room</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hotel.roomOptions ? (
              hotel.roomOptions.map((room, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{room.type}</h3>
                      <ul className="mt-3 space-y-2">
                        {room.features.map((feature, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                            ✅ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">₹{room.price}</p>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/payment', { state: { hotel, room, price: room.price } })}
                    className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:shadow-md transition-all active:scale-95"
                  >
                    Book {room.type}
                  </button>
                </div>
              ))
            ) : (
              // Fallback if roomOptions are not defined for this hotel
              <div className="col-span-full text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">Select a standard room to proceed.</p>
                <button
                  onClick={() => navigate('/payment', { state: { hotel, room: { type: "Standard Room", features: ["Comfortable Bed", "WiFi", "TV"] }, price: hotel.price } })}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Standard Room - ₹{hotel.price}
                </button>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/hotels"
              className="text-indigo-600 font-medium hover:underline"
            >
              ← Back to All Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
