import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <div>
                <p> {this.props.firstName} {this.props.lastName}</p>
            </div>
        )
    }
}

export default Name