const ageCalculator = function(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let string = name + " is " + age + " years old.";
  return string;
}




/*const ageCalculator = function(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let phrase = name + " is " + age + " years old."
  return phrase;
}
*/
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));