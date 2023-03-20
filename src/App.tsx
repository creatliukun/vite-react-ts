import { useState } from 'react'
import Comp1 from '@/components/comp1'
import Comp2 from '@/components/comp2'
import { Button } from 'antd'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less' // 全局引入
import { useRoutes, Link } from 'react-router-dom'
import router from '@/router'

function App() {
  const outlet = useRoutes(router)
  return <div className="App">{outlet}</div>
}

export default App
