import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class CustomDatePicker extends React.Component{
	
	state = {
		selectedDate: new Date()
	}

	handleDateChange = (e) => {
		const date = new Date(this.getFormattedDate(e));
		this.props.handleDateChange(date);
		return this.setState({selectedDate: date});
  	}

  	getFormattedDate = (date) => {
  		return + date.getFullYear()+ "-" + (date.getMonth() + 1)+"-"+date.getDate();
  	}
	
	render(){
		return (
			<div style = {datePicketStyle}>
   				<MuiPickersUtilsProvider utils={DateFnsUtils}>
      				<Grid container  justify="space-around">
   						<KeyboardDatePicker
				          disableToolbar
				          variant="normal"
				          format="dd/MM/yyyy"
				          margin="normal"
				          value = {this.state.selectedDate}
				          onChange = {this.handleDateChange}
				          id={this.props.label}
				          label={this.props.label}
				    	   	
				        />
					</Grid>
    			</MuiPickersUtilsProvider>					
			</div>
		)
	}
}
const datePicketStyle = {
	margin: '10px'
}
export default CustomDatePicker;