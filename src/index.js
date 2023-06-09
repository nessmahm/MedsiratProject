import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp';
import SignIn from './pages/Sign/SignIn';
import reportWebVitals from './reportWebVitals';
import Header from './components/Elements/Header';
import Footer from './components/Elements/Footer';
import Profile from './pages/Profile/Profile';
import Description from './pages/DescriptionProjet/Description';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddArticle from './pages/Article/AddArticle';
import EditArticle from './pages/Article/EditArticle';
import Magazine from "./pages/Magazine/Magazine";
import Ressource from './pages/Guide/Ressource';
import Table from "./pages/Guide/Table";
import Article from "./pages/Magazine/Article";
import Guide from './pages/Guide/Guide';
import GettingStarted from './pages/Guide/GettingStarted';
import GuideIntro from './pages/Guide/GuideIntro';
import Step1 from './pages/Guide/Step1/Step1';
import Step2Form from './pages/Guide/Step2/Step2';
import Step3 from './pages/Guide/Step3/Step3';
import BMCView from './pages/Guide/Step3/BMCView';
import Step4 from './pages/Guide/Step4/Step4';


const root = ReactDOM.createRoot(document.getElementById("root"));

const rowHeaders = ["Mes compétences techniques", "Mes Soft Skills", "Ma situation personnelle", "Mon réseau professionnel"];
const columnHeaders = ["Mes Capacités", "Mes lacunes", "Actions à entreprendre"];

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/editarticle" element={<EditArticle />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/description" element={<Description />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/table" element={<Table rowHeaders={rowHeaders} columnHeaders={columnHeaders} numHeaders={2} />} />
        <Route path="/ressources" element={<Ressource />} />
        <Route path="/article" element={<Article/>}/>
        <Route path="/guide" element={<Guide/>} />
        <Route path="/gettingstarted" element={<GettingStarted/>}/>
        <Route path="/guideIntro" element={<GuideIntro/>}/>
        <Route path="/step1" element={<Step1/>}/>
        <Route path="/step2" element={<Step2Form/>}/>
        <Route path="/step3" element={<Step3/>}/>
        <Route path="/step4" element={<Step4/>}/>
        <Route path='/bmc-view' element={<BMCView/>}/> 
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
