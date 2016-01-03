import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';
import './css/main.css';

function myMain() {
	let app = document.createElement('div');
	document.body.appendChild(app);
	
	ReactDOM.render(<Hello name="Dude" age="20" />, app);
}

myMain();

function renderHello(options) {
	let newDiv = document.createElement('div');
	if (options.id)
		newDiv.id = options.id;
	document.body.appendChild(newDiv);
	
	ReactDOM.render(<Hello {...options} />, newDiv);
}

window.Util = (function() {
	return {
		renderHelloFromConsole: renderHello
	};
})();