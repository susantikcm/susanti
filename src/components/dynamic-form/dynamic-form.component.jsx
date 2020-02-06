import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

import './dynamic-form.styles.scss';

class DynamicForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            contactNo: '',
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
            guardianRequired: '',
            guardianName: '',
            guardianContact: ''
        });
 
    }

    render() {
        return(
            <div className="dynamic-form mx-auto">
            <h1>Dynamic Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
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
                        required
                    />
                    <select className='form-input' value={this.state.gender} onChange={this.handleChange}> 
                        <option name="male" value='1'> Male</option>
                        <option name="female" value='2'>Female</option>
                    </select>
                    <FormInput
                        name="contactNo"
                        type="text" 
                        value={this.state.contactNo} 
                        handleChange={this.handleChange} 
                        label="Contact No."
                    />
                    <FormInput
                        name="Require guardian consent"
                        type="checkbox" 
                        value={this.state.guardianRequired} 
                        handleChange={this.handleChange} 
                        label="Require guardian consent"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default DynamicForm;