//import Registration from "./component/account/register/Registartion";
//import Navbar from "./component/navbar/innernavbar/Navbar";

//import ResetPassword from "./component/account/register/ResetPassword";
//import Intpra from "./Intpra";
//import Login from './component/account/login/Login'
//  import Home from "./component/home/Home";
//import Interviews from './component/interviews/Interviews'
//import About from "./component/team/about/About.jsx";
// import Login from './component/account/login/Login'
//  import Registration from './component/account/register/Registartion'
   //import CompanyProfilePage from "./component/companyprofile/CompanyProfilePage";
// //import Navbar2 from './component/navbar/outernavbar/Navbar2'
import { BrowserRouter } from 'react-router-dom';
import HomeNavbar from './component/navbar/homenavbar/HomeNavbar'

 // import { BrowserRouter } from 'react-router-dom';
 // import HomeNavbar from './component/navbar/homenavbar/HomeNavbar'
//import Login from './component/account/login/Login';
//import Forpass from './component/account/login/Forpass';
//import { BrowserRouter } from 'react-router-dom';
//import InnerNavbar from './component/navbar/innernavbar/InnerNavbar'
// import { BrowserRouter } from 'react-router-dom';
//import InnerNavbar from './component/navbar/innernavbar/InnerNavbar'
// import Navbar from './component/navbar/homenavbar/Navbar'
// import CompanyProfilePage from "./component/companyprofile/CompanyProfilePage";
//import Navbar2 from './component/navbar/outernavbar/Navbar2'
//import Contact from './component/team/contact/Contact';
//import InterviewDataGrid from './component/interviews/InterviewDataGrid';
//import HomeNavbar from './component/navbar/homenavbar/HomeNavbar';
// //import CompanyFooter from './component/companyprofile/CompanyFooter';
  import { Provider } from "react-redux";
 import store from "./redux/Store";
 import PractiseInterviewTips from './component/videoupload/PractiseInterviewTips';

// import CompanyProfilePage from './component/companyprofile/CompanyProfilePage';

function App() {
  return (
    <>
   
    {/* <StartInterviewTips/> */}
    {/* <PractiseInterviewTips/> */}
    {/* <ResetPassword/> */}
      {/* <InterviewDataGrid/> */}
      {/* <Home/>  */}
      
      {/* <BrowserRouter>
        <InnerNavbar/>
      </BrowserRouter>  */}
      {/* <Forpass/> */}
      {/* <PractiseInterviewTips/> */}
      {/* <Forpass/> */}
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <StartInterview/> */}
      {/* <Navbar/> */}
{/* <PractiseInterview/> */}
     
     <Provider store={store}>
      <BrowserRouter>
   
      <HomeNavbar/> 
     
      </BrowserRouter>
      </Provider>
{/* <Provider store={store}>
      <BrowserRouter>
   
      <Intpra/> 
     
      </BrowserRouter>
      </Provider> */}
      
        
      {/* <Login/> */}
      {/* <Navbar2/> */}
      {/* <Interviews /> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <Contact/> */}
      {/* <ViewRecord/> */}
      {/* <About/> */}
    
      {/* <QuestionsCard/> */}
      {/* <Provider store={store}> */}
      {/* <CompanyProfilePage/> */}
           {/* <Interviews /> */}
           {/* <BrowserRouter>
             <HomeNavbar/> 
           </BrowserRouter> 
          </Provider> */}
    </>
  );
}

export default App;
