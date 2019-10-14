import React from 'react';
import '../App.css';
import CustomTextBox from '../component/CustomTextBox';
import CustomButton from '../component/CustomButton';
import CustomDatePicker from '../component/CustomDatePicker';
import CustomListItem from '../component/CustomListItem';
import HeaderPanel from '../component/HeaderPanel';
import ReportPanel from '../component/ReportPanel';
// list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class ActivityPage extends React.Component {

	state = {
		itemList : [],
		project : '',
		currencyList : ['INR','USD']
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
				activityCostValue: ''
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

	handleSelectOnChange = (e) => {
		console.log(e.target.value);
	}

	render(){
		return (
			
		      <div className='App'>
		        <HeaderPanel />
		        
		       
		        <List>
		            <CustomListItem itemList = {this.state.itemList} 
		            handleDelete = {this.handleDelete}
		            handleOnChange = {this.handleOnChange}
		            handleDateChange = {this.handleDateChange}/>
		        </List>
		        
		        <div className="top-element-formatting">
		        <CustomButton label = {'Add Activity'} clickHandle={this.handleButtonClick} />
		        <span> </span>
		        	<CustomButton label = {'Show Report '} clickHandle={this.showReport} />
		        </div>
		        <ReportPanel itemList = {this.state.itemList} />
		      </div>
		      
		);
	}
}


export default ActivityPage;
