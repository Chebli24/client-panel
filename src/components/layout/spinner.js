import React from 'react';
import spinner from './spinner.gif';

export default () => {
    return (
        <div>
            <img src={spinner} alt="Loading..." style={{ width: '90px', margin: 'auto', display: 'block', marginTop: '200px'  }}/>
        </div>
    )
}