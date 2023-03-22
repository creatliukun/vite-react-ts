const store = {
  state: {
    sArr: [10, 20, 30],
  },
  actions: {
    sArrPush(
      newState: { sArr: number[] },
      action: { type: string; val: number }
    ) {
      newState.sArr.push(action.val)
    },
  },
  // 名字统一管理
  // sArrPush: 'sArrPush',
  // actionNames: {
  //   sArrPush: 'sArrPush',
  // },
  actionNames: {},
}
// 优化，解放双手，不用在向actionsNames添加键值对,自动生成方法名对象
// 命名全局actionNames
const actionNames = {}
for (let key in store.actions) {
  actionNames[key] = key
}
console.log(actionNames, 'actionNames')
// 赋值给store中的 actionNames
store.actionNames = actionNames

export default store
