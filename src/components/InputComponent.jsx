const InputComponent = ( {data, defaultValues, handleTextChange, index} ) => {

    return ( 
        <div className={`container-${data.name}`} key={index}>
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