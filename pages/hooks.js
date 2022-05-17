import React, { Component, useCallback } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'

const hooks = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.value)
    const incrementCounter = useCallback(() => dispatch({ type: 'INCREMENT' }))
    const decrementCounter = useCallback(() => dispatch({ type: 'DECREMENT' }))
    return (
        <div className={styles.center}>
            <h1>Welcome to Redux + Hook</h1>
            <p className='mt-5'>Counter {' '}<code>{counter}</code></p>
            <br />
            <button className={styles.button + ' btn btn-primary'} onClick={incrementCounter}> + </button>
            <button className={styles.button + ' btn btn-danger'} onClick={decrementCounter}> - </button>
        </div>
    )
}

export default hooks