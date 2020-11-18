import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
		};
		// this.onKey = this.onKey.bind(this)
	}

	handleChange = (event) => {
		this.setState({ userName: event.target.value });
	};

	//how do you check for input before submitting??

	subHandler = (blaa) => {
		blaa.preventDefault(); //prevent actually submiting the form
		alert('you are submiting');
	};

	//on pressing enter key, the username is "logged"
	//this can be done better by using the onSubmit event instead of the onKeuUp event
	onKey = (event) => {
		if (event.charCode === 13) {
			alert(`The user = ${this.state.userName}`);
			// console.log(`The user = ${this.state.userName}`);
		}
	};

	render() {
		let header = '';
		//greet the user
		if (this.state.userName) {
			header = <h1>Hello {this.state.userName}</h1>;
		} else {
			header = '';
		}

		return (
			<form>
				<h1>Form 1</h1>
				{header}
				{/* <h1>Hello {this.state.userName}</h1> */}
				<p>Enter your name</p>
				<input
					type="text"
					onChange={this.handleChange}
					onKeyPress={this.onKey}
					onSubmit={this.subHandler}
				/>
				<button onClick={this.subHandler}>submit</button>
				<hr />
			</form>
		);
	}
}

export default Form;

// ReactDOM.render(<Form />, document.getElementById('pili'));
