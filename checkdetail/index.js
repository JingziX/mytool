var fs = require('fs');
const axios = require('axios');
const list = ["1114764"]
// 获取商品id
function getIds(arr){
    const ids = []
    arr.forEach(element => {
        ids.push(element.id)
    });
    const omsg = JSON.stringify(ids)
    fs.writeFile('./checkdetail/index.tx', omsg, 'utf8', function (err) {
        //如果err=null，表示t文件使用成功，否则，表示希尔文件失败
        if (err)
          console.log('写文件出错了，错误是：' + err);
        else
          console.log('ok');
      })
}
// getIds(list)

let index = 0 
function getDetail(){
    axios({
        method: 'post',
        url: `获取详情接口`,
        responseType: '',
        data: { id:list[index] }
      })
    .then(function (response) {
        if(!response.data.data.stanProducts) console.log(list[index])
        index++
        if(index>list.length) return false
        getDetail()
    });
}
getDetail(index)