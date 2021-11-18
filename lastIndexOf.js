/*let lastIndexOf = function (array, value){
  let lastIndex = -1;
  if(array.length === 0){
    return lastIndex;
  }
  for(let i = array.length - 1; i >= 0; i--){
    if(array[i] === value){
      return i;
    }
  }
  return lastIndex;
}*/



let lastIndexOf = function (array, value){

  let lastIndex = -1;

  for(let i = array.length -1; i > 0; i--){
    if(array[i] === value){
      return i;
    } else if(array === 0){
      return -1;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);