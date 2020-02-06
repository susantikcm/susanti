import React, { Component } from 'react';
import './App.css';

import DynamicForm from './components/dynamic-form/dynamic-form.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
    
    const { data } = this.state;

    return (
      <div className="App">
        <DynamicForm 
          formType='SignUp' 
          formData={{data}}
        />
      </div>
    );
  }
}

export default App;
