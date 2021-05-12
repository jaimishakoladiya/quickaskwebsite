import React, {useState} from "react";
import img1 from "../contact/admin.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../contact/contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import axios from "axios";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const Contact = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
    once:true,
  });
  const user = JSON.parse(localStorage.getItem("user"))
  const token = user.token;
  const [inputvalue, setvalue] = useState({
    firstname:'',
    lastname:'',
    subject:'',
    email:'',
    comment:''

  });
async function makePostRequest(data){
  var res = await axios({
    method:"post",
    url:"http://localhost:2002/contact",
    data:data,
    headers:{
      Authorization:token
    }

  });
  console.log(res.data)
  
}
const onSubmit = (values) =>{
  makePostRequest(inputvalue);
  console.log(values);
  setvalue({
    firstname:'',
    lastname:'',
    subject:'',
    email:'',
    comment:''

  });
}


const inputfieldfunction=(event)=>{
  const {name,value}=event.target;
  setvalue((preval)=>{
    return{...preval,
    [name]:value}
  })
  console.log(inputvalue)
}

 
  const field={
margin: "2px",

    marginTop: "20px",
    width: 600,
    color:'black',
  }
  
  // const CssTextField = withStyles({
  //   root: {
  //     '& label.Mui-focused': {
  //       color: 'black',
        
  //     },
  //     '& label': {
  //       color: 'black',
  //       fontSize:20,
  //       fontFamily:'DIN',
  //      fontWeight:'600'
      
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: 'black',
  //     },   
  //     },
  //   },
  // )(TextField);

  return (
    <body className="contact-main" id="contact">
      <div className="contact-container">
        <div className="contact-formbox">
          <form>
            <h4 className="contact-title" data-aos="zoom-in">CONTACT US</h4>
            <h3 className="contact-text" data-aos="zoom-in">
              As A New StartUp , We Want To know Your Comments..
            </h3>
           
            <TextField
        style={field}
        id="standard-basic"
        label="FirstName"
        name="firstname"
        variant="standard"
        name="firstname"
         value={inputvalue.firstname}
        onChange={inputfieldfunction}
      />
      <TextField
        style={field}
        id="standard-basic"
        label="LastName"
        name="lastname"
        variant="standard"
        name="lastname"
         value={inputvalue.lastname}
       onChange={inputfieldfunction}

            />

           
            <TextField
              style={field}
              id="standard-basic"
              label="Subject"
              variant="standard"
              name="subject"
              value={inputvalue.subject}
              onChange={inputfieldfunction}
            />
            <TextField
              style={field}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              value={inputvalue.email}
              onChange={inputfieldfunction}
             
            />
            <TextField
              style={field}
              id="standard-basic"
              label="Comment.. "
              multiline
              rowsMax={5}
              name="comment"
              value={inputvalue.comment}
              onChange={inputfieldfunction}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button id="contact-butn" variant="contained" onClick={onSubmit}>
             submit
            </Button>
            <br />
        
          </form>
        </div>
        <div className="contact-img">
          <img style={{height:"750px"}} src={img1} />
        </div>
      </div>

    </body>
   

  );
};
export default Contact;
