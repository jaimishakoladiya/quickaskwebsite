import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import InterviewDataGrid from './InterviewDataGrid';

import ViewDelete from './ViewDelete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles({
 row: {
  
  },
});

function createData( date, jobtitle, department,manager,candidate,duration,action) {
 
  return {

    date,
    jobtitle,
    department,
    manager,
    candidate,
    duration,
    action,
   
  };
}

function Row(props) {
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);
 
  const classes = useStyles();
  return (
    <div >
    <React.Fragment>
      
      <TableRow className={classes.row}  >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <ArrowDropDownIcon style={{ fontSize: "35px", color: "darkcyan" }} />:
             <ArrowRightIcon style={{ fontSize: "35px", color: "darkcyan",fontWeight: "900"}} />}
          </IconButton>
        </TableCell>

        <TableCell   id="tablerow" component="th" scope="row">
        {row.date}
        </TableCell>
       
        <TableCell id="tablerow">{row.jobtitle}</TableCell>
        <TableCell id="tablerow">{row.department}</TableCell>
        <TableCell id="tablerow">{row.manager}</TableCell>
        <TableCell id="tablerow">{row.candidate}</TableCell>
        <TableCell id="tablerow">{row.duration}</TableCell>
        <TableCell id="tablerow">{row.action}</TableCell>
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                      <InterviewDataGrid/>
                    {/* <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
    </React.Fragment>
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
   
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const n=[1,2,3]
const rows = [

  createData('2021-2-3','web','android','ck',1,'3mins',<ViewDelete   />),
  createData('2021-2-3','web','android','ck',1,'3mins',<ViewDelete/>),
  n.map((item,index)=>{
     createData('2021-2-3','web','android','ck',1,'3mins',<ViewDelete/>)
  })
   ];

export default function CreateData() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.date} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}