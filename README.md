> pm2 + pushstate-server 将前端服务部署在服务器上

> 初始化
```npm
# 使用vite创建一个简单的react项目
npm init @vitejs/app reat-demo -- --template react

# 安装 pm2 和 pushstate-server
npm i pm2 pushstate-server
```

> 在项目根目录新增 server.js (文件名任意)
```javascript
// 如下代码，是将项目的dist目录 跑在服务器的 5021 端口
const server = require('pushstate-server')
server.start({
  port: 5021,
  directory: './dist'
})
```

> 登录服务器
```npm
# 进入到工作目录，存放自己项目文件的目录因人而异
cd workspace

# 拉取远程代码
git clone xxx.github.com/xxx

# 安装项目依赖
npm i

# 构建项目
npm run build

# 启动server服务
pm2 start server.js
```