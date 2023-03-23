# typeScript + React18 + antd

```bash
#1,拉取项目
git clone https://github.com/creatliukun/vite-react-ts.git
#2，安装包
npm install
#3, 运行项目
npm run dev
```

其中`package.json`文件中` "dev": "vite --host --port 9420 --open",`

| --hos                    | --port 9420 |       --open |
| :----------------------- | :---------: | -----------: |
| 看见运行后的个人 ip 地址 |  设置端口   | 自动打开网页 |

---

### 下面是搭建的步骤，拉取项目后不用做这些

- [ ] 之前学过 ts 吗
- [x] 没有

#### 安装 sass vite 中很方便，loader 这些都不用自己配置，只需要安装好即可使用

```bash
npm i --save-dev sass ## 安装在dev环境中，项目打包上线用不到
```

#### 配置路径别名

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

- 1 安装`vite-plugin-style-import`，注意：版本要是 1.4.1 版本的

```bash
npm install vite-plugin-style-import@1.4.1 -D
```

- 2，在 vite.config.ts 进行配置

```ts
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
plugin: [
  react(),
  styleImport({
    resovels: [AntdResolve()],
  }),
]
```

- 3， 注释掉`import 'antd/dist/antd.css' // or 'antd/dist/antd.less' `, 全局引入再次启动的时候发现报错缺少 less,进行安装，版本号要对应

```bash
npm i less@2.7.1 -D
```

现在看页面样式，虽然代码没有引入，但页面样式仍然存在

#### react-thunk 异步解决方案

市面上有`redux-saga`和 `redux-thunk`两种解决方案，`redux-thunk`相比较于`redux-saga`来说，体积小，灵活，但是需要自己手动抽取和封装，但是相对而言学习成本较低

```bash
npm i redux-thunk
```

#### vscode 安装插件 `JSON to TS`

将 json 格式的数据转出接口，三键`Shift + Ctrl + Alt + S`

#### 登陆

目前账号: qdtest1
目前密码: 123456
验证吗: 888888

#### 学习网站

[学习网站哔哩哔哩](https://www.bilibili.com/video/BV1FV4y157Zx?p=14&spm_id_from=pageDriver&vd_source=2ab81c1d2fa80ec3faf277e61e27b863)
