import HandleNumber from './index'

let reducer = (
  state = { ...HandleNumber.state },
  action: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state))
  // switch (action.type) {
  //   case HandleNumber.add1:
  //     HandleNumber.actions[HandleNumber.add1](newState, action)
  //     break
  //   case HandleNumber.add2:
  //     HandleNumber.actions[HandleNumber.add2](newState, action)
  //     break
  // }
  for (const key in HandleNumber.actionNames) {
    if (action.type === HandleNumber.actionNames[key]) {
      HandleNumber.actions[HandleNumber.actionNames[key]](newState, action)
      break
    }
  }

  return newState
}

console.log(reducer, 'newState')

export default reducer
