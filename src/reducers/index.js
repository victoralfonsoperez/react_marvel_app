import { GET_ALL_CHARACTERS, FETCH_NEW_CHARACTERS } from '../actions'

const charactersList = (state = { ready: false }, action) => {
  const { characters, ready } = action

  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters,
        ready,
      }
    case FETCH_NEW_CHARACTERS:
      return {
        ...state,
        characters,
        ready,
      }
    default:
      return state
  }
}

export default charactersList
