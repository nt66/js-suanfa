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
//  function Random(num){
//     let retAry = [];
//     function Fun(){
//         let item = Math.floor(Math.random()*30) + 2
//         if(retAry.indexOf(item) === -1){
//             retAry.push(item)
//         }else{
//             Fun();
//         }
//     }
//     for(let i =0;i<num;i++){
//         Fun();
//     }
//     return retAry;
//  }
//  console.log('random',Random(10))

/**
 * 去重
 */
// let  data= [1,1,2,2,3,2,5,67,23,29,5]
// function unique(ary){
//     return Array.from(new Set(ary));
// }
// function unique(ary){
//     let uniqueAry = []
//     for(item of ary){
//         if(uniqueAry.indexOf(item)===-1)
//             uniqueAry.push(item)
//     }
//     return uniqueAry
// }
// function unique(ary){
//     let uniqueObj = {}
//     for(let item of ary){
//         // key/value结构
//         uniqueObj[item] = item
//     }
//     return Object.values(uniqueObj)
// }
// console.log(unique(data))

/**
 * 排序
 */
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(arr.sort((a,b)=>{return a - b}))

function sort1(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(sort1(arr))

