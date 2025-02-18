import React from 'react'
import { buyPaniPuri } from '../redux/cakeexample/CakeAction'
import { connect } from 'react-redux'

const PaniPuriExp = (props) => {

  return (
    <div>
      <h1>Number of Pani Puris: {props.numOfPaniPuris}</h1>
        <button onClick={props.xyz}>Buy Pani Puri</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfPaniPuri: state.numOfPaniPuris
    }
}

const mapDispatchToProps = dispatch => {
    return {
        xyz: () => dispatch(buyPaniPuri())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaniPuriExp)
