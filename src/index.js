import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './txtArea';
import './Style.css'

// const firstElement = <h1>Hello React Baby</h1>

import Car from './cComp';
// import PUjo from './fComp';
import Gari from './gari';
import Update from './updt';
import Shoot from './events';
import Football from './eventClass';
import Form from './forms';
import MForm from './multiForm';
import Select from './selected'
// const myElement = (
// 	<table>
// 		<tr>
// 			<th>Name</th>
// 		</tr>
// 		<tr>
// 			<td>Elisa</td>
// 		</tr>
// 		<tr>
// 			<td>Brian</td>
// 		</tr>
// 	</table>
// );

class Garadge extends React.Component {
	render() {
		const carInfo = {
			carName: 'Ford',
			model: 'Mustang',
		};
		return (
			<div>
				<h1>Who lives in my garadge ?? </h1>
				<Car brand={carInfo} />
				{/* <PUjo /> */}
				<Gari favcol="pink" />
				{/* <hr/> */}
				<Update />
				<Shoot />
				<Football />
				<Form />
				<MForm />
				<TextArea />
				<Select/> 
			</div>
		);
	}
}

ReactDOM.render(<Garadge />, document.getElementById('root'));

// ReactDOM.render(<PUjo />, document.getElementById('root'));

// ReactDOM.render(myElement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
