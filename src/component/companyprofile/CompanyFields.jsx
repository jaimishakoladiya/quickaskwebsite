import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AlertBox from "../alert/AlertBox";
const CompanyFields = (props) => {
  useEffect(() => {
    getdata();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const field1 = { margin: "30px", marginTop: "50px" };
  const field = { margin: "30px", marginTop: "-40px", width: 195 };
  const [openalert, setopenalert] = useState(true);
  const [status, setstatus] = useState(null);
  const [message, setmessage] = useState();
  const [inputvalue, setvalue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    companyemail: "",
    company_name: "",
    country: "",
    state: "",
    city: "",
    address: "",
    address2: "",
    zip: "",
  });

  const inputfieldfunction = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setvalue((preval) => {
      return { ...preval, [name]: value };
    });
  };

  async function updatecompanyprofile(data) {
    var result = await axios({
      method: "post",
      url: "http://localhost:2002/update-company",
      data: data,
      headers: {
        Authorization: token,
      },
    });
    console.log(result.data);
    setstatus(result.data.status);
    setmessage(result.data.message);
  }

  const updatecompany = () => {
    console.log(inputvalue);
    setopenalert(true);
    updatecompanyprofile(inputvalue);
  };

  async function getdata() {
    var res = await axios({
      method: "get",
      url: "http://localhost:2002/get-company-info",
      headers: {
        Authorization: token,
      },
    });
    console.log(res.data);
    console.log(res.data.data);
    setvalue(res.data.data[0].admin);
    console.log(inputvalue);
  }
  const closealert = () => {
    setopenalert(false);
  };

  const erroralert = (error) => {
    return (
      <AlertBox
        setopenalert={openalert}
        closealert={closealert}
        error={error}
      />
    );
  };

  return (
    <>
      <TextField
        style={field1}
        id="standard-basic"
        label="FirstName"
        name="firstname"
        variant="standard"
        value={inputvalue.firstname}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field1}
        id="standard-basic"
        label="LastName"
        name="lastname"
        variant="standard"
        value={inputvalue.lastname}
        onChange={inputfieldfunction}
      />

      <br></br>
      <br></br>
      {status != null ? erroralert(message) : null}
      <TextField
        style={field}
        id="standard-basic"
        label="CompanyName"
        name="company_name"
        variant="standard"
        value={inputvalue.company_name}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany EmailId"
        variant="standard"
        name="companyemail"
        value={inputvalue.companyemail}
        onChange={inputfieldfunction}
      />
      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native">
          --Select State--
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          name="state"
          onChange={inputfieldfunction}
          value={inputvalue.state}
        >
          <option selected> -- Select State -- </option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AP">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BH">Bihar</option>
          <option value="CG">Chhattisgarh</option>
          <option value="GO">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh </option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KT">Karnataka</option>
          <option value="KR">Kerala</option>
          <option value="MP">Madya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="MG">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Orissa</option>
          <option value="PJ">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SI">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telagana</option>
          <option value="MO">Missouri</option>
          <option value="TP">Tripura</option>
          <option value="UT">Uttaranchal</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="WB">West Bengal</option>
        </NativeSelect>
      </FormControl>
      <br></br>
      <br></br>

      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address"
        variant="standard"
        name="address"
        value={inputvalue.address}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address2"
        variant="standard"
        name="address2"
        value={inputvalue.address2}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany City"
        variant="standard"
        name="city"
        value={inputvalue.city}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Zip"
        variant="standard"
        name="zip"
        value={inputvalue.zip}
        onChange={inputfieldfunction}
      />

      <Button
        style={{ marginLeft: "400px", marginTop: "30px" }}
        variant="contained"
        color="secondary"
        onClick={updatecompany}
      >
        Update Company
      </Button>
      <br />
    </>
  );
};
export default CompanyFields;
