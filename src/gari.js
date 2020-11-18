import React from 'react';
import ReactDOM from 'react-dom';

class Gari extends React.Component {
	constructor(props) {
		super(props);
		this.state = { favouriteColor: 'grey' };
	}
	// static getDerivedStateFromProps(props, state) {
	// 	return { favouriteColor: props.favcol };
	// }
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favouriteColor: 'pinky' });
		}, 1000);
	}
	render() {
		return <p>My favourite color is {this.state.favouriteColor}</p>;
	}
}

export default Gari;
