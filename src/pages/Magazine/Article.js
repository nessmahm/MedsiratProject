import React from "react";
import "../../styles/articleDetailed.css";
import ArticleDetailed from  "../../components/catalogue/ArticleDetailed"
import ArticleMinimised from "../../components/catalogue/ArticleMinimised"

function Article(props ) {
    var auther = 'john wick ';
    const timing = ' juin,27,2023';
    const image = 'https://th.bing.com/th/id/OIP.mG--ywy5Kuxn6V5BsJheswHaFJ?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
    const desc= "Lorem ipsum dolor sit amet consectetur adipiscing elitse do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenimo ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipiscing elitse do eiusmod tempor incididunt uta labore et dolore magna aliqua. Utenimo ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "\n" +
        "                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempore nostro incididunt utlabore et dolore magna aliqua.\n" +
        "                Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
        "                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore eere martolot dolore magna aliqua.\n" +
        "                Utenim ad minim veniam quis nostrud exercitation ullamce u commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "  ";
    return (
        <div className={"article-total-body"}>
          <div className={"article-title"}>
              Title
          </div>
          <div className={"article-body"}>
            <div style={{flex : "2" }}>
                <ArticleDetailed auther={auther} timing ={timing} image={ image} description={desc}/>
            </div>
              <div style={{flex : "1"}} className={"otherPosts-display"}>
                  <div>
                 <div className="search-form_container " >
                     <form className="" role="search" action="" method="get">
                         <div style={{  display:"flex", justifyContent:" space-evenly ", flexDirection:"row"}}>
                             <input placeholder="Search..." className="search-form__input" type="search"
                                    name="s" title="Search" value=""/>
                             <button className="elementor-search-form__submit" type="submit" >
                                     <i className="fa fa-search" ></i>

                             </button>


                         </div>
                     </form>

                 </div>
                  </div>
                  <div className={"recent-Posts-title"} > Recent Posts </div>
                  <ArticleMinimised/>
                  <ArticleMinimised/>
                  <ArticleMinimised/>
                  <ArticleMinimised/>
              </div>
          </div>
        </div>




    );
}

export default Article;
