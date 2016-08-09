exports.getDbName = function(){
  return process.env.NODE_ENV == "test" ?
         "test.json" : 
         "db.json";
}
