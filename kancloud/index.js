const fs = require('fs');
const request = require('request');
const path = require('path');
const axios = require('axios');
const list = JSON.parse(fs.readFileSync('kancloud/data.js'));
const originUrl = 'https://www.kancloud.cn/weekly/fex/'
// 当前执行命令 node kancloud/index.js
const getData = async (url) => {
  let content='',ref=''
  await axios.get(url, {
    headers: {
      
    }
  }).then(res => {
    content = res.data.content;
    ref = res.data.ref;
    console.log('getData====');
  }).catch(err=>{
    console.log('err====',err.response.data);
  })
  console.log('getHtml===');
  fs.writeFile(`kancloud/FEX技术周刊/${ref}`, `${content}`, err => {
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

