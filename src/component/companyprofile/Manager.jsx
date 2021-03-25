
import React from 'react'
import Button from '@material-ui/core/Button';
import AddManager from './addbuttons/AddManager'

const Manager=()=> {
    return (
        <>
              <div className="Manager_card1">
        <h5 className="Manager_title-font">Manager</h5>
      
          
        
             <table>
            
               <tr>
               <th>Name</th>
               <th >Email</th>
               <th>Status</th>
               <th>Date</th>
               <th>Deleted</th>
               <th>Actions</th>
               </tr>
            
              <tr>
                <td>hey</td>
                <td>ck</td> 
                <td>hey</td> 
                <td>hey</td> 
                <td>hey</td>
                <td>hey</td>
              </tr>
               </table>
            
          
           <br></br><AddManager/><br></br>
         </div>

         
      
       
        </>
    );
}

export default Manager
