import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { Cell, Grid} from 'react-foundation';
import { Typography } from "@material-ui/core";
import pavco from '../../../assets/img/Mobile/Alianzas/pavco.png'
import cardFooter from '../../../assets/img/Mobile/Alianzas/card-footer.png'

export default class AlianzasMobile extends React.Component{
    constructor(props){
        super(props);
        this.sliderDiv = null;
        setTimeout(()=>{
            let slider = ReactDOM.findDOMNode(this.sliderDiv);
            if(slider != null){
                slider.children[0].transition = '1s';
                slider.children[0].scrollLeft = 50;
            }
        },10)
    }

    render(){
        return(
            <div style={{height: '100vh', width:'100%', backgroundColor: '#0A0DE6'}}>
                <Grid className="display">
                    <Cell small={10} style={{marginTop:'10%'}}>
                        <div style={{display:'grid',marginLeft:'5%'}}>
                            <Typography component="span" style={this.styles.bigSpan}>ALIANZAS</Typography>
                            <Typography component="span" style={this.styles.smallSpan}>ALIANZAS</Typography>
                        </div>
                    </Cell>
                </Grid>
                <Grid className="display" style={{marginTop:'5%'}}>
                    <Cell small={12}>
                        <div  ref={div=>this.sliderDiv = div}>
                            <Grid className="display" style={this.styles.cardSlider}>
                                <Cell small={4} style={this.styles.card}>
                                <Grid className="display">
                                        <Cell small={12}>
                                            <img src={pavco}></img>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'-13%'}}>
                                        <Cell small={12}>
                                            <img src={cardFooter}></img>
                                        </Cell>
                                    </Grid>
                                </Cell>
                                <Cell small={4} style={this.styles.cardPrincipal}>
                                    <Grid className="display">
                                        <Cell small={12}>
                                            <img src={pavco}></img>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'-13%'}}>
                                        <Cell small={12}>
                                            <img src={cardFooter}></img>
                                        </Cell>
                                    </Grid>
                                </Cell>
                                <Cell small={4} style={this.styles.card}>
                                <Grid className="display">
                                        <Cell small={12}>
                                            <img src={pavco}></img>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={{marginTop:'-13%'}}>
                                        <Cell small={12}>
                                            <img src={cardFooter}></img>
                                        </Cell>
                                    </Grid>
                                </Cell>
                            </Grid>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    styles = {
        bigSpan:{
            fontFamily: 'Verdana',
            color : '#939393',
            fontSize: '13vw',
            opacity: '.3'
        },
        smallSpan:{
            fontFamily: 'Verdana',
            color : '#DE9151',
            fontSize: '9vw',
            position: 'relative',
            top: '-87%'
        },
        card:{
            height: '50vw',
            backgroundColor: 'white',
            borderRadius:'.8em',
            marginTop:'10%'
        },
        cardPrincipal:{
            height: '50vw',
            backgroundColor: 'white',
            borderRadius:'.8em',
            marginTop:'0%',
            marginLeft:'15%',
            marginRight:'15%'
        },
        cardSlider:{
            height: '60vw',
            overflowY: 'scroll',
            flexWrap: 'initial'
        }
    }
}