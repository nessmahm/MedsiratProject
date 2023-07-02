import React from "react";
import "../../styles/guideIntro.css";

function IntroElement(props ) {
    const getClassName = () => {

        if (props.id == 2) {
            return " guideIntro-body guideIntro-body-2";
        } else  {
            return "guideIntro-body ";
        }
    };
    return (
        <div className={getClassName() }  style={{" padding ": " 50px 200px "}} >

               <div className={"guideIntro-image-container"}>
                <img className={"guideIntro-image"}
                     alt={"image"}
                     src ={props.image}/>
                </div>
            <div className={"guideIntro-text"} >
                   <div className={"guideIntro-title"}>{props.title} </div>
                   <div className={"guideIntro-description"}>
                       {props.description}
                   </div>


               </div>


            </div>


    );
}

export default IntroElement;
