// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableRow from '@material-ui/core/TableRow';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import TextField from "@material-ui/core/TextField";
// import Paper from '@material-ui/core/Paper';
// import Button from "@material-ui/core/Button";
// import ViewDelete from './ViewDelete';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import { withStyles } from '@material-ui/core/styles';
// import { connect } from 'react-redux';
// import { getadminview } from '../../redux/actions/interview/InterviewAction';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   row: {
//     backgroundColor: "rgb(245, 202, 92)",
//     fontSize: '30px'
//   }
// });
// function createData(name, jobtitle, status, date, score, action) {

//   return {

//     name,
//     jobtitle,
//     status,
//     date,
//     score,
//     action,

//   };
// }
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);
// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useStyles();

//   return (
//     <div >
//       <React.Fragment>
//         <TableRow className={classes.row}  >
//           <TableCell>
//             <ArrowRightIcon style={{ fontSize: "35px", color: "darkcyan", fontWeight: "900" }} />
//           </TableCell>
//           <TableCell id="tablerow" component="th" scope="row">
//             {row.name}
//           </TableCell>
//           <TableCell id="tablerow">{row.jobtitle}</TableCell>
//           <TableCell id="tablerow">{row.status}</TableCell>
//           <TableCell id="tablerow">{row.date}</TableCell>
//           <TableCell id="tablerow">{row.score}</TableCell>
//           <TableCell id="tablerow">{row.action}</TableCell>

//         </TableRow>

//       </React.Fragment>
//     </div>
//   );
// }
// function CreateData(props) {
//   console.log(props.data.admindata);

//   var rows;
 
//   var rows = [];
//   var name;
//   const classes = useStyles();
//   const newdate = new Date().toLocaleDateString();
//   const newtime = new Date().toLocaleTimeString();
//   const newdatetime = ` ${newdate} ${newtime}`
//   // const getdata=()=>{
//   console.log("kj")
//   props.data.admindata.map((row, index) => {
//     name = `${row['candidate-data'].first_name} ${row['candidate-data'].last_name}`;

//     console.log(row['candidate-data'].first_name)
//     rows.push(createData(name,
//       row['candidate-data'].role,
//       <Button variant="contained" color="primary" style={{ backgroundColor: "darkcyan" }}>{row['candidate-data'].status}
//       </Button>,
//       newdatetime, 1, <ViewDelete id={row.token} manager={row['manager-token']} role={row['candidate-data'].role} />))

//   })
//   // }

//   useEffect(() => {
//     props.getadminview()
//     // getdata()
//   }, [])
//   return (<div className="detail-data" >
//     <div className="detail-header1">
//     <h5>ALLCANDIDATES</h5>
//     <div className="detail-input">
//      <h6>Search</h6> 
//       <TextField
//         type="text"
//         style={{ margin: "20px" }}
//         id="outlined-basic"
//         variant="outlined"
//         placeholder="Search By Name"
//         name="name"
//         // onChange={inputchangefunction}
//       />
     
//     </div>
//   </div>
//     <div className="detail-header2">
      
        
//       <div className="interview_card1">
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow className={classes.row}>
//             <TableCell><h2>Name</h2></TableCell>
//             <TableCell align="center" ><h2>JobTitle</h2></TableCell>
//             <TableCell align="center"><h2>Status</h2></TableCell>
//             <TableCell align="center"><h2>Date</h2></TableCell>
//             <TableCell align="center"><h2>Score</h2></TableCell>
//             <TableCell align="center"><h2>Action</h2></TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name} style={{ fontWeight: "30px" }}>
//               <TableCell component="th" scope="row">
//                 <h3>{row.name}</h3>
//               </TableCell>
//               <TableCell align="center"><h3>{row.jobtitle}</h3></TableCell>
//               <TableCell align="center">{row.status}</TableCell>
//               <TableCell align="center">{row.date}</TableCell>
//               <TableCell align="center">{row.score}</TableCell>
//               <TableCell align="center">{row.action}</TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//     </div>
//     </div>
//   );
// }
// const mapStateToProps = state => {
//   return {
//     data: state.interview
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     getadminview: () => { dispatch(getadminview()) }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CreateData)
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row:{
    backgroundColor:"rgb(245, 202, 92)",
    fontSize:'30px'  }
});

function createData(name, calories, fat, carbs, protein,kjk) {
  return { name, calories, fat, carbs, protein,kjk };
}

const rows = [
  createData('Frozenhhjghj yoghurt', 159, "jhghjjhhjbh0", 24, 4.0,"kjnk"),
  createData('Ice cream sandwich', 23755555555555, 9.0, 37, 4.3,"kjnk"),
  createData('Eclair', 262, 16.0, 24, 6.0,"kjnk"),
  createData('Cupcake', 305, 3.7, 67, 4.3,"kjnk"),
  createData('Gingerbread', 356, 16.0, 49, 3.9,"kjnk"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell><h2>Name</h2></TableCell>
            <TableCell align="center" ><h2>JobTitle</h2></TableCell>
            <TableCell align="center"><h2>Status</h2></TableCell>
            <TableCell align="center"><h2>Date</h2></TableCell>
            <TableCell align="center"><h2>Score</h2></TableCell>
            <TableCell align="center"><h2>Action</h2></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} style={{fontWeight:"30px"}}>
              <TableCell component="th" scope="row">
              <h3>{row.name}</h3>
              </TableCell>
              <TableCell align="center"><h3>{row.calories}</h3></TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.kjk}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

