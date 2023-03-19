import { useState } from 'react'
import Comp1 from '@/components/comp1'
import Comp2 from '@/components/comp2'
import { Button } from 'antd'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less' // 全局引入
import { useRoutes, Link } from 'react-router-dom'
import router from '@/router'
// import About from './views/About'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      <div>分割1</div>
      <Link to="/about">about</Link>
      <div>分割2</div>
      <Link to="/home">home</Link>
      {outlet}
      {/* <About /> */}
    </div>
  )
}

export default App
