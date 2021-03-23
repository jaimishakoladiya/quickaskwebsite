import React from 'react';
import img1 from '../contact/admin.png'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../contact/contact.css'
import { responsiveFontSizes } from '@material-ui/core';

const Contact=()=>{
    const field={ 
        margin:"2px",
        marginTop:"20px",
    width:600,
        }
    

return (
<body className="contact-main">
<div className="contact-container">
<div className="contact-formbox">
<form>
<h4 className="contact-title">CONTACT US</h4>
<h3 className="contact-text">As A New StartUp , We Want To know Your Comments..</h3>
<TextField style={field} id="standard-basic" label="FirstName" variant="standard" />

<TextField style={field} id="standard-basic" label="LastName" variant="standard" />
<TextField style={field} id="standard-basic" label="Subject" variant="standard" />
<TextField style={field} id="standard-basic" label="Email" variant="standard" />
<TextField style={field} id="standard-textarea" label="Comment.. " multiline   rowsMax={5}/><br></br><br></br><br></br>
<Button className="contact-butn" variant="contained" color="secondary">
        Submit
      </Button><br/>
{/* <div className="contact-inputbox">
<input type="text" name="" required/>
<span>Subject</span>
</div>
<div className="contact-inputbox">
<input type="text" name="" required/>
<span>Email</span>
</div>
<div className="contact-inputbox">
<textarea name="" required></textarea>
<span>Comment..</span>
</div>

<div className="contact-inputbox">
<input type="submit" value="Submit" name=""/>
</div> */}
</form>
</div>
<div className="contact-img">
<img src={img1}/>
</div>

</div>
</body>
)
}
export default Contact