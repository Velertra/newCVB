//import Firstinput from '../components/FirstInput';

import { useState } from "react";
import InputComponent from "../components/InputComponent";

const CreateInput = ( { info, handleTextChange, defaultValues } ) => {
    const [hideBtn, setHideBtn] = useState(false);

    function hideBtnSwitch(){
        if(hideBtn == false){
            setHideBtn(() => true);
        } else {
            setHideBtn(() => false)
        }
    }

    
    return ( 
        <>
        {hideBtn ? <button onClick={() =>hideBtnSwitch()}>hide</button> : <>
            <button onClick={() =>hideBtnSwitch()}>hide</button>
            {info.map((data, index) =>
                <InputComponent
                    key={index}
                    handleTextChange={handleTextChange}
                    defaultValues={defaultValues}
                    data={data}
                />
            )}
        </>}
        </>
    );
}
 
export default CreateInput;