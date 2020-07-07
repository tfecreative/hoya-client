import React, { Component } from "react";
import Article from "Shared/Article/Article";
import "./Garden.scss";

class Garden extends Component {
  render() {
    return (
      <section className="garden">
        <Article title="My Garden" content={<p>Coming soon...</p>}></Article>
      </section>
    );
  }
}

export default Garden;
