import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Step1AddField from "./Step1AddField";

const Step1 = () => {
  const [FirstInputValue, SetFirstInput] = useState();
  const [SecondInputValue, SetSecondInput] = useState();
  const [Records, SetRecords] = useState([]);
  
 const FirstInputFunction = (event) => {
    SetFirstInput(event.target.value);
  };
  const SecondInputFunction = (event) => {
    SetSecondInput(event.target.value);
  };
  const AddRecords = () => {
    SetRecords((OldRecords) => {
      return [...OldRecords, `${FirstInputValue}  ${SecondInputValue}`];
    });

    SetFirstInput("");
    SetSecondInput("");
  };
 
  
  return (
      <>
    <div className="step1">
      <div className="inputfield">
        <PersonIcon
          style={{ marginBottom: "15px", marginLeft: "30px", color: "gray" }}
        />
        <TextField
          style={{ width: "160px" }}
          onChange={FirstInputFunction}
          value={FirstInputValue}
          id="standard-basic"
          placeholder="First Name"
        />
        <PersonIcon
          style={{ marginBottom: "15px", marginLeft: "30px", color: "gray" }}
        />
        <TextField
          style={{ width: "160px" }}
          onChange={SecondInputFunction}
          value={SecondInputValue}
          id="standard-basic"
          placeholder="Last Name"
        />
        <EmailIcon
          style={{ marginBottom: "15px", marginLeft: "30px", color: "gray" }}
        />
        <TextField
          style={{ width: "160px" }}
          id="standard-basic"
          placeholder="Email-Id"
        />
        <PersonIcon
          style={{ marginBottom: "15px", marginLeft: "30px", color: "gray" }}
        />
        <TextField
          style={{ width: "160px" }}
          id="standard-basic"
          placeholder="Id"
        />
        <br />
        <div className="Add">
          <Button variant="contained" onClick={AddRecords} color="secondary">
            ADD
          </Button>
        </div>
        <div>
          {Records.map((recordsValue) => {
            return (
                <Step1AddField Records={recordsValue}/>
                );
            })}
          </div>
        </div>
    </div>
    </>
  );
};
export default Step1;
