import React  ,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import ViewDelete from './ViewDelete';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getadminview } from '../../redux/actions/interview/InterviewAction';
const useStyles = makeStyles({
 row: {
  },
});
function createData(name, jobtitle, status,date,score,action) {
  return {
    name,
    jobtitle,
    status,
    date,
    score,
  action,
  };
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <div >
    <React.Fragment>
      <TableRow className={classes.row}  >
        <TableCell>
             <ArrowRightIcon style={{ fontSize: "35px", color: "darkcyan",fontWeight: "900"}} />
        </TableCell>
        <TableCell   id="tablerow" component="th" scope="row">
        {row.name}
        </TableCell>
        <TableCell id="tablerow">{row.jobtitle}</TableCell>
        <TableCell id="tablerow">{row.status}</TableCell>
        <TableCell id="tablerow">{row.date}</TableCell>
        <TableCell id="tablerow">{row.score}</TableCell>
        <TableCell id="tablerow">{row.action}</TableCell>
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
function CreateData(props) {
  const [data,setdata]=useState([])
  const user = JSON.parse(localStorage.getItem('user'));
  const token=user.token;
 var rows;
const rowdata=()=>{
  rows=[];
  if (props.name===undefined||props.name===""){
  props.data.admindata.length===0?<h1 style={{textAlign:"center"}}>No Records Found</h1>: 
  props.data.admindata.map((row,index) => (
    name=`${row['candidate-data'].first_name} ${row['candidate-data'].last_name}`,
   rows.push( <Row key={index} row={createData(name,
                row['candidate-data'].role ,
  <Button variant="contained" color="primary" style={{backgroundColor:"darkcyan"}}>{row['candidate-data'].status}
  </Button>,
       newdatetime,1,<ViewDelete id={row.token} manager={row['manager-token']} role={row['candidate-data'].role} />)}/>)
  ))
return rows;
}
else{
rows=[];
  props.data.admindata.length===0?<h1 style={{textAlign:"center"}}>No Records Found</h1>: 
  props.data.admindata.map((row,index) => {
    name=`${row['candidate-data'].first_name} ${row['candidate-data'].last_name}`;
    if(props.name===row['candidate-data'].first_name)
    {
      rows.push( <Row key={index} row={createData(name,
        row['candidate-data'].role ,
<Button variant="contained" color="primary" style={{backgroundColor:"darkcyan"}}>{row['candidate-data'].status}
</Button>,
newdatetime,1,<ViewDelete id={row.token} manager={row['manager-token']} role={row['candidate-data'].role} />)}/>)
  }
})
return rows;
}
}
var name;
const newdate=new Date().toLocaleDateString();
 const newtime=new Date().toLocaleTimeString();
 const newdatetime =` ${newdate} ${newtime}`
  useEffect(() => {
    props.getadminview()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table">
      {rowdata()}
      </Table>
    </TableContainer>
  );
}
const mapStateToProps=state=>{
  return {
    data:state.interview
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    getadminview:()=>{dispatch(getadminview())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateData)

