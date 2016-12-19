import React,{ Component, Property }from 'react';

class InputTextField extends Component{
	constructor(props){
		super(props);
	}



	render(){
		return (
			<div>
				<input type='text' size='10' defaultValue={this.props.value}/>
			</div>
		);
	}
}



export default InputTextField;