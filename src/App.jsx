import DefaultData from './components/defaultData'
import { useState } from 'react';


export default function App() {
  const [onSwitch, setOnSwitch] = useState(false);

  return(
    <DefaultData />
  )
}