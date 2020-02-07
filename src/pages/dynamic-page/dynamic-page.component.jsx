import React from 'react';

import DynamicForm from '../../components/dynamic-form/dynamic-form.component';

import FORM_SCHEMA from '../../form-schema';

class DynamicPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        form_data:  FORM_SCHEMA,
        name: "John Foo",
        dob: "1990-01-01",
        gender: 1,
        contact: [
          {
            type: "mobile",
            value: "0400123123"
          },
          {
            type: "home",
            value: "610000000"
          }
        ],
        guardian: 
        {
          name: "Jane Foo",
          contact: "0400123123"
        }
      };
    }

    render() {
    
        const { form_data } = this.state;  
        const titleProps = this.props.location.titleProps;
        console.log(titleProps);
        return (
            <div className='dynamic-page'>
                <h1>My Dynamic Page</h1>
                <DynamicForm 
                    formTitle = {titleProps}
                    formFields = {form_data.formFields}
                    handleSubmit = {(formFields => {this.onSubmit(formFields)} )}
                />
            </div>
        );
    }
}  
export default DynamicPage;
