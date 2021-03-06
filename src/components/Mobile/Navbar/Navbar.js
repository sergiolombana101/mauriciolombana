import React, {useRef, useEffect}from "react"
import { Cell, Grid} from 'react-foundation';
import { Typography, ThemeProvider } from "@material-ui/core";
import ReactDOM from 'react-dom'

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.grid = null;
        this.scroll = null;
        this.selectedDiv = null;
        this.serviciosSpan = null;
        this.acercaSpan = null;
        this.productosSpan = null;
        this.alianzasSpan = null;
    }

    changeComponent = (component)=>{
        setTimeout(() => {
            let grid = ReactDOM.findDOMNode(this.grid);
            let scroll = ReactDOM.findDOMNode(this.scroll)
            let selectedDiv = ReactDOM.findDOMNode(this.selectedDiv)
            let serviciosSpan = ReactDOM.findDOMNode(this.serviciosSpan)
            let acercaSpan = ReactDOM.findDOMNode(this.acercaSpan)
            let productosSpan = ReactDOM.findDOMNode(this.productosSpan)
            let alianzasSpan = ReactDOM.findDOMNode(this.alianzasSpan)
            switch(component){
                case 'servicios':
                    if(grid!=null){
                        grid.style.transition = '1s';
                        grid.style.backgroundColor = '#CEC3C2';
                        scroll.children[0].style.transition = '1s';
                        console.log(scroll.children[0].scrollWidth)
                        scroll.children[0].scrollLeft = 75;
                        selectedDiv.style.transition = '1s';
                        selectedDiv.style.left = '19%'
                        selectedDiv.style.width = '28vw';
                        selectedDiv.style.backgroundColor = '#2E294E';
                        serviciosSpan.style.color = 'white';
                        acercaSpan.style.color = 'grey'
                        productosSpan.style.color = 'grey'
                        alianzasSpan.style.color = 'grey'
                        //scroll.scrollLeft = scroll.scrollWidth;
                    }
                    break;
                case 'acerca':
                    if(grid!=null){
                        grid.style.transition = '1s';
                        grid.style.backgroundColor = '#141A1F';
                        scroll.children[0].style.transition = '1s';
                        scroll.children[0].scrollLeft = 0;
                        selectedDiv.style.transition = '1s';
                        selectedDiv.style.left = '3%'
                        selectedDiv.style.width = '34vw';
                        selectedDiv.style.backgroundColor = '#F0F600';
                        serviciosSpan.style.color = 'grey'
                        acercaSpan.style.color = 'black'
                        productosSpan.style.color = 'grey'
                        alianzasSpan.style.color = 'grey'
                    }
                    break;
                case 'productos':
                    if(grid!=null){
                        grid.style.transition = '1s';
                        grid.style.backgroundColor = '#3F4045';
                        scroll.children[0].style.transition = '1s';
                        scroll.children[0].scrollLeft = 100;
                        selectedDiv.style.transition = '1s';
                        selectedDiv.style.left = '42.5%';
                        selectedDiv.style.width = '32vw';
                        selectedDiv.style.backgroundColor = '#30292F';
                        serviciosSpan.style.color = 'grey'
                        acercaSpan.style.color = 'grey'
                        productosSpan.style.color = '#F8B007'
                        alianzasSpan.style.color = 'grey'
                    }
                    break;
                case 'alianzas':
                    if(grid!=null){
                        grid.style.transition = '1s';
                        grid.style.backgroundColor = '#0A0DE6';
                        scroll.children[0].style.transition = '1s';
                        scroll.children[0].scrollLeft = 300;
                        selectedDiv.style.transition = '1s';
                        selectedDiv.style.left = '74%';
                        selectedDiv.style.width = '23vw';
                        selectedDiv.style.backgroundColor = '#F5D3AC';
                        serviciosSpan.style.color = 'grey'
                        acercaSpan.style.color = 'grey'
                        productosSpan.style.color = 'grey'
                        alianzasSpan.style.color = '#FF6347'
                    }
                    break;
    
            }
            this.props.changeComponent(component);
        }, 500);
    }

    render(){
        return (
            <Grid className="display">
            <div style={{backgroundColor:'#141A1F', height:'100%',width:'100%',paddingBottom:'5%'}} ref={div=>this.grid=div} >
            <Cell small={12}>
                <div ref={div=>this.scroll=div}>
                <Grid className="display" style={this.styles.optionsGrid}>
                    <div style={this.styles.selectedDiv} ref={div=>this.selectedDiv = div}></div>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.changeComponent('acerca')}} ref={span=>this.acercaSpan=span}>ACERCA DE MI</Typography>
                        </div>
                    </Cell>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.changeComponent('servicios')}} ref={span=>this.serviciosSpan=span}>SERVICIOS</Typography>
                        </div>
                    </Cell>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.changeComponent('productos')}} ref={span=>this.productosSpan=span}>PRODUCTOS</Typography>
                        </div>
                    </Cell>
                    <Cell small={4}>
                        <div style={this.styles.optionNonSelected}>
                            <Typography component="span" style={this.styles.nonSelectedSpan} onClick={()=>{this.changeComponent('alianzas')}} ref={span=>this.alianzasSpan=span}>ALIANZAS</Typography>
                        </div>  
                    </Cell>
                </Grid>
                </div>
            </Cell>
            </div>
        </Grid>
        )
    }

    styles = {
        optionsGrid:{
            marginTop:'4%',
            overflow:'auto',
            flexWrap: 'initial'
        },
        optionSelected:{
            height:'10vw',
            width:'81%',
            marginLeft:'18%',
            textAlign:'center'
        },
        optionNonSelected:{
            height:'10vw',
            width:'88%',
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
        selectedDiv:{
            backgroundColor:'#F0F600',
            height:'10vw',
            width:'34vw',
            position:'absolute',
            left:'3%'
        }
    }
}