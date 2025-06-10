import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginLayout from './Login/LoginLayout';
import SignupMain from './Login/SignupMain';
import Layout from './Layout';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/signup" element={<SignupMain />} />


      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
