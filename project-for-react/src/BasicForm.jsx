import React,{ Component, Property }from 'react';
import InputTextField from './InputTextField';
import BasicLabel from './BasicLabel';

class BasicForm extends Component {
	constructor(props){
		super(props);
		this.inputTextId = 'fillId';
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleBlur(e){
		console.log(e.target.value);
	}

	render(){
		let label = { labelTitle: 'Name: ', labelText: 'Test for react'};
		let input = { labelTitle: 'Text to fill: ', value:'asdf', name: this.inputTextId, onBlur: this.handleBlur };
		return (
			<div>
				<BasicLabel {...label} />
				<InputTextField {...input} />
			</div>
		);
	}
}

export default BasicForm;