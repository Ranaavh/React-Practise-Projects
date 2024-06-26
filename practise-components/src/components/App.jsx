import React from "react";
import Heading from "./Heading";
import List from "./list";
 import Pi,{doublePi } from "../math"; //or import * as pi from "../math"; then call pi. 



function App(){
 return (
<div>
    
     <Heading/>
     <List/>
     <li>{Pi}</li>
    <li>{doublePi()}</li>
    
</div>
 );

}

export default App ;