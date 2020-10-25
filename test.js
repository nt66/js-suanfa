/**
 * generator
 */
// function* gen() { 
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

/**
 * splice 增、删
 */
// const ary = ['a','n','ui','23'];
// console.log(ary)
// ary.splice(1,0,'22','333');
// console.log(ary)


/**
 * 生成10个2~30不重复随机数
 */

 function Random(num){
    let retAry = [];
    function Fun(){
        let item = Math.floor(Math.random()*30) + 2
        if(retAry.indexOf(item) === -1){
            retAry.push(item)
        }else{
            Fun();
        }
    }
    for(let i =0;i<num;i++){
        Fun();
    }
    return retAry;
 }
 console.log('random',Random(10))

