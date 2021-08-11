const fs = require('fs');
const path = require('path');
const axios = require('axios');
const entities = require('html-entities');
const cheerio = require('cheerio'); //用在DOM进行操作的地方
//获取国旗的名字
const getFlagNames = ()=>{
  const pathName="flag/img";
  let names = [];
  fs.readdir(pathName, function(err, files){
    files.forEach(file => {
      names.push(`"${file}"`);
    });
    console.log(names.length)
    fs.writeFile("flag/data.js", `[${names}]`, err => {
      if (err) {
          console.log(err);
      }
      console.log("写入成功！");
    });
  })
}
getFlagNames();