import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ViewDelete from "./ViewDelete";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getadminview } from "../../redux/actions/interview/InterviewAction";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    backgroundColor: "rgb(245, 202, 92)",
    fontSize: "30px",
  },
});
function createData(name, jobtitle, status, date, score, action) {
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <TableRow className={classes.row}>
          <TableCell>
            <ArrowRightIcon
              style={{ fontSize: "35px", color: "darkcyan", fontWeight: "900" }}
            />
          </TableCell>
          <TableCell id="tablerow" component="th" scope="row">
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
function CreateData(props) {
  console.log(props.data.admindata);

  const [admindata, setadmindata] = useState([]);
  const [Search, setsearch] = useState("");
  var rows = [];
  var name;
  const classes = useStyles();
  const newdate = new Date().toLocaleDateString();
  const newtime = new Date().toLocaleTimeString();
  const newdatetime = ` ${newdate} ${newtime}`;
  // const getdata = () => {
  //   admindata.map((row, index) => {
  //     name = `${row["candidate-data"].first_name} ${row["candidate-data"].last_name}`;

  //     console.log(row["candidate-data"].first_name);
  //     rows.push(
  //       createData(
  //         name,
  //         row["candidate-data"].role,
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           style={{ backgroundColor: "darkcyan" }}
  //         >
  //           {row["candidate-data"].status}
  //         </Button>,
  //         newdatetime,
  //         row.rating,
  //         <ViewDelete
  //           id={row.token}
  //           manager={row["manager-token"]}
  //           role={row["candidate-data"].role}
  //         />
  //       )
  //     );
  //   });
  // };
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const getadmindata = async () => {
    await props.getadminview();
    let res = await axios({
      method: "get",
      url: "http://localhost:2002/manager/candidates/information/false",
      headers: {
        Authorization: token,
      },
    });
    setadmindata(res.data.data);
    // getdata()
  };
  useEffect(() => {
    
    getadmindata();
  }, []);
  return (
    <>
      {/* <div className="detail-data" > */}
      <div className="detail-header1">
        <h5>ALLCANDIDATES</h5>
        <div className="detail-input">
          <h6>Search</h6>
          <TextField
            type="text"
            style={{ margin: "20px" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search By Name"
            name="name"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="detail-header2">
        <div className="interview_card1">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className={classes.row}>
                  <TableCell>
                    <h2>Name</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>JobTitle</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>Status</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>Date</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>Score</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>Action</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admindata.length === 0 ? (
                  <h1>No Records Found</h1>
                ) : (
                  admindata
                    .filter((row) => {
                      if (Search === "") {
                        return row;
                      } else if (
                        `${row["candidate-data"].first_name} ${row["candidate-data"].last_name}`
                          .toLowerCase()
                          .includes(Search.toLowerCase())
                      ) {
                        return row;
                      }
                    })
                    .map(
                      (row) => (
                        (name = `${row["candidate-data"].first_name} ${row["candidate-data"].last_name}`),
                        (
                          <TableRow key={name} style={{ fontWeight: "30px" }}>
                            <TableCell component="th" scope="row">
                              <h3>{name}</h3>
                            </TableCell>
                            <TableCell align="center">
                              <h3>{row["candidate-data"].role}</h3>
                            </TableCell>
                            <TableCell align="center">
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ backgroundColor: "darkcyan" }}
                              >
                                {row["candidate-data"].status}
                              </Button>
                            </TableCell>
                            <TableCell align="center"><h3>{newdatetime}</h3></TableCell>
                            <TableCell align="center"><h3>{row.rating}</h3></TableCell>
                            <TableCell align="center">
                              <ViewDelete
                                id={row.token}
                                manager={row["manager-token"]}
                                role={row["candidate-data"].role}
                                ondelete={getadmindata}
                              />
                            </TableCell>
                          </TableRow>
                        )
                      )
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.interview,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getadminview: () => {
      dispatch(getadminview());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateData);
// import MaterialTable from 'material-table';
// function CreateData() {
//   const colmns=[
//     { title: 'Name', field: 'name' },
//     { title: 'Surname', field: 'surname' },
//     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//     {
//       title: 'Birth Place',
//       field: 'birthCity',
//       lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//     },
//   ]
//   const data=[
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//   ]
//   return (
//     <MaterialTable
//     style={{width:"400px"}}
//       title="Basic Search Preview"
//       columns={colmns}
//       data={data}
//       options={{
//         search: true
//       }}
//     />
//   )
// }
// export default CreateData;
