import React from 'react';
import TextField from '@material-ui/core/TextField';

class CustomTextBox extends React.Component{
	
	constructor(){
		super();
		console.log(this.props);
		
	}
	state = {
		label: '',
		value: ''
	}

	handleOnChange = (event) => {
		return this.setState({value: event.target.value});
  	}
	
	render(){

		return (
			<div>
			    <TextField
			        id="projectName"
			        label= {this.props.label}
			        value = {this.state.value}
			        margin="normal"
			        onChange = {this.handleOnChange}>
			   	</TextField>
			</div>
		)
	}
}
  
export default CustomTextBox;