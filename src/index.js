import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import Admin from './page/admin/Admin';
import Test from './page/test/Test';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/test" element={<Test></Test>} ></Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);
