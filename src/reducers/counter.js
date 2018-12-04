const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

export const decrementAction = (payload) => ({
  type: DECREMENT,
  payload
})

export const incrementAction = (payload) => (dispatch) => {
   return dispatch(increment(payload))
}

const increment = (payload) => ({
   type: INCREMENT,
   payload
})


const initialState = {
   count: 0,
   data: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {

  case INCREMENT:
    return { ...state, count : state.count + 1 }
  case DECREMENT:
    return { ...state, count : state.count - 1 }

  default:
    return state
  }
}
