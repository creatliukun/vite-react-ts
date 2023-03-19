import { useState } from 'react'
import Comp1 from '@/components/comp1'
import Comp2 from '@/components/comp2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 初始化 */}
      <Comp1 />
      <Comp2 />
    </div>
  )
}

export default App
