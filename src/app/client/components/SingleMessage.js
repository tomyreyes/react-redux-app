import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMessage } from '../actions/actions'

class SingleMessage extends Component {

  componentWillMount() {
    //DISPATCH ACTION ON MOUNT 
    //SENDING ID AS ARGUMENT FOR FILTERING
    const { id } = this.props.params
    this.props.fetchMessage(id)
  }
    render() {
      const { message } = this.props
    return (
      <div>
        <h1>Single Message Page</h1>
        <h4>{this.props.message.text}</h4>
        <h5>{this.props.message.created_at}</h5>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchMessage: fetchMessage,
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(SingleMessage)


