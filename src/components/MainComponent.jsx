import { useState } from 'react';
import FirstInput from './FirstInput';
import DisplayText from './DisplayText'
import CreateInput from '../utilities/CreateInputs'
import { PersonalInfo, EducationInfo, ExperienceInfo } from '../constants/MainData';
import CreateOutputs from '../utilities/CreateOutputs';
//import CreateOutputs from '../utilities/CreateOutputs';


const MainComponent = () => {
    const [text, setText] = useState({});

    function handleTextChange(name, value){

        setText((prevText) => ({ ...prevText, [name]: value }));
    } 

    return ( 
        <>
            <CreateInput
                info={PersonalInfo}
                handleTextChange={handleTextChange}
            />
            <CreateInput
                info={EducationInfo}
                handleTextChange={handleTextChange}
            />
            <CreateInput
                info={ExperienceInfo}
                handleTextChange={handleTextChange}
            />
           
           
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

        </>
     );
}
 
export default MainComponent;