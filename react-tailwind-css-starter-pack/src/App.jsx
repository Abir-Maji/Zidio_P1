import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navebar from './components/Navebar';
import LoginSignupPage from './pages/LoginSignupPage';
import  Home  from './pages/Home';
import Privateroute from './components/Privateroute';



const App = () => {
  const[isLogin,setisLogin] = useState(false);
  return (
    <div className=' w-screen min-h-screen flex flex-col'>
   
    
      <Router>
      
      <Routes>
        <Route path='/' element={<LoginSignupPage setisLogin={setisLogin}/>} />
        
        <Route path='/home' element={
           <Privateroute isLogin={isLogin}>
            <Navebar />
           <Home/>
          </Privateroute>
        }/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
