//import Firstinput from '../components/FirstInput';

import { useState } from "react";


const CreateInput = ( { info, handleTextChange, defaultValues } ) => {
 
    return ( 
        <>
        {info.map((data, index) =>
            <div className={`container-${data.name}`} key={index}>
                <label>{data.label}{" "}
                    <input
                        name={`input-${data.name}`} 
                        value={defaultValues[data.name]}
                        onChange={(e) => {
                            handleTextChange(data.name, e.target.value)
                            /* handleTextHere(e.target.value) */
                        }}   
                    />
                </label>
            </div>
        )}
        </>
    );
}
 
export default CreateInput;