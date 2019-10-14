import React from 'react';
import Button from '@material-ui/core/Button';

//select 
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';



class CurrencyList extends React.Component{

	constructor(props){
		super(props)
	}

	state = {
		selectValue: 'none'
	}

	handleSelectOnChange = (e) =>{
		this.props.handleSelectOnChange(e);
		return this.setState({selectValue: e.target.value});
	}


	render(){
		return (
			 <div>
			 <InputLabel htmlFor="Currency">Select Currency</InputLabel>
			<Select 
			value={this.state.selectValue}
			onChange = {this.handleSelectOnChange}>
			 <MenuItem value="none">
	           <em>None</em>
	         </MenuItem>
				{
					this.props.currencyList.map(item => (
						<MenuItem value={item}>{item}</MenuItem>
					))
				}
	        </Select>
	        </div>
	        
		)
	}
}


export default CurrencyList;