import { FETCH_MESSAGE } from '../actions/actions'

const initialState = {
  messages: [{ id: 3, title: 'This is a example message', text: 'I have been requested', date: 'Tue May 15 2018 10: 47: 39 GMT-0700(PDT)' },
  { id: 4, title: 'I like turtles', text: 'That Youtube video is still so funny', date: 'Tue May 15 2018 10: 47: 39 GMT-0700(PDT)' }]
}
export const singleMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE:
      return action.payload
    default:
      return state
  }
}
