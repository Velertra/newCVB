import { useState } from "react";
import DisplayDivider from '../utilities/separationFunction.jsx'
import { v4 as uuidv4 } from 'uuid'
import './base.scss'

export default function DefaultData() {
const [onSwitch2, setOnSwitch2] = useState(false);
const [onSwitch, setOnSwitch] = useState(false);
  const [inputs, setInputs] = useState({
      text1: 'Josephine Myers',
      text2: 'JosephineMyers@mailadd.com',
      text3: '20804820840',
      text4: 'London, UK',
      text5: 'Enter Degree',
      text6: 'Enter School',
      text7: 'Josephine Myers',
      text8: 'JosephineMyers@mailadd.com',
      text9: '20804820840',
      text10: 'London, UK',
      text11: 'Enter Degree',
      text12: 'Enter School',
      text13: 'Enter Degree',
      text14: 'Enter School',
      text15: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'
    });
  
    const handleInputChange = (e, inputName) => {
      const { value } = e.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [inputName]: value,
      }));
    };

    function handleClick(){
      if(onSwitch){
        setOnSwitch(false)
      } else {
        setOnSwitch(true);
      }
    }

    function handleClick2(){
      if(onSwitch2){
        setOnSwitch2(false)
      } else {
        setOnSwitch2(true);
      }
    }

    const personalDetailsId = uuidv4();
    const educationDetailsId = uuidv4();
    const experienceDetailsId = uuidv4();
  
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
      {
        name: 'text4',
        label: 'Address',
        placeholder: 'London, UK',
        
      },
      /* Education Info */
      {
        name: 'text5',
        label: 'School',
        placeholder: 'London City University',
        
      },
      {
        name: 'text6',
        label: 'Degree',
        placeholder: 'Bachelors in Economics',
        
      },
      {
        name: 'text7',
        label: 'Start Date',
        placeholder: '08/2020',
        
      },
      {
        name: 'text8',
        label: 'End Date',
        placeholder: 'present',
        
      },{
        name: 'text9',
        label: 'Location',
        placeholder: 'New York City, US',
        
      },
      /* Experience Info */
      {
        name: 'text10',
        label: 'Company Name',
        placeholder: 'Umbrella Inc.',
        
      },
      {
        name: 'text11',
        label: 'Position Title',
        placeholder: 'Enter School',
        
      },
      {
        name: 'text12',
        label: 'Start Date',
        placeholder: 'London City University',
        
      },
      {
        name: 'text13',
        label: 'End Date',
        placeholder: 'London City University',
        
      },
      {
        name: 'text14',
        label: 'Location',
        placeholder: 'London City University',
        
      },
      {
        name: 'text15',
        label: 'Description',
        placeholder: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        
      },
    ];
  
    return (
      <>
        <div key={'left'} className="left-side-div">
          <DisplayDivider
            fields={inputFields.slice(0, 4)}
            inputs={inputs}
            onChange={handleInputChange}
            className={"personalDetails"}
          />
          {onSwitch ? <><DisplayDivider
            fields={inputFields.slice(4, 9)}
            inputs={inputs}
            onChange={handleInputChange}
            className={"educationDetails"}
          /><button onClick={() => handleClick()}>thithis</button></>
            : 
            <button onClick={() => handleClick()}>hitthis</button>}

          {onSwitch2 ? <><DisplayDivider
            fields={inputFields.slice(9)}
            inputs={inputs}
            onChange={handleInputChange}
            className={'experienceDetails'}
          /><button onClick={() => handleClick2()}>thithis</button></>
            : 
            <button onClick={() => handleClick2()}>hitthis</button>}
        </div>  
        <div key={'cvDisplayDiv'} className="cvDisplayDiv">
          {Object.values(inputs).map((value, index) => (
              <div key={inputFields[index].name} className={inputFields[index].name}>
                <h1>{value}</h1>
              </div>
          ))}
        </div>
      </>
    );
}