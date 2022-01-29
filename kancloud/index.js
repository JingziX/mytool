const fs = require('fs');
const request = require('request');
const path = require('path');
const axios = require('axios');
const list = JSON.parse(fs.readFileSync('kancloud/data.js'));
const originUrl = 'https://www.kancloud.cn/moriarty/jsvascript_es6/'
// 当前执行命令 node kancloud/index.js
const getData = async (url) => {
  let content=''
  await axios.get(url, {
    headers: {
      cookie: '__yjs_duid=1_559868cc524254de951e74efef48d1381643443505098; PHPSESSID=gkcf2rhngk95uk1n3dkumd0qg3; _ga=GA1.2.281503771.1643443524; _gid=GA1.2.655381000.1643443524; _aihecong_chat_visitorlimit=%7B%22limitMark%22%3Atrue%2C%22limitMarktTime%22%3A1643443526951%7D; remember_cc248a61b22205317666319f4fffa9146988fb4b=232719%7CemCtaTVoeDmCeEEtawnRRoCtWdVW9BCOxTQVpQfZkIOxJj0bO30POxkRzixf; _aihecong_chat_address=%7B%22country%22%3A%22%E4%B8%AD%E5%9B%BD%22%2C%22region%22%3A%22%E6%B5%99%E6%B1%9F%22%2C%22city%22%3A%22%E6%9D%AD%E5%B7%9E%22%7D; _aihecong_chat_visibility=false; _gat_web=1'
    }
  }).then(res => {
    content = res.data.content;
    console.log('getData====');
  }).catch(err=>{
    console.log('err====',err.response.data);
  })
  console.log('getHtml===');
  fs.appendFile("kancloud/text.js", `${content}`, err => {
    if (err) {
        console.log(err, '11111');
    }
  });
}
// list.length
const getList = async() => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    await getData(`${originUrl}${element.code}`)
  }
}
getList()

