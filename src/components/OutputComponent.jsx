import { useEffect, useState } from "react";
import mainData from "../constants/MainData.json";

const CreateOutputs = ({ text }) => {
  function sanitize(letters) {
    if (typeof letters === "string") {
      return letters.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else {
      return "";
    }
  }

  return (
    <>
      {[
        mainData.personal.a,
        mainData.education.b,
        mainData.education.c,
        mainData.education.d,
        mainData.experience.e,
        mainData.experience.f,
        mainData.experience.g,
        mainData.experience.h,
      ].map((arr, index) => (
        <div id={"output-" + index} key={index}>
          {arr.map((data, index) => (
            <div id={data.name} key={data.name + index}>
              <p
                id={data.label}
                key={data.name + index}
                className={data.outStyle}
              >
                {sanitize(text[data.name])}
              </p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

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
