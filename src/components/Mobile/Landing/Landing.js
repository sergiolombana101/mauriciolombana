import React from "react"
import ReactDOM from 'react-dom'
import background from '../../../assets/img/Mobile/Landing/background.png';
import location from '../../../assets/img/Mobile/Landing/location.png';
import phone from '../../../assets/img/Mobile/Landing/phone.png'
import glasses from '../../../assets/img/Mobile/Landing/glasses.png';
import whatsapp from '../../../assets/img/what.png';
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";

export default class LandingMobile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{height: '100vh', width:'100%', backgroundColor: '#141A1F'}}>
                <Grid className="display">
                    <Cell small={12}>
                        <img src={background} style={this.styles.backgroundImg}></img>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={8} style={{marginLeft:'5%'}}>
                        <Typography component="span" style={this.styles.nameSpan}>MAURICIO LOMBANA</Typography>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'3%'}}>
                    <Cell small={1} style={{marginLeft:'5%'}}>
                        <img src={location}></img>
                    </Cell>
                    <Cell small={8}>
                        <Typography component="span" style={this.styles.addressSpan1}>Cl 64 #7 89, Bogotá, Colombia</Typography>
                    </Cell>
                    <Cell small={9} style={{marginLeft:'13%'}}>
                        <Typography component="span" style={this.styles.addressSpan1}>Unidad Medica Espinosa Gomez</Typography>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={3} style={{position: 'relative',left:'60%'}}>
                        <img src={glasses}></img>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={9} style={{marginLeft:'6%'}}>
                        <Typography component="span" style={this.styles.addressSpan1}>
                            Optometra de la Universidad de la Salle. Especialista en salud ocupacional y segmento anterior
                        </Typography>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={8} style={{marginLeft:'5%'}}>
                        <Typography component="span" style={this.styles.correoSpan}>
                            provision24@hotmail.com
                        </Typography>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'3%'}}>
                    <Cell small={1} style={{marginLeft:'5%'}}>
                        <img src={whatsapp} style={{height:'6vw'}}></img>
                    </Cell>
                    <Cell small={3}>
                        <Typography component="span" style={this.styles.correoSpan}>
                            3108664214
                        </Typography>
                    </Cell>
                    <Cell small={1} style={{marginLeft:'5%'}}>
                        <img src={phone} style={{height:'6vw'}}></img>
                    </Cell>
                    <Cell small={3}>
                        <Typography component="span" style={this.styles.correoSpan}>
                            2557276
                        </Typography>
                    </Cell>
                </Grid>
            </div>
        )
    }

    styles = {
        optionsGrid:{
            marginTop:'4%'
        },
        optionSelected:{
            height:'10vw',
            width:'81%',
            backgroundColor:'yellow',
            marginLeft:'18%',
            textAlign:'center'
        },
        optionNonSelected:{
            height:'10vw',
            width:'81%',
            marginLeft:'18%',
            textAlign:'center'
        },
        acercaSpan:{
            color:'black',
            fontFamily: 'RockWell',
            fontSize:'3.5vw',
            position:'relative',
            top:'10%'
        },
        nonSelectedSpan:{
            color:'grey',
            fontFamily: 'RockWell',
            fontSize:'4vw',
            position:'relative',
            top:'10%'
        },
        nameSpan:{
            color: 'white',
            fontFamily: 'RockWell',
            fontSize:'6vw'
        },
        addressSpan1:{
            color: 'grey',
            fontFamily:'RockWell',
            fontSize:'4.5vw'
        },
        backgroundImg:{
            height:'58vw',
            width:'100vw'
        },
        correoSpan:{
            color:'#23CE6B',
            fontSize:'4.5vw',
            fontFamily:'RockWell'
        }
    }

}