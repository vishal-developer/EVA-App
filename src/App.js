import React from 'react';
import './App.css';
import CustomTextBox from './component/CustomTextBox';
import CustomButton from './component/CustomButton';
import CustomDatePicker from './component/CustomDatePicker';
import CustomListItem from './component/CustomListItem';
import HeaderPanel from './component/HeaderPanel';

import CustomList from './component/CustomList';
import ActivityPage from './pages/ActivityPage';
// list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// card
import Card from '@material-ui/core/Card';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {

	state = {
		project : '',
		currency : '',
		startDate: new Date().toString()
	}

	
	handleTextViewOnChange = (e) => {
		return this.setState( {
			project : e
		});
	}

	handleDateChange = (e) =>{
		console.log(e);
		return this.setState( {
			startDate : e.toString()
		});
	}

	handleSelectOnChange = (e) => {
		return this.setState({currency: e.target.value});
	}

	render(){
		return (
			
		      <div className='App'>

		      		
			        <HeaderPanel />
			        <Router>
			       
			        <Route exact path = '/' render = {props => (
			        	<div style = {topPanelStyle}>
		      			<Card style = {cardStyle}>
				        	<React.Fragment>
				        		<div className='App-header'>
					            <CustomTextBox label = {'Project Name'} handleOnChange = {this.handleTextViewOnChange}/>
					            <CustomList itemList = {currencyList} listLabel = {'Currency'}
					            handleSelectOnChange = {this.handleSelectOnChange} />
					            <CustomDatePicker label = {'Start Date'} handleDateChange = {this.handleDateChange}/>
					            <Link to='/activity' >
					            	<CustomButton label = {'Next'} />
					            </Link>
				        		</div>
				        	</React.Fragment>	
			        	</Card>
		        		</div>
			        )}/>
			        

		        <Route exact path = '/activity' 
		        render = {(props) => <ActivityPage {...props} projectData = {this.state}/>} />
		        
		        </Router>
		       
		        
		       </div>
		      
		);
	}
}
const currencyList = ['INR','USD'];

const cardStyle = {
	maxWidth: '400px',
	maxHeight: '400px'
}

const topPanelStyle = {
	textAlign: 'center',
	display: 'inline-block'
}

export default App;
