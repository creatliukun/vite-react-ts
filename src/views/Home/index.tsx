import React from 'react'

function Home(props: { num: any; setNum: any }) {
  const { num, setNum } = props
  const clickChangeNum = () => {
    setNum(num + 1)
  }
  return (
    <div onClick={clickChangeNum}>点击这里：这是儿子组件的{num}，会加一</div>
  )
}

export default Home
