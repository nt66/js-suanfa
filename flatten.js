/**
 * 数组拍平
 */
var arr = [1, 2, 3, [3, 3, 3, [5, 4, 5, 6, 6, 7, 8]],[333, 4444]];
// let newAry = [];
// console.log(t.constructor == Array) 
/* 判断是否是某某类型 t.constructor == Array、t instanceof Array、Object.prototype.toString.call(t) ==='[object Array]'、Array.isArray(t)*/

// function flatten(ary){
//   for(var t of ary){
//     if(!Array.isArray(t)){
//       newAry.push(t)
//     }else{
//       newAry.concat(flatten(t))
//     }
//   }
//   return newAry
// }

// console.log('result:', flatten(arr))

let newAry = []
function flatten2(ary){
  for(var t of ary){
    !Array.isArray(t)?newAry.push(t): newAry.concat(flatten2(t))
  }
  return newAry;
}
console.log('result:', flatten2(arr))
