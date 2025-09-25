// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserAgreement from './pages/UserAgreement';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/privacy-policy" element={
            <PrivacyPolicy />
          } />
          <Route path="/user-agreement" element={
            <UserAgreement />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;