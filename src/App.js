

//import Registration from "./component/account/register/Registartion";
 //import Navbar from "./component/navbar/innernavbar/Navbar";

//import Login from './component/account/login/Login'
import Home from './component/home/Home'
//import Interviews from './component/interviews/Interviews'
// import Login from './component/account/login/Login'
// import Registration from './component/account/register/Registartion'
// import CompanyProfilePage from './component/companyprofile/CompanyProfilePage'
//import Navbar2 from './component/navbar/outernavbar/Navbar2'
import { BrowserRouter } from 'react-router-dom';
import HomeNavbar from './component/navbar/homenavbar/HomeNavbar'

//import InnerNavbar from './component/navbar/innernavbar/InnerNavbar'
// import Navbar from './component/navbar/homenavbar/Navbar'
//import CompanyProfilePage from './component/companyprofile/CompanyProfilePage'
//import Navbar2 from './component/navbar/outernavbar/Navbar2'
// import Interviews from './component/interviews/Interviews'
function App() {
  return (
    <>
    {/* <CompanyProfilePage/> */}/
    {/* <Home/>  */}
    {/* <Login/> */}
    {/* <Forpass/> */}
    {/* <Registration/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
  <HomeNavbar/> 
 </BrowserRouter>
    {/* <Navbar2/> */}
 {/* <Interviews/> */}
   {/* <Home/> */}
   {/* <Login/> */}
   {/* <Navbar/> */}
</>
  )
}
  


export default App;
