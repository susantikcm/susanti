import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import FormCheckBox from '../form-checkbox/form-checkbox.component';

import './dynamic-form.styles.scss';

class DynamicForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            contactNo: '',
            contactType: '',
            guardianRequired: '',
            guardianName: '',
            guardianContact: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { dob } = this.state;

        const age = dob => {
            var currentDate = new Date();
            var birthDate = new Date(dob);
            var age = currentDate.getFullYear() - birthDate.getFullYear();
            var month = currentDate.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) 
                age--;
            return age;
        }
        
        if(age(dob) < 19) {
            alert("Age should be 18+");
            return;
        }
        
        //clearing state
        this.setState({
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            contactNo: [],
            contactType: '',
            guardianRequired: '',
            guardianName: '',
            guardianContact: ''
        });
 
    }

    renderDynamicForm() {
        return this.props.formFields.map((field, index)  => (
            <div key={index}>
                <label key={'1'+index} htmlFor={field.name}>{field.label}</label>
            </div>
            // <FormInput
            //     key={'1'+index}
            //     name={field.name}
            //     type={field.type ? field.type : 'text'} 
            //     value={this.state.firstName} 
            //     handleChange={this.handleChange}
            //     label={field.label}
            //     required
            // />
        ))
    }

    render() {
        const { formTitle, formFields, handleSubmit } = this.props;

        return(
            <div className="dynamic-form mx-auto">
            <h4>Dynamic Form</h4>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="firstName"
                        type="text" 
                        value={this.state.firstName} 
                        handleChange={this.handleChange}
                        label="First Name"
                        required
                    />
                    <FormInput
                        name="lastName"
                        type="text" 
                        value={this.state.lastName} 
                        handleChange={this.handleChange}
                        label="Last Name"
                        required
                    />
                    <FormInput
                        name="dob"
                        type="Date" 
                        value={this.state.dob} 
                        handleChange={this.handleChange}
                        label="Date of Birth"
                        isCustomLabel
                        required
                    />
                    <div className='group'>
                        <label className='no-shrink form-input-label'>Gender</label>
                        <select className='select-gender' onChange={this.handleChange}> 
                            <option value='1'>Female</option>
                            <option value='2'>Male</option>
                        </select>
                    </div>
                    <div className='group'>
                        <label className='no-shrink form-input-label'>Contact No.</label>
                        <div style={{ width: '320px' }}>
                            <select className='select-contact-type' style={{ display: 'inline', float: 'left', width: 'auto' }} 
                                onChange={this.handleChange}> 
                                <option value="Mobile">Mobile</option>
                                <option value="Work">Work</option>
                                <option value="Home">Home</option>
                            </select>                               
                            <FormInput className='select-contact-no' style={{ display: 'inline', float: 'left' }}
                                name="contactNo"
                                type="text" 
                                value={this.state.contactNo} 
                                handleChange={this.handleChange} 
                            />
                        </div>                
                    </div>
                    <button className='buttons' type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default DynamicForm;