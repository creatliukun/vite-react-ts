## 安装 sass vite 中很方便，loader 这些都不用自己配置，只需要安装好即可使用

```bash
npm i --save-dev sass ## 安装在dev环境中，项目打包上线用不到
```

### 配置路径别名

因为用的是 ts，所以引入`import path from 'path'`会显示找不到文件路径，安装 ts 说明就好了
`npm i -D @types/node`

#### 配置路径别名提示

在 tsconfig.json 中进行配置别名提示

```js
"compilerOptions": {
  "baseUrl": './',
  "paths":{
    "@/*":[
       "src/*"
    ]
  }
}
```

<!-- 安装alifd/next作为ui库，@alifd/next 是 Alibaba Fusion Design 的官方 React 实现, 赋能企业中后台产品开发。 -->

```bash
npm install @alifd/next --save
```
