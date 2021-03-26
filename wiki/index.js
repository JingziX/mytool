const fs = require('fs');
const CryptoJS = require("crypto-js");
let request = require('request');
const path = require('path');
const axios=require('axios');
const cheerio=require('cheerio');//用在DOM进行操作的地方
const Menu = JSON.parse(fs.readFileSync('./wiki/lastdata.js'));
// 处理原始数据
function dealOriginData(){
  fs.readFile("wiki/text.txt",'utf-8',function(err,data){
    if(err){
      console.log("error");
    }else{
      const narr = data.split(';');
      let ojson = '';
      narr.forEach(_i=>{
        const d1 = _i.split('[');
        console.log('222====',d1[1])
        if(d1[1]){
          const d2 = (d1[1].split(']'))[0].replace("'","");
          const data = {
            name:d2
          }
          ojson += `${JSON.stringify(data)},`;
        }
      })
      
      fs.writeFile("wiki/data.js", `[${ojson}]`, err => {
        if (err) {
          console.log(err);
        }
        console.log("写入成功！");
      });
    }
  });

}
// dealOriginData();
 
const LOGIN = 'https://www.tapd.cn/cloud_logins/login';
 
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
};
 
const ACCOUNT = {
  user: 'xiangjunmin@cjdropshipping.com',
  pass: 'xjm,1358716'
};
 
request = request.defaults({jar: true});
 
function getEncodedValue() {
  var o = CryptoJS.MD5(Math.random() + "").toString();
  var t = CryptoJS.AES.encrypt(ACCOUNT.pass, o, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
  });
  var password_encode = t.ciphertext.toString(CryptoJS.enc.Base64);
  var iv = t.iv.toString(CryptoJS.enc.Base64);
  var key = t.key.toString(CryptoJS.enc.Base64);
  return {
    iv: iv,
    key: key,
    pass: password_encode
  };
}
 
function loadLoginPage(next) {
  request({
    url: LOGIN,
    headers: HEADERS
  }, function(err, response, body) {
    if (err) {
      console.log(err);
    } else {
      next && next(body);
    }
  });
}
 
function doLogin(ref,next) {
  var encodedObj = getEncodedValue();
  var formData = {
    'data[Login][ref]': ref,
    'data[Login][encrypt_key]': encodedObj.key,
    'data[Login][encrypt_iv]': encodedObj.iv,
    'data[Login][site]': 'TAPD',
    'data[Login][via]': 'encrypt_password',
    'data[Login][email]': ACCOUNT.user,
    'data[Login][password]': encodedObj.pass,
    'data[Login][login]': 'login'
  };
  request.post({
    url: LOGIN,
    followRedirect: false,
    formData: formData,
    headers: HEADERS
  }, function(err, response, body) {
    if (err) {
      console.log(err);
    } else {
      next && next(body);
    }
  });
}
 
function login(ref,next) {
  loadLoginPage(function(preBody) {
    doLogin(function(preBody) {
      next && next(preBody);
    });
  });
}
 


/* 获取列表的html数据 */
function getHTMl(){
  Menu.forEach(_i=>{
    const {code,name} = _i;
    const url =`https://www.tapd.cn/66473603/markdown_wikis/edit/${code}/0/security`
    login(url,function() {
      axios.get(url).then(res=>{
        console.log(res)
          fs.writeFile(`wiki/html/${name}.html`, res.data, err => {
            if (err) {
              console.log(err);
            }
            console.log("写入成功！");
          });
        })
    });
    
  })
}
getHTMl();
