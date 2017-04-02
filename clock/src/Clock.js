import React, { Component } from 'react';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.updateDate = this.updateDate.bind(this);
		this.state = {
			date: new Date(),
			counter: 0
		};
	}

	componentWillMount() {
		this.updateDate();
	}

	updateDate() {
		setInterval(() => {
			this.setState((oldState)	=> { //bring oldState in as an argument if referencing the old state was necessary
				return {
					date: new Date(),
					counter: oldState.counter + 1
				};
			});
		}, 1000);
	}

	render() {
		return (
			<div>
				<p>
					The time is always 3:33 forever and always.
				</p>
				<p>
					{/* ACTUALLY, the day is {now.getDay()}.<br /> */}
					{/* wrote out the expanded string below but can also use .toLocaleTimeString() method on Date object */}
					The actual time is { this.state.date.getHours() + ':' + this.state.date.getMinutes() + ':' + this.state.date.getSeconds() }.
				</p>
				<p>
					The clock component has refreshed has refreshed { this.state.counter } times.
				</p>
			</div>
		);
	}
}