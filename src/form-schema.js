const FORM_SCHEMA = {
    signupForm: {
      id: 1,
      formTitle: 'Sign Up',
      clickAction: 'onSubmit',
      formFields: [
        {
          id: 'firstName',
          label: 'First Name',
          value: '',
          type: 'text',
          props: {required: true}
        },
        {
          id: 'lastName',
          label: 'Last Name',
          value: '',
          type: 'text',
          props: {required: true}
        },
        {
          id: 'dob',
          label: 'Date of Birth',
          value: '',
          type: 'Date',
          props: {required: true}
        },
        {
          id: 'gender',
          label: 'Gender',
          value: '',
          type: 'option',
          optionType: ['Female, Male'],
          props: {required: false}
        },
        {
          id: 'contactType',
          label: 'Contact Type',
          value: '',
          type: 'option',
          optionType: ['Work', 'home', 'Mobile'],
          props: {required: false}
        },
        {
          id: 'contactNo',
          label: 'Contact No.',
          value: '',
          type: 'text',
          props: {required: false}
        },
        {
          id: 'guardionConsent',
          label: 'Guardion Consent',
          value: false,
          type: 'checkbox',
          props: {required: false}
        },
        {
          id: 'guardionName',
          label: 'Guardion Name',
          value: '',
          type: 'text',
          props: {required: false}
        },
        {
          id: 'guardionNo',
          label: 'Guardion No.',
          value: '',
          type: 'text',
          props: {required: false}
        }
      ]
    },
    mailingListForm: {
      id: 2,
      formTitle: 'Mailing List',
      clickAction: 'onSubmit',
      formFields: [
        {
          id: 10,
          name: 'Adidas NMD',
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    feedbackForm: {
      id: 4,
      formTitle: 'Feedback',
      formType: 'Sign Up',
      clickAction: 'onSubmit',
      formFields: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },

        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  };
  
  export default FORM_SCHEMA;