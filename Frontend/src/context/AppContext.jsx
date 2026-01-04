import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData, roomsData } from "../assets/assets.js";
import { useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user: clerkUser, isLoaded } = useUser();
  const [user, setUser] = useState(null); // Keep this for compatibility, sync with Clerk
  const [owner, setOwner] = useState(null);
  const [hotelData, setHotelData] = useState(() => {
    const saved = localStorage.getItem('hotels');
    return saved ? JSON.parse(saved) : [];
  });

  const [roomData, setRoomData] = useState(() => {
    const saved = localStorage.getItem('rooms');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (isLoaded) {
      if (clerkUser) {
        // Check if the email matches the admin email
        const userEmail = clerkUser.primaryEmailAddress?.emailAddress;
        if (userEmail === "amansachan15435@gmail.com") {
          setUser({
            ...clerkUser,
            role: 'admin'
          });
        } else {
          setUser({
            ...clerkUser,
            role: 'user'
          });
        }
      } else {
        setUser(null);
      }
    }
  }, [clerkUser, isLoaded]);


  // Initialize with dummy data ONLY if localStorage was empty
  useEffect(() => {
    if (hotelData.length === 0) {
      setHotelData(hotelsData);
      localStorage.setItem('hotels', JSON.stringify(hotelsData));
    }
    if (roomData.length === 0) {
      setRoomData(roomsData);
      localStorage.setItem('rooms', JSON.stringify(roomsData));
    }
  }, []);

  // Persist changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotelData));
  }, [hotelData]);

  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(roomData));
  }, [roomData]);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);


  const addHotel = (newHotel) => {
    // In a real app, this would be an API call
    setHotelData(prev => [...prev, { ...newHotel, id: Date.now() }]); // Use Date.now() for unique IDs
  };

  const addRoom = (newRoom) => {
    // In a real app, this would be an API call
    setRoomData(prev => [...prev, { ...newRoom, id: Date.now() }]);
  };

  const addBooking = (booking) => {
    setBookings(prev => [...prev, { ...booking, id: Date.now(), date: new Date().toISOString() }]);
  };

  const contextValue = {
    navigate,
    user,
    setUser,
    owner,
    setOwner,
    hotelData,
    setHotelData, // Expose setter for direct modifications if needed
    roomData,
    setRoomData,  // Expose setter for direct modifications if needed
    addHotel,
    addRoom,
    bookings,
    addBooking
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
