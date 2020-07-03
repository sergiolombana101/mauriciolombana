import React from "react"
import LandingMobile from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";


export default class Router extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            component:'Landing'
        }
    }

    changeComponent = (component) => {
        //this.setState({component:component})
        console.log('change component'+component);
    }

    render(){
        switch(this.state.component){
            case 'Landing':
                return (
                    <>
                    <Navbar changeComponent={this.changeComponent}></Navbar>
                    <LandingMobile></LandingMobile>
                    </>
                )
        }
    }
    
}