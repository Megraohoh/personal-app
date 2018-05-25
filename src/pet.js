import React, { Component } from 'react'

class Pet extends Component {
    render() {
        return (
            <div>
                <p>{this.props.pet}</p>
            </div>
        )
    }
}

export default Pet