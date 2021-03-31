import React from "react";
import img1 from "../contact/admin.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../contact/contact.css";
import { responsiveFontSizes } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const Contact = () => {
  const field = {
    margin: "2px",
    marginTop: "20px",
    width: 600,
 
  };
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'black',
        
      },
      '& label': {
        color: 'black',
        fontSize:20,
        fontFamily:'DIN',
       fontWeight:'600'
      
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
      },   
      },
    },
  )(TextField);

  return (
    <body className="contact-main">
      <div className="contact-container">
        <div className="contact-formbox">
          <form>
            <h4 className="contact-title">CONTACT US</h4>
            <h3 className="contact-text">
              As A New StartUp , We Want To know Your Comments..
            </h3>
           
            <CssTextField
          
              id="field2"
              style={field}
              id="custom-css-standard-input"
              label="FirstName"
              variant="standard"
        
            />

            <CssTextField
              style={field}
              id="custom-css-standard-input"
              label="LastName"
              variant="standard"
            />
            <CssTextField
              style={field}
              id="custom-css-standard-inputc"
              label="Subject"
              variant="standard"
            />
            <CssTextField
              style={field}
              id="custom-css-standard-input"
              label="Email"
              variant="standard"
            />
            <CssTextField
              style={field}
              id="custom-css-standard-textarea"
              label="Comment.. "
              multiline
              rowsMax={5}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button id="contact-butn" variant="contained">
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
