import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const CompanyFields = () => {
  const field1 = { margin: "30px", marginTop: "50px", };
  const field = { margin: "30px", marginTop: "-40px", width: 195 };
  return (
    <>
      <TextField
        style={field1}
        id="standard-basic"
        label="FirstName"
        variant="standard"
      />
      <TextField
        style={field1}
        id="standard-basic"
        label="LastName"
        variant="standard"
      />
      <br></br>
      <br></br>

      <TextField
        style={field}
        id="standard-basic"
        label="CompanyName"
        variant="standard"
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany EmailId"
        variant="standard"
      />

      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native">Country</InputLabel>
        <NativeSelect id="demo-customized-select-native">
          <option aria-label="choose country" value="" />
          <option value={10}>india</option>
          <option value={20}>uk</option>
          <option value={30}>pakishtan</option>
        </NativeSelect>
      </FormControl>

      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native">
          --Select State--
        </InputLabel>
        <NativeSelect id="demo-customized-select-native">
          <option aria-label="--select state--" value="" />
          <option value={10}>gujarat</option>
          <option value={20}>mumbai</option>
          <option value={30}>rajasthan</option>
        </NativeSelect>
      </FormControl>
      <br></br>
      <br></br>

      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address"
        variant="standard"
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address2"
        variant="standard"
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany City"
        variant="standard"
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Zip"
        variant="standard"
      />

      <Button
        style={{ marginLeft: "400px", marginTop: "30px" }}
        variant="contained"
        color="secondary"
      >
        Update Company
      </Button>
      <br />
    </>
  );
};

export default CompanyFields;
