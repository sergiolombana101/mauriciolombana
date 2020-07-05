import React from "react"
import LandingMobile from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import ServiciosMobile from "../Servicios/Servicios";
import ProductosMobile from "../Productos/Productos";


export default class Router extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            component:'acerca'
        }
    }

    changeComponent = (component) => {
        this.setState({component:component})
    }

    render(){
        switch(this.state.component){
            case 'acerca':
                return (
                    <>
                    <Navbar changeComponent={this.changeComponent}></Navbar>
                    <LandingMobile></LandingMobile>
                    </>
                )
                break;
            case 'servicios':
                return (
                    <>
                    <Navbar changeComponent={this.changeComponent}></Navbar>
                    <ServiciosMobile></ServiciosMobile>
                    </>
                )
            case 'productos':
                return (
                    <>
                    <Navbar changeComponent={this.changeComponent}></Navbar>
                    <ProductosMobile></ProductosMobile>
                    </>
                )
        }
    }
    
}