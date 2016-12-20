import React,{ Component, Property }from 'react';

class InputTextField extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let labelTitle = this.props.labelTitle;
		let name = this.props.name;
		return (
			<div>
				<span>{labelTitle}</span>
				<input type='text' size='10' defaultValue={this.props.value} name={name} id={name} onBlur={this.props.onBlur}/>
			</div>
		);
	}
}



export default InputTextField;