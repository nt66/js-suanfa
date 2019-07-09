/**
 * 排序算法 
 * */
const ARR=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

//冒泡排序 相邻元素互换，最小的到最队尾，依次。
function bubbleSort(arr) {
  console.time('timeout')
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1-i; j++) {
      if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
        var temp = arr[j + 1];        //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.timeEnd('timeout')
  return arr
}

//选择排序 每次都选最小的放在列表前面，依次。。。
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  console.time('选择排序耗时');
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     //寻找最小的数
              minIndex = j;                 //将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}

console.log('result:',selectionSort(ARR))
 