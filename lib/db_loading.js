function getDbName() {
  return process.env.NODE_ENV === 'test' ?
         'test.json' :
         'db.json';
}

module.exports = { getDbName };
