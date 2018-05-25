import React, { Component } from 'react'

class Cohort extends Component {
    render() {
        return (
            <div>
                <p>{this.props.cohort}</p>
            </div>
        )
    }
}

export default Cohort