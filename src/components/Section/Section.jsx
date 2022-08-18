import React, { Component } from "react";

class Section extends Component {
    render() {
        const {title, children} = this.props
        return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
        )
    }   
}
export default Section;