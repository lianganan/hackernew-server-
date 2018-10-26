const express = require('express')
const app = express()
const router =require('./router')
//设置模板引擎
app.engine('html',require('express-art-template'))
// 设置静态资源
app.use('/assets',express.static('assets'))

app.use(require('body-parser').urlencoded({ extended: true }))

app.use(router)

app.listen(3080, () => {
  console.log('hackernews服务器已启动')
})