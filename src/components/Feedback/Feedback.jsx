import React, { Component } from "react";
import "./Feedback.css";
import Statistics from "components/Statistics/Statistics";
// import FeedbackOptions from "components/FeedBackOptions/FeedBackOptions";

class Feedback extends Component {
    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue
    }
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };
    handleChangeGood = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({good: state.good+this.props.step}))
    };
    handleChangeBad = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({bad: state.bad+this.props.step}))
    };
    handleChangeNeutral = (evt) => {
        evt.preventDefault();
        this.setState((state, props) => ({neutral: state.neutral+this.props.step}))
    };
    countTotalFeedback = () => {
        let total = 0;
        for (const value in this.state) {
            total += this.state[value];
        }
        return total
    }
    countPositiveFeedbackPercentage = () => {
        let positive = this.state.good*100 / this.countTotalFeedback();
        return positive.toFixed(2) > 0 ? positive.toFixed(2) : 0
    }
    render() {
        return (
        <div>
            <h3>PLEASE LEAVE FEEDBACK</h3>
            <div className="buttonWrapper">
                <button className="button good"  type="click" onClick={this.handleChangeGood}>Good</button>
                <button className="button neutral" type="click" onClick={this.handleChangeNeutral}>Neutral</button>
                <button className="button bad" type="click" onClick={this.handleChangeBad}>Bad</button>
            </div>
            <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />

        </div>
        )
    }
    
}

export default Feedback;