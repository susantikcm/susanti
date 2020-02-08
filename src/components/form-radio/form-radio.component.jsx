import React from 'react';

import './form-radio.styles.scss';

const FormRadio = ({ label, ...otherProps }) => (
    <div className='form-radio'>
        <label>
            <input {...otherProps} />&nbsp;&nbsp;
            {label}
        </label>
    </div>
)

export default FormRadio;