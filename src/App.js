import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/room" element={<Room />} />
      <Route exact path="/error" element={<Error />} />
      <Route exact path="/room/:slug" element={<SingleRoom />} />
    </Routes>
   </>
  );
}

export default App;
