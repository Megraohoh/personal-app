import React, { Component } from 'react'

class Car extends Component {
    render() {
        return (
            <div>
                <p>{this.props.car}</p>
            </div>
        )
    }
}

export default Car