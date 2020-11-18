import React from 'react';
import ReactDOM from 'react-dom';

class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: 'Text area content goes inside the element',
		};
	}

	render() {
		return (
			<div>
				<h1>Text area</h1>
				<form>
					<textarea value = {this.state.description}/>
				</form>
			</div>
		);
	}
}


export default TextArea