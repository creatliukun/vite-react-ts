// !注意：类型声明文件里面不要直接使用 import ... from '...'
// 建议使用 import('@/store')，这样在下其他文件就不用引入了,也不用向其他文件一样引入
// ts提供了一个ReturnType,用户获取函数类型的返回值
type RootState = ReturnType<typeof import('@/store').getState>
// 接口
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function
}
