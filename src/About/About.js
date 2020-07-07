import React, { Component } from "react";
import Article from "Shared/Article/Article";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <section className="about">
        <Article
          title="About Hoya"
          content={
            <p>
              Hoya is an online community for plant enthusiasts collectors to
              catalog and share their plants.
            </p>
          }
        ></Article>
        <Article
          title="Credits"
          content={
            <p>
              Hoya carnosa Botanical Illustration by&nbsp;
              <a
                href="https://favpng.com/png_user/AudreyfgYf"
                target="_blank"
                rel="noopener noreferrer"
              >
                AudreyfgYf
              </a>
            </p>
          }
        ></Article>
      </section>
    );
  }
}

export default About;
