// const fName = document.getElementById('first-name');
// const fNameValue = fName.value;

// function validatefName(minChar) {
//     if(fNameValue < minChar) {
//         fName.parentElement.setAttribute('data-error', 'ERROR');
//     }
// }

const formValidator = (form, fieldsConfig, onValidateSuccess, onValidationError) => {

    const validateField = (fieldElement, fieldConfig) => {
      const value = fieldElement.value;
      const rules = fieldConfig.rules;
      const formGroup = fieldElement.closest('.inp-container');
      const errorElement = formGroup.querySelector('.form-error-message');
  
      const fieldValidationResult = {name: fieldConfig.name, value: value, errors: []};
      rules.forEach(rule => {
        if (rule.required && !value) {
          fieldValidationResult.errors.push(rule.message);
        }
        if (rule.minLength && `${value}`.length < rule.minLength) {
          fieldValidationResult.errors.push(rule.message);
        }
        if(rule.type && isNaN(Number(value))){
          fieldValidationResult.errors.push(rule.message);      
        }
      });
  
      if(fieldValidationResult.errors.length > 0){
        errorElement.innerText = fieldValidationResult.errors.join('\n');
      } else {
        errorElement.innerText = '';
      }
      // console.log(fieldValidationResult);
  
      return fieldValidationResult;
    }
  
    const validateOnChange = () => {
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        fieldElement.addEventListener('input', e => {
          validateField(e.target, fieldConfig);
        });
      })
    }
  
    const validateOnSubmit = () => {
      const validatedFields = [];
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        validatedFields.push(validateField(fieldElement, fieldConfig));
      });
  
      return validatedFields;
    }
  
    const listenFormSubmit = () => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('submit');
        const errors = [];
        const validationResult = validateOnSubmit();
        validationResult.forEach(result => {
          errors.push(...result.errors);
        });
        if(errors.length === 0){
          onValidateSuccess(validationResult);
        }else {
          onValidationError(validationResult);
        }
        console.log(validationResult);
      });
    }
    listenFormSubmit();
    validateOnChange();
}
  
const fieldsConfig = [
  {
    name: 'fname',
    rules: [
      {required: true, message: '*First name is required.'},
      {minLength: 2, message: '*First name must have at least 2 characters.'},
    ]
  },
  {
    name: 'lname',
    rules: [
      {required: true, message: '*Last name is required.'},
      {minLength: 2, message: '*Last name must have at least 2 characters.'},
    ]
  },
  {
    name: 'email',
    rules: [
      {required: true, message: '*Email name is required.'},
    ]
  },
  {
    name: 'number',
    rules: [
      {type: `number`, message: '*Mobile Number must be a number.'}
    ]
  },
  {
    name: 'work',
    rules: [
      {required: true, message: '*Pick one option'}
    ]
  }
];
  
  
const form = document.getElementById('main-form');
  
const onFormSubmitSuccess = (fields) => {
  console.log('We can send data to server', fields);
}

const onFormSubmitError = (fields) => {
  console.log('Error', fields);  
}

formValidator(form, fieldsConfig, onFormSubmitSuccess, onFormSubmitError);
  