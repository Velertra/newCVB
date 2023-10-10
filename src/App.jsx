import DefaultData from './components/defaultData.jsx'

export default function App() {
  return(
    <DefaultData />
  )
}







/* import './App.css';
import React from 'react';
import PersonalDetailsComp from './components/personalContainer'
import EducationComp from './components/educationContainer'
import ExperienceComp from './components/experienceContainer';

function App() {
  return (
    <>
      <PersonalDetailsComp
      />
      <EducationComp 
      />
      <ExperienceComp 
      />
    </>
  );
}

export default App;


 */


/* export default function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
    <label>{'first input'}</label>
      <input
        label="First input"
        value={text}
        onChange={handleChange}
      />

    <label>{'second input'}</label>
      <input
        label="Second input"
        value={text}
        onChange={handleChange}
      />
    </>
  );
} */