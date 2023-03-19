# typeScript + React18 + antd

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

#### 安装 antd，

```bash
# npm install antd --save 直接安装的最新版的，我创建项目时目前这里是 5.3.1 版本
npm install antd@4.24.8 --save # 指定4的版本
```

#### 语义化的矢量图形。使用图标组件，需要安装 @ant-design/icons 图标组件包：

```bash
npm install --save @ant-design/icons
```

#### antd 的 4.x 版本已经支持组件的按需引入，现在要解决的是样式上的自动按需引入

安装`vite-plugin-style-import`，注意：版本要是 1.4.1 版本的

```bash
npm install vite-plugin-style-import@1.4.1 -D
```

在 vite.config.ts 进行配置

```ts
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
plugin: [
  react(),
  styleImport({
    resovels: [AntdResolve()],
  }),
]
```

注释掉`import 'antd/dist/antd.css' // or 'antd/dist/antd.less' `, 全局引入再次启动的时候发现报错缺少 less,进行安装，版本号要对应

```bash
npm i less@2.7.1 -D
```

现在看的话没有引入，样式仍然存在
