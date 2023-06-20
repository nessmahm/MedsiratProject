import React from "react";
import "../../styles/articleDetailed.css";
function ArticleMinimised() {
    return (
        <a href="">
        <div className={"minimised-article-body"} >

            <img className={"minimised-article-image"} alt={"image"} src ="https://th.bing.com/th/id/OIP.mG--ywy5Kuxn6V5BsJheswHaFJ?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            <div className={"minimised-article-title"}>Title</div>

        </div>
        </a>

    );
}

export default ArticleMinimised;
