import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <section className="about">
        <article className="card">
          <header>
            <h2>About Hoya</h2>
          </header>
          <section className="card__section">
            <p>
              Hoya is an online community for plant enthusiasts collectors to
              catalog and share their plants.
            </p>
          </section>
        </article>
      </section>
    );
  }
}

export default About;
