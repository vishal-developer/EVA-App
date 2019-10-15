import React from 'react';
import Button from '@material-ui/core/Button';

//select 
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';



class CustomList extends React.Component{

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
			<InputLabel htmlFor="Currency">{this.props.listLabel}</InputLabel>
			<div className = {marginTop}></div>
			<Select 
			value={this.state.selectValue}
			onChange = {this.handleSelectOnChange}>
			 <MenuItem value="none">
	           None
	         </MenuItem>
				{
					this.props.itemList.map(item => (
						<MenuItem value={item}>{item}</MenuItem>
					))
				}
	        </Select>
	        </div>
	        
		)
	}
}

const marginTop = {
	height: '10px',
	marginTop: '100px'
}


export default CustomList;