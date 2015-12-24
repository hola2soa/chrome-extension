const isEmpty = value => value === undefined || value === null || value === '';

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
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
