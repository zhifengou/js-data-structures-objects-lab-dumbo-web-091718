// Write your solution in this file!
var driver={};
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({},driver,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway');
function deleteFromDriverByKey(driver, key){
  var newDriver=Object.assign({},driver);
  delete newDriver[key];
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}