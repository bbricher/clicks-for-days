import React from "react";

class Result extends React.Component {

    state = {
      currentCount: 0,
      highestCount: 0
    };

    handleCurrentIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // got stuck with the click handler and where to put it to connect to the other objects

    render() {
        return (
            <>
            <li className="nav-item">
                Score: {this.state.currentCount}
            </li>
            <li className="nav-item">
                High Score: {this.state.highestCount}
            </li>
            </>
        );
    }
}

export default Result;