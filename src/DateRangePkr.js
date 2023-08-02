// https://www.copycat.dev/blog/react-datepicker/
	
//npm install react-datepicker --save
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css"; 
// CSS Modules, react-datepicker-cssmodules.css// 
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/*
   const App = () => {  
      const [startDate, setStartDate] = useState(new Date());  
      return (    
    <DatePicker         
        selected={startDate}         
        onChange={(date) => setStartDate(date)}        
        dateFormat="Pp"       
        showTimeSelect        
        timeFormat="p"  
        showYearDropdown
        scrollableMonthYearDropdown   
    />  
     );
};
*/

import {useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateRangePkr = () => {    
    const [postDate, setPostDate] = useState(new Date());    
   
    const handleChange = (postDate) => {
        setPostDate(postDate);
        alert(postDate);
      };

    return (        
       <div>                               
          <DatePicker                         
              selected={postDate}                                          
              //onChange={date => setPostDate(date)} 
              onChange={handleChange}             
              minDate={new Date()}   //all dates before this will be disabled
              //maxDate={new Date()}   //all dates after this will be disabled
              dateFormat="Pp"       
              showTimeSelect        
              timeFormat="p"  
              showYearDropdown
              scrollableMonthYearDropdown                                            />                
         </div>                
  
  );
};

export default DateRangePkr;
