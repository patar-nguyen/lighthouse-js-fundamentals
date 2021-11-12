/*var school = "";

function whichSchool(age){
  if (age < 13){
    school = "Elementary School";
    console.log(school);
  }
  else if (age >= 13 && age <=18){
    school = "Secondary School";
    console.log(school);
  }
  else {
    school = "Lighthouse Labs";
    console.log(school);
  }
}
console.log("I am 28. Which school should I go to?");
whichSchool(28);*/

const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18){
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  }
}
console.log("I am 28. Which school should I go to?");
console.log(whichSchool(28));