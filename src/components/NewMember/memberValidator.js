import {createValidator, required} from '../../utils/validation';

const memberValidator = createValidator({
  name: [required]
});

export default memberValidator;
