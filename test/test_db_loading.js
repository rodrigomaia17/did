const app = require('../lib/db_loading');
const expect = require('expect.js');

describe('Db Loading', () => {
  it('should loading test database when testing', () => {
    const db = app.getDbName();
    expect(db).to.be('test.json');
  });

  it('should loading production database when not testing', () => {
    process.env.NODE_ENV = 'otherthantest';
    const db = app.getDbName();
    expect(db).to.be('db.json');
  });
});
