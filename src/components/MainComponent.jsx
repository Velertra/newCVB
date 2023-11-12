import { useState } from 'react';
import CreateInput from '../utilities/CreateInputs'
import { PersonalInfo, EducationInfo, ExperienceInfo } from '../constants/MainData';
import CreateOutputs from '../utilities/CreateOutputs';


const MainComponent = () => {
    const [text, setText] = useState({});
    const [onSwitch, setOnSwitch] = useState(false);
    const [value, setValue] = useState('')

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
    }


    return ( 
        <>
        <div className='Input-container'>
            <button
            onClick={() => addDefaultData()} 
            >Add Default</button>
            <CreateInput
                info={PersonalInfo}
                handleTextChange={handleTextChange}
                defaultValues={text}
            />
            <CreateInput
                info={EducationInfo}
                handleTextChange={handleTextChange}
                defaultValues={text}
            />
            <CreateInput
                info={ExperienceInfo}
                handleTextChange={handleTextChange}
                defaultValues={text}
                
            />
        </div>
           
        <div className='output-containers'>
           <CreateOutputs
                info={PersonalInfo}
                text={text}
            />
            <CreateOutputs
                info={EducationInfo}
                text={text}
            />
            <CreateOutputs
                info={ExperienceInfo}
                text={text}
            />
        </div>
        </>
     );
}
 
export default MainComponent;