import {createValidator, required, isEmail} from '../../utils/validation';

const memberValidator = createValidator({
  name:  [required],
  email: [required, isEmail]
});

export default memberValidator;
