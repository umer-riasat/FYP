import './App.css';
import NavBar from './components/NavBar';
import SignUpseller from './components/SignUpseller';
import Home from './components/Home';
import Signupoption from './components/Signupoption';
//import Login from './components/Login';





function App() {
  return (
    <>
      <NavBar/> 
       <SignUpseller terms="Yes, I accept the terms and conditions."  signas = "Create acount as seller" />   
       <Home/>  
       <Signupoption/> 
      {/* <Login/> */}
    </>
  )
}

export default App;
