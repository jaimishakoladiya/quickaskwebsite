import React from "react";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Step4 = () => {
  const Selectitem = () => {
    let items = [];
    for (let i = 0; i <= 60; i++) {
      if (i <= 9) {
        items.push(
          <option key={i} value={i}>
            0{i}
          </option>
        );
      } else {
        items.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }
    }
    return items;
  };

  return (
    <>
      <div className="step4">
        <TextField
          style={{ width: "550px" }}
          id="standard-basic"
          placeholder="New Quetions"
        />
        <NativeSelect
          id="demo-customized-select-native"
          className="Step4_Dropdown"
        >
          {Selectitem()}
        </NativeSelect>{" "}
        :
        <NativeSelect
          id="demo-customized-select-native"
          className="Step4_Dropdown1"
        >
          {Selectitem()}
        </NativeSelect>
        <div className="Add">
          {" "}
          <br></br>
          <Button variant="contained" color="secondary">
            ADD
          </Button>
        </div>
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
      </div>
    </>
  );
};

export default Step4;
