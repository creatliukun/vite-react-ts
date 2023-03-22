import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import store from '@/store'
import NumStatus from '@/store/NumStatus'

function Page1() {
  // 修改仓库数据
  const disPatch = useDispatch()
  // 获取仓库数据
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStatus.num,
  }))
  const { sArr } = useSelector((state: RootState) => ({
    sArr: state.ArrStatus.sArr,
  }))

  const addClick = () => {
    disPatch({ type: 'add2', val: 10 })
  }
  const addClickSync = () => {
    // disPatch({ type: 'add1' })
    // 异步的使用
    // disPatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: 'add1' })
    //   }, 100)
    // })
    // 异步的使用redux-thunk的优化
    disPatch(NumStatus.asyncActions.asyncAdd1)
  }
  const addClickPush = () => {
    disPatch({ type: 'sArrPush', val: 10 })
  }
  return (
    <div>
      数字{num}
      <button onClick={addClick}>同步调用</button>
      <button onClick={addClickSync}>异步调用</button>
      <p>{sArr}</p>
      <button onClick={addClickPush}>点击push</button>
    </div>
  )
}

export default Page1
