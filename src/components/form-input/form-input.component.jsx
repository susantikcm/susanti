import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, type, isCustomLabel, handleChange, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' type={type} onChange={handleChange} {...otherProps} />
        {             
            label ?  
            (
                <label className={`${otherProps.value !== '' ? 'shrink' : ''} ${ isCustomLabel ? 'no-shrink' : 'form-input-label'}`} >
                    {label}
                </label>
            )
            : null
        }
    </div>
)

export default FormInput;