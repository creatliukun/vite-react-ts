import ArrStatus from './index'

let reducer = (
  state = { ...ArrStatus.state },
  action: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state))
  // switch (action.type) {
  //   case ArrStatus.sArrPush:
  //     ArrStatus.actions[ArrStatus.sArrPush](newState, action)
  //     break
  //   default:
  //     break
  // }
  // !优化，解放双手，在index里面在添加方法，就不用在操作这个文件了
  for (const key in ArrStatus.actionNames) {
    if (action.type === ArrStatus.actionNames[key]) {
      ArrStatus.actions[ArrStatus.actionNames[key]](newState, action)
      break
    }
  }

  return newState
}

export default reducer
