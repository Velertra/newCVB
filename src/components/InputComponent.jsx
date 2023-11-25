import { useState } from "react";
import { useEffect } from "react";

const InputComponent = ( {data, defaultValues, handleTextChange, index, container } ) => {
    /* const [container, setcontainer] = useState(0)
    useEffect(() => {
        setcontainer(container + 1)
    }, []) */

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
 
export default InputComponent;