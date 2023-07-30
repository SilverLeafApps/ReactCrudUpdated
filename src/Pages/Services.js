import React from "react";
import AccordionContainer from "../AccordionComp/AccordionContainer";



export default function() {

    //return <h1 style={{marginTop:"15vh"}}> Services page</h1>

return( 
<div className="pageHdrLight" style={{marginTop:"9.5vh"}}>
            <div>
              <h2> Services Details</h2>
            </div>

            <div>
              <AccordionContainer/>
            </div>
        </div>

);
   

   
}