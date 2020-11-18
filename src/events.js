import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function bang() {
	alert(this);
}



function Shoot() {
	return (
		<div>
            <h2>Events</h2>
			<button onClick={bang}>Take the shot</button>
			<hr/>
		</div>
	);
}

export default Shoot;
