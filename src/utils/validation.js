const isEmpty    = value => value === undefined || value === null || value === '';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function isEmail(value) {
  if (!emailRegex.test(value)) {
    return 'Invalid';
  }
}

export function isNumeric(value) {
  if (isNaN(+value) || !isFinite(+value)) {
    return 'Must be a number';
  }
}

export function createValidator(rules) {
  return (values) => {
    const errors = {};

    Object.keys(rules).forEach((key) => {
      rules[key].map((rule) => {
        const error = rule(values[key]);

        if (error) {
          errors[key] = error;
        }
      });
    });

    return errors;
  };
}
