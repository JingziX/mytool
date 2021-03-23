var fs = require('fs');
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
    
    fs.writeFile("wiki/db.js", `{${ojson}}`, err => {
      if (err) {
        console.log(err);
      }
      console.log("写入成功！");
    });
  }
});

