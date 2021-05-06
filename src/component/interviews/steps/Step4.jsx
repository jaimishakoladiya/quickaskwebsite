import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import QuestionsCard from "../../companyprofile/addbuttons/QuestionsCard";
import {
  addinterviewque,
  deleteinterviewque,
} from "../../../redux/actions/interview/InterviewAction";
import DisplayQuestions from "../../companyprofile/DisplayQuestions";
import { connect } from "react-redux";
import axios from "axios";

const Step4 = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  var departmentid;
  var jobid;
  var managerid;
  const department = props.data.managers.departmentResult;
  const job = props.data.managers.jobTitleResult;
  const manager = props.data.managers.managerdata;
  const [test, settest] = useState([])
  if(props.data.orginfo.length!=0){
  department.map((item, index) => {
    item.departments.map((val, index) => {
      if (props.data.orginfo[0].department === val.name) {
        departmentid = val.departmentId
      }
    })
  })
  job.map((item, index) => {
    item['job-title'].map((val) => {
      if (props.data.orginfo[0].jobTitle === val.title) {
        jobid = val.job_detail_id
      }
    })
  })

  manager.map((item, index) => {
    if (props.data.orginfo[0].email === item.email) {
      managerid = item.manager_token;
    }
  })
}


  const getdeptquestions = async () => {
    const res = await axios({
      method: "get",
      url: `http://localhost:2002/view-department-question/${departmentid}`,
      headers: {
        Authorization: token
      }
    })
    props.addinterviewque(res.data.data[0].questions)
    
    settest(olditem => [...olditem, ...res.data.data[0].questions])

  }
  const getjobquestions = async () => {
    const res = await axios({
      method: "get",
      url: `http://localhost:2002/view-job-question/${jobid}`,
      headers: {
        Authorization: token
      }
    })
    props.addinterviewque(res.data.data[0].questions)

    settest(olditem => [...olditem, ...res.data.data[0].questions])
    
  }
  const getmanagerquestions = async () => {
    const res = await axios({
      method: "get",
      url: `http://localhost:2002/view-manager-question/${managerid}`,
      headers: {
        Authorization: token
      }
    })
    console.log(res.data.data)
    props.addinterviewque(res.data.data)
    settest(olditem => [...olditem, ...res.data.data])
    
  }
  useEffect(() => {
    getdeptquestions()
    getjobquestions()
    getmanagerquestions()
  
  }, [])

  const addquestion = (que) => {
    settest(olditem => [...olditem, que])
  }

  const deletequestion = (id) => {

    const newarr = test.filter((item, index) => {
      return index !== id
    })
    console.log(newarr)
    settest(newarr)
  }
  return (
    <>

      <div className="step4">
        <QuestionsCard
          addquestion={addquestion}
        />
        {/* <QuestionsCard/> */}
        <br></br>
        <div>
          <TableContainer>
            <Table id=" Step4_heading" aria-label="customized table">
              <TableHead id="">
                <TableRow>
                  <TableCell id="Step4_table">Quetions</TableCell>
                  <TableCell id="Step4_table" align="center">
                    Time
                  </TableCell>
                  <TableCell id="Step4_table" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>

        <DisplayQuestions
          deletequestion={deletequestion}
          question={props.data.interviewque}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.interview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addinterviewque: (newquestion) => {
      dispatch(addinterviewque(newquestion));
    },
    deleteinterviewque: (id) => {
      dispatch(deleteinterviewque(id));
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Step4);

