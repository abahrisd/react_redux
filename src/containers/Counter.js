import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {increment} from '../AC/counter'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired
    }

    render(){
        const {count} = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href="#" onClick={this.handleClick}>increment</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }

}

//get data from store, dispatch and subcribe
//in second argument - action creators
export default connect((state) => {
    const {counter} = state;
    return {count: counter}
}, {increment})(Counter)