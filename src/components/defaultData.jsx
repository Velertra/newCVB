import { useState } from "react";


export default function DefaultData() {
    const [inputs, setInputs] = useState({
        text1: '',
        text2: '',
        text3: '',
        text4: '',
      });
    
      const handleInputChange = (e, inputName) => {
        const { value } = e.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          [inputName]: value,
        }));
      };
    
      const inputFields = [
        {
          name: 'text1',
          label: 'Full Name',
          placeholder: 'Josephine Myers',
        },
        {
          name: 'text2',
          label: 'Email Me Now',
          placeholder: 'playpla',
        },
        {
          name: 'text3',
          label: 'Degree',
          placeholder: 'Enter Degree',
        },
        {
          name: 'text4',
          label: 'School',
          placeholder: 'Enter School',
        },
      ];
    
      return (
        <>
          <InputGroup
            fields={inputFields.slice(0, 2)}
            inputs={inputs}
            onChange={handleInputChange}
          />
          <InputGroup
            fields={inputFields.slice(2)}
            inputs={inputs}
            onChange={handleInputChange}
          />
          {/* Call the function to render OtherFunction components */}
          <OtherFunction
            inputs={inputs} />
        </>
      );
}






  
  
  // Reusable component for rendering a group of input fields
  function InputGroup({ fields, inputs, onChange }) {
    return (
      <div>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}{' '}</label>
            <input
              value={inputs[field.name]}
              placeholder={field.placeholder}
              onChange={(e) => onChange(e, field.name)}
            />
          </div>
        ))}
      </div>
    );
  }
  
  
function OtherFunction({ inputs }) {
    return (
      <div>
        {Object.values(inputs).map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
      </div>
    );
  }
  
  
  
  
  
  function RenderOtherFunctions({ inputs }) {
    return <OtherFunction inputs={inputs} />;
  }
  
  


  
/* function InputField({ value, onChange, placeholder }) {
    return (
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
   */