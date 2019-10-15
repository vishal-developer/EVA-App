import React from 'react';
import Button from '@material-ui/core/Button';


class CustomButton extends React.Component{
	state = {
		label : 'Submit'
	}

	render(){
		return (
			<div>
				<div> &nbsp;</div>
			    <Button variant="contained" color="primary" onClick = {this.props.clickHandle}>
      				{this.props.label}
      			</Button>							
			</div>
		)
	}
}


export default CustomButton;