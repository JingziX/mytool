
var fs = require('fs');
const menulist = require('./menu/menulist.js');
const axios = require('axios');
const api = 'http://192.168.5.222/api/interface/get?id=';
const cookie = require('./cookie.js')

/** 修改类型 */
const changeType = (value) => {
  if (
    value.type === "integer" || value.type === "number" ||
    (value.schema && value.schema.type === "integer")
  ) {
    return "number";
  }
  if (value.type === "string") {
    return "string";
  }
  if (value.type === "boolean") {
    return "boolean";
  }
  if (value.type === "array" || value.type === "object") {
    if (value.items) {
      return "any";
    } else {
      return "any";
    }
  }
};
const isObject = (t) => {
  return Object.prototype.toString.call(t) === '[object Function]';
}
//当前是多个参数情况下
const keyMsg = (properties1) => {
  let msg = '';
  Object.keys(properties1).forEach(_v => {
    if (properties1[_v].type == 'object') {
      let chidMsg = '';
      const { properties: pro } = properties1[_v];
      Object.keys(pro).forEach(_v => {
        chidMsg = chidMsg + `${_v}?:${changeType(pro[_v])} // ${pro[_v].description}
        `
      })
      msg = `${msg}
      interface ${_v} {
        ${chidMsg}
      }`
    } else if (properties1[_v].type == 'array') {
      const { items: { properties: pro } } = properties1[_v];
      let chidMsg = '';
      Object.keys(pro).forEach(_v => {
        chidMsg = chidMsg + `${_v}?:${changeType(pro[_v])} // ${pro[_v].description}
        `
      })
      msg = `${msg}
      interface ${_v} {
        ${chidMsg}
      }`
    } else {
      msg = `${msg} ${_v}?:${changeType(properties1[_v])} // ${properties1[_v].description}
      `
    }
  })
  return msg;
}
//格式化先返回信息
const formatData = (body, name, childid) => {
  const { properties: { data: { properties: properties1 } } } = JSON.parse(body);
  if (properties1 && properties1.content) {
    const { content: { items: { items: { properties: properties2 } } } } = properties1;
    let msg = keyMsg(properties2)
    write(msg, name, childid)
  } else if (properties1) {
    let msg = keyMsg(properties1)
    write(msg, name, childid)
  }
}
const write = (msg, name, childid) => {
  const file = `./yapi/api/${childid}.ts`;
  const omsg = `/**${name} */
  ${msg}`
  fs.writeFile(file, omsg, 'utf8', function (err) {
    //如果err=null，表示文件使用成功，否则，表示希尔文件失败
    if (err)
      console.log('写文件出错了，错误是：' + err);
    else
      console.log('ok');
  })
}
function getData(name, childid) {
  if(!cookie) console.log('缺少cookie，记得去顶部填入啦');
  axios({
    method: 'get',
    url: `${api}${childid}`,
    responseType: '',
    headers: {
      Cookie: cookie
    }
  })
    .then(function (response) {
      const { data } = response.data;
      if (data && data.res_body) {
        formatData(data.res_body, name, childid);
      }
    });
}
if(!menulist || Object.keys(menulist).length == 0)return console.log("请先获取菜单,执行命令 node yapi/menu/menu.js");
console.log(menulist,Object.keys(menulist).length == 0)
menulist.forEach((element, index) => {
  const { childList } = element;
  if (childList && index >= 1) {
    childList.forEach(_child => {
      const { id: chid, name } = _child;
      getData(name, chid);
      // getData(element,id,6741);
    })
  }
});





