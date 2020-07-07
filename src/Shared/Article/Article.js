import React from "react";
import "./Article.scss";

const Article = (props) => {
  return (
    <article className="article">
      <header>
        <h2>{props.title}</h2>
      </header>
      <section className="card__section">
        <p>{props.content}</p>
      </section>
    </article>
  );
};

export default Article;
