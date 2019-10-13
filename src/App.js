import React from 'react';
import './App.css';
import CustomTextBox from './component/CustomTextBox';
import CustomButton from './component/CustomButton';
import CustomDatePicker from './component/CustomDatePicker';
import CustomListItem from './component/CustomListItem';
import HeaderPanel from './component/HeaderPanel';
import ReportPanel from './component/ReportPanel';
// list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class App extends React.Component {

	state = {
		itemList : [],
		project : '',
		Currancy : ''
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

	render(){
		return (
		      <div className='App'>
		        <HeaderPanel />
		        <div className='App-header'>
		            <CustomTextBox label = {'Project Name'}/>
		            <CustomTextBox label = {'Currancy'}/>
		            <CustomDatePicker label = {'Start Date'}/>
		            <CustomButton label = {'Next'}/>
		        </div>

		        <List>
		            <CustomListItem itemList = {this.state.itemList} 
		            handleDelete = {this.handleDelete}
		            handleOnChange = {this.handleOnChange}/>
		        </List>

		        <CustomButton label = {'Add Activity'} clickHandle={this.handleButtonClick} />
		        <CustomButton label = {'Show Report '} clickHandle={this.showReport} />
		        <ReportPanel itemList = {this.state.itemList} />

		      </div>
		);
	}
}
export default App;
