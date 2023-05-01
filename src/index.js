
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

import Magazine from "./pages/Magazine";
import Ressource from './pages/guide/Ressource';
import Table from './pages/guide/Table';




const root = ReactDOM.createRoot(document.getElementById("root"));


const rowHeaders = ["Mes compétences techniques", "Mes Soft Skills", "Ma situation personnelle","Mon réseau professionnel"];
const columnHeaders = ["Mes Capacités", "Mes lacunes", "Actions à entreprendre"];
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
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/description" element={<Description/>}/>
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/table" element={<Table rowHeaders={rowHeaders} columnHeaders={columnHeaders} numHeaders={2}/>} />
      <Route path="/ressources" element={<Ressource /> }/>
    </Routes>
    <Footer/>
  </Router>


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
