import React ,{useRef, useEffect} from "react";
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import presentacion from '../../assets/img/presentacion/presentacion.jpg';
import { Typography } from "@material-ui/core";

export default class Presentacion extends React.Component{
    constructor(props){
        super(props);
        this.body = null;
        this.descSpan = null;
        this.listenForScroll();
    }

    listenForScroll(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY>290 && window.scrollY < 870){
                var elem = ReactDOM.findDOMNode(this.body);
                var span = ReactDOM.findDOMNode(this.descSpan);
                if(elem != null){
                    elem.style.transition = '1s';
                    elem.style.backgroundColor = '#093A3E';
                    span.style.transition = '1s';
                    span.style.color = 'white';
                }
            }
            if(window.scrollY<290 || window.scrollY > 870){
                var elem = ReactDOM.findDOMNode(this.body);
                var span = ReactDOM.findDOMNode(this.descSpan);
                if(elem != null){
                    elem.style.transition = '1s';
                    elem.style.backgroundColor = 'white';
                    span.style.transition = '1s';
                    span.style.color = 'black';
                }
            }
        })
        
    }

    render(){
        return(
            <React.Fragment>
                <div style={{height: '100vh', width:'100%', border:'2.5vw solid #E0E0E0'}} ref={div=>this.body = div}>
                    <Grid className="display" style={this.styles.presentacionGrid}>
                        <Cell medium={6}>
                            <div style={this.styles.presentacionDiv}>
                                <img src={presentacion} style={this.styles.presentacionImg}></img>
                            </div>
                        </Cell>
                        <Cell medium={6}>
                            <Grid className="display" style={{marginTop:'10%',marginLeft:'12%'}}>
                                <Cell medium={4}>
                                    <div style={this.styles.acercaDiv}>
                                        <Typography component="span" style={this.styles.acercaSpan}>Acerca de mi</Typography>
                                    </div>
                                </Cell>
                            </Grid>
                            <Grid className="display" style={this.styles.acercaFirstDescGrid}>
                                <Cell medium={9}>
                                    <Typography component="span" style={{fontFamily:'RockWell', fontSize: '1.3vw', display: 'block', lineHeight: '135%'}} ref={span=>this.descSpan = span}>
                                        Optometra con mas de 25 años de experiencia en practica clinica ,
                                        nuestros altos estandares de etica  nos permiten manejar su salud
                                         visual con el profesionalismo que sus ojos se merecen. 
                                    </Typography>
                                </Cell>
                            </Grid>
                            <Grid className="display" style={this.styles.acercaSecondDescGrid}>
                                <Cell medium={9} style={{height:'22vw',overflow:'auto'}}>
                                    <Typography component="span" style={{fontFamily:'RockWell', color:'grey', fontSize: '1.3vw', lineHeight:'2%', display: 'block', lineHeight: '135%'}}>
                                        Nuestra experiencia nos permiten solucionar los casos en donde
                                        los defectos de refraccion (hipermetropia,astigmatismo,miopia,
                                        presbicia) disminuyan la vision o que generen sintomas como dolor
                                        de cabeza,ojo rojo,ardor,cansancio etc,siempre buscando las
                                        alternativas que nos permita darle el mejor manejo a su problema 
                                        visual,con productos y examenes de ultima generacion,nos mantenemos 
                                        a  la vanguardia de los adelantos en el area clinica y en los examenes
                                        visuales especiales. 
                                    </Typography>
                                </Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }

    styles = {
        presentacionGrid:{
            
        },
        presentacionDiv:{
            marginLeft:'15%',
            marginTop:'12%'
        },
        presentacionImg:{
            borderTopRightRadius:'3em',
            borderBottomRightRadius:'3em',
            height: '35vw'
        },
        acercaDiv:{
            width: '9vw',
            height: '2.5vw',
            backgroundColor: '#E24E1B',
            borderRadius: '.4em'
        },
        acercaSpan:{
            position:'relative',
            color:'white',
            left:'6%',
            top:'9%',
            fontFamily: 'RockWell',
            fontSize:'1.3vw',
            display: 'block'
        },
        acercaFirstDescGrid:{
            marginTop:'5%',
            marginLeft:'12%'
        },
        acercaSecondDescGrid:{
            marginTop:'5%',
            marginLeft:'12%'
        }

    }
}