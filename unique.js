/**
 * 去重算法 
 * */

//全局变量
let  data= [1, 1,2,2,3,2,5,67,23,29,5]

/**方法1 双重循环 */
function unique1(ary){
    var newAry =[];
    for(var i =0;i<ary.length;i++){
        for(var j =0,resLen=newAry.length; j<resLen;j++){
            if(ary[i] == newAry[j]){
                break;
            }
        }
        if(j == resLen){
            newAry.push(ary[i])
        }
    }
    return newAry;
}

/**方法2 indexOf */
function unique2(ary){
    let newAry = []
    for(var item of ary){
        if(newAry.indexOf(item) === -1)
            newAry.push(item)
    }
    return newAry
}

/**方法3 es6 set */
function unique3(ary){
    return Array.from(new Set(ary)) //也可以这样 [...(new Set(ary))]
}

/**方法4 sort判断相邻是否相同 */
function unique4(ary) {
    var res = [];
    var sortedArray = ary.sort((a,b)=>a-b);
    var seen;
    for (var i = 0, len = sortedArray.length; i < len-1; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if(!i || sortedArray[i] !== sortedArray[i+1]){
            res.push(sortedArray[i+1])
        }
    }
    return res;
}

/**方法5 key值去重 */
function unique5(arr) {
    var obj = {};//新建空对象
    var newarr = [];//新建空数组
    for (var i = 0; i < arr.length; i++) { obj[arr[i]] = null; }//将原数组项作为对象的key进行赋值
    for (var attr in obj) { newarr.push(parseInt(attr)); }//遍历对象，取出key值添加到新数组
    return newarr;//返回新数组
}

/**方法6 key值去重 */
function unique(ary){
    let uniqueObj = {}
    for(let item of ary){
        // key/value结构
        uniqueObj[item] = item
    }
    return Object.values(uniqueObj)
}

console.log('reslute:',unique5(data))