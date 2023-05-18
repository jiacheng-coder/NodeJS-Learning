# NodeJS-Learning

Study this server language, NodeJS!

## What is used

- nodemon
- http
- querystring
- mysql

## What I do ?

- bin/www.js server coding
- app.js 业务 coding

## 目录介绍

- bin
  - www.js: 入口文件，在 package.json 里配置
- src
  - controllers: 配合 routes 使用，存放 routes 里的逻辑
  - model: 自定义的模型，成功模型和失败模型（对返回的数据进一步封装）
  - routes: 返回数据，配合 app.js 使用，得到不同路由的响应
- app.js
