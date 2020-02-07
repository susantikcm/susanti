import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, isCustomLabel, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {            
            label ?  
            (
                <label className={`${otherProps.value.length ? 'shrink' : ''} ${ isCustomLabel ? 'no-shrink' : 'form-input-label'}`} >
                    {label}
                </label>
            )
            : null
        }
    </div>
)

export default FormInput;