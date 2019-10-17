import React from 'react';
import { Bar } from 'react-chartjs-2';

class CustomChart extends React.Component{

	render(){
		return (
			<div style = {reportStyle}>
				<Bar
				data={data} 
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

const data = {
  labels: ['acws', 'bcws', 'bcsp'],
  datasets: [
    {
      label: 'EVA Graph',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80]
    }
  ]
};

export default CustomChart;