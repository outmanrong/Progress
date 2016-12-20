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
		return (
			<div>
				<BasicLabel labelTitle='Name: ' labelText='Test for react'/>
				<InputTextField labelTitle='Text to fill: ' value='asdf' name={this.inputTextId} onBlur={this.handleBlur}/>
			</div>
		);
	}
}

export default BasicForm;