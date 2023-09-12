import './App.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpseller from './components/SignUpseller';
import Home from './components/Home';
import Signupoption from './components/Signupoption';
import Login from './components/Login';
import Mainbuyer from './components/Mainbuyer';
import Bidcreatebybuyer from './components/Bidcreatebybuyer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="signUpSeller" element={<SignUpseller signas="Register as Seller" />} />
          <Route path="signUpOption" element={<Signupoption />} />
          <Route path="Login" element={<Login />} />
          <Route path="Mainbuyer" element={<Mainbuyer />} />
          <Route path="Bidcreatebybuyer" element={<Bidcreatebybuyer />} /> 
     </Route>

       </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
