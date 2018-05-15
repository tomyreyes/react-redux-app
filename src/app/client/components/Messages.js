import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMessages } from '../actions/actions'
import LinkItem from './LinkItem.react'
class Messages extends Component {
  
  componentWillMount(){
    //DISPATCH ACTION ON MOUNT 
    this.props.fetchMessages()
  }

    render(){
      const { messages } = this.props
      const messageList = messages.messages.map((message, id)=>{
        return (<div key={id}>
        <span><h3>{message.text}</h3>
        <h5>{message.date}</h5>
        <LinkItem to={`/messages/${message.id}`}>
        see more
        </LinkItem>
        </span>
        </div>
        )
      })
    return(
      <div>
        <h1>Messages</h1>
        {messageList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMessages: fetchMessages,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
