import './App.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpseller from './components/SignUpseller';
import Home from './components/Home';
import Signupoption from './components/Signupoption';
import Login from './components/Login';
import Mainbuyer from './components/Mainbuyer';
import Bidcreatebybuyer from './components/Bidcreatebybuyer';
import Mainseller from './components/Mainseller';
import Bidcreatebyseller from './components/Bidcreatebyseller';
import Sellerprofile from './components/Sellerprofile';
import Buyerprofile from './components/Buyerprofile';
import Viewbids from './components/Viewbids';
import Buyerprebids from './components/Buyerprebids';
import Calculatefeas from './components/Calculatefeas';
import Editbid from './components/Editbid';
import Footer from './components/Footer';
import Buyercurrentbids from './components/Buyercurrentbids';
import Sellercurrentbids from './components/Sellercurrentbids';
import Maintransporter from './components/Maintransporter';
import Transporterprofile from './components/Transporterprofile';
import Biddetails from './components/Biddetails';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="signUpSeller" element={<SignUpseller signas="Sign Up" />} />
          <Route path="signUpOption" element={<Signupoption />} />
          <Route path="Login" element={<Login />} />
          <Route path="Mainbuyer" element={<Mainbuyer />} />
          <Route path="Bidcreatebybuyer" element={<Bidcreatebybuyer />} /> 
          <Route path="Mainseller" element={<Mainseller />} />
          <Route path="Bidcreatebyseller" element={<Bidcreatebyseller />} />
          <Route path="Sellerprofile" element={ <Sellerprofile/> } />
          <Route path="Buyerprofile" element={<Buyerprofile />}/>
          <Route path="Viewbids" element={<Viewbids />}/>
          <Route path="Buyerprebids" element={<Buyerprebids />}/>
          <Route path="Editbid" element={<Editbid />}/>
          <Route path="Buyercurrentbids" element={<Buyercurrentbids />}/>
          <Route path="sellercurrentbids" element={<Sellercurrentbids />}/>
          <Route path="Maintransporter" element={<Maintransporter />}/>
          <Route path="Transporterprofile" element={<Transporterprofile />}/>
          <Route path="Biddetails" element={<Biddetails />}/>
          <Route path="Aboutus" element={<Aboutus />}/>


     </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
      
      {/* <Calculatefeas></Calculatefeas> */}

      {/* <Aboutus></Aboutus> */}
      </>
  )
}

export default App;
