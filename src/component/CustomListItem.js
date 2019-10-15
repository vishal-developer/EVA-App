import React from 'react';
import './../App.css';
import CustomTextBox from './CustomTextBox';
import CustomDatePicker from './CustomDatePicker';
import CustomButton from './CustomButton'
import CustomList from './CustomList'

class CustomListItem extends React.Component{

	render(){
		return this.props.itemList.map(item =>(
			<div className='Activity-panel'>

                  <CustomList itemList = {activityTypeList} 
                  listLabel = {'Activity Type'}
                  handleSelectOnChange = {(e) => this.props.handleSelectOnChange(e, item)} />

            	<CustomTextBox label = {item.activityName}
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.activityName)}/>

            	<CustomDatePicker label = {item.startDate} 
            	handleDateChange = {(e) => this.props.handleDateChange(e, item, item.startDate)} />
            	<CustomDatePicker label = {item.endDate} 
            	handleDateChange = {(e) => this.props.handleDateChange(e, item, item.endDate)}/>
            	
            	<CustomTextBox label = {item.duration} 
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.duration)}/>
            	
            	<CustomTextBox label = {item.activityCost} 
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.activityCost)}/>

            	<CustomButton label = {'Delete'} justify="space-around" 
            	clickHandle = { this.props.handleDelete.bind(this, item) }/>
            </div>
		))
	}
}

const activityTypeList = ['Months', 'Days']
  
export default CustomListItem;