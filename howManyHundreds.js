const howManyHundreds = function (num){
  var containers = Math.floor (num / 100);
  return containers;
}


/*const howManyHundreds = function (num){
  return Math.floor(num / 100);
}*/
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));