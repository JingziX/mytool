# mytool
各类自己写的小工具


```
node-exe
├─ .gitignore
├─ getCookie.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ yapi
│  ├─ index.js
│  └─ menu
│     └─ menu.js
└─ yarn.lock

```
## yapi根据yapi拿到ts接口字段
执行 node yapi/menu/menu.js 拿到接口列表
执行 node yapi/index.js //拿到最终返回的接口信息

## wiki获取wiki数据
执行 node wiki/index.js //拿到所有的wiki数据
1、先拿到菜单数据，查找是否有规律
2、再拿到找到显示的数据信息
3、找到可登陆的方式
4、循环拉取数据，目前解析都是采用字符串分割拼接的方式