export const GET_ALL_COMICS = 'GET_ALL_COMICS'

// ACTIONS FOR COMICS

// action creator to create an action to retrieve all comics from all categories
export const getAllComics = comics => (
  {
    type: GET_ALL_COMICS,
    comics,
  }
)
