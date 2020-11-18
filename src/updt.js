import React from 'react';
import ReactDOM from 'react-dom';

class Update extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favouriteColor: 'red',
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ favouriteColor: 'yellow' },)
		},8000);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		document.getElementById('b4').innerHTML =
			'before update was ' + prevState.favouriteColor;
	}
	componentDidUpdate() {
		document.getElementById('aft').innerHTML =
			'after update was ' + this.state.favouriteColor;
	}
	render() {
		return (
			<div>
				<h1>My fav color is {this.state.favouriteColor}</h1>
				<div id="b4"></div>
				<div id="aft"></div>
				<hr/>
			</div>
		);
	}
}

export default Update;
