import { v4 as uuidv4 } from 'uuid'
 
export default function DisplayDivider({ fields, inputs, onChange, name }) {
    return (
      <div className={name}>
        {fields.map((field) => (
          <div key={uuidv4()}>
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
  