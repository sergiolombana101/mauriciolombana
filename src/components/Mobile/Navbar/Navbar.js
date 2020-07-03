import React from "react"
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Grid className="display" style={{backgroundColor:'#141A1F',paddingBottom:'5%'}}>
            <Cell small={12}>
                <Grid className="display" style={this.styles.optionsGrid}>
                    <Cell small={4}>
                        <div style={this.styles.optionSelected}>
                            <Typography component="span" style={this.styles.acercaSpan} onClick={()=>{this.props.changeComponent('acerca')}}>ACERCA DE MI</Typography>
                        </div>
                    </Cell>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.props.changeComponent('servicios')}}>SERVICIOS</Typography>
                        </div>
                    </Cell>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.props.changeComponent('productos')}}>PRODUCTOS</Typography>
                        </div>
                    </Cell>
                </Grid>
            </Cell>
        </Grid>
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
        }
    }
}