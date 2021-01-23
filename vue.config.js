// webpack配置

module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.kugou.com/",
                secure:false,
                changeOrigin:true,
                pathRewrite:{
                    "^/api":"http://m.kugou.com"
                }
            }
        }
    },
    lintOnSave:false // 关闭eslint
}