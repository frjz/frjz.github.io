import {Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Notfoundpage from './components/Notfoundpage';
import Register from './components/Register';
import Userfront, {
  SignupForm,
  LoginForm,
  PasswordResetForm
} from "@userfront/toolkit/react";
import LoginFF from './components/LoginFF';
import Passwordreset from './components/Passwordreset';
import Dashboard from './components/Dashboard';
import Autos from './components/Autos';
import Toyotacamry from './components/toyotacamry';
import Lexusls500 from './components/Lexusls500';
import Skodaoctavia from './components/Skodaoctavia'
import Kiastinger from './components/Kiastinger';
import Ladavesta from './components/Ladavesta';
import Havaljolion from './components/Havaljolion';
import Volkswagenpolo from './components/Volkswagenpolo';
import Geelymanjaro from './components/Geelymanjaro';
import Ladaniva from './components/Ladaniva';
import Kiario from './components/Kiario';
import Audirs6quattro from './components/Audirs6quattro';
import Mercedesbenzcls from './components/Mercedesbenzcls';
import News from './components/News';
import Page1 from './components/newspages/Page1';
import Page2 from './components/newspages/Page2';
import Page3 from './components/newspages/Page3';
import Page4 from './components/newspages/Page4';
import Page5 from './components/newspages/Page5';
import Page6 from './components/newspages/Page6';

Userfront.init("demo1234");

function App() {
  return (
    <>
    
      <Header/>
      
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
          <Route path='/login' element={<LoginFF/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/reset' element={<Passwordreset/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/autos' element={<Autos/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/autos/toyota-camry' element={<Toyotacamry/>}/>
          <Route path='/autos/lexus-ls500' element={<Lexusls500/>}/>
          <Route path='/autos/skoda-octavia' element={<Skodaoctavia/>}/>
          <Route path='/autos/kia-stinger' element={<Kiastinger/>}/>
          <Route path='/autos/lada-vesta' element={<Ladavesta/>}/>
          <Route path='/autos/haval-jolion' element={<Havaljolion/>}/>
          <Route path='/autos/volkswagen-polo' element={<Volkswagenpolo/>}/>
          <Route path='/autos/geely-manjaro' element={<Geelymanjaro/>}/>
          <Route path='/autos/lada-niva' element={<Ladaniva/>}/>
          <Route path='/autos/kia-rio' element={<Kiario/>}/>
          <Route path='/autos/audi-rs6-quattro' element={<Audirs6quattro/>}/>
          <Route path='/autos/mercedes-benz-cls' element={<Mercedesbenzcls/>}/>
          <Route path='/news/page1' element={<Page1/>}/>
          <Route path='/news/page2' element={<Page2/>}/>
          <Route path='/news/page3' element={<Page3/>}/>
          <Route path='/news/page4' element={<Page4/>}/>
          <Route path='/news/page5' element={<Page5/>}/>
          <Route path='/news/page6' element={<Page6/>}/>


          
        </Routes>


      
      <Footer/>


    </>
  );
}

export default App;
