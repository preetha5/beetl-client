const passwordLength = {min: 8, max: 72};

export default function(values) {
    const errors = {};
    console.log(values);
    const requiredFields = [
      'username',
      'email',
      'password'
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    
    if (values.password && values.password.length < passwordLength.min) {
        errors.password = `Must be at least ${passwordLength.min} characters long`;
    }
    if (values.password && values.password.length > passwordLength.max) {
        errors.password = `Must be at most ${passwordLength.max} characters long`;
    }
    return errors;
  }
  