import React from 'react';
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";
import productos from '../../../assets/img/Mobile/Productos/productos.png'

export default class ProductosMobile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{height: '100vh', width:'100%', backgroundColor: '#3F4045'}}>
                <Grid className="display">
                    <Cell small={12} style={{textAlign:'center',marginTop:'10%'}}>
                        <img src={productos}></img>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12} style={{textAlign:'center'}}>
                        <Typography component="span" style={this.styles.productosSpan}>PRODUCTOS</Typography>
                    </Cell>
                </Grid>
                <div style={{height:'85vw',marginTop:'10%',overflow:'auto'}}>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Oftalmologicos</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Transitions 8 Generacion y Fotocromaticos</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Blue Protect (Bloqeuador de luces azules nocivas)</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Antireflejo y Crizal</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Policarbonato Asferico</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Progresivos Digitales</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Bifocales</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Futurex</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes en Alto Indice</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes de Contacto</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes de Contacto Blandos Desechables</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes de Contacto Blandos Toricos Desechables</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes de Contacto Blandos Tradicionales</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes de Contacto Blandos Cosmeticos</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Gas Permeables de Media y Alta Permebealidad</Typography>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="display"  style={{marginBottom:'3%'}}>
                        <Cell small={12}>
                            <div style={this.styles.optionDiv}>
                                <Typography component="span" style={this.styles.optionSpan}>Lentes Gas Permeables Espaciales</Typography>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }

    styles = {
        productosSpan:{
            fontSize:'9vw',
            color:'#DE9151',
            fontFamily:'RockWell'
        },
        optionDiv:{
            height:'auto',
            width: '55vw',
            backgroundColor: '#5B5D64',
            borderRadius:'.2em',
            marginLeft:'20%',
            padding:'2%',
            textAlign:'center',
        },
        optionSpan:{
            color:'white',
            fontFamily:'RockWell',
            fontSize:'4.5vw'
        }
    }
}