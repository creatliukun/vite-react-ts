const defaultState = {
  num: 20,
}

let reducer = (state = defaultState) => {
  let newState = JSON.parse(JSON.stringify(state))
  return newState
}

console.log(reducer, 'newState')

export default reducer
