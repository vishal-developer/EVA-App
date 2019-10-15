import React from 'react';
import '../App.css';
import CustomButton from '../component/CustomButton';
import CustomListItem from '../component/CustomListItem';
import HeaderPanel from '../component/HeaderPanel';
import ReportPanel from '../component/ReportPanel';
import CustomDatePicker from '../component/CustomDatePicker';
import CustomTextBox from '../component/CustomTextBox';
import CustomChart from '../component/CustomChart';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class ActivityPage extends React.Component {

	state = {
		itemList : [],
	}
	
	handleButtonClick = (e) => {
		this.addItem();
	}

	addItem = (e) => {
		this.setState(state => {
			const list = state.itemList.push({
				id: Date.now(),
				activityName: 'Activity Name',
				activityValue: '',
				startDate: 'Start Date',
				startDateValue: '',
				endDate: 'End Date',
				endDateValue: '',
				duration: 'Duration',
				durationValue: '',
				activityCost: 'Activity Cost',
				activityCostValue: '',
				activityType: ''

			});
			return {list};
		});
	}

	handleDelete = (item) => {
		console.log(item);
		this.setState({ itemList: [...this.state.itemList.filter(listItem => listItem !== item)]});	
	}

	showReport = (e) => {
		console.log(this.state.itemList);
	}

	handleTextViewOnChange = (e) => {
		this.setState( {
			project : e
		});
	}

	handleOnChange = (e, item, textboxName) => {
		this.setState( state => {
			const list = state.itemList.map((listItem) =>{
				if(listItem === item){
					if(textboxName === 'Activity Name'){
						listItem.activityValue = e;
					}else if(textboxName === 'Duration'){
						listItem.durationValue = e;
					}else if(textboxName === 'Activity Cost'){
						listItem.activityCostValue = e;
					}
				}
				return listItem;
			});
			return {list};
		});
	}

	handleDateChange = (e, item, dateLabel) =>{
		console.log(e);

		this.setState( state => {
			const list = state.itemList.map((listItem) =>{
				if(listItem === item){
					if(dateLabel === 'Start Date'){
						// listItem.startDateValue = new Date(e).getDate();
					}else if(dateLabel === 'End Date'){
						// listItem.endDateValue = new Date(e).getDate();	
					}
				}
				return listItem;
			});
			return {list};
		});
	}

	handleSelectOnChange = (e, item) => {
		console.log(e.target.value);
		this.setState( state => {
			const list = state.itemList.map((listItem) =>{
				if(listItem === item){
					listItem.activityType = e.target.value;
				}
				return listItem;
			});
			return {list};
		});
	}

	handleSingleDate = (e) => {
		console.log(e);
	}


	render(){
		return (
			<div className='App'>  
	            <CustomListItem itemList = {this.state.itemList} 
	            handleDelete = {this.handleDelete}
	            handleOnChange = {this.handleOnChange}
	            handleDateChange = {this.handleDateChange}
	            handleSelectOnChange = {this.handleSelectOnChange}/>

		        <CustomButton label = {'Add Activity'} clickHandle={this.handleButtonClick} />
		        
		        <CustomButton label = {'Set Baseline'} clickHandle={this.showReport} />

		         <CustomDatePicker label = {'Check Progress till date'} handleDateChange = {this.handleSingleDate}/>

		         <CustomButton label = {'Check Progress'} clickHandle={this.showReport} />
		        
		         <ReportPanel itemList = {this.state.itemList} />
		         <div className='Activity-panel'>	
			         <CustomTextBox label = {'bcws'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'bcwp'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'acwp'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'cpi'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'cv'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'spi'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'sv'} handleOnChange = {this.handleTextViewOnChange}/>
		         </div>
		         <div className='Activity-panel'>	
			         <CustomTextBox label = {'bcws'} handleOnChange = {this.handleTextViewOnChange}/>
			         <CustomTextBox label = {'bcwp'} handleOnChange = {this.handleTextViewOnChange}/>
			     </div>
			     <CustomButton label = {'Display Chart'} clickHandle={this.showReport} />
			     <CustomChart />
			         
		        
	      	</div>
		      
		);
	}
}

export default ActivityPage;
