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
		return this.setState({selectedDate: e});
  	}
	
	render(){
		return (
			<div>
   				<MuiPickersUtilsProvider utils={DateFnsUtils}>
      				<Grid container>
   						<KeyboardDatePicker
				          disableToolbar
				          variant="normal"
				          format="MM/dd/yyyy"
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
export default CustomDatePicker;