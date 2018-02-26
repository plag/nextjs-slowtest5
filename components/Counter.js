import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  increment,
} from '../redux/actions/main';

const mapStateToProps = (state) => {
  return {
    counter: state.main.counter,
  }
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
});

class Counter extends Component {
  render() {
    return (
      <div>
        <div>Counter: { this.props.counter }</div>
        <button type="button" onClick={ this.props.increment }>Inc</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
