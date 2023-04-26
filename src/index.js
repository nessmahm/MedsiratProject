
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp'
import SignIn from './pages/Sign/SignIn'
import reportWebVitals from './reportWebVitals';
import Header from './components/Elements/Header'
import Footer from './components/Elements/Footer'
import Profile from './pages/Profile/Profile'
import Description from './pages/DescriptionProjet/Description'

import './styles/style.css'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import AddArticle from './pages/Article/AddArticle';
import EditArticle from './pages/Article/EditArticle';
import './styles/modal.scss';
import './Modals/FieldModal'

import Magazine from "./pages/Magazine";
import SignUpEntrep from './pages/Sign/SignUpEntrep';
import SignUpCoach from './pages/Sign/SignUpCoach';
import FieldModal from './Modals/FieldModal';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/addarticle" element={<AddArticle/>} /> 
      <Route path="/editarticle" element={<EditArticle/>} /> 
      <Route path="/signup" element = {<SignUp/>} />
      <Route path="/signin" element = {<SignIn/>} />
      <Route path="/signupcoach" element = {<SignUpCoach/>} />
      <Route path="/signupentrepreneur" element = {<SignUpEntrep/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/modal" element={<FieldModal/>}/>
      <Route path="/description" element={<Description/>}/>
      <Route path="/magazine" element={<Magazine />} />
    </Routes>
    <Footer/>
  </Router>


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
