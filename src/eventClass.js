import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
	shoot = (a, b) => {
		alert(b.type,);
	};

	render() {
		return (
			<div>
				<button onClick={(b) => this.shoot('Goal',b)}>
					Shoot Ball
				</button>
				<button onClick={this.shoot.bind(this, 'Ndani')}>
					Shoot Again
				</button>
				<hr />
			</div>
		);
	}
}

export default Football;
