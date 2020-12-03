
const axios = require('axios');
const fs = require('fs');
const Bagpipe = require('bagpipe');
const request = require('request');
const {Base64} = require('js-base64');
const Data = require('./data.json');
function test(url,name){
  
// 写入完成后自动关闭管道
    let fileStream=fs.createWriteStream(name,{autoClose:true})
    request(url).pipe(fileStream);
    // 完成写入操作后，进行提示。
    fileStream.on('finish',function(){
        console.log('文件写入成功')
    })
}
// test('https://www.jmjc.tech/public/home/img/flower.png','./catpics/flower.png')
const dealImg = (name,url)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = url.split('.html')[1].substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURIComponent(r[2]); 
  return ''; //返回参数值
}
const getImgUrl =(url)=>{
  const id = dealImg('id',url);
  const uu = dealImg('uu',url);
  const fi = Base64.decode(dealImg('fi',url));
  return `https://files.getuploadkit.com/${id}/${uu}/${fi}?dl=1`;
}

const downloadImage = function(src, dest, callback) {
  console.log(src)
  console.log(dest)
  if(src){
    let fileStream=fs.createWriteStream(dest)
    request(src).pipe(fileStream);
    // 完成写入操作后，进行提示。
    fileStream.on('finish',function(){
        console.log('文件写入成功')
        callback('')
    })
  }else{
    callback('')
  }
	

};
const getImg = (imgList)=>{
  var bagpipe = new Bagpipe(imgList.length,{timeout: 100000});

  for(var i = 0; i < imgList.length; i++) {
    if(imgList[i].url){
      bagpipe.push(downloadImage, imgList[i].url, `./catpics/${imgList[i].name}.jpeg`, function(err, data){
        //
      });
    }
  }
}
function getURL(){
   const ordersList = Data.ordersList;
   const lenArr = ordersList.map(item=>{
     const thirMsg = item.order.properties[0].thirdPardMessage;
     let obj = {
       name:item.order.ORDER_NUMBER,
       url:thirMsg?getImgUrl(thirMsg[0].value):''
     }
     return obj;
   })
   getImg(lenArr) 
}
getURL()
