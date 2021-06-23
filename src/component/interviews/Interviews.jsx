import axios from 'axios';
import React, {useState} from 'react';
import { getmdata } from '../../redux/actions/companyprofile/companprofileAction';
import CompanyFooter from './../companyprofile/CompanyFooter';
import AddInterview from './AddInterview';
import MainInterview from './MainInterview';
import {connect} from 'react-redux';
const Interviews = (props)=>{
const user=JSON.parse(localStorage.getItem('user'));
const token=user.token;
  const [open,setopen]=useState(false);
  const openinterviewform =async()=>{
    var res=await axios({
      method:'get',
      url:'http://localhost:2002/getManager',
      headers:{
        Authorization:token
      }
    })
    props.getmdata(res.data.data)
    setopen(true);
  }
    return(<>
           {open===false?<MainInterview openinterviewform={openinterviewform}/>:
             <AddInterview/>}
             <CompanyFooter/>
         
          </>
    );
}
const mapStateToProps=state=>{
  return{
    data:state.companyprofile
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    getmdata:(data)=>{dispatch(getmdata(data))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Interviews);


