import React, { Component } from 'react';
import {buycake} from "./Redux"
import {connect} from "react-redux";

function CakeContainer(props){
  return (
    <div>
    <h2>No of cakes - {props.numOfCakes}</h2>
    <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : () => dispatch(buycake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)