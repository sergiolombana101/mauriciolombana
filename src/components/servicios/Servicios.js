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
                                    <Typography component="span" style={this.styles.span2}>Adaptación de Lentes de Contacto </Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span1Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas de Seguridad con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span1Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas para Deporte con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span1Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas para Deporte con Formula</Typography>
                                    </div>
                                </Cell>
                                <Cell medium={2} style={this.styles.card}>
                                    <div style={this.styles.span1Container}>
                                    <Typography component="span" style={this.styles.span}>Adaptación de Gafas para Deporte con Formula</Typography>
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
            height:'17em',
            width:'71em',
            flexWrap:'initial'
        },
        card:{
            marginLeft:'5%',
            height:'14em',
            backgroundColor:'#3A606E',
            textAlign:'center',
        },
        span:{
            color:'white',
            fontFamily: 'RockWell',
            fontSize:'2vw'
        },
        span2:{
            color:'white',
            fontFamily: 'RockWell',
            fontSize:'2vw'
        },
        span2Container:{
            width:'12em',
            marginTop:'20%'
        },
        span1Container:{
            marginTop:'20%'
        }

    }
}