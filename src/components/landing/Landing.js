import React ,{useRef, useEffect} from "react";
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import background from '../../assets/img/landing_bg.JPG';
import facebook from '../../assets/img/logos/facebook-logo.png';
import instagram from '../../assets/img/logos/instagram-logo.png';
import glasses from '../../assets/img/logos/glasses.png'
import hand from '../../assets/img/logos/hand.png'
import mail from '../../assets/img/logos/mail-logo.png';
import logo from '../../assets/img/logo.png';
import { Cell, Grid} from 'react-foundation';
import {TweenMax, Power3, TweenLite} from "gsap";
import IronImage from '../../assets/libs/IronImage';
import { requirePropFactory } from "@material-ui/core";


export default class Landing extends React.Component{
    constructor(props){
        super(props);
        this.firstName = null;
        this.lastName = null;
        this.topBar = null;
        this.rightBar = null;
        this.line = null;
        this.cover = null;
        this.glasses = null;
        this.rightCover = null;
        this.state = {
            rightBarColor : 'black',
            hasComponentChange : false
        }
        this.handleScroll();



    }

   componentDidMount(){
       //GLASSES ANIMATION
       setTimeout(()=>{ //MOVE HORIZONTALLY TO THE RIGHT
           TweenLite.to(this.glasses,1,{x:400})
       },800)
      setTimeout(()=>{ //FIRST CIRCLE -> MOVE UP AND LEFT
           TweenLite.to(this.handContainer,1,{opacity:1})
           TweenLite.to(this.handContainer,1,{y:-180})
           TweenLite.to(this.handContainer,1,{x:-210})
       },2300)
       setTimeout(()=>{
           let hand =  ReactDOM.findDOMNode(this.hand);
           if(hand != null){
                hand.style.transition = '2s';
                hand.style.transform = 'rotate(-90deg)'
           }
       },3300)
       setTimeout(()=>{
            let hand =  ReactDOM.findDOMNode(this.hand);
            if(hand != null){
                hand.style.transition = '2s';
                hand.style.transform = 'rotate(20deg)'
            }
            var cover = ReactDOM.findDOMNode(this.cover);
            if(cover != null){
                cover.style.transition = '2s';
                cover.style.opacity = '0'
            }
        },4500)
        setTimeout(()=>{
            TweenLite.to(this.handContainer,2,{x:-10})
        },5000)
        setTimeout(()=>{
            let hand =  ReactDOM.findDOMNode(this.hand);
            if(hand != null){
                hand.style.transition = '2s';
                hand.style.transform = 'rotate(90deg)'
            }
        },5800)
        setTimeout(()=>{
            let hand =  ReactDOM.findDOMNode(this.hand);
            if(hand != null){
                hand.style.transition = '2s';
                hand.style.transform = 'rotate(0deg)'
            }
            var rightCover = ReactDOM.findDOMNode(this.rightCover);
            if(rightCover != null){
                rightCover.style.transition = '2s';
                rightCover.style.opacity = '0'
            }
        },7000)
        setTimeout(()=>{
            let glasses = ReactDOM.findDOMNode(this.glasses);
            if(glasses!=null){
                glasses.style.transition = '1s';
                TweenLite.to(this.glasses,1,{x:970,y:50});
                TweenLite.to(this.glasses,2,{height:'2em'})
            }
            let hand =  ReactDOM.findDOMNode(this.hand);
            if(hand != null){
                hand.style.transition = '1s';
                hand.style.opacity = '0'
            }
        },7500)

       setTimeout(()=>{
        TweenLite.to(this.firstName,2,{ opacity:1, x: 150,})
        TweenLite.to(this.lastName,2,{opacity:1,x: -270})
        TweenLite.to(this.line,1,{opacity:1})
        setTimeout(()=>{
            TweenLite.to(this.rightBar,1,{width:'30%'})
        },1400)
       },1900)
       TweenLite.to(this.topBar,2,{y: -458.5})
       TweenLite.to(this.rightBar,3,{x:846})
   }

   getComponentName = (position) => {
        /*COMPONENT IS LANDING */
        if(position > 0 && position < 390){
            return 'landing'
        }
        /*COMPONENT IS PRESENTACION */
        else if(position>390 && position<870){
            return 'presentacion'
        }
        /*COMPONENT IS SERVICIOS */
        else if(position>870 && position <1300){
            return 'servicios'
        }
   }

   handleScroll = () => {
        window.addEventListener('scroll',()=>{
           let component = this.getComponentName(window.scrollY); //It will get which component is visible from the scroll position
           switch(component){
               case 'landing':
                    var elem = ReactDOM.findDOMNode(this.rightBar);
                    if(elem != null){
                        elem.style.transition = '2s';
                        elem.style.top = '0%';
                        if(this.state.hasComponentChange){
                            elem.style.left = '1373%';
                            elem.style.transform = 'rotate(0deg)'
                            elem.style.backgroundColor = 'black';
                            elem.style.height = '92.1vh';
                            elem.style.width = '30%'
                        }
                    }
                    break;
                case 'presentacion':
                    this.setState({hasComponentChange:true});
                    var elem = ReactDOM.findDOMNode(this.rightBar);
                    if(elem != null){
                        elem.style.transition = '2s';
                        elem.style.transform = 'rotate(90deg)'
                        elem.style.top = '150%';
                        elem.style.left = '1300%';
                        elem.style.backgroundColor = '#E24E1B'
                        elem.style.height = '92.1vh';
                        elem.style.width = '30%'
                    }
                    break;
                case 'servicios':
                    this.setState({hasComponentChange:true});
                    var elem = ReactDOM.findDOMNode(this.rightBar);
                    if(elem != null){
                        elem.style.transition = '2s';
                        elem.style.transform = 'rotate(90deg)'
                        elem.style.top = '318%';
                        elem.style.left = '965%';
                        elem.style.backgroundColor = 'black';
                        elem.style.height = '59vh';
                        elem.style.width = '7%'
                    }
           }
       })
       /*
    let presentacionScroll = false;
    let transitioning = false;
    let fromServicios = false;
    window.addEventListener('scroll',()=>{
        console.log(window.scrollY);
        if(window.scrollY>290 && window.scrollY <1000){
            if(!transitioning){
                if(fromServicios){
                    //TweenLite.to(this.rightBar,1,{y:1030});
                    //fromServicios = false;
                }else{
                    TweenLite.to(this.rightBar,1,{top:'148%'})
                    TweenLite.to(this.rightBar,1,{left:'0%'})
                }
                transitioning = true;
                TweenLite.to(this.rightBar,1,{rotation:90, transformOrigin:"left 50%"});
                setTimeout(()=>{
                    var elem = ReactDOM.findDOMNode(this.rightBar);
                    if(elem != null){
                        elem.style.backgroundColor = '#E24E1B';
                        presentacionScroll = true;
                    }
                },1000)
                setTimeout(()=>{
                    transitioning = false;
                },500)
            }
        }
        if(window.scrollY<290){
            if(!transitioning){
                transitioning = true;
                TweenLite.to(this.rightBar,2,{top:'0%'})
                TweenLite.to(this.rightBar,1,{rotate:0})
                if(fromServicios){
                    //TweenLite.to(this.rightBar,1,{x:846})
                   // fromServicios = false;
                }
                setTimeout(()=>{
                    var elem = ReactDOM.findDOMNode(this.rightBar);
                    if(elem != null){
                        elem.style.backgroundColor = 'black';
                        elem.style.width = '45%';
                        elem.style.height = '92.1vh'; 
                    }
                    transitioning = false;
                },1000)
           }
        }
        if(window.scrollY>1000){
            fromServicios = true;
            if(!transitioning){
            transitioning = true;
            TweenLite.to(this.rightBar,1,{top:"344%"});
            TweenLite.to(this.rightBar,1,{left:'-417%'})
            TweenLite.to(this.rightBar,1,{width:"3%"});
            //TweenLite.to(this.rightBar,1,{width:'5%'})
            var elem = ReactDOM.findDOMNode(this.rightBar);
            if(elem != null){
                    elem.style.height = '55vh';
                    elem.style.backgroundColor = 'black';
            }
            setTimeout(()=>{
                transitioning = false;
            },500)
            }
            
        }
    });*/
  }

        
    render(){

        return (
            <React.Fragment>
                <div style={{height: '100vh', width:'100%', border:'2em solid #E0E0E0'}}>
                    <img src={facebook} style={this.styles.facebookLogo}></img>
                    <img src={instagram} style={this.styles.instagramLogo}></img>
                    <img src={mail} style={this.styles.mailLogo}></img>
                    <IronImage placeholder={background} src={background} style={this.styles.backgroundImg}></IronImage>
                    <Typography component="div" style={{height:'92vh', width: '101%', backgroundColor: 'rgba(192,192,192,0.7)', position: 'relative'}}>
                        <Grid className="display">
                            <Cell medium={8}>
                                <Typography component="div" style={this.styles.blackCover} ref={div=>this.blackCover = div}>
                                    <Grid className="display" style={this.styles.horizontalTopBarContainer}>
                                        <Cell medium={12}>
                                            <Typography component="div" style={this.styles.horizontalTopBar} ref={div=>this.topBar = div}></Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={this.styles.verticalRightBarContainer} >
                                        <Cell medium={12}>
                                            <Typography component="div" style={this.styles.verticalRightTopBar}></Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={this.styles.verticalRightBarContainer} >
                                        <Cell medium={12}>
                                            <Typography component="div" style={this.styles.verticalRightTopBar} ref={div=>this.rightBar = div}></Typography>
                                        </Cell>
                                    </Grid>
                                    <Grid className="display" style={this.styles.nameContainer}>
                                        <Cell medium={6} style={this.styles.firstNameContainer}>
                                            <Typography component="span" style={this.styles.firstNameSpan} ref={span=>this.firstName = span}>
                                                Mauricio
                                            </Typography>
                                        </Cell>
                                    </Grid>

                                    <Grid className="display" style={this.styles.lineContainer}>
                                        <Cell medium={4} style={this.styles.LineContainer}>
                                            <Typography component="span" style={this.styles.lineSpan} ref={span=>this.line = span}>
                                            </Typography>
                                        </Cell>
                                    </Grid>

                                    <Grid className="display" style={this.styles.lastNameWrap}>
                                        <Cell medium={6} style={this.styles.lastNameContainer}>
                                            <Typography component="span" style={this.styles.lastNameSpan} ref={span=>this.lastName = span}>
                                                Lombana
                                            </Typography>
                                        </Cell>
                                    </Grid>

                                    <Grid className="display" style={this.styles.credentialsContainer}>
                                        <Cell medium={9} style={this.styles.credentialsCell}>
                                            <Typography component="span" style={this.styles.credentialsSpan}>
                                                Optometra de la Universidad de la Salle<br></br>
                                                Especialista en salud ocupacional y segmento anterior
                                                Miembro del colegio Federacion Colombiana de Optometras y del concejo
                                                tecnico nacional profesional de optometria.
                                            </Typography>
                                        </Cell>
                                    </Grid>

                                </Typography>
                            </Cell> 
                            <Cell medium={4}>
                                <Grid className="display" style={this.styles.rightSideTopBarContainer}>
                                    <Cell medium={12}>
                                        <Typography component="div" style={this.styles.rightSideTopBar}></Typography>
                                    </Cell>
                                </Grid>
              
                                <Grid className="display" style={this.styles.rightSideBottomBarContainer}>
                                    <Cell medium={12}>
                                        <Typography component="div" style={this.styles.rightSideBottomBar}></Typography>
                                    </Cell>
                                </Grid>
                                <Grid className="display" style={this.styles.rightSideRightBarContainer}>
                                    <Cell medium={12}>
                                        <Typography component="div" style={this.styles.rightSideRightBar}>
                                            <Grid className="display" style={this.styles.rightSideLinesContainer}>
                                                <Cell medium={10}>
                                                    <Typography component="span" style={this.styles.line1}></Typography>
                                                    <Typography component="span" style={this.styles.line2}></Typography>
                                                    <Typography component="span" style={this.styles.line3}></Typography>
                                                </Cell>
                                            </Grid>
                                        </Typography>
                                    </Cell>
                                </Grid>
                            </Cell>
                        </Grid>
                        <Grid className="display">
                            <Cell medium={8}>
                                <Typography component="div" style={this.styles.contactDiv}>
                                    <Grid className="display" style={this.styles.workContactContainer}>
                                        <Cell medium={3} style={this.styles.workContact}>
                                            <Typography component="span" style={this.styles.workContactSpan}>
            	                                Únidad Medica Diagnostica<br></br> Espinosa Goméz
                                            </Typography>
                                        </Cell>
                                        <Cell medium={3} style={this.styles.address}>
                                            <Typography component="span" style={this.styles.addressSpan}>
                                                Cl. 64 ##7 89, Bogotá
                                            </Typography>
                                        </Cell>
                                    </Grid>
                                </Typography>
                            </Cell>
                        </Grid>
                    </Typography>
                    <div style={this.styles.cover} ref={div=>this.cover = div}>
                    </div>
                    <div style={this.styles.rightCover} ref={div=>this.rightCover = div}></div>
                    <img src={glasses} style={this.styles.glasses} ref={img=>this.glasses = img}></img>
                    <div ref={div=>this.handContainer = div} style={this.styles.handContainer}>
                        <img src={hand} style={this.styles.hand} ref={img=>this.hand = img}></img>
                    </div>
                </div>
                
            </React.Fragment>
        )   
        //}
    }

    styles = {
        body: {
            backgroundColor: 'black'
        },
        backgroundImg:{
            position: 'absolute',
            height: '100vh',
            width: '50%'
        },
        blackCover:{
            height: '60vh',
            width: '105%',
            backgroundColor:'transparent',
            bottom:'0'

        },
        horizontalTopBarContainer:{
            position: 'absolute',
            bottom: '20%',
            width: '70%'
        },
        horizontalTopBar:{
            backgroundColor: 'black',
            height: '3vh',
            width: '100%'
        },
        verticalRightBarContainer:{
           position: 'absolute',
           left: '0',
           top:'0',
           width: '5%',
        },
        verticalRightTopBar:{
            backgroundColor: 'black',
            height: '92.1vh',
            width: '45%',
            position: 'relative'
        },
        contactDiv:{
            height: '20vh',
            width: '70%',
            backgroundColor: 'black',
            position: 'absolute',
            top: '78.4%'
        },
        nameContainer:{
            marginTop:'19vh'
        },
        credentialsContainer:{
            marginTop:'17vh',
            marginLeft:'16%'
        },
        credentialsSpan:{
            color: 'black',
            fontSize: '1em',
            fontFamily: 'RockWell'
        },
        lastNameWrap:{
            position:'relative',
            top:'-4vh'
        },
        lineContainer:{
            position: 'relative',
            top: '10vh'
        },
        firstNameContainer:{
            marginLeft:'15%'
        },
        lineContainer:{
            marginLeft:'20%',
            position: 'relative',
            top: '11vh'
        },
        lastNameContainer:{
            marginLeft:'15%',
            marginTop: '9%'
        },
        firstNameSpan:{
            color: 'black',
            fontSize: '4em',
            fontFamily: 'RockWell',
            letterSpacing: '0.07em',
            opacity:'0',
            position:'absolute',
            left:'0'
        },
        lastNameSpan:{
            color: 'black',
            fontSize: '4em',
            fontFamily: 'RockWell',
            letterSpacing: '0.07em',
            position: 'absolute',
            left: '49%',
            opacity: '0'

        },
        lineSpan:{
            width: '85%',
            height: '.5vh',
            backgroundColor: 'yellow',
            display: 'inline-block',
            opacity: '0'
        },
        workContact:{
            marginLeft: '3%',
            marginTop: '2%'
        },
        workContactSpan:{
            color: 'white',
            fontSize: '1.5em',
            fontFamily:'RockWell'
        },
        address:{
            marginLeft: '40%',
            marginTop: '2%'
        },
        addressSpan:{
            color: 'rgba(192,192,192,0.7)',
            fontSize: '1.5em',
            fontFamily:'RockWell'
        },
        logoDiv:{
            marginLeft: '60%',
            marginTop: '100%'
        },

        facebookLogo:{
            position:'absolute',
            left: '0.4%',
            height: '1em',
            width: '1em',
            top:'40vh'
        },
        instagramLogo:{
            position:'absolute',
            left: '0.4%',
            height: '1em',
            width: '1em',
            top:'45vh'
        },
        mailLogo:{
            position:'absolute',
            left: '0.4%',
            height: '1em',
            width: '1em',
            top:'50vh'
        },
        rightSideTopBarContainer:{
            height: '10vh',
            width: '30%',
            position:'absolute',
            left: '70%'

        },
        rightSideTopBar:{
            width: '100%',
            height:'100%',
            backgroundColor:'black'
        },
        rightSideBottomBarContainer:{
            position:'absolute',
            bottom: '1%',
            height:'10vh',
            width: '30%',
            left: '70%'
        },
        rightSideBottomBar:{
            width: '100%',
            height: '11vh',
            backgroundColor: 'black'
        },
        rightSideRightBarContainer:{
            position: 'absolute',
            left:'95%',
            top:'5%',
            height:'30vh',
            width: '5%'
        },
        rightSideRightBar:{
            width: '100%',
            height:'80vh',
            backgroundColor:'black'
        },
        rightSideLinesContainer:{
            position:'absolute',
            top: '110%'
        },
        line1:{
            backgroundColor: 'yellow',
            height: '.2em',
            width: '3em',
            display: 'inline-block',
            position: 'absolute',
            right: '-2em'
        },
        line2:{
            backgroundColor: 'yellow',
            height: '.2em',
            width: '3em',
            display: 'inline-block',
            position: 'absolute',
            right: '-1.5em',
            top: '1em'
        },
        line3:{
            backgroundColor: 'yellow',
            height: '.2em',
            width: '3em',
            display: 'inline-block',
            position: 'absolute',
            right: '-1em',
            top: '2em'
        },
        cover:{
            height:'100vh',
            width:'50%',
            backgroundColor:'#E0E0E0',
            position:'absolute',
            top:'0',
            opacity:'0.8'
        },
        glasses:{
            position:'absolute',
            top:'35%'
        },
        handContainer:{
            position: 'absolute',
            top: '68%',
            left:'57%',
            opacity:'0'
        },
        hand:{
            height:'7em',
        },
        rightCover:{
            height:'100vh',
            width:'47%',
            backgroundColor:'#E0E0E0',
            position:'absolute',
            left:'52.5%',
            opacity:'0.8',
            top:'0'
        }
        
    }
}