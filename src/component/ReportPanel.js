import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ReportPanel extends React.Component{


	/*progressList: {
			activity: '',
			plannedDuration: 0,
			completed: '',
			actualCost: '',
			actualDuration: '',
			plannedCost: 0
		},*/
	render(){
		return (
			<Paper>
		      <Table aria-label="simple table">
		        <TableHead>
		          <TableRow>
		            <TableCell>{"ActivityName"}</TableCell>
		            <TableCell align="right">{"Planned Duration"}</TableCell>
		            <TableCell align="right">{"% Completed"}</TableCell>
		            <TableCell align="right">{"Actual Cost"}</TableCell>
		            <TableCell align="right">{"Actual Duration"}</TableCell>
		            <TableCell align="right">{"Planned Cost"}</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		        {
		        	<TableRow >
		              <TableCell align="center">{this.props.item.activity}</TableCell>
		              <TableCell align="center">{this.props.item.plannedDuration}</TableCell>
		              <TableCell align="center">{this.props.item.completed}</TableCell>
		              <TableCell align="center">{this.props.item.actualCost}</TableCell>
		              <TableCell align="center">{this.props.item.actualDuration}</TableCell>
		              <TableCell align="center">{this.props.item.plannedCost}</TableCell>
		            </TableRow>  
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