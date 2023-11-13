import { useState } from "react";

const HideBtn = ( { hideBtnSwitch } ) => {

    const [hideBtn, setHideBtn] = useState(false)


    function hideBtnSwitch(){
        if(hideBtn == false){
            setHideBtn(() => true);
        } else {
            setHideBtn(() => false)
        }
    }
    
    return ( 
        <button onClick={() => hideBtnSwitch()}
        >hide</button>
     );
}
 
export default HideBtn;