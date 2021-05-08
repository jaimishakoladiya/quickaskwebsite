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

const Step4 = (props) => {

  const department = props.manager.managers.departmentResult;
  const job = props.manager.managers.jobTitleResult;
  const manager = props.manager.managers.managerdata;
  const [finaltest,setfinaltest]=useState([])
const [test,settest]=useState([])
 
  if(props.data.orginfo.length!=0){
console.log('call')
  department.map((item, index) => {
    item.departments.map((val, index) => {
      if (props.data.orginfo[0].department === val.name) {
        test.push(...val.questions)
      }
    })
  })
  job.map((item, index) => {
    item['job-title'].map((val) => {
      if (props.data.orginfo[0].jobTitle === val.title) {
        test.push(...val.questions)

      }
    })
  })

  manager.map((item, index) => {
    if (props.data.orginfo[0].email === item.email) {
      test.push(...item.questions)

    }
  })
  
}
  
  useEffect(() => {
    props.addinterviewque(test)
  
  },[])
  

  const addquestion = (que) => {
    // settest(olditem => [...olditem, que])
    test.push(que)
    console.log(test)
    // props.addinterviewque(test)

  }

  const deletequestion = (id) => {

    const newarr = test.filter((item, index) => {
      return index !== id
    })
    console.log(newarr)
    test=newarr
    console.log(test)

    // settest(newarr)
    // props.deleteinterviewque(id)

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
          question={test}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.interview,
    manager:state.companyprofile
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

