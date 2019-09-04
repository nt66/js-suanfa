/**
 * promise串行执行请求
 * @param {*} url
 */
function getData(url){
  return fetch(url).then(data => data.json());
}

function serialFetch(files){
  return new Promise((resolve,reject)=>{
    var readSquential = function(index){
      if(index >=files.length){
        resolve()
      }else{
        getData(files[index]).then(res=>{
          readSquential(index++)
        }).catch(err=>{
          console.log(err)
        });
      }
    }
    readSquential(files[0])
  })
}

//用async await方法
async function readFiles(files) {
  for(const file of files) {
    await readFile(file);
  }
};
