/**
 * 10个2~30不重复随机数
 */
function getRandomList(n=10){
  let arr = [];
  for (var i = 0; i < n; i++) {
    var fn = function(){
      var rn = Math.floor(Math.random()*30+2);
      if(arr.indexOf(rn)==-1){
        arr.push(rn);
      }else{
        fn()
      }
    }
    fn()
  }
  arr = arr.sort((a,b)=>{return a - b});
  return arr;
}

console.log(getRandomList(10));
