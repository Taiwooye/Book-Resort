import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktail",
        info: "lorem ipsum dolor sit amet consecteur adipisicing ElementInternals.Magni corporis!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "lorem ipsum dolor sit amet consecteur adipisicing ElementInternals.Magni corporis!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "lorem ipsum dolor sit amet consecteur adipisicing ElementInternals.Magni corporis!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "lorem ipsum dolor sit amet consecteur adipisicing ElementInternals.Magni corporis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>

        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
