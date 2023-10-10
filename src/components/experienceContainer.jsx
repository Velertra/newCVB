import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import RenderCv from './renderCvFunct';

export default function ExperienceComp() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');
    const [text6, setText6] = useState('');

  
    const educationDetailsId = uuidv4();
  
    return (
      <>
        <div className='experienceCompDiv'>
          <label>{'Company Name'} {' '}
            <input
              value={text1}
              placeholder="Umbrella Academy"
              onChange={(e) => setText1(e.target.value)}
            />
          </label>
          <label>{'Posistion Title'} {' '}
            <input
              value={text2}
              placeholder="UX & UI Designer"
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
              placeholder="New York City, US"
              onChange={(e) => setText5(e.target.value)}
            />
          </label>
          <label>{'Description'} {' '}
            <textarea
              value={text6}
              placeholder="New York City, US"
              onChange={(e) => setText6(e.target.value)}
            />
          </label>
          

          </div> 
          <div> 
            <RenderCv
              value={text1} 
              onChange={(e) => setText1(e.target.value)}
              id={educationDetailsId}
              forNow={'Umbrella Academy'}
              useThisOne={'check'}
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
              forNow={'New York City, US'}
            /> 
            <RenderCv
              value={text6} 
              onChange={(e) => setText6(e.target.value)}
              id={educationDetailsId}
              forNow={'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'}
            />   
          </div>     
          </>
    );
  }