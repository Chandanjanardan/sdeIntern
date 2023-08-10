
import './App.css';
import { Route, Routes, } from 'react-router-dom';


import Admin from './component/Admin';
// import Dashboard from './component/Dashboard';
import Home from './component/Home';
import Middleware from './component/Middleware';


function App() {

 
  

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/dashboard" element={<Middleware/>}/>
    </Routes>
   
   </>
  );
}

export default App;
