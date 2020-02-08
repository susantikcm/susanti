import React from 'react';

import './form-checkbox.styles.scss';

const FormCheckBox = ({ label, handleChange, ...otherProps }) => (
    <label>
        <input type='checkbox' onChange={handleChange} {...otherProps} />
        <span>{label}</span>
    </label>
)

export default FormCheckBox;