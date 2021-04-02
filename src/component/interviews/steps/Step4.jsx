import React from "react";
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
  return (
    <>
      <div className="step4">
        <QuestionsCard
          addquestion={props.addinterviewque}
          question={props.interviewque}
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
          deletequestion={props.deleteinterviewque}
          question={props.interviewque.interviewque}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    interviewque: state.interview,
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

