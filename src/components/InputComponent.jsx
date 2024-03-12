import { useState } from "react";

const InputComponent = ({ sendTextBack, data, defaultText }) => {
  /* const [text, setText] = useState(''); */

  //preventing submittion
  function runThisFunction(e) {
    e.preventDefault();
  }

  return (
    <>
      <input
        id={data.name}
        className={data.inputStyle || "w-full h-10 my-2"}
        placeholder={data.placeholder}
        value={defaultText[data.name] || ""}
        onChange={(e) => {
           sendTextBack(
            e.target.value,
            data.name,
          );
        }}
      ></input>
    </>
  );
};

export default InputComponent;

/* import { useState } from "react";
import { useEffect } from "react";

const InputComponent = ( {data, defaultValues, handleTextChange, index, container } ) => {

    return ( 
        <div className="border">
                <label htmlFor={(data.label).toLowerCase().replace(/\s/g, '-') + (container || '')}>{data.label}{" "}
                    <input
                        type={data.type}
                        id={((data.label).toLowerCase().replace(/\s/g, '-')) + (container || "")}
                        className={data.styler}
                        name={`input-${data.name}` + (container || '')} 
                        value={defaultValues[(data.name) + (container || '')] || ''}
                        placeholder={data.placeholder}
                        onChange={(e) => {
                            handleTextChange((data.name + (container || '')), e.target.value, container);
                        }}   
                    />
                </label>   
        </div>
     );
}
 
export default InputComponent; */
