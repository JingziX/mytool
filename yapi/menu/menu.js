// const SwaggerClient = require("swagger-client");
// const fs = require("fs-extra");
var fs = require('fs');
const axios = require('axios');
const api = 'http://192.168.5.222/api/interface/list_menu?project_id=190';
const cookie = require('../cookie.js');
const formatData = (list) => {
  const newList = list.map(_v => {
    const { name, _id: id, list } = _v;
    let childList = [];
    if (list.length > 0) {
      childList = list.map(_cv => {
        const { title: name, _id: id } = _cv;
        return { name, id };
      })
    }
    return {
      name, id,
      childList
    }
  })
  const msg = JSON.stringify(newList);
  write(`module.exports = ${msg}`
  )
}
const write = (msg) => {
  fs.writeFile('./yapi/menu/menulist.js', msg, 'utf8', function (err) {
    //如果err=null，表示文件使用成功，否则，表示希尔文件失败
    if (err)
      console.log('写文件出错了，错误是：' + err);
    else
      console.log('ok');
  })
}
if(!cookie) console.log('缺少cookie，记得去顶部填入啦');
axios({
  method: 'get',
  url: `${api}`,
  responseType: '',
  headers: {
    Cookie: cookie
  }
})
  .then(function (response) {
    const { data } = response.data;
    formatData(data);
  });



const getApiData = (json, params) => {
  // if (json.data && json.data.title === "推文详情返参") {
  if (json.data) {
    return genParamsInterface(params) + genInterface(json.data);
  }
};

// 写入文件

/* SwaggerClient(api).then((res) => {
  const paths = res.spec.paths; // 路径
  const api = {};
  const baseUrl = res.spec.basePath.split("-")[0];

  for (let key of Object.keys(paths)) {
    const path = paths[key];

    for (let method of Object.keys(path)) {
      const ok = path[method].responses["200"];
      // 得到的结果
      const res = (ok.schema && ok.schema.properties) || {};
      // 创建文件名
      const fileName = `${baseUrl}${key}`.slice(1) + ".d.ts";
      // 放入文件名路径
      const currentApiFilePath = fileName;

      const params = path[method].parameters;

      let apiTSDoc = getApiData(res, params);

      // if (res.data && res.data.title === "商家端商品详情") {
      if (fs.existsSync(currentApiFilePath)) {
        console.log("该路径已存在");
      } else {
        try {
          console.log("写入文件: ", fileName);
          fs.outputFileSync(fileName, apiTSDoc);
        } catch (error) {
          console.log("error: ", error);
        }
      }
      // }
    }
  }
}); */
