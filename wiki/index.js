const fs = require('fs');
const path = require('path');
const axios=require('axios');
const cheerio=require('cheerio');//用在DOM进行操作的地方
const Menu = fs.readFileSync('./wiki/lastdata.js');
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
function getData(){
  Menu.forEach(_i=>{
    const {code,name} = _i;
    const url =`https://www.tapd.cn/66473603/markdown_wikis/edit/${code}/0/security`
    axios.get(url).then(res=>{
    console.log(name)
      fs.writeFile(`wiki/html/${name}.txt`, res, err => {
        if (err) {
          console.log(err);
        }
        console.log("写入成功！");
      });
    // console.log($)
    // 获取当前页面所有表情链接
    //  $('#home .col-sm-9>a').each((index,element)=>{
    //   // console.log(element)
    //   // 获取每一个a标签中的href属性值
    //   let href=$(element).attr('href')
    //   console.log(href)
    //  })
    })
  })
}
getData();
