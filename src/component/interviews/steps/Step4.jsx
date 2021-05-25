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

  const addquestion = (que) => {
  
    props.addinterviewque(que)

  }

  const deletequestion = (id) => {

    props.deleteinterviewque(id)

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
                  <TableCell id="Step4_table">
                    Delete
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

