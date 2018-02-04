import { GET_ALL_CHARACTERS } from '../actions'

const charactersList = (state = {}, action) => {
  const { characters } = action

  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters,
      }
    default:
      return state
  }
}

export default charactersList
