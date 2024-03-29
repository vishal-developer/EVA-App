import React from 'react';
import '../App.css';
import CustomButton from '../component/CustomButton';
import CustomListItem from '../component/CustomListItem';
import HeaderPanel from '../component/HeaderPanel';
import CustomDatePicker from '../component/CustomDatePicker';
import CustomTextBox from '../component/CustomTextBox';
import CustomChart from '../component/CustomChart';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class ActivityPage extends React.Component {

	constructor(props){
		super(props);
		const projectData = props.projectData;
	}

	state = {
		itemList : [{
				id: Date.now(),
				activityName: 'Activity Name',
				activityValue: '',
				startDate: 'Start Date',
				startDateValue: new Date(),
				endDate: 'End Date',
				endDateValue: new Date().toString(),
				duration: 'Duration(Days)',
				durationValue: 1,
				activityCost: 'Activity Cost',
				activityCostValue: 0,
				activityType: ''

			}],
		progressDate : new Date().toString(),
		progressList: {
			activity: '',
			plannedDuration: 0,
			completed: '',
			actualCost: '',
			actualDuration: '',
			plannedCost: ''
		},
		bcws: 0,
		bcwp: 0,
		acwp: 0,
		cpi: 0,
		cv: 0,
		spi: 0,
		sv: 0
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
				startDateValue: new Date().toString(),
				endDate: 'End Date',
				endDateValue: new Date().toString(),
				duration: 'Duration(Days)',
				durationValue: 0,
				activityCost: 'Activity Cost',
				activityCostValue: 0,
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
		console.log(this.state);
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
						state.progressList.activity = e;
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
		this.setState( state => {
			const list = state.itemList.map((listItem) =>{
				if(listItem === item){
					if(dateLabel === 'Start Date'){
						listItem.startDateValue = e.toString();
					}else if(dateLabel === 'End Date'){
						listItem.endDateValue = e.toString();	
					}
					const duration = this.getDateDifference(listItem.startDateValue,
						listItem.endDateValue);
					
					listItem.durationValue = Math.round(duration/(1000 * 3600 * 24)) + 2;
				}

				return listItem;
			});
			return {list};
		});
	}

	getDateDifference = (startDate, endDate) => {
		return Date.parse(endDate) - Date.parse(startDate);
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
		this.setState(state =>{ 
			state.progressDate = e.toString();
		});
		
	}

	updatePlannedCost = () => {
		var plannedCost = (this.state.progressList.plannedDuration / this.getTotalDuration()) * this.getTotalActivityCost();
		this.setState(state => {
			const progressItem = state.progressList;
			progressItem.plannedCost = plannedCost;
			return progressItem;
		} );
	}	

	getTotalDuration = () => {
		var duration = 0;
		this.state.itemList.forEach(item => {
			duration += item.durationValue;
		});
		return duration;
	}

	getTotalActivityCost = () => {
		var cost = 0;
		this.state.itemList.forEach(item => {
			cost += parseInt(item.activityCostValue);
		});
		return cost;
	}

	setPlannedDuration = (e) => {
		var duration = 0;
		this.state.itemList.forEach(item => {
			duration += item.durationValue;
		});
		return this.setState( state => {
			const progressItem = state.progressList;
			progressItem.plannedDuration = duration;
			return progressItem;
		});
	}

	getPlannedDuration = (item) => {
		const plannedDurationDiff = this.getDateDifference(this.props.projectData.startDate, this.state.progressDate); 
		return Math.round(plannedDurationDiff/(1000 * 3600 * 24))
	}

	handleProcess = (e) => {
		this.setPlannedDuration();
	}

	handleCheckProgressClick = (e) => {
		this.updatePlannedCost();
	}

	findEvaIndicators = (e) => {
		this.setBcws();
		this.setBcwp();
		this.setAcwp();
		this.setCpi();
		this.setCv();
		this.setSpi();
		this.setSv();
	}

	setBcws = (e) => {
		const plannedDuration = this.state.progressList.plannedDuration;
		console.log("plannedDuration :"+plannedDuration);
		
		const totalDuration = this.state.itemList[0].durationValue;
		console.log("totalDuration :"+totalDuration);
		
		const totalCost = this.state.itemList[0].activityCostValue;
		console.log("totalCost :"+totalCost);

		const bcws = (plannedDuration/totalDuration) * totalCost;	

		this.setState({bcws: bcws});
	}

	setBcwp = () => {
		const bcws = this.state.progressList.plannedCost;
		this.setState({bcwp: bcws});	
	}

	setAcwp = () => {
		const acwp = this.state.progressList.actualCost;
		this.setState({acwp: acwp});
	}

	setCpi = () => {
		const cpi = this.state.bcwp / this.state.acwp;	
		this.setState({cpi: cpi});
	}

	setCv = () => {
		const cv = this.state.bcwp - this.state.acwp;	
		this.setState({cv: cv});
	}

	setSpi = () => {
		const spi = this.state.bcwp / this.state.acws;	
		this.setState({spi: spi});
	}

	setSv = () => {
		const sv = this.state.bcwp - this.state.acws;	;	
		this.setState({sv: sv});
	}

	handleCompletedTextChange = (e) => {
		this.setState(state => {
			return state.progressList.completed = e;
		});
	}

	handleActualCostTextChange = (e) => {
		this.setState(state => {
			return state.progressList.actualCost = e;
		});
	}

	handleActualDurationTextChange = (e) => {
		this.setState(state => {
			return state.progressList.actualDuration = e;
		});
	}

	render(){
		return (
			<div className = 'activityLayout'>  

				<Card style = {customListStyle}>
					<div>Activity Info</div>
		            <CustomListItem itemList = {this.state.itemList} 
		            handleDelete = {this.handleDelete}
		            handleOnChange = {this.handleOnChange}
		            handleDateChange = {this.handleDateChange}
		            handleSelectOnChange = {this.handleSelectOnChange}/>

			        <CustomButton label = {'Add Activity'} clickHandle={this.handleButtonClick} />
		        </Card>
		        
		        <Card style = {progressPanelStyle}>
		        	<div>Check Progress</div>
		        	<div style = {{maxWidth: '600px', display: 'inline-block'}}>
			        	<div className = 'Activity-panel'>
					         <CustomDatePicker label = {'Check Progress till date'} handleDateChange = {this.handleSingleDate}/>
					         <CustomButton label = {'Process'} clickHandle={this.handleProcess} />	
					         <CustomButton label = {'Check Progress'} clickHandle={this.handleCheckProgressClick} />     
			        	</div>
		        	</div>
		        </Card>

		        <Card style = {customListStyle}>
		        	<div>Progress Info</div>
			         <div className='Activity-panel'>
			         	<CustomTextBox label = {'Planned Duration'} value = {this.state.progressList.plannedDuration}
			         	handleOnChange = {this.handleTextViewOnChange}/>
			         	<CustomTextBox label = {'% Completed'} handleOnChange = {this.handleCompletedTextChange}/>
			         	<CustomTextBox label = {'Actual Cost'} handleOnChange = {this.handleActualCostTextChange}/>
			         	<CustomTextBox label = {'Actual Duration'} handleOnChange = {this.handleActualDurationTextChange}/>
			         	<CustomTextBox label = {'Planned Cost'} value = {this.state.progressList.plannedCost} 
			         	handleOnChange = {this.handleTextViewOnChange}/>	
			         </div>
		         </Card>

		         <CustomButton style = {{maxWidth: '600px', display: 'inline-block'}} label = {'Find EVA Indicators'} clickHandle={this.findEvaIndicators} />
			        <Card style = {evaIndicatorStyle}>
			        	<div>EVA Indicators</div>
				         <div className='Activity-panel'>	

					         <CustomTextBox label = {'bcws'} 
					         value = {this.state.bcws}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'bcwp'} 
					         value = {this.state.bcwp}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'acwp'} 
					         value = {this.state.acwp}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'cpi'} 
					         value = {this.state.cpi}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'cv'} 
					         value = {this.state.cv}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'spi'} 
					         value = {this.state.spi}
					         handleOnChange = {this.handleTextViewOnChange}/>

					         <CustomTextBox label = {'sv'} 
					         value = {this.state.sv}
					         handleOnChange = {this.handleTextViewOnChange}/>

				         </div>
			         </Card>
			     <CustomButton label = {'Display Chart'} clickHandle={this.showReport} />
			     <Card style = {evaIndicatorStyle}>
			     	<div style = {{width: '300px', height: '100%',display: 'inline-block'}}>
			     		<CustomChart chartData = {this.state}/>
			     	</div>
			     </Card>
			         
		        
	      	</div>
		      
		);
	}
}

const customListStyle = {
		marginTop: '10px',
	    display: 'inline-block',
		maxWidth: '1250px',
		padding: '10px 10px 10px 10px',
		justifyContent: 'space-around'
}

const evaIndicatorStyle = {
	    display: 'inline-block',
	    maxWidth: '1250px',
		padding: '10px 10px 10px 10px',
		justifyContent: 'space-around',
		alignItems: 'center'
}
const progressPanelStyle = {
		marginTop: '10px',
	    display: 'inline-block',
		maxWidth: '1250px',
		padding: '10px 10px 10px 10px',
		justifyContent: 'space-around',
		alignItems: 'center'
}

const activityLayout = {
		marginTop: '10px',
	    display: 'inline-block',
		maxWidth: '1250px',
		padding: '10px 10px 10px 10px',
		justifyContent: 'space-around',
		alignItems: 'center'
}



export default ActivityPage;
