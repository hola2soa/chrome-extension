import merge from 'lodash/object/merge';

const env = process.env.NODE_ENV || 'development';

export default merge({}, require('./' + env));
