import React,{ Component, Property }from 'react';
import InputTextField from './InputTextField';
import BasicLabel from './BasicLabel';

class BasicForm extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<BasicLabel labelTitle='Name: ' labelText='Test for react'/>
				<InputTextField value='asdf'/>
			</div>
		);
	}
}

export default BasicForm;