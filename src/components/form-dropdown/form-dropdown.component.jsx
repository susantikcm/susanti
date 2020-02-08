import React from 'react';

import './form-dropdown.styles.scss';

const FormDropdown = ({ label, options, handleChange, ...otherProps }) => (
    <div className='group'>
            <label className='no-shrink form-input-label'>{label}</label>
            <select className='select' onChange={handleChange}> 
                <option value=''>Select option...</option>
                {
                    options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
    </div>
)

export default FormDropdown; 