import React from 'react';
import './../App.css';
import CustomTextBox from './CustomTextBox';
import CustomDatePicker from './CustomDatePicker';
import CustomButton from './CustomButton'

class CustomListItem extends React.Component{
	

	

	render(){
		return this.props.itemList.map(item =>(
			<div className='Activity-panel'>
            	<CustomTextBox label = {item.activityName}/>
            	<CustomDatePicker label = {item.startDate}/>
            	<CustomDatePicker label = {item.endDate}/>
            	<CustomTextBox label = {item.duration}/>
            	<CustomTextBox label = {item.activityCost}/>
            	<CustomButton label = {'Delete'} item = {item} clickHandle = { this.props.handleDelete.bind(this, item) }/>
            </div>
		))
	}
}
  
export default CustomListItem;