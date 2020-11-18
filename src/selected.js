import React from 'react';
// import ReactDOM from 'react-dom';

class Select extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			myCar: 'Volvo',
		};
	}
	changeSelect = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<form>
				<select value={this.state.value} onChange={this.changeSelect}>
					<option value="F">Ford</option>
					<option value="B">Beamer</option>
					<option value="R">Rari</option>
					<option value="P">Porche</option>
					<br/>
				</select>
				<br/>
			</form>
		);
	}
}

export default Select;
