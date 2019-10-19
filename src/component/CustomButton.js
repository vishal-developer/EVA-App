import React from 'react';
import Button from '@material-ui/core/Button';


class CustomButton extends React.Component{
	state = {
		label : 'Submit'
	}

	render(){
		return (
			<div>
			    <Button style = {buttonStyle} variant="contained" color="primary" onClick = {this.props.clickHandle}>
      				{this.props.label}
      			</Button>							
			</div>
		)
	}
}

const buttonStyle = {
	margin: '10px'
}

export default CustomButton;