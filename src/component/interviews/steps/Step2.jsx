import React ,{useState}from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

const Step2 = (props) => {
  const classes = useStyles();
  console.log(props.data.manager.user);
  const[data,setdata]=({
    department:'',
    job:'',
    email:'',
    firstname:props.data.manager.user.firstname,
    lastname:props.data.manager.user.lastname
  })
   const managers=[props.data.manager.user.data,...props.data.manager.managerdata];
   console.log(managers);
  const department=[...props.data.manager.departmentResult];
  console.log(department);
  const job=[...props.data.manager.jobTitleResult];
  console.log(job);
  // console.log(props.data.manager.user.data.email);
  // const[data,setdata]=useState(props.data);

  // setdata(props.data.manager.user.data);
  // console.log(data);


  return (
    <>
      <div className="step2">
        <h4>MANAGER</h4>
        <div className="step2-mt-3">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="FirstName"
              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="LastName"
                name="lastname"
                // value={data.lastname}

              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <TextField
              // value={props.data.manager.user.data.email}
                id="standard-select-currency-native"
                select
                style={{ width: "200px", marginTop: "5px" }}
              />
            </Grid>
          </Grid>
        </div>
        <br></br>
        <h4>Department</h4>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
            <TextField
              id="standard-select-currency-native"
              select
              label="---Select Department---"
              style={{ width: "200px", marginTop: "5px" }}
            />
          </Grid>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
            <TextField
              id="standard-select-currency-native"
              select
              label="--Select Job title--"
              style={{ width: "200px", marginTop: "5px" }}
            />
          </Grid>
        </Grid>
        <div className="step2-Add">
          <Button variant="contained" color="secondary">
            ADD
          </Button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state=>{
  return{
    data:state.interview
  }
}
export default connect(mapStateToProps) (Step2);
