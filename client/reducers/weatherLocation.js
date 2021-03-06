import { SET_LOCATION } from '../actions'

const initialState = 'Auckland'

const weatherLocation = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.weatherLocation
    default:
      return state
  }
}

export default weatherLocation
