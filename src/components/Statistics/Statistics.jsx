import React, { Component } from "react";
import PropTypes from "prop-types";
class Statistics extends Component {

    render() {
        return (
            <div>
                <h4>Statistics</h4>
                <p>Good: {this.props.good}</p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <p>Total: {this.props.total}</p>    
                <p>Positive Feedback: {this.props.positivePercentage }%</p>
            </div>
        )
    }

}
    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }
export default Statistics;