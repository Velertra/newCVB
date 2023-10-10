import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import RenderCv from './renderCvFunct';

export default function EducationComp() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');
  
  
    const educationDetailsId = uuidv4();
  
    return (
      <>
        <div className='educationDiv'>
          <label>{'School'} {' '}
            <input
              value={text1}
              placeholder="London City University"
              onChange={(e) => setText1(e.target.value)}
            />
          </label>
          <label>{'Degree'} {' '}
            <input
              value={text2}
              placeholder="Bachelors in Economics"
              onChange={(e) => setText2(e.target.value)}
            />
          </label>
          <label>{'Start Date'} {' '}
            <input
              value={text3}
              placeholder="08/2020"
              onChange={(e) => setText3(e.target.value)}
            />
          </label>
          <label>{'End Date'} {' '}
            <input
              value={text4}
              placeholder="present"
              onChange={(e) => setText4(e.target.value)}
            />
          </label>
          <label>{'Location'} {' '}
            <input
              value={text5}
              placeholder="London, UK"
              onChange={(e) => setText5(e.target.value)}
            />
          </label>
          </div> 
          <div > 
            <RenderCv
              value={text1} 
              onChange={(e) => setText1(e.target.value)}
              id={educationDetailsId}
              forNow={'London City University'}
            />
            <RenderCv
              value={text2} 
              onChange={(e) => setText2(e.target.value)}
              id={educationDetailsId}
              forNow={'Bachelors in Economics'}
            /> 
            <RenderCv
              value={text3} 
              onChange={(e) => setText3(e.target.value)}
              id={educationDetailsId}
              forNow={'08/2020'}
            /> 
            <RenderCv
              value={text4} 
              onChange={(e) => setText4(e.target.value)}
              id={educationDetailsId}
              forNow={'present'}
            />
            <RenderCv
              value={text5} 
              onChange={(e) => setText5(e.target.value)}
              id={educationDetailsId}
              forNow={'London, UK'}
            />  
          </div>     
          </>
    );
  }