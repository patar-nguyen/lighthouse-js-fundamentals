/*let range = function(start, end, step){
  let array = [];

  if (start, end, step === undefined){
    return array;
  } 
  else if (start > end){
    return array;
  }
  else if (step === 0 || step < 0){
    return array;
  }
  else {
    array.push(start);
  }
 
  if (step > 0){
    for (let i = start; i < end; i += step){
      if (start + step <= end){
        start += step;
        array.push(start);
      }
    }
  }
  return array;
}*/


let range = function(start, end, step){
  let array = [];

  if(start, end, step === undefined){
    return array;
  } else if(start > end){
    return array;
  } else if (step === 0 || step < 0){
    return array;
  } else{
    array.push(start);
  }

  for(i = start; i < end; i += step){
    if(start + step <= end){
      start += step;
      array.push(start);
    }
  }
return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));