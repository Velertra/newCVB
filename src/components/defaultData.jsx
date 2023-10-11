import { useState } from "react";
import DisplayDivider from '../utilities/separationFunction.jsx'
import { v4 as uuidv4 } from 'uuid'
import './base.scss'

export default function DefaultData() {
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
          <div className="left-side-div">
            <DisplayDivider
              id={personalDetailsId}
              fields={inputFields.slice(0, 4)}
              inputs={inputs}
              onChange={handleInputChange}
              name={'personalDetailsDiv'}
            />
            <DisplayDivider
              id={educationDetailsId}
              fields={inputFields.slice(4, 9)}
              inputs={inputs}
              onChange={handleInputChange}
              name={'educationDetailsDiv'}
            />
            <DisplayDivider
              id={experienceDetailsId}
              fields={inputFields.slice(9)}
              inputs={inputs}
              onChange={handleInputChange}
              name={'experienceDetailsDiv'}
            />
          </div>  
          <div className="cvDisplayDiv">
            {Object.values(inputs).map((value, index) => (
              <>
                <div>
                  <h1 key={index}>{value}</h1>
                </div>
              </>
            ))}
          </div>
        </>
      );
}
