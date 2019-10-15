import React from 'react';
import { Bar } from 'react-chartjs-2';

class CustomChart extends React.Component{

	render(){
		return (
			<Bar data={data} 
			 width={100}
			  height={50}
			  options={{ maintainAspectRatio: true }}/>
		);
	}
}

const data = {
	x: 100,
	y: 50
}
export default CustomChart;