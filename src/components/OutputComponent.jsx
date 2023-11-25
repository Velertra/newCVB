import { useEffect, useState } from "react";

const CreateOutputs = ( { info, text, indexNumber, settings } ) => {
    /* const [indexNumber, setindexNumber] = useState('')
    useEffect(() => {
        setindexNumber(indexNumber)
    }, [indexNumber]) */


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
                const labelClassName = (data.name).toLowerCase().replace(/\s/g, '-') + (settings? `-extra-${indexNumber}` : '');
                const outputText = (data.label).toLowerCase().replace(/\s/g, '-') + (settings? `-extra-${indexNumber}` : '');
                const test = (data.name) + (settings ? `-extra-${indexNumber}` : '');
                
                //console.log(text[test])
                return (
                    <label htmlFor={htmlForId} className={data.outStyle} key={`display-${index}`}>
                    {/* <span>{data.label}</span> */}
                    <p id={outputText}>{sanitize(text[test])}</p>
                    </label>
                );
            })}
        </>
     );
}
 
export default CreateOutputs;

/* CreateOutputs.propTypes = {
    info: PropTypes.array.isRequired,
  }; */