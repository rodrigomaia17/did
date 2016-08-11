const request = require('supertest');
const fs = require('fs');

const testData = { tasks: [{ description: 'task1' }] };

let api = {};

describe('api tests', () => {
  before((done) => {
    const fileName = 'test.json';
    fs.writeFile(fileName, JSON.stringify(testData), () => {
// eslint-disable-next-line global-require
      api = require('../lib/api');

      done();
    });
  });

  it('GET tasks', (done) => {
    request(api)
      .get('/api')
      .expect(200, testData.tasks, done);
  });
});
