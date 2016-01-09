import {createValidator, required, isEmail} from '../../utils/validation';

export const nameValidator = createValidator({
  name:  [required]
});

export const emailValidator = createValidator({
  email: [required, isEmail]
});
