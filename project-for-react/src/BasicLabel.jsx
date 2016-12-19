import React,{ Component, Property }from 'react';

class BasicLabel extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let labelTitle = this.props.labelTitle;
		let labelText = this.props.labelText;
		return (
			<div>
				<span>{labelTitle}</span>
				<span>{labelText}</span>
			</div>
		);
	}
}

export default BasicLabel;