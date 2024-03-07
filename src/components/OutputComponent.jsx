import { useEffect, useState } from "react";

const CreateOutputs = ( { info, text, indexNumber, settings } ) => {

    function sanitize(letters){
        if(typeof letters === 'string') {
            return letters.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        } else {
            return ''
        }
    }

    return ( 
        <>
            {info.map((data, index) => (
                
                    <div key={index}>
                        <p
                            id={data.label} 
                            key={index} 
                            className={data.name}
                        >{sanitize(text[data.name])}
                        </p>
                    </div>
                
            ))}
        </>
     );
}
 
export default CreateOutputs;











/* import { useEffect, useState } from "react";

const CreateOutputs = ( { info, text, indexNumber, settings } ) => {

    function sanitize(letters){
        if(typeof letters === 'string') {
            return letters.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        } else {
            return ''
        }
    }

    return ( 
        <>
            {info.map((data, index) => {
                
                if(indexNumber === undefined){
                    indexNumber = 0;
                }
                //console.log(1)
                const htmlForId = (data.label).toLowerCase().replace(/\s/g, '-') + (settings? `-extra-${indexNumber}` : '');
                //const labelClassName = (data.name).toLowerCase().replace(/\s/g, '-') + (settings? `-extra-${indexNumber}` : '');
                const outputText = (data.label).toLowerCase().replace(/\s/g, '-') + (settings? `-extra-${indexNumber}` : '');
                const textSection = (data.name) + (settings ? `-extra-${indexNumber}` : '');
                
                return (
                    <div key={index}>
                        <p id={outputText} key={`display-${index}`} className={data.outStyle}>{sanitize(text[textSection])}</p>
                    </div>
                );
            })}
        </>
     );
}
 
export default CreateOutputs; */