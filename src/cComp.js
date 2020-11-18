import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: 'Ford',
			model: 'Mustang',
			color: 'red',
			year: 1964,
		};
	}
	changeColor = () => {
		this.setState({ color: 'blue' });
	};
	render() {
		return (
			<div>
				<h3> It's {this.props.brand.carName}</h3>
				<p>
					It is a {this.state.color} {this.state.year}{' '}
					{this.state.brand} {this.state.model} to be exact.
				</p>
				<button type="button" onClick={this.changeColor}>
					Change state
				</button>
				<hr />
			</div>
		);
	}
}

export default Car;
