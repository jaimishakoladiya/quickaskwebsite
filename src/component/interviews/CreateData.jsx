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
import InterviewDataGrid from './InterviewDataGrid';

import ViewDelete from './ViewDelete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles({
 row: {
  
  },
});
const data= [
    {
        "archive": null,
        "token": "1rwf8ykko5o95tt",
        "manager-token": "1rwf620ko3y2oa1",
        "candidate-data": {
            "first_name": "jemu",
            "last_name": "koladiya",
            "email": "kakadiyadhruvi1700@gmail.com",
            "id": "1",
            "status": "Assigned",
            "role": "web",
            "department": "web",
            "completedOn": 1619869127104
        },
        "rating": 0
    },
    {
        "archive": null,
        "token": "1rwf6f0ko8d2w62",
        "manager-token": "1rwf620ko3y2oa1",
        "candidate-data": {
            "first_name": "dhruvi",
            "last_name": "kakadiya",
            "email": "dhruvikakadiya144@gmail.com",
            "id": "2",
            "status": "Assigned",
            "role": "web",
            "department": "web",
            "completedOn": 1620031757402
        },
        "rating": 0
    }
]
console.log(data[1]['candidate-data'].first_name);

var it = data[1]['candidate-data'].first_name;

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
const n=[1]
const rows = [];
   n.map((item,index)=>{
    // rows.push(createData(
    //   item.first_name,data[1]['candidate-data'].first_name,data[1]['candidate-data'].department,'ck',data[1]['candidate-data'].id,'3mins'
    //   ,<ViewDelete/>))
    data.map((item,index)=>{
     
      return console.log(data);
     })
     rows.push(createData(
       [
        
        item.first_name,
        data[1]['candidate-data'].last_name,
        data[1]['candidate-data'].id
       ]
     )) 
     
   
  })
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
            <Row key={row.date} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}