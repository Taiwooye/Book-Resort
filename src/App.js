import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/room">
          <Route index element={<Room />} />
          <Route path=":slug" element={<SingleRoom />} />
        </Route>
        <Route path="/room/:slug" element={<SingleRoom />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/room/" element={<Room />} />
<Route path="/room/:slug" element={<SingleRoom />} />
<Route element={<Error />} />
</Routes> */
}
