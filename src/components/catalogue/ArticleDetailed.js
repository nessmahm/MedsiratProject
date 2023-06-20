import React from "react";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function ArticleDetailed(props ){
    return (
        <div  className={"article-detailed-body"}>
             <div className={"image-container"}>
                 <img alt="image " src= {props.image} className={"image-article"}></img>

             </div>


            <div>
                <ul className={"article-details"}>
                     <li className={"article-details-elements"}>
                         <span> <FaUser style={{ paddingRight:"10px"}} /> </span>
                         {props.auther } <span className={"split"}>  |  </span>
                     </li>

                    <li className={"article-details-elements"} style={{ paddingLeft:"15px"}}>
                        <span> <FaCalendarAlt style={{ paddingRight:"10px"}} /> </span>
                         {props.timing} </li>
                </ul>
            </div>
            <div className={"article-description"}>
                {/*
                 Lorem ipsum dolor sit amet consectetur adipiscing elitse do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenimo ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipiscing elitse do eiusmod tempor incididunt uta labore et dolore magna aliqua. Utenimo ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempore nostro incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore eere martolot dolore magna aliqua.
                Utenim ad minim veniam quis nostrud exercitation ullamce u commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            */}
                {props.description}
            </div>
            <div className={"button-edit-delete"}>

                <button className={"button-edit"}> <a style={{color:"white"}} href="/editarticle"><span> edit </span></a></button>
                <button className={"button-delete"}> delete </button>


            </div>
        </div>
    );
}
export default ArticleDetailed;