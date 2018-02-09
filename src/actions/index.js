export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const FETCH_NEW_CHARACTERS = 'FETCH_NEW_CHARACTERS'

// ACTIONS FOR CHARACTERS
// action creator to create an action to retrieve all characters
export const getAllCharacters = (characters, ready) => (
  {
    type: GET_ALL_CHARACTERS,
    characters,
    ready,
  }
)

export const fetchCharacters = (characters, ready) => (
  {
    type: FETCH_NEW_CHARACTERS,
    characters,
    ready,
  }
)
