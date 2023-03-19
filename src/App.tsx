import { useState } from 'react'
import Comp1 from '@/components/comp1'
import Comp2 from '@/components/comp2'
import { Button } from 'antd'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less' // 全局引入
// import 'antd/dist/reset.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 初始化 */}
      <Button type="primary">这是一个组件</Button>
    </div>
  )
}

export default App
