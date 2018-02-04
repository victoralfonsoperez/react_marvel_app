import { GET_ALL_COMICS } from '../actions'

const comicsList = (state = {}, action) => {
  const { comics } = action

  switch (action.type) {
    case GET_ALL_COMICS:
      return {
        ...state,
        comics,
      }
    default:
      return state
  }
}

export default comicsList
