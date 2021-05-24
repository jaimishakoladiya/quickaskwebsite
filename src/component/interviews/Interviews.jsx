import React, { useEffect } from 'react';
import CompanyFooter from './../companyprofile/CompanyFooter';
import AddInterview from './AddInterview';
import MainInterview from './MainInterview';

const Interviews = ()=>{
  
    return(<>
           <MainInterview/>
             {/* <AddInterview/> */}
             <CompanyFooter/>
         
          </>
    );
}
export default Interviews;


