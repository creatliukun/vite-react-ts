import React, { useState } from 'react'
import Hmoe from '@/views/Home'

function About() {
  const [num, setNum] = useState(1)
  return (
    <div>
      这是父亲组件的 {num}
      <Hmoe num={num} setNum={setNum} />
    </div>
  )
}

export default About
