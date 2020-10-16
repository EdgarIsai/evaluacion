import React, { Component } from "react";

class Counter extends Component {
	state = {
		counter: 0,
	};

	incrementCounter = () => {
		/* Creating a copy of previous state, adding 1 to the copy
        and setting it as the current state*/
		const prevState = { ...this.state };
		prevState.counter++;
		this.setState(prevState);
	};

	render() {
		return (
			<>
				<p>Counter: {this.state.counter}</p>
				<button onClick={this.incrementCounter}>Count</button>
			</>
		);
	}
}

export default Counter;
