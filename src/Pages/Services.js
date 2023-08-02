import React from "react";
import AccordionContainer from "../AccordionComp/AccordionContainer";

import ImageSlider from "../Slider/ImageSliderPage"
import { SliderData } from '../Slider/imageSliderData';
//OR
import NewSliderComp from "../Slider/NewSliderComp";

import DateRangePkr from "../DateRangePkr";

export default function() {

    //return <h1 style={{marginTop:"15vh"}}> Services page</h1>

return( 
<div className="pageHdrLight" style={{marginTop:"8.9vh"}}>
            <div>
              <h2> Services Details</h2>
            </div>

            <div>
                <h2>DateRange Picker Services Details</h2>
                <DateRangePkr/>
            </div>

            <div>
              <h2> Accordian Service Details</h2>
              <AccordionContainer/>
            </div>


            <div>
                <h2> ImageSlider Services Details</h2>
                 <ImageSlider 
                width={500}
                 height={250}
                slides={SliderData} /> 

                <NewSliderComp/>
            </div>



        </div>



);
   

   
}