import React, { useState ,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AlertBox from "../alert/AlertBox";

const CompanyFields = () => {
  useEffect(()=>{
    getdata();
  },[])
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const field1 = { margin: "30px", marginTop: "50px", };
  const field = { margin: "30px", marginTop: "-40px", width: 195 };
  const [openalert, setopenalert] = useState(true);
  const[message,setmessege]=useState();
  const[status,setstatus]=useState(null);
  const[input,setinput]=useState({
    email:'',
   firstname:'',
  lastname: '',
  companyemail: '',
 company_name: '',
 country: '',
 state:'',
 city:'',
  address: '',
 address2: '',
  zip:''
  })
  
  const inputfiledfunction=(event)=>{
    const{name,value}=event.target;
    console.log(value);
    setinput((preval)=>{
      return{...preval,
        [name]:value
      }
    })
  }
  
  
 async function updatecompanyprofile(data){
   var result=await axios({
     mathod:'post',
     url:"http://localhost:2002/update-company",
     data:data,
     headers:{
       Authorization:token
     }
   })
   console.log(result.data);
   setstatus(result.data.status);
   setmessege(result.data.message);
   
 }
 const updatecompany=()=>{

   console.log(input);
   setopenalert(true);
   updatecompanyprofile(input)
 }
 async function getdata(){
  const res = await axios({
    method:'get',
    url:"http://localhost:2002/get-company-info",
    headers:{
     Authorization:token
   }
 })

 console.log(res.data);
 console.log(res.data.data);
 setinput(res.data.data[0].admin);
 console.log(input);

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
        value={input.firstname}
        onChange={inputfiledfunction}
      />
      <TextField
        style={field1}
        id="standard-basic"
        label="LastName"
        name="lastname"
        variant="standard"
        value={input.lastname}
        onChange={inputfiledfunction}
      />
     
      <br></br>
      <br></br>
      {status!=null?erroralert(message):null}
      <TextField
        style={field}
        id="standard-basic"
        label="CompanyName"
        name="company_name"
        variant="standard"
        value={input.company_name}
        onChange={inputfiledfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany EmailId"
        variant="standard"
        name="companyemail"
        value={input.companyemail}
        onChange={inputfiledfunction}
      />
   
      {/* <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native">Country</InputLabel>
        <NativeSelect id="demo-customized-select-native" name="state" value={input.state} onChange={inputfiledfunction}>
          <option aria-label="choose country" value="" />
          <option value={10}>india</option>
          <option value={20}>uk</option>
          <option value={30}>pakishtan</option>
        </NativeSelect>
      </FormControl> */}

      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native">
          --Select State--
        </InputLabel>
        <NativeSelect id="demo-customized-select-native" value={input.state} onChange={inputfiledfunction}>
         
          <option value="gujrat">gujarat</option>
          <option value="mumbai">mumbai</option>
          <option value="rajasthan">rajasthan</option>
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
        value={input.address}
        onChange={inputfiledfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address2"
        variant="standard"
        name="address2"
        value={input.address2}
        onChange={inputfiledfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany City"
        variant="standard"
        name="city"
        value={input.city}
        onChange={inputfiledfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Zip"
        variant="standard"
        name="zip"
        value={input.zip}
        onChange={inputfiledfunction}
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
