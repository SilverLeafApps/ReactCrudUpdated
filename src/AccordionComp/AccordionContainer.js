import { faqs } from "./accordionData";
import AccordionItem from "./AccordionItem";
import "./AccordionStyleSheet.css"

const AccordionContainer = () => {

 
    return (
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </ul>  
      
  );

  };
  
  export default AccordionContainer;