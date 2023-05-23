import React, { Component, useState, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  let { slug } = useParams();
  //console.log(slug);
  const [newslug, setNewslug] = useState(slug);

  const contextType = useContext(RoomContext);

  const { getRoom } = contextType;
  const room = getRoom(slug);
  console.log(room);

  const {
    name,
    // description,
    // capacity,
    // size,
    // price,
    // extras,
    // breaskfast,
    // pets,
    images,
  } = room;

  const StyledHero = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${images[0] || this.state.defaultBcg})`,
  };

  return (
    <div>
      {!room ? (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to={"/rooms"} className="btn-primary">
            back to rooms
          </Link>
        </div>
      ) : (
        // <div img={images[0] || this.state.defaultBcg}>
        <div style={StyledHero}>
          <Banner title={`${name} room`}>
            <Link to="/room" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </div>
      )}
    </div>
  );
};

export default SingleRoom;
