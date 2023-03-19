import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式放在最前面，方便后面的样式进行覆盖
import 'reset-css' // 清除所有的默认样式
// ui样式

// 全局样式，覆盖ui
import '@/assets/styles/global.scss'
// 组件的样式
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
