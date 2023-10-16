import { useState } from "react";

export default function DisplayDivider({ fields, inputs, onChange, name, className }) {
    const [dropDown, setDropDown] = useState(false)


    return (
      <div className={className}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}{' '}
                <input
                value={inputs[field.name]}
                placeholder={field.placeholder}
                onChange={(e) => onChange(e, field.name)}
                />
            </label>
          </div>
        ))}
      </div>
    );
  }
  