import React from 'react';
import ReactDOM from 'react-dom';

class MForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			age: null,
			errorMessage:''
		};
	}

	myChangeHanlder = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = ''
		if(nam === "age"){
			if(val !=='' && !Number(val)){
				err = <span>Your age must be a Number</span>
			}
		}
		this.setState({errorMessage:err})
		this.setState({ [nam]: val });
	};

	mySubHandler = (ev) => {
		ev.preventDefault();
		let miaka = this.state.age;
		if (!Number(miaka)) {
			alert('Your age must be a number');
		}
	};


	render() {
		return (
			<form onSubmit={this.mySubHandler}>
				<h1>Form 2</h1>
				<p>
					Hello {this.state.username} {this.state.age}
				</p>
				<p>Enter your name</p>
				<input
					type="text"
					placeholder="username"
					name="username"
					onChange={this.myChangeHanlder}
				/>
				<h3>Enter your age</h3>
				<input
					type="text"
					placeholder="age"
					name="age"
					onChange={this.myChangeHanlder}
				/>{this.state.errorMessage}
				<br/>
				<input type="submit" />
				<hr/>
			</form>
		);
	}
}

export default MForm;
