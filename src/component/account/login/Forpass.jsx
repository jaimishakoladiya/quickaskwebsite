
import React from 'react'
import image1 from '../../images/wave.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import image2 from '../../images/undraw_mobile_user_7oqo (3).svg';

import image3 from '../../images/undraw_profile_pic_ic5t (2).svg';
// import Loginpage from './Loginpage';
import './forpass.css';
import {Route,Switch,useHistory} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import LockIcon from '@material-ui/icons/Lock';
function Forpass()
 {
 const history=useHistory();
  return (
   
  
    <div>
     {/* <Switch>
    <Route exact path="/forpass" component={Forpass}/>
      
      </Switch> */}
      <img src={image1} className="Wave"></img>
      <div className="container">
        <div className="img" id="img">
          <img src={image2} className="img-fluid animated" alt="images"></img>
        </div>
        <div className="login-container">
         <form><br/>
          <img src={image3} className="avatar"></img>
       
          
          <div className="input-group"><br/><br/><br/><br/><br/><br/>
          <div className="inpput-div one focus">
            <div className="i">
             <MailOutlineIcon className="per" />
            </div>
            <div>
              <h5>Email</h5>
              <input type="text" className="input"/>
            </div>
          </div>
          
         
           
            </div>
            <div>
            <input type="submit" className="tn" value="Forgot Password"/>
            </div>
           <br/>
      
         
      </form>
        </div>
      </div>
    </div>
   

  )
}

export default Forpass

