//import Firstinput from '../components/FirstInput';

import { useState } from "react";
import InputComponent from "../components/InputComponent";

const CreateInput = ( { info, handleTextChange, defaultValues, addExtraSection } ) => {
    const [hideBtn, setHideBtn] = useState(false);
    const [sectionsArray, setSectionsArray] = useState([]);

    function addExtraSection(){
        //console.log(sectionsArray)
        setSectionsArray((prevInputs) => [...prevInputs, <div key={prevInputs.length}></div>]);
    }

    function hideBtnSwitch(){
        if(hideBtn == false){
            setHideBtn(() => true);
        } else {
            setHideBtn(() => false)
        }
    }

    function removeSection(test){
        let newSections = [];
        for(let x = 0; x < sectionsArray.length; x++){
            if(sectionsArray[x] !== sectionsArray[test.key]){
                //console.log(sectionsArray[x])
                newSections.push(<div key={test.key}></div>);
            }
        }
        
        console.log(newSections)
        setSectionsArray(() => newSections)
    }

    
    return ( 
        <>
        {hideBtn ? <button onClick={() =>hideBtnSwitch()}>hide</button> 
        : 
        <>
            <button onClick={() =>hideBtnSwitch()}>hide</button>
            <button onClick={() => addExtraSection()}>extra</button>
            {info.map((data, index) =>
                <InputComponent
                    key={index}
                    handleTextChange={handleTextChange}
                    defaultValues={defaultValues}
                    data={data}
                />
            )}
            {/* add a section for every div in  */}
            
            {Array.isArray(sectionsArray) &&
            sectionsArray.map((div, index) => (
                    <div key={index}>
                        
                        {info.map((data, dataIndex) => (
                            <InputComponent
                                info={data}
                                handleTextChange={handleTextChange}
                                defaultValues={''}
                                data={data}
                                key={data.label + dataIndex}
                            />
                        ))}
                        <button onClick={(e) => removeSection(div)}>remove</button>
                    </div>
                ))}
        </>}
        </>
    );
}
 
export default CreateInput;