const InputComponent = ( {data, defaultValues, handleTextChange, index} ) => {

    return ( 
        <div className="border" id={(`${data.label}-container`).toLowerCase().replace(/\s/g, '-')}>
            <label>{data.label}{" "}
                <input
                    type={data.type}
                    className={data.styler}
                    pattern={data.pattern}
                    name={`input-${data.name}`} 
                    value={defaultValues[data.name] || ''}
                    placeholder={data.placeholder}
                    onChange={(e) => {
                        handleTextChange(data.name, e.target.value);
                    }}   
                />
            </label>   
        </div>
     );
}
 
export default InputComponent;