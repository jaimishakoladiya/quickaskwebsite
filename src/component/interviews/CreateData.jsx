import React  ,{useEffect,useState} from 'react';
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
import Button from "@material-ui/core/Button";
import ViewDelete from './ViewDelete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios';

import CompanyFooter from '../companyprofile/CompanyFooter';
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
        {row.name}
        </TableCell>
       
        <TableCell id="tablerow">{row.jobtitle}</TableCell>
        <TableCell id="tablerow">{row.status}</TableCell>
        <TableCell id="tablerow">{row.date}</TableCell>
        <TableCell id="tablerow">{row.score}</TableCell>
        
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


function CreateData(props) {
  const [data,setdata]=useState([])
  const user = JSON.parse(localStorage.getItem('user'));
  const token=user.token;
  
const rows = [];
var name;
const newdate=new Date().toLocaleDateString();
 const newtime=new Date().toLocaleTimeString();
 const newdatetime =` ${newdate} ${newtime}`

props.data.admindata && props.data.admindata.map((item,index)=>{
    name=`${item['candidate-data'].first_name} ${item['candidate-data'].last_name}`
    rows.push(createData(name,
                        item['candidate-data'].role ,
          <Button variant="contained" color="primary" style={{backgroundColor:"darkcyan"}}>{item['candidate-data'].status}
          </Button>,
               newdatetime,1,<ViewDelete id={item.token} />))
})
  useEffect(() => {
    props.getadminview()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.date} row={row}/>
          ))}
        </TableBody>
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