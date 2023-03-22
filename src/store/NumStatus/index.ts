const store = {
  state: {
    num: 20,
  },
  // 只放同步的方法
  actions: {
    add1(newState: { num: number }, action: { type: string }) {
      setTimeout(() => {
        newState.num += 1
      }, 1000)
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val
    },
  },
  // 只放异步的方法
  // 优化redux-thunk的异步写法(模仿vueX的写法)
  asyncActions: {
    asyncAdd1(disPatch: Function) {
      setTimeout(() => {
        disPatch({ type: 'add1' })
      }, 100)
    },
  },

  // 名字统一管理
  // add1: 'add1',
  // add2: 'add2',
  actionNames: {},
}
const actionNames = {}
for (let key in store.actions) {
  actionNames[key] = key
}
console.log(actionNames, 'actionNames')
// 赋值给store中的 actionNames
store.actionNames = actionNames

export default store
