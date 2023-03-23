import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp'
import SignIn from './pages/Sign/SignIn'
import reportWebVitals from './reportWebVitals';
import Header from './components/Elements/Header'
import Footer from './components/Elements/Footer'
import './styles/style.css'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/signup" element = {<SignUp/>} />
      <Route path="/signin" element = {<SignIn/>} />
    </Routes>

    <Footer/>
  </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
