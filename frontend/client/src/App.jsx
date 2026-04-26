import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import LinkedInPage from './pages/LinkedInPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { PitchProvider } from './context/PitchContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

const Protected = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const FULL_PAGE = ['/', '/login', '/signup'];

const AppShell = () => {
  const location = useLocation();
  const isFullPage = FULL_PAGE.includes(location.pathname);

  return (
    <div className="app">
      {!isFullPage && <Navbar />}
      <main className={isFullPage ? 'main-content main-content--no-pad' : 'main-content'}>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/generator" element={<Protected><GeneratorPage /></Protected>} />
          <Route path="/linkedin"  element={<LinkedInPage />} />
          <Route path="/landing"   element={<LandingPage />} />
          <Route path="/login"     element={<LoginPage />} />
          <Route path="/signup"    element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <PitchProvider>
      <Router>
        <AppShell />
      </Router>
    </PitchProvider>
  </AuthProvider>
);

export default App;
