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
           if(window.scrollY>1400 && window.scrollY < 2180){
            let body = ReactDOM.findDOMNode(this.body);
            if(body!=null){
                body.style.transition = '1s';
                body.style.backgroundColor = '#3F4045';
            }
           }
           if(window.scrollY<1400 || window.scrollY > 2180 ){
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
                <div style={{height: '100vh', width:'100%', border:'2.5vw solid #E0E0E0'}} ref={div=>this.body = div}>
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
                            <Grid className="display" style={this.styles.lineGrid}>
                                <Cell medium={1} style={this.styles.lineCell}>
                                    <Typography component="span" style={this.styles.lineSpan}>
                                        <Typography component="span" style={this.styles.identifier1}></Typography>
                                    </Typography>
                                </Cell>
                                <Cell medium={10} style={this.styles.listContentCell}>
                                    <Grid className="display">
                                        <Cell medium={12}>
                                            <Typography component="span" style={this.styles.listOption1}>
                                                Lentes Oftálmicos
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Transitions 8 Generación y Fotocromaticos
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Blue Protect (Bloqueador de luces azules nocivas) 
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Crizal y Antirreflejo 
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Policarbonato Asferico
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Progresivos Digitales
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Bifocales
                                            </Typography>
                                        </Cell>
                                    </Grid>`
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Futurex
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes en Alto Indice
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes de Contacto
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes de Contacto Blandos Desechables
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes de Contacto Blandos Toricos Desechables
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes de Contacto Blandos Tradicionales
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes de Contacto Blandos cosméticos
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Gas Permeables de Media y Alta Permebealidad
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'4%'}}>
                                        <Cell medium={1}>
                                            <Typography component="span" style={this.styles.identifier}></Typography>
                                        </Cell>
                                        <Cell medium={11}>
                                            <Typography component="span" style={this.styles.listOption}>
                                                Lentes Gas Permeables Especiales
                                            </Typography>
                                        </Cell>
                                    </Grid>

                                </Cell>
                            </Grid>
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
            height:'28vw'
        },
        imagenGrid:{
            marginTop:'7%'
        },
        imagenCell:{
            position: 'absolute',
            marginLeft:'14%'
        },
        listCell:{
            height: '28vw',
            width: '37vw',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            marginLeft: '47%'
        },
        lineGrid:{
            marginLeft:'4%',
            marginTop:'4%',
            overflow: 'auto',
            height: '25vw',
            width: '32vw'
        },
        lineCell:{
            display: 'contents',
        },
        lineSpan:{
            backgroundColor:'#707070',
            height: '48em',
            width: '.2em',
            marginLeft:'1%'
        },
        identifier1:{
            height:'.8em',
            width: '.8em',
            borderRadius:'50%',
            backgroundColor:'orange',
            display: 'inline-block',
            position: 'relative',
            left: '-136%'
        },
        listOption1:{
            fontFamily: 'RockWell',
            color:'white',
            fontSize: '1.3vw'
        },
        listContentCell:{
            marginLeft: '5%'
        },
        identifier:{
            height:'.8em',
            width: '.8em',
            borderRadius:'50%',
            backgroundColor:'orange',
            display: 'inline-block',
            position: 'relative',
            left: '-96.3%'
        },
        listOption:{
            fontFamily: 'RockWell',
            color:'white',
            position: 'relative',
            right: '9%',
            fontSize: '1.3vw'
        }

    }
}   