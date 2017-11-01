# express-go

> Express + MongoDB 项目脚手架，提供纯粹的 RESTfull API

## 快速开始
1. `git clone https://github.com/noraincode/express-go`
或下载本项目代码

2. 安装依赖环境
```
npm install
```

3. 启动
```
npm start
serve start at 127.0.0.1:10086
```
4. 单元测试
```
npm test
// 需在test文件夹下配置好测试用例
```

## 说明
### 返回值格式统一为
1. 成功 —— 200
```
{
    "Success": true,
    "Code": 200,
    "Desc": "OK! ｡◕‿◕｡",
    "Msg": {
        "data": [
            {
                "_id": "598b13b7da5ae904b781a839",
                "name": "测试1",
                "updatetime": 1502286570836,
                "createtime": 1502286570836
            }
        ],
        "count": 1
    },
    "extData": {}
}
```
2. 服务器异常 —— 500
```
{
    "Success": false,
    "Code": 500,
    "Desc": "interalErrror",
    "Msg": "服务器君在开小差!（￣工￣lll）",
    "extData": {}
}
```
3. 接口不存在 —— 404
```
{
    "Success": false,
    "Code": 404,
    "Desc": "notFound",
    "Msg": "接口君出走了! ㄟ( ▔, ▔ )ㄏ",
    "extData": {}
}
```
4. 没有权限 —— 403
```
{
    "Success": false,
    "Code": 404,
    "Desc": "noAuth",
    "Msg": "没有权限! o(´^｀)o",
    "extData": {}
}
```
