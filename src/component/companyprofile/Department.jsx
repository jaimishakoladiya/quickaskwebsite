import React from 'react'
import Button from '@material-ui/core/Button';
import AddDepartment from './addbuttons/AddDepartment';

const Department=()=>
{
    return(
        <>
        <div className="Department_card1">
          <h5 className="Department_title-font">Department</h5>
          
         <table>
           <tr>
           <th>Name</th>
           <th>Cost center</th>
           <th>Action</th>
           </tr>

           <tr>
             <td>kuku</td>
             <td>bhaw</td>
             <td>minu</td>
           </tr>

       
         </table>
          
        <br></br> <AddDepartment/><br></br>
        
        </div>
        </>
    );
}

export default Department