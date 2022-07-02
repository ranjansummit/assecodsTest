import remove from 'lodash.remove'

// Action Types

export const LOGIN = 'LOGIN'
export const FORGET = 'FORGET'

// Action Creators


export function login(id) {
  return {
    type: LOGIN,
    id: id,
    
  }
}

export function forget(id) {
  return {
    type: forget,
    payload: id
  }
}

// reducer

const initialState = []

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return [
        ...state,
        {
          id: action.id,
          id: action.id
        }
      ]

    case FORGET:
  

    default:
      return state
  }
}

export default loginReducer
