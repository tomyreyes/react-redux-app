import { FETCH_MESSAGES } from "../actions/actions";

const initialState = {
  //HARD CODE FOR SAMPLE 
  messages : [
    {
      id: 1,
      text: 'Hello World',
      date: 'Tue May 15 2018 10: 47: 39 GMT-0700(PDT)'
    },
    {
      id: 2,
      text: 'Redux Rocks',
      date: 'Tue May 15 2018 10:48:30 GMT-0700 (PDT)'
    }
  ]
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload
    default:
      return state
  }
}