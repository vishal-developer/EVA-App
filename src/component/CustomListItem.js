import React from 'react';
import './../App.css';
import CustomTextBox from './CustomTextBox';
import CustomDatePicker from './CustomDatePicker';
import CustomButton from './CustomButton'
// import CustomList from './CustomList'

class CustomListItem extends React.Component{

	render(){
		return this.props.itemList.map(item =>(
			<div className='Activity-panel'>

            	<CustomTextBox styel= {itemStyle} label = {item.activityName}
                  value = {item.activityValue}
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.activityName)}/>

            	<CustomDatePicker label = {item.startDate} 
            	handleDateChange = {(e) => this.props.handleDateChange(e, item, item.startDate)} />
            	<CustomDatePicker label = {item.endDate} 
            	handleDateChange = {(e) => this.props.handleDateChange(e, item, item.endDate)}/>
            	
            	<CustomTextBox label = {item.duration} value = {item.durationValue}
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.duration)}/>
            	
            	<CustomTextBox label = {item.activityCost} value = {item.activityCostValue}
            	handleOnChange = {(e) => this.props.handleOnChange(e, item, item.activityCost)}/>

            	<CustomButton label = {'Delete'} justify="space-around" 
            	clickHandle = { this.props.handleDelete.bind(this, item) }/>
            </div>
		))
	}
}

const itemStyle = {
      margin: '10px 10px 10px 10px',
      border: '1px'
}

const activityTypeList = ['Months', 'Days']
  
export default CustomListItem;