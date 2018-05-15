export const FETCH_MESSAGES = 'FETCH_MESSAGES'

//EXAMPLE OF HOW FETCHMESSAGES WILL WORK
export const fetchMessages = () => {
  console.log('getting messages')
  return {
    type: FETCH_MESSAGES,
    payload: { messages: [{ id: 3, text: 'This is a example message', date: 'Tue May 15 2018 10: 47: 39 GMT-0700(PDT)' },
    { id: 4, text: 'I like turtles', date: 'Tue May 15 2018 10: 47: 39 GMT-0700(PDT)' }] }
  }
}
