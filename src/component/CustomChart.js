import React from 'react';
import { Bar } from 'react-chartjs-2';

class CustomChart extends React.Component{


	constructor(props){
		super(props);
		console.log("CustomChart props:"+props);
	}

	getChartData =()=> {
	  return ({
	  	labels: ['bcws','bcwp', 'acwp'],
		  datasets: [
		    {
		      label: 'EVA Graph',
		      backgroundColor: 'rgba(255,99,132,0.2)',
		      borderColor: 'rgba(255,99,132,1)',
		      borderWidth: 1,
		      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		      hoverBorderColor: 'rgba(255,99,132,1)',
		      data: [this.props.chartData.bcws, this.props.chartData.bcwp, this.props.chartData.acwp]
		    }
		  ]
		})
	  }

	render(){
		return (
			<div style = {reportStyle}>
				<Bar
				data={this.getChartData()} 
				 width={20}
				  height={20}
				  options={{ maintainAspectRatio: true }}/>
			</div>
		);
	}
}

const reportStyle = {
	maxWidth: '300px',
	maxHeight: '300px'
}

export default CustomChart;