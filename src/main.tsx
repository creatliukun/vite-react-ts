import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式放在最前面，方便后面的样式进行覆盖
import 'reset-css' // 清除所有的默认样式
// ui样式
import 'antd/dist/antd.css' // or 'antd/dist/antd.less' // 全局引入
// 全局样式，覆盖ui
import '@/assets/styles/global.scss'
// 组件的样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
