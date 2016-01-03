import React from 'react';

export default class Hello extends React.Component {
	render() {
		let props = this.props;
		return (<div>Hello {props.name}. You are {props.age}</div>);
	}
}