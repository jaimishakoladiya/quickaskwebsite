
import React from 'react'
import image1 from '../component/images/wave.png';
import image2 from '../component/images/undraw_mobile_user_7oqo (3).svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import image3 from '../component/images/undraw_profile_pic_ic5t (2).svg';
// import Loginpage from './Loginpage';
import './registarion.css';
import {Route,Switch,useHistory} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import LockIcon from '@material-ui/icons/Lock';
function Registration()
 {
 const history=useHistory();
  return (
   
  
    <div>
     {/* <Switch>
    <Route exact path="/Loginpage" component={Loginpage}/>
      
      </Switch> */}
      <img src={image1} className="registration-wave"></img>
      <div className="registration-container">
        <div className="reimg" id="img">
          <img src={image2} className="img-fluid animated" alt="images"></img>
        </div>
        <div className="reg2-container">
         <form className="registation-form"><br/>
          <img src={image3} className="face"></img><br/>
          <h2>Register...</h2>
          
          <div className="input-group">
          <div className="registation-div one focus">
            <div className="icons">
             <PersonIcon className="person" />
            </div>
            <div>
              <h5>Firstname.</h5>
              <input type="text" className="input"/>
            </div>
          </div>
          
          <div className="registation-div two focus">
            <div className="icons">
             <LockIcon className="local"/>
            </div>
            <div>
              <h5>Lastname.</h5>
              <input type="password" className="input"/>
            </div>
          </div>
          <div className="registation-div two focus">
            <div className="icons">
             <MailOutlineIcon className="local"/>
            </div>
            <div>
              <h5>Company Email.</h5>
              <input type="email" className="input"/>
            </div>
          </div> 
           
            </div>
            <div>
            <input type="submit" className="tn" value="Sign Up"/>
            </div>
           <br/>
      
         <input type="submit" className="btn"   value="Back To Signin" />
      </form>
        </div>
      </div>
    </div>
   

  )
}

export default Registration;

