import { GET_ALL_CHARACTERS, FETCH_NEW_CHARACTERS, FETCH_RELATED_COMICS } from '../actions'

const charactersList = (state = { ready: false }, action) => {
  const { characters, ready, related } = action

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
    case FETCH_RELATED_COMICS:
      return {
        ...state,
        related,
        ready,
      }
    default:
      return state
  }
}

export default charactersList
