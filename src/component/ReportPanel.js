import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ReportPanel extends React.Component{
	render(){
		return (
			<Paper>
		      <Table aria-label="simple table">
		        <TableHead>
		          <TableRow>
		            <TableCell>{"ActivityName"}</TableCell>
		            <TableCell align="right">{"StartDate"}</TableCell>
		            <TableCell align="right">{"EndDate"}</TableCell>
		            <TableCell align="right">{"Duration"}</TableCell>
		            <TableCell align="right">{"ActivityCost"}</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		        {
		        	this.props.itemList.map(item => (
		        		<TableRow >
			              <TableCell>{item.activityValue}</TableCell>
			              <TableCell align="right">{item.startDateValue}</TableCell>
			              <TableCell align="right">{item.endDateValue}</TableCell>
			              <TableCell align="right">{item.durationValue}</TableCell>
			              <TableCell align="right">{item.activityCostValue}</TableCell>
			            </TableRow>  
		        	))
		        }	
				</TableBody>
			      </Table>
			    </Paper>
		)
	}
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default ReportPanel;