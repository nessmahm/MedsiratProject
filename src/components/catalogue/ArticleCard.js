import React from "react";
import "../../styles/articleCard.css";

function ArticleCard(props) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date().toLocaleDateString("en-US", options);
  const divStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <article className="post">
      <div className="post-image" style={divStyle}>
        <div className="post-author"> {props.auther}</div>
      </div>
      <div className="post-card">
        <div className="post-cat"> {props.category} </div>
        <a href="#" className="post-title">
          {props.title}
        </a>
        <div className="post-date">{formattedDate}</div>
        <div className="post-content">
          {props.description}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <a href="#" className="post-read">
          Read More
        </a>
      </div>
    </article>
  );
}

export default ArticleCard;
