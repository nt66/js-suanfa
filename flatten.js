var arr = [1, 2, 3, [3, 3, 3, [5, 4, 5, 6, 6, 7, 8]],[333, 4444]];
var newAry = [];

function flatten(ary){
  for(var t of ary){
    if(!Array.isArray(t)){
      newAry.push(t)
    }else{
      newAry.concat(flatten(t))
    }
  }
  return newAry;
}

console.log('result:', flatten(arr))
