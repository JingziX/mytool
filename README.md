# mytool
各类自己写的小工具


```
mytool
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
# 对应文件说明
## yapi根据yapi拿到ts接口字段--node
step1 node yapi/menu/menu.js 拿到接口列表
step2 node yapi/index.js //拿到最终返回的接口信息

## wiki获取wiki数据--node
执行 node wiki/index.js //拿到所有的wiki数据
1、先拿到菜单数据，查找是否有规律
2、再拿到找到显示的数据信息
3、找到可登陆的方式
4、循环拉取数据，目前解析都是采用字符串分割拼接的方式

## flag多张国旗转图片精灵--html+node
img 所有国旗
index.js 获取图片名称
flag.png 最终生成的国旗图片精灵
flag.css 对应的css位置等
data.js 得到的所有图片名称
index.html 查看并操作
style.css index.html辅助样式

## flyanimation 加入购物车这类飞入动画Demo--html

## bulkdownzip图片或文件批量压缩并下载--html