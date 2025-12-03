import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData, roomsData } from "../assets/assets.js";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // null when not logged in, or { role: 'admin' } or { role: 'user' }
  const [owner, setOwner] = useState(null);
  const [hotelData, setHotelData] = useState([]);
  const [roomData, setRoomData] = useState([]);

  const fetchHotelsData = () => {
    setHotelData(hotelsData);
  };

  const fetchRoomsData = () => {
    setRoomData(roomsData);
  };

  useEffect(() => {
    fetchHotelsData();
    fetchRoomsData();
  }, []);

  // ✅ added roomData here
  const contextValue = { 
    navigate, 
    user, 
    setUser, 
    owner, 
    setOwner, 
    hotelData, 
    roomData 
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
