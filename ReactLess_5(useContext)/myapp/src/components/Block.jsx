import { useContext } from "react";
import { Context } from "../context/Context";


function Block() {
    
    const {text, reverseText} = useContext(Context)

    return (
      <div>
        <h4>{text}</h4>
        <button onClick={() => reverseText()}>Click</button>
      </div>
    );
  }
  
export default Block;
  