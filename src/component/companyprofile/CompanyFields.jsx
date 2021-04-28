import React, { useEffect, useState}from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";

const CompanyFields = (props) => {
  useEffect(()=>{
    getdata()
  },[])
  const user=JSON.parse(localStorage.getItem('user'));
  const token=user.token;
  const field1 = { margin: "30px", marginTop: "50px", };
  const field = { margin: "30px", marginTop: "-40px", width: 195 };
  const[value,setvalue] = useState({
    email:'',
    firstname:'',
    lastname:'',
    companyemail:'',
    company_name:'',
    country:'',
    state:'',
    city:'',
    address:'',
    address2:'', 
    zip:''
  });
// const [updateval,setupdateval]=useState([]);

  // const inputfieldfunction=(event)=>{
  //   const {name,value}=event.target;
  //   console.log(name + value)
  //   setinputvalue((preval)=>{
  //     return{
  //       [name]:value,
  //     };
  //   })
    // console.log(inputvalue)
// }

// async function updatecompanyprofile(data){
//   var result=await axios({
//     method:"post",
//     url:"http://localhost:2002/update-company",
//     data:data,
//     headers:{
//       Authorization:token
//     }
//   })
//   console.log(result.data)
  
// }
// async function getdata(){
//   var res=await axios({
//     method:"get",
//     url:"http://localhost:2002/get-company-info",
//     headers:{
//       Authorization:token
//     }
//   })
//   console.log(res.data);
//   setupdateval(res.data.admin);
//   console.log(updateval)
// }

async function getdata(){
   var res=await axios({
     method:"get",
     url:"http://localhost:2002/get-company-info",
     
     headers:{
      Authorization:token
    }
   
   })
   console.log(res.data);
  //setvalue(res.data.data);
   //console.log(value);
console.log(res.data.data);
//   console.log(value);
}



return (
    <>
      <TextField
        style={field1}
        id="standard-basic"
        label="FirstName"
        variant="standard"
        name="firstname"
         value={value.firstname}
        // onChange={inputfieldfunction}
      />
      <TextField
        style={field1}
        id="standard-basic"
        label="LastName"
        variant="standard"
        name="lastname"
        // value={inputvalue.lastname}
      //  onChange={inputfieldfunction}

      />
      <br></br>
      <br></br>

      <TextField
        style={field}
        id="standard-basic"
        label="CompanyName"
        variant="standard"
        name="company_name"
        // value={inputvalue.company_name}
        // onChange={inputfieldfunction}

      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany EmailId"
        variant="standard"
        name="companyemail"
        value={value.companyemail}
        // onChange={inputfieldfunction}
 
      />

      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native" >Country</InputLabel>
        <NativeSelect id="demo-customized-select-native">
          <option aria-label="choose country" value=""  />
          {/* <option value={10}>india</option> */}
          {/* <option value={20}>uk</option> */}
          {/* <option value={30}>pakishtan</option> */}
        </NativeSelect>
      </FormControl>

      <FormControl style={field}>
        <InputLabel htmlFor="demo-customized-select-native" >
          --Select State--
        </InputLabel>
        <NativeSelect id="demo-customized-select-native">
          <option aria-label="--select state--" value="" />
          {/* <option value={10}>gujarat</option> */}
          {/* <option value={20}>mumbai</option> */}
          {/* <option value={30}>rajasthan</option> */}
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
        // value={inputvalue.address}
        // onChange={inputfieldfunction}

      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Address2"
        variant="standard"
        name="address2"
        // value={inputvalue.address2}
        // onChange={inputfieldfunction}

      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany City"
        variant="standard"
        name="city"
        // value={inputvalue.city}
      // onChange={inputfieldfunction}

      />
      <TextField
        style={field}
        id="standard-basic"
        label="Comapany Zip"
        variant="standard"
        name="zip"
        // value={inputvalue.zip}
      //  onChange={inputfieldfunction}

      />

      <Button
        style={{ marginLeft: "400px", marginTop: "30px" }}
        variant="contained"
        color="secondary"
        // onClick={updatecompany}
      >
        Update Company
      </Button>
      <br />
    </>
  );
};

export default CompanyFields;
