import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import img2 from "../../component/images/undraw_profile_pic_ic5t (2).svg";
import InterviewShareGrid from "./InterviewShareGrid";
import CompanyFooter from "../companyprofile/CompanyFooter";
import "./Interviews.css";
import { useParams } from "react-router";
import axios from "axios";
import RatingBox from "../videoupload/RatingBox";

function ViewRecord(props) {
  useEffect(() => {
    sharegrid();
  }, []);
  const rowcss = {
    fontSize: "19px",
    fontWeight: "bold",
  };
  const printfun = () => {
    window.print();
  };
  const rowcss2 = {
    fontSize: "19px",
    fontWeight: "bold",
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const { managerid, role, id } = useParams();
  console.log(managerid);
  const [question, setquestion] = useState([]);
  console.log(managerid);
  console.log(role);
  async function sharegrid() {
    var res = await axios({
      method: "get",
      url: `http://localhost:2002/multiple-candidate/${managerid}/${role}/false/multiple`,
      headers: {
        Authorization: token,
      },
    });
    console.log(res.data);
    // console.log(res.data.data.questionGrid)
    res.data.data.questionGrid &&
      res.data.data.questionGrid.map((arr, index) => {
        // return res.data;
      });
    setquestion(res.data.data.questionGrid);
  }

  return (
    <>
      <div className="view-data">
        <div className="view-header1">
          <h5>{role}</h5>
          <InterviewShareGrid managerid={managerid} candidateid={id} />
          <Button
            variant="contained"
            onClick={printfun}
            color="secondary"
            style={{ marginLeft: "20px", fontSize: "12pt", height: "50px" }}
          >
            Print
          </Button>
        </div>
      </div>
      <div className="view-header2">
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead style={rowcss}>
              <TableCell></TableCell>
              <TableCell style={rowcss} id="view_css">
                Questions
              </TableCell>

              <TableCell style={rowcss}>Name</TableCell>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
      {/* <div className="view-main"> */}
      <div className="view-header3">
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead style={rowcss2}>
              <TableRow className="view-pic">
                <TableCell style={rowcss}>
                  <img
                    alt="quickAsk"
                    style={{
                      height: "90px",
                      width: "90px",
                      marginLeft: "800px",
                      marginTop: "-30px",
                    }}
                    src={img2}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {/* ///////////// */}
        <div className="main_view">
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead style={rowcss}>
                {question &&
                  question.map((arr, index) => {
                    let rate;
                    let path;
                    let name;
                    let candidateid;
                    return (
                      <TableRow id="view-header4">
                        <TableCell style={rowcss}>{arr.question}</TableCell>

                        {arr.candidate.map((item) => {
                          name = item.name;
                          candidateid = item.id;
                          if (id === item.id) {
                            rate = item.rating;
                            path = item.path ? item.path : undefined;
                          }
                          {/* return name; */}
                        })}
                        <TableCell style={rowcss} align="center">
                          <RatingBox
                            name={name}
                            rate={rate}
                            candidateid={candidateid}
                            index={index}
                            path={path}
                            question={arr.question}
                            data={path ? true : false}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* </div> */}
      <div style={{ marginBottom: "600px" }}></div>
      <CompanyFooter />
    </>
  );
}

export default ViewRecord;
