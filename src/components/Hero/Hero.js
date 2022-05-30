import React from "react";
import "./hero.scss"

const Hero = ({hero}) => {

    const heroContent = hero.map((object,id)=>{
        return(
            <div key ={object.id} className="hero">
                <video  className="hero__video" poster={object.image} duration={object.duration} type="video/mp4" controls>
                </video>
            </div>
        );
    })

    return <div>{heroContent}</div>
}

export default Hero;