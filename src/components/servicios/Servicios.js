import React ,{useRef, useEffect} from "react";
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";
import { wrap } from "gsap/gsap-core";

export default class Servicios extends React.Component{
    constructor(props){
        super(props);
        this.body = null;
        this.listenForScroll();
    }

    listenForScroll(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY>870){
                var body = ReactDOM.findDOMNode(this.body);
                if(body != null){
                    body.style.transition = '1s';
                    body.style.backgroundColor = '#CEC3C2';
                }
            }
            if(window.scrollY<870 || window.scrollY > 1400){
                var body = ReactDOM.findDOMNode(this.body);
                if(body != null){
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
                    <Grid className="display" style={{marginTop:'5%'}}>
                        <Cell medium={10}>
                            <div style={this.styles.serviciosDiv}>
                                <Typography component="span" style={this.styles.serviciosSpan}>
                                    SERVICIOS
                                </Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display">
                        <Cell medium={12}>
                            <Grid className="display" style={this.styles.cardsGrid}>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span1Container}>
                                    <Typography component="span" style={this.styles.span}>Examen de Optometría Integral</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span2Container}>
                                    <Typography component="div" style={this.styles.span2}>Adaptación de Lentes de Contacto Blandos esféricos, Blandos Tóricos</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span2Container}>
                                    <Typography component="span" style={this.styles.span2}>Adaptación de Lentes de Contacto Gaspermeables, y para Queratocono</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas de Seguridad con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas para Deporte con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas de Sol<br></br> con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span3}>Examenes Espaciales para Determinar Percepcion de Color y de Estereopsis</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span}>Test de Ishara y Faarnsworth y Jager</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span}>Alianzas para Cirugía Refractiva</Typography>
                                    </div>
                                </Cell>

                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span4Container}>
                                    <Typography component="span" style={this.styles.span3}>Alianzas para Cirugía de Pterigios, Cataratas y demás Procedimientos Oculares</Typography>
                                    </div>
                                </Cell>
            
                            </Grid>
                        </Cell>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }

    styles = {
        serviciosDiv:{
            width:'9%',
            marginLeft:'33%'
        },
        serviciosSpan:{
            fontFamily:'RockWell',
            color: '#FE4A49',
            fontSize:'5vw',
            letterSpacing:'.4em'
        },
        cardsGrid:{
            marginTop:'10%',
            overflowX:'auto',
            height:'75%',
            width:'94%',
            flexWrap:'initial'
        },
        card:{
            marginLeft:'5%',
            height:'88%',
            backgroundColor:'#3A606E',
        },
        span:{
            color:'white',
            fontFamily: 'RockWell',
            fontSize:'1.7vw',
            display: 'block',
            lineHeight: '145%'
        },
        span2:{
            color:'white',
            fontFamily: 'RockWell',
            fontSize:'1.7vw',
            marginLeft:'9%',
            display: 'block',
            lineHeight: '145%'
        },
        span3:{
            color:'white',
            fontFamily: 'RockWell',
            fontSize:'1.7vw',
            display: 'block',
            lineHeight: '145%'
        },
        span2Container:{
            width:'100%',
            marginTop:'12%'
        },
        span1Container:{
            marginTop:'14%',
            marginLeft: '18%'
        },
        span3Container:{
            marginTop: '40%'
        },
        span4Container:{
            marginTop: '10%',
            width: '14vw',
            marginLeft: '12%'
        }

    }
}