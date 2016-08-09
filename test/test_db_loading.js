const app = require('../lib/db_loading');
const expect = require('expect.js');

describe('Db Loading', function() {
    it('should loading test database when testing', function() {
      const db = app.getDbName();
      expect(db).to.be("test.json");
    });

    it('should loading production database when not testing', function() {
      process.env.NODE_ENV = "otherthantest";
      const db = app.getDbName();
      expect(db).to.be("db.json");
    });
});
