# 快速上手

> 本官方指南已假定你具有HTML、CSS和JavaScript的中级前端知识，并对`npm`、`Vue`、`ES2015`有初步了解。如果你是较初级的前端开发者，推荐先学习[Vue](https://vuejs.org/)和[ES2015](https://babeljs.io/learn-es2015/)。

## Hello World

### 1、初始化工程

使用Vue提供的官方脚手架[vue-cli](https://github.com/vuejs/vue-cli)，创建一个前端页面基础框架。
> 推荐使用webpack模板以获取云之家最佳支持。

### 2、安装YunUI

到项目目录下，在终端中运行命令`npm install yun-ui --save`安装YunUI。

### 3、引入YunUI

在`src/main.js`中，写入以下代码，引入`YunUI`。
``` javascript
import yun from 'yun-ui'
import 'yun-ui/dist/yun/index.css'
Vue.use(yun)
```

### 4、开发调试

运行命令`npm install && npm run dev`，会在`localhost:8080/`启动调试服务。脚手架会默认生成一个Vue.js介绍相关的页面。
> 若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：rm -rf node_modules && cnpm install

### 5、构建

构建后的文件位于`dist`目录下，可以自由地部署到任何环境。
```bash
npm run build
```
