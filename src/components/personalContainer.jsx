import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RenderCv from './renderCvFunct'

function PersonalDetailsComp() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
  
  
    const personalDetailsId = uuidv4();
  
    return (
      <>
        <div className='personalCompDiv'>
          <label>{'full Name'} {' '}
            <input
              value={text1}
              placeholder="Josephine Myers"
              onChange={(e) => setText1(e.target.value)}
            />
          </label>
          <label>{'Email Me Now'} {' '}
            <input
              value={text2}
              placeholder="JosephineMyers@anemial.com"
              onChange={(e) => setText2(e.target.value)}
            />
          </label>
          <label>{'Phone Number'} {' '}
            <input
              value={text3}
              placeholder="208370830-23"
              onChange={(e) => setText3(e.target.value)}
            />
          </label>
          <label>{'Address'} {' '}
            <input
              value={text4}
              placeholder="342242 s thisisastreet"
              onChange={(e) => setText4(e.target.value)}
            />
          </label>
          </div> 
          <div> 
            <RenderCv
              value={text1} 
              onChange={(e) => setText1(e.target.value)}
              id={personalDetailsId}
              forNow={'Josephine Myers'}
            />
            <RenderCv
              value={text2} 
              onChange={(e) => setText2(e.target.value)}
              id={personalDetailsId}
              forNow={'Josephine Myers@emial.com'}
            /> 
            <RenderCv
              value={text3} 
              onChange={(e) => setText3(e.target.value)}
              id={personalDetailsId}
              forNow={'208370830-23'}
            /> 
            <RenderCv
              value={text4} 
              onChange={(e) => setText4(e.target.value)}
              id={personalDetailsId}
              forNow={'342242 s thisisastreet'}
            /> 
          </div>     
          </>
    );
  }

export default PersonalDetailsComp;