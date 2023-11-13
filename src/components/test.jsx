import { useState } from 'react';
import { PersonalInfo, EducationInfo, ExperienceInfo } from '../constants/MainData';

const MainComponent = () => {
    const [text, setText] = useState({});
    //const [defaultValues, setDefaultValues] = useState({})

    function handleTextChange(name, value){

        setText((prevText) => ({ ...prevText, [name]: value }));
    } 


    function addDefaultData(){
        const defaultData = {};
        [PersonalInfo, EducationInfo, ExperienceInfo].forEach((arr) => {
            arr.forEach((data) => {
                defaultData[data.name] = data.default;
            })
        })
        setText(() => defaultData);
        //setDefaultValues(defaultData);
    }
    

    return ( 
        <>
            <button onClick={() => addDefaultData()}>Add Default</button>
            <CreateInputs
                info={PersonalInfo}
                handleTextChange={handleTextChange}
                defaultValues={text}
            /> 
           <CreateOutputs
                info={PersonalInfo}
                text={text}
            />
        </>
     );
}
 
export default MainComponent;

const CreateInputs = ( { info, handleTextChange, defaultValues } ) => {

    return ( 
        <>
        {info.map((data, index) =>
            <div className={`container-${data.name}`} key={index}>
                    <input
                        name={`input-${data.name}`}
                        value={defaultValues[data.name]}
                        onChange={(e) => {
                            handleTextChange(data.name, e.target.value);
                            
                        }}   
                    />
            </div>
        )}
        </>
    );
}

const CreateOutputs = ( { info, text } ) => {
    return ( 
        <>
        {info.map((data, index) => (
            <div key={`display-${index}`}>
                <p>{text[data.name]}</p>
            </div>
        ))}
     </>
     );
}
 


