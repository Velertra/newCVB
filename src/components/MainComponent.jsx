import { useState } from 'react';
import CreateInput from '../utilities/CreateInputs'
import { PersonalInfo, EducationInfo, ExperienceInfo } from '../constants/MainData';
import CreateOutputs from '../utilities/CreateOutputs';
//import HideBtn from './HideBtn';
import InputComponent from './InputComponent';


const MainComponent = () => {
    const [text, setText] = useState({});

    function handleTextChange(name, value){
        setText((prevText) => ({ ...prevText, [name]: value }));
    } 

    //sets default data, also deltes if first input equals 'Josephine Myers'
    function addDefaultData(){
        if(text == undefined || text.text1 !== 'Josephine Myers'){
           const defaultData = {};
                [PersonalInfo, EducationInfo, ExperienceInfo].forEach((arr) => {
                    arr.forEach((data) => {
                        defaultData[data.name] = data.default;
                    })
                })
            setText(() => defaultData);
        } else{
            for(let state in text){
                setText((prevText) => ({...prevText, [state]: ''}))
            }
        }
    }

    return ( 
        <>
        <div className='Input-container'>
            <button onClick={() => addDefaultData()} >Add Default</button>
            <div className='personal-info'>
                {PersonalInfo.map((data, index) => 
                    <InputComponent
                        info={PersonalInfo}
                        handleTextChange={handleTextChange}
                        defaultValues={text}
                        data={data}
                        key={index}
                    />
                )}
            </div>
            <div className='education-info'>
                <CreateInput
                    info={EducationInfo}
                    handleTextChange={handleTextChange}
                    defaultValues={text}
                />
               
            </div>
            <div className='experience-info'>
                <CreateInput
                    info={ExperienceInfo}
                    handleTextChange={handleTextChange}
                    defaultValues={text}
                />
            </div>
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