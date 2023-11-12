import { useState } from 'react';


const Firstinput = ({ handleTextChange, data }) => {
    return ( 
        <label>{data.label}{" "}
            <input
                name={`input-${data.name}`} 
                onChange={(e) => handleTextChange(e.target.value)}   
            />
        </label>
     );
}
 
export default Firstinput;