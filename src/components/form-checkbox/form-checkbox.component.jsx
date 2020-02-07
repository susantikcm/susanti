import React from 'react';

import './form-checkbox.styles.scss';

const FormCheckBox = ({ label, ...otherProps }) => (
    <div className="group">
        <input className='form-checkbox' {...otherProps} />
        {            
            label ?  
            (
                <label>{label}</label>
            )
            : null
        }
    </div>
)

export default FormCheckBox;