const FORM_SCHEMA = [
{
    formTitle: 'Sign Up',
    formFields: [
      {
        name: 'firstName',
        label: 'First Name',
        value: '',
        type: 'text',
        props: {required: true}
      },
      {
        name: 'lastName',
        label: 'Last Name',
        value: '',
        type: 'text',
        props: {required: true}
      },
      {
        name: 'dob',
        label: 'Date of Birth',
        value: '',
        type: 'Date',
        props: {required: true}
      },
      {
        name: 'gender',
        label: 'Gender',
        value: '',
        type: 'option',
        optionType: ['Female, Male'],
        props: {required: false}
      },
      {
        name: 'contactType',
        label: 'Contact Type',
        value: '',
        type: 'option',
        optionType: ['Work', 'home', 'Mobile'],
        props: {required: false}
      },
      {
        name: 'contactNo',
        label: 'Contact No.',
        value: '',
        type: 'text',
        props: {required: false}
      },
      {
        name: 'guardionConsent',
        label: 'Guardion Consent',
        value: false,
        type: 'checkbox',
        props: {required: false}
      },
      {
        name: 'guardionName',
        label: 'Guardion Name',
        value: '',
        type: 'text',
        props: {required: false}
      },
      {
        name: 'guardionNo',
        label: 'Guardion No.',
        value: '',
        type: 'text',
        props: {required: false}
      }
    ]
  },
  {
    formTitle: 'Mailing List',
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
  {
     formTitle: 'Feedback',
    formType: 'Sign Up',
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
]

export default FORM_SCHEMA;