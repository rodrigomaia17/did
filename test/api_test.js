const request = require('supertest');
const api = require('../lib/api');
const fs = require('fs');

const testData = { tasks: [{ description: 'task1' }] };

describe('api tests', () => {
  before((done) => {
    const fileName = 'test.json';
    fs.writeFile(fileName, JSON.stringify(testData), () => { done(); });
  });

  it('GET tasks', (done) => {
    request(api)
      .get('/api')
      .expect(200, testData.tasks, done);
  });
});
