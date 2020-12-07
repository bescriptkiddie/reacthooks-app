// 导入中间件
// 因为移动端的问题,所以前端也需要进行代理转发
const proxy = require("http-proxy-middleware");

module.exports = function(app){
    // 以 "/miaov" 开始的就进入中间件
    app.use("/miaov",proxy({
        "target":"https://data.miaov.com/",
        "secure": true,
        "changeOrigin": true,
        "pathRewrite": {
            "^/miaov":""
        },
        "cookieDomainRewrite":"https://data.miaov.com/"
    }))
};
