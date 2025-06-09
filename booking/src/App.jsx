import React from "react";
import Navbar from "./Components/Header/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Allrooms from "./Components/Pages/Allrooms";
import RoomDetails from "./Components/RoomDetails/RoomDetails";
import MyBooking from "./Components/MyBooking/MyBooking";
import HotelReg from "./Components/Registration/hotelReg";
import Layout from "./Components/HotelOwner/Layout";
import Dashboard from "./Components/HotelOwner/Dashboard";
import AddRoom from "./Components/HotelOwner/AddRoom";
import Listroom from "./Components/HotelOwner/Listroom";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    {false && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allrooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
           <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/owner" element={<Layout/>}>
<Route index element={<Dashboard/>}/>
<Route path="add-room" element={<AddRoom/>}/>
<Route path="list-room" element={<Listroom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
