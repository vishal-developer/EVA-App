import React from 'react';
import './App.css';
import CustomTextBox from './component/CustomTextBox';
import CustomButton from './component/CustomButton';
import CustomDatePicker from './component/CustomDatePicker';
import CustomListItem from './component/CustomListItem';
import HeaderPanel from './component/HeaderPanel';
// list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class App extends React.Component {

	state = {
		itemList : []
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
				durationValue: 'Duration',
				activityCost: 'Activity Cost',
				activityValue: ''
			});
			return {list};
		});
	}

	handleDelete = (item) => {
		console.log(item);
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
		            <CustomListItem itemList = {this.state.itemList} handleDelete = {this.handleDelete}/>
		        </List>

		        <CustomButton label = {'Add Activity'} clickHandle={this.handleButtonClick} />

		      </div>
		);
	}
}
export default App;
