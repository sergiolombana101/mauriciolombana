import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./components/landing/Landing";
import Presentacion from './components/presentacion/Presentacion';
import Servicios from './components/servicios/Servicios';
import Productos from './components/productos/Productos';

function App() {

 
  return (
    <>
    <Landing></Landing>
    <Presentacion></Presentacion>
    <Servicios></Servicios>
    <Productos></Productos>
    </>
  );
}

export default App;
