/**
 * 统计
 */
const LIST = [1, 2, 3, 3, 3, 3, 5, 4, 5, 6, 6, 7, 8, 333, 4444];

function getWordCnt() {
  let Obj = {}
  for (var item of LIST) {
    Obj[item] = (Obj[item] + 1) || 1
  }
  return Obj;
}

// console.log(getWordCnt(LIST))


// var s = new Set(['A', 'B', 'C']);
var ary = [1,2,3,4,5,6,10];
const itArr=ary[Symbol.iterator]();
// for (var x of s) { // 遍历Set
//   console.log(x);
// }
console.log(itArr.next());
console.log(itArr.next());
console.log(itArr.next());
console.log(itArr.next());



