import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./components/landing/Landing";
import Presentacion from './components/presentacion/Presentacion';
import Servicios from './components/servicios/Servicios';
import Productos from './components/productos/Productos';
import Alianzas from './components/alianzas/Alianzas';
import {BrowserView, MobileView, isMobile} from 'react-device-detect'
import LandingMobile from './components/Mobile/Landing/Landing';
import Router from './components/Mobile/Router/Router';


function App() {

    if(!isMobile){
      return (
        <>
            <Landing></Landing>
            <Presentacion></Presentacion>
            <Servicios></Servicios>
            <Productos></Productos>
            <Alianzas></Alianzas>

        </>
      );
    }else{
      return(
        <>
          <Router></Router>
        </>
      )

    }

}

export default App;
