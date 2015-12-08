import chai from 'chai';

// For some unknown issue, we need this for setting up NODE_ENV
// or it will be `undefined` even we set it via package.json
process.env.NODE_ENV = 'test';

chai.should();

describe('chrome extension', function() {
  require('./containers');
});
