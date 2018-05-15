export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const FETCH_MESSAGE = 'FETCH_MESSAGE'
import axios from 'axios'

const url = 'https://tomy-test-autotelic.herokuapp.com/'

//EXAMPLE OF HOW FETCHMESSAGES WILL WORK
const mockPayload = {
  messages: [
    {
      id: 1,
      text: "Knock-knock",
      url: "https://tomy-test-autotelic.herokuapp.com/messages/1/",
      created_at: "2016-10-25T04:45:47.802339Z"
    },
    {
      id: 2,
      text: "Who's there?",
      url: "https://tomy-test-autotelic.herokuapp.com/messages/2/",
      created_at: "2016-10-25T04:55:47.802339Z"
    },
    {
      id: 3,
      text: "I asked the librarian for a book on Pavlov's dog and Schrödinger's cat. She said it rang a bell, but she wasn't sure if it was on the shelf or not.",
      url: "https://tomy-test-autotelic.herokuapp.com/messages/3/",
      created_at: "2016-10-23T01:55:47.802339Z"
    },
    {
      id: 4,
      text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
      url: "https://tomy-test-autotelic.herokuapp.com/messages/4/",
      created_at: "2016-10-24T03:55:47.802339Z"
    },
    {
      id: 5,
      text: "How many programmers does it take to change a light bulb?",
      url: "https://tomy-test-autotelic.herokuapp.com/messages/5/",
      created_at: "2016-10-25T05:10:51.483017Z"
    }
  ]
}

// THIS IS A MOCK
export const fetchMessages = () => {
  console.log('getting messages')
    return {
      type: FETCH_MESSAGES,
      payload: mockPayload
  }
}

// BELOW WOULD BE WHAT THE ACTUAL ACTION CREATOR WOULD LOOK LIKE WITH MESSAGES IN PLACE
//I HAVE BEEN UNABLE TO GET MESSAGES FROM THIS. STRUGGLING WITH PROMISES
// export const fetchMessages = () => { 
//   const data = 
//   axios({
//     method: 'GET',
//     url: `${url}/messages`
//   }).then(response => response.data.results)
//   .then(response => {
//     return response 
//   }).catch(error =>{
//     console.log(error)
//   })

//   return {
//     type: FETCH_MESSAGES,
//     payload: data
//   }
// }

//THIS IS A MOCK 
export const fetchMessage = (id) => {
  console.log('getting a specific message')
    //THIS WILL BE USED TO FILTER MESSAGES BASED ON THE RECEIVED ID
    let singleMessage = mockPayload.messages.filter(message => message.id == id)
    return {
      type: FETCH_MESSAGE,
      payload: singleMessage[0]
  }
}

//BELOW REPRESENTS HOW THE ACTION CREATOR WOULD LOOK WITH MESSAGES IN PLACE 

// export const fetchMessage = (id) => {
/// export const fetchMessages = () => { 
//   const data = 
//   axios({
//     method: 'GET',
//     url: `${url}/messages/${id}`
//   })
//.then(response => response.data.results)
//   .then(response => {
//     return response 
//   }).catch(error =>{
//     console.log(error)
//   })

//   return {
//     type: FETCH_MESSAGE,
//     payload: data
//   }
// }