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
              catalog and share their plants. There are some tools available for
              plant identification online and cataloging today, but few that
              provide a community and encourage connecting with others in the
              way that Hoya does.
            </p>
          </section>
        </article>
      </section>
    );
  }
}

export default About;
