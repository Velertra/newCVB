import { useState } from "react";
import DisplayDivider from '../utilities/separationFunction.jsx'
import AccordionBtn from '../utilities/accordionFunc.jsx'
import { v4 as uuidv4 } from 'uuid'
import './base.scss'

export default function DefaultData() {
    const [switch, setSwitch] = useState(false)
    const [inputs, setInputs] = useState({
        text1: 'Josephine Myers',
        text2: 'JosephineMyers@mailadd.com',
        text3: '20804820840',
      });
    
      const handleInputChange = (e, inputName) => {
        const { value } = e.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          [inputName]: value,
        }));
      };
    
      const inputFields = [
        /* Personal Details */
        {
          name: 'text1',
          label: 'Full Name',
          placeholder: 'Josephine Myers',
          
        },
        {
          name: 'text2',
          label: 'Email Me Now',
          placeholder: 'JosephineMyers@mailadd.com',
          
        },
        {
          name: 'text3',
          label: 'phone number',
          placeholder: '20804820840',
         
        },
      ];
    
      return (
        <>
          <div key={'left'} className="left-side-div">
            <DisplayDivider
              fields={inputFields.slice(0, 4)}
              inputs={inputs}
              onChange={handleInputChange}
              key={"personDetails"}
            />
            
          </div>  
          <div className="cvDisplayDiv">
            {Object.values(inputs).map((value, index) => (
              <div key={index} className="">
                  <h1 >{value}</h1>
              </div>
            ))}
          </div>
        </>
      );
}
