import React, { Component } from 'react'

 class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            username: "Shan"
        }
    }
    ChangeName=()=>{
        this.setState({username: "Rishi"})
    }
  render() {
    console.log(this);
    return (
      <div>CBCStaeEx
        <h1>{this.state.username}</h1>
        <button onClick={this.ChangeName}>Click to change</button>
      </div>
    )
  }
}
export default CBCStateEx