
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import React from 'react';
import More from './Pages/More/More';
import Details from './Pages/Details/Details';
import Contact from './Pages/Contact/Contact';
import Auth from './Pages/Auth/Auth';
import Layout from './Layout';








function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact/>} /> 
        <Route path="Details/:id" element={<Details/>} />
        <Route path="/Auth" element={<Auth/>}/>
    
        </Route>
      </Routes>
      
      
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
