const a =  [-7,2,3,5,6,5,7,-1, 10]

function closestToZero(numbers){
  let closest = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    if(Math.abs(numbers[i]) < Math.abs(closest)) closest = numbers[i]
    else if(Math.abs(numbers[i]) == Math.abs(closest)) closest = Math.abs(numbers[i])
  }
  
  return closest
}

console.log(closestToZero(a))
