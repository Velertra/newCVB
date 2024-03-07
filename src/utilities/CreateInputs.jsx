








/* import { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";

const CreateInput = ( { info, handleTextChange, defaultValues, container, amountOfExtras, } ) => {
    const [hideBtn, setHideBtn] = useState(false);
    const [sectionsArray, setSectionsArray] = useState([]);

    function addExtraSection(e){
        setSectionsArray((prevInputs) => [...prevInputs, <div key={'test'}>{prevInputs.length}</div>]);
        amountOfExtras(e)
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

           
            if(sectionsArray[x].key !== test.toString()){
               
                newSections.push(sectionsArray[x]);
            }
        }
        
        setSectionsArray(() => newSections)
    }
    
    return ( 
        <>
        {hideBtn ? <button onClick={() =>hideBtnSwitch()}>hide</button> 
        : 
        <>
            <button onClick={() =>hideBtnSwitch()}>hide</button>
            <button id={container} onClick={(e) => addExtraSection(e)}>extra</button>
            
                <form className='input-main-container'>
                {info.map((data, index) =>
                    <InputComponent
                        key={index}
                        handleTextChange={handleTextChange}
                        defaultValues={defaultValues}
                        data={data}
                    />
                )}
                </form>
            
                {Array.isArray(sectionsArray) &&
                    sectionsArray.map((section, index) => (
                        <section id={container + index} key={index}>
                            <form className={'input-new-container' + index}>
                                {info.map((data, dataIndex) => (
                                    <InputComponent
                                        info={data}
                                        handleTextChange={handleTextChange}
                                        defaultValues={defaultValues}
                                        data={data}
                                        container={`-extra-${index}`}
                                        key={data.label + dataIndex}
                                    
                                    />
                                    
                                ))}
                            </form>
                            <button  onClick={(e) => removeSection(index)}>remove</button>
                        </section>
                    ))}
        </>}
        </>
    );
}
 
export default CreateInput; */