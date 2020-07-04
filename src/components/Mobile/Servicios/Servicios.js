import React from 'react';
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";

export default class ServiciosMobile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{height: '100vh', width:'100%', backgroundColor: '#CEC3C2'}}>
                <Grid className="display">
                    <Cell small={7} style={{marginTop:'7%',marginLeft:'5%'}}>
                        <Typography component="span" style={this.styles.serviciosSpan}>SERVICIOS</Typography>
                    </Cell>
                </Grid>
                <div style={{height:'103vw',overflow:'auto'}}>
                <Grid className="display" style={{marginTop:'15%'}}>
                    <Cell small={12} style={{textAlign:'center'}}>
                        <Grid className="display">
                            <Cell small={12}>
                                <Typography component="span" style={this.styles.optionSpan}>Examen de Optometria Integral</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Adaptacion de Lentes de contacto</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Adaptacion de Lentes de Gafas de seguridad con Formula</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Adaptación de Gafas para Deporte con Formula</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Adaptación de Gafas de Sol con Formula</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Examenes Espaciales para Determinar Percepcion de Color y de Estereopsis</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Alianzas para Cirugia</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <Grid className="display">
                            <Cell small={12} style={{width:'64vw', marginLeft:"17%"}}>
                                <Typography component="span" style={this.styles.optionSpan}>Refractiva, Pterigios, Cataratas y Demas Procedimientos Oculares</Typography>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell small={12}>
                                <div style={this.styles.lineDiv}></div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
                </div>
            </div>
        )
    }

    styles = {
        serviciosSpan:{
            color: '#FE4A49',
            fontFamily:'RockWell',
            fontSize:'9vw'
        },
        optionSpan:{
            color:'#2E294E',
            fontFamily:'RockWell',
            fontSize:'4.5vw'
        },
        lineDiv:{
            height:'1vw',
            backgroundColor:'#1B998B',
            width:'67vw',
            marginLeft:'17%'
        }
    }
}