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
    description,
    capacity,
    size,
    price,
    extras,
    breaskfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  console.log(defaultImg);

  const StyledHero = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${mainImg || this.state.defaultBcg})`,
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
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price:${price}</h6>
            <h6>size:${size} SQFT</h6>
            <h6>
              max capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity}person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breaskfast && "free breaskfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default SingleRoom;
