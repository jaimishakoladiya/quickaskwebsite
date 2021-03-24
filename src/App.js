

//import Registration from "./component/account/register/Registartion";
 //import Navbar from "./component/navbar/innernavbar/Navbar";

//import Login from './component/account/login/Login'
// import Home from './component/home/Home'
// import Interviews from './component/interviews/Interviews'
// import Login from './component/account/login/Login'
// import Registration from './component/account/register/Registartion'
// import CompanyProfilePage from './component/companyprofile/CompanyProfilePage'
//import Navbar2 from './component/navbar/outernavbar/Navbar2'
import { BrowserRouter } from 'react-router-dom';
import Outernavbar from './component/navbar/outernavbar/OuterNavbar'
import CompanyProfilePage from './component/companyprofile/CompanyProfilePage'
import Navbar2 from './component/navbar/outernavbar/Navbar2'
// import Interviews from './component/interviews/Interviews'
function App() {
  return (
    <>
    {/* <CompanyProfilePage/> */}
    {/* <Home/>  */}
    {/* <Login/> */}
    {/* <Forpass/> */}
    {/* <Registration/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
 <Outernavbar/>
 </BrowserRouter>
    {/* <Navbar2/> */}
 {/* <Interviews/> */}
   {/* <Home/> */}
   {/* <Login/> */}
</>
  )
}
  


export default App;
