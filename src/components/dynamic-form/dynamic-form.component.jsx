import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import FormDropdown from '../form-dropdown/form-dropdown.component';
import FormCheckbox from '../form-checkbox/form-checkbox.component';
import FormRadio from '../form-radio/form-radio.component';

import './dynamic-form.styles.scss';

class DynamicForm extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log(value);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { ...fields } = this.state;

        console.log(fields.name, fields.value);
    }

    render() {
        const { formFields, submitValue, alignself } = this.props;

        return(
            <form className='dynamic-form mx-auto' onSubmit={this.handleSubmit}>
            {
                formFields.map(field => {
                    if(field.type === 'text') {
                        return (
                            <FormInput
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                    label={field.label}
                                required={field.required}
                                value={this.state.current}
                                handleChange={this.handleChange}
                            />
                        );
                    }
                    if(field.type === 'Date') {
                        return (
                            <FormInput
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                isCustomLabel={(field.type === 'Date') ? 'isCustomLabel' : null}
                                label={field.label}
                                required={field.required}
                                value={this.state.current}
                                handleChange={this.handleChange}
                            />
                        );
                    }
                    if(field.type === 'dropdown') {
                        return (
                            <FormDropdown
                                key={field.name}
                                name={field.name}
                                    type={field.type} 
                                label={field.label}
                                required={field.required}
                                options={field.options}
                                value={this.state.current}
                                handleChange={this.handleChange}
                            />
                        );
                    }
                    if(field.type === 'checkbox') {
                        return (
                            <FormCheckbox
                                className="form-control"
                                key={field.name}
                                name={field.name}
                                type={field.type} 
                                label={field.label}
                                required={field.required}
                                value={this.state.current}
                                handleChange={this.handleChangeCheckbox}
                            />
                        );
                    }
                    if(field.type === 'radio') {
                        return (
                            <FormRadio
                                key={field.name}
                                name={field.name}
                                type={field.type} 
                                label={field.label}
                                required={field.required}
                                value={this.state.current}
                                handleChange={this.handleChange}
                            />
                        );
                    }
                    return null;
                })
            }                           
            <input type="submit" value={submitValue} style={{width:'auto', alignSelf:{alignself} }} />
            </form>
        )
    }
}

export default DynamicForm;