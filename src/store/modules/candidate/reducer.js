const INITIAL_STATE = {
  name: '...'
}

export default function candidate(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@candidate/ADD_NAME_CANDIDATE':
      return {...state, name: 'João' }
    default:
      return state
  }
}