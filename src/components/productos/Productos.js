import React, {useRef, useEffect} from "react";
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";
import productos from '../../assets/img/productos/productos.jpg';


export default class Productos extends React.Component{
    constructor(props){
        super(props);
        this.body = null;
        this.listenForScroll();
    }

    listenForScroll(){
        window.addEventListener('scroll',()=>{
           if(window.scrollY>1400){
            let body = ReactDOM.findDOMNode(this.body);
            if(body!=null){
                body.style.transition = '1s';
                body.style.backgroundColor = '#3F4045';
            }
           }else{
            let body = ReactDOM.findDOMNode(this.body);
            if(body!=null){
                body.style.transition = '1s';
                body.style.backgroundColor = 'white';
            }
           }
        })
    }

    render(){
        return (
            <React.Fragment>
                <div style={{height: '100vh', width:'100%', border:'2em solid #E0E0E0'}} ref={div=>this.body = div}>
                    <Grid className="display" style={this.styles.productosGrid}>
                        <Cell medium={4} style={this.styles.productosCell}>
                            <Typography component="span" style={this.styles.productosSpan}>
                                PRODUCTOS
                            </Typography>
                        </Cell>
                    </Grid>
                    <Grid className="display" style={this.styles.imagenGrid}>
                        <Cell medium={5} style={this.styles.imagenCell}>
                            <img src={productos} style={this.styles.image}></img>
                        </Cell>
                        <Cell medium={7} style={this.styles.listCell}>
                            
                        </Cell>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }

    styles = {
        productosGrid:{
            marginTop: '4%'
        },
        productosCell:{
            marginLeft:'5%'
        },
        productosSpan:{
            color: 'white',
            fontFamily:'RockWell',
            fontSize:'5vw',
            position:'absolute'
        },
        image:{
            height:'22em'
        },
        imagenGrid:{
            marginTop:'7%'
        },
        imagenCell:{
            position: 'absolute',
            marginLeft:'14%'
        },
        listCell:{
            height: '22em',
            width: '30em',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            marginLeft: '47%'
        }

    }
}   