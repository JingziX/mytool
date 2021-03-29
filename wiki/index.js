const fs = require('fs');
const CryptoJS = require("crypto-js");
let request = require('request');
const path = require('path');
const axios = require('axios');
const entities = require('html-entities');
const cheerio = require('cheerio'); //用在DOM进行操作的地方
const Menu = JSON.parse(fs.readFileSync('./wiki/lastdata.js'));
// 处理原始数据
function dealOriginData() {
    fs.readFile("wiki/text.txt", 'utf-8', function(err, data) {
        if (err) {
            console.log("error");
        } else {
            const narr = data.split(';');
            let ojson = '';
            narr.forEach(_i => {
                const d1 = _i.split('[');
                console.log('222====', d1[1])
                if (d1[1]) {
                    const d2 = (d1[1].split(']'))[0].replace("'", "");
                    const data = {
                        name: d2
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
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'Referer': 'https://www.tapd.cn/cloud_logins/login?ref=https%3A%2F%2Fwww.tapd.cn%2Fmy_dashboard%3Fleft_tree%3D1',
    'Origin': 'https://www.tapd.cn'
};

const ACCOUNT = {
    user: 'xiangjunmin@cjdropshipping.co',
    pass: 'xjm,1358716'
};

request = request.defaults({ jar: true });

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

function doLogin(next) {
    var encodedObj = getEncodedValue();
    var formData = {
        'data[Login][ref]': 'https://www.tapd.cn/66473603/markdown_wikis/edit/1166473603001000189/0/security',
        'data[Login][encrypt_key]': encodedObj.key,
        'data[Login][encrypt_iv]': encodedObj.iv,
        'data[Login][site]': 'TAPD',
        'data[Login][via]': 'encrypt_password',
        'data[Login][email]': ACCOUNT.user,
        'data[Login][password]': encodedObj.pass,
        'data[Login][login]': 'login',
        'sc_token': '7X4j7tP11fR6OFOL'
    };
    request.post({
        url: LOGIN,
        followRedirect: false,
        formData: formData,
        headers: HEADERS
    }, function(err, response, body) {
        console.log('241241241', response)
        if (err) {
            console.log(err);
        } else {
            next && next(body);
        }
    });
}

function login(next) {
    loadLoginPage(function(preBody) {
        doLogin(function(preBody) {
            next && next(preBody);
        });
    });
}
// login(function() {
//     console.log('登录成功！');
// });

/* 获取列表的html数据 */
function getHTMl() {
    const loginTxt = '登录-TAPD';
    let error = '';
    Menu.forEach(_i => {
        const { code, name,outname } = _i;
        const url = `https://www.tapd.cn/66473603/markdown_wikis/edit/${code}/0/security`;
        setTimeout(() => {
            axios.get(url, {
                headers: {
                    cookie: 'sso-login-token=5b1d3f0e873ffebe1c2f672b041fefcc; tapdsession=16169828899f2633b67d5e0b0e59fa43ee66bbc2e583d60ff3ef7530ab4221a35bfa0f7d4c; locale=zh_cn'
                }
            }).then(res => {
                // console.log(res)
                const newd = getValue(res.data,name);
                const law = `${newd}`
                fs.writeFile(`wiki/md/${outname}.md`, law, err => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(name +",写入成功！");
                });
            })
        }, 2000)
    });
    getError(error);
}
// getHTMl();


// 处理html数据
function getValue(data,name){
    if(data.indexOf('TFL.markdown')>-1){
        let nA = data.split("TFL.markdown(")[1];
        let nB = JSON.parse(nA.split(")})")[0]).value;
        return nB;
    }else{
        console.log(name,',无法获取')
    }
}
// 获取失败信息
function getError(error){
    fs.writeFile(`wiki/error.md`, error, err => {
        if (err) {
            console.log(err);
        }
    });
}

//读取文件
function readMD(){
    const pathName = "wiki/md";
    let arr = [];
    fs.readdir(pathName, function(err, files){
        var dirs = [];
        (function iterator(i){
            if(i == files.length) {
                // console.log(dirs);

                return ;
            }
            fs.stat(path.join(pathName, files[i]), function(err, data){     
                if(data.isFile()){               
                    dirs.push(files[i]);
                    const darr = files[i].indexOf('-')>-1?files[i].split("-"):'';
                    if(darr){
                        const d2 = darr[1].split('.');
                        const name1 = darr[0].toLowerCase();
                        const name2 = d2[0].toLowerCase();
                        if(name1==name2 && !arr.includes(name2)){
                            arr.push(name1);
                            // fs.mkdirSync(`wiki/${darr[0]}`);
                        }
                        
                    }
                    for (let index = 0; index < arr.length; index++) {
                        if(darr && darr[0].toLowerCase()==arr[index].toLowerCase()){
                            fs.rename(`wiki/md/${files[i]}`,`wiki/${darr[0]}/${files[i]}`,function(err){
                                if(err){
                                throw err;
                                }
                            })
                        }
                        
                    }
                }
                iterator(i+1);
            });
        })(0);
    });
}
readMD();