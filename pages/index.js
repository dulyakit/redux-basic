import React, { Component, useCallback } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/Home.module.css'

class home extends Component {
  render() {
    return (
      <div className={styles.center}>
        <h1>Welcome to Redux + Class Component</h1>
        <p className='mt-5'>Counter {' '}<code>{this.props.counter}</code></p>

        <br />
        <button className={styles.button + ' btn btn-primary'} onClick={this.props.incrementCounter}> + </button>
        <button className={styles.button + ' btn btn-danger'} onClick={this.props.decrementCounter}> - </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = {
  incrementCounter: () => ({ type: 'INCREMENT' }),
  decrementCounter: () => ({ type: 'DECREMENT' })
}

export default connect(mapStateToProps, mapDispatchToProps)(home)