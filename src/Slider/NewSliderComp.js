//npm i react-simple-image-slider 

/*<SimpleImageSlider
   width={690}
   height={470}
   images={sliderImages}
   showNavs={true}
/> */

import React from "react";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import FirstPicture from "./LifeCycle-Exp.jpg"
import SecondPicture from "./LifeCycle-Short.jpg"

export default function NewSliderComp() {

    const [imageNum, setImageNum] = useState(1);

    const sliderImages = [
     {
        url:FirstPicture
      },
      {
        url:SecondPicture
      },
      {
        url:
          'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
];

return (
    <div>
       <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         </h3>
         <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
         <div style = {{ fontSize: "1.5rem" }}>
            The current image slide No is {imageNum}.
         </div>
    </div>
 );
}