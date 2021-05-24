import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import {deleteorginfo, getorginfo,getmanager, addinterviewque, setdisabled} from "../../../redux/actions/interview/InterviewAction"; 
import Step1AddField from "./Step1AddField";



const useStyles = makeStyles((theme) => ({

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

const Step2 = (props) => {
  console.log(props.manager.managers.user.data)

  const [data, setdata] = useState({
    department: '',
    email: props.manager.managers.user.data.email,
    jobTitle: '',
    first_name: props.manager.managers.user.data.firstname,
    last_name: props.manager.managers.user.data.lastname
  });
  console.log(data.email);
  const managers = [ ...props.manager.managers.managerdata];
  const department = [...props.manager.managers.departmentResult];
  const job = [...props.manager.managers.jobTitleResult];
  console.log(job)
  useEffect(() => {
    getname()
  }, [data.email])

  const getname = () => {
    managers.map((item) => {
      if (item.email === data.email) {
        console.log(item.firstname)
        setdata((olditem) => {
          return {
            ...olditem,
            first_name: item.firstname,
            last_name: item.lastname
          }
        })
      }
    })
  }

  const getemails = () => {
    let useremail=props.manager.managers.user.data.email;
    let items = [];
    items.push(
      <option value={useremail}>{useremail}</option>
    );
    managers.map((item) => {
      if(item.registration_status==="REGISTERED" && item.isDeleted===false)
     { items.push(
        <option value={item.email}>{item.email}</option>
      );}

    })

    return items;

  }
  const getdepartment = () => {
    let items = [];
    department.map((item) => {
      item.departments.map((val) => {
        items.push(
          <option value={val.name}>{val.name}</option>
        );
      })

    })
    return items;
  }

  const getjob = () => {
    const items = [];
    job.map((item) => {
      item['job-title'].map((val) => {
        if (val.department === data.department) {
          console.log(val.title)
          items.push(<option value={val.title}>{val.title}</option>)
        }
      })

    })
    return items;
  }

  const inputchange = (event) => {
    const { name, value } = event.target;

    setdata((olditem) => {
      return {
        ...olditem,
        [name]: value
      }
    })
    console.log(data)

  }
  const addorginfodata=()=>{
  var test=[];

    props.getorginfo(data);
    department.map((item, index) => {
      item.departments.map((val, index) => {
        if (data.department === val.name) {
          test.push(...val.questions)
          props.addinterviewque(...val.questions)
        }
      })
    })
    job.map((item, index) => {
      item['job-title'].map((val) => {
        if (data.jobTitle === val.title) {
          if(item.questions.length!=0){
            //   console.log(item.questions)
            props.addinterviewque(...val.questions)
            }
     }
      })
    })
  
    managers.map((item, index) => {
      if (data.email === item.email) {
       if(item.questions.length!=0){
      //   console.log(item.questions)
        props.addinterviewque(...item.questions)
      }
  
      }
    })
    // console.log(test)
    console.log(props.data.interviewque)
    setdata({
      department: '',
      email: '',
      jobTitle: '',
      first_name: props.manager.managers.user.data.firstname,
      last_name: props.manager.managers.user.data.lastname
    })
    props.setdisabled(true);
  }
  const deletefunction = (id) => {
    props.deleteorginfo(id)
    props.setdisabled(false);

  }
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
                name="first_name"
                value={data.first_name}
                disabled={props.data.disabled}
              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="step2-material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="LastName"
                name="last_name"
                value={data.last_name}
                disabled={props.data.disabled}

              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <FormControl style={{ width: "200px", marginTop: "5px" }}>

                <NativeSelect
                  name='email'
                  value={data.email}
                  onChange={inputchange}
                  disabled={props.data.disabled}

                >
                  {/* <option value="none">--select--</option> */}
                  {getemails()}
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <br></br>
        <h4>Department</h4>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
            <FormControl style={{ width: "200px", marginTop: "10px" }}>

              <NativeSelect
                name='department'
                value={data.department}
                onChange={inputchange}
                disabled={props.data.disabled}
                inputProps={{ 'aria-label': 'job' }}
              >
                <option value="" disabled> --Select Department--</option>
                {getdepartment()}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">

            <FormControl style={{ width: "200px", marginTop: "10px" }}>
              <NativeSelect
                name='jobTitle'
                value={data.jobTitle}
                onChange={inputchange}
                disabled={props.data.disabled}
                inputProps={{ 'aria-label': 'job' }}
              >
                <option value="" disabled> --Select Job Title--</option>
                {getjob()}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <div className="step2-Add">
          <Button  style={{marginLeft:"30px",marginTop:"20px"}} onClick={addorginfodata}
          disabled={props.data.disabled}
          variant="contained" color="secondary">
            ADD
          </Button>
        </div>
        {
          props.data.orginfo.map((item, index) => {
            return <Step1AddField
              id={index}
              newrecords={item}
              deletefunction={deletefunction}></Step1AddField>
          })
        }
      </div>
    </>
  );
};
const mapStateToProps = (state ,ownprops)=> {
  return {
    data: state.interview,
    manager:state.companyprofile
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    getorginfo:(newdata)=>{dispatch(getorginfo(newdata))},
    deleteorginfo:(id)=>{dispatch(deleteorginfo(id))},
    getmanager:(data)=>{dispatch(getmanager(data))},
    addinterviewque:(data)=>{dispatch(addinterviewque(data))},
    setdisabled:(data)=>{dispatch(setdisabled(data))}
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step2);
