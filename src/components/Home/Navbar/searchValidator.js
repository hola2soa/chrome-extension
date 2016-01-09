import {createValidator, isNumeric} from '../../../utils/validation';

const searchValidator = createValidator({
  min: [isNumeric],
  max: [isNumeric]
});

export default searchValidator;
