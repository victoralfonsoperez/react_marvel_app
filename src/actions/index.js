export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'

// ACTIONS FOR CHARACTERS

// action creator to create an action to retrieve all characters
export const getAllCharacters = characters => (
  {
    type: GET_ALL_CHARACTERS,
    characters,
  }
)
