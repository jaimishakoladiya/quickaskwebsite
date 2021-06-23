import { BrowserRouter } from 'react-router-dom';
import HomeNavbar from './component/navbar/homenavbar/HomeNavbar'
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <>
    
      <Provider store={store}>
      <BrowserRouter>
       <HomeNavbar/> 
      </BrowserRouter>
      </Provider>

    </>
  ); 
}

export default App;
