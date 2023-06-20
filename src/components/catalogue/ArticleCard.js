import React from "react";
import "../../styles/articleCard.css";

function ArticleCard({article}) {

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date().toLocaleDateString("en-US", options);
  const divStyle = {
    backgroundImage: `url(${article?.image})`,
  };
  return (
    <article className="post">
      <div className="post-image" style={divStyle}>
        <div className="post-author"> {article?.auther}</div>
      </div>
      <div className="post-card">
        <div className="post-cat"> {article?.category} </div>
        <a href="#" className="post-title">
          {article?.title}
        </a>
        <div className="post-date">{formattedDate}</div>
        <div className="post-content">
          {article?.description}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <a href="/article" className="post-read">
          Read More
        </a>
      </div>
    </article>
  );
}

export default ArticleCard;
