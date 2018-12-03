import { INPUT_SEARCH } from "../type";

const initialState = {
   search: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

   
  case INPUT_SEARCH:
    return { ...state, search: payload }

  default:
    return state
  }
}
