import React from 'react';
import { PropTypes } from 'prop-types';


function RenderCv({
    value,
    forNow,
    useThisOne
  }) {
    return (
        <div className={useThisOne}>
            <label>
            {value === '' ?(
                <h1>{forNow}</h1>
            ) : (
                <h1>{value}</h1>
            )}
            {''}
            </label>
        </div>
    );
  }
  
  RenderCv.propTypes = {
    value: PropTypes.string.isRequired,
    forNow: PropTypes.string.isRequired,
    useThisOne: PropTypes.string.isRequired,
  }

  export default RenderCv;