/**
 * 统计
 */

 const LIST = [ 1, 2, 3, 3, 3, 3, 5, 4, 5, 6, 6, 7, 8, 333, 4444 ];
 function getWordCnt(){
  let Obj = {}
  for(var item of LIST){
    Obj[item] = (Obj[item]+1)||1
  }
  return Obj;
 }

 console.log(getWordCnt())


