import React,{useRef} from "react"
import { Cell, Grid} from 'react-foundation';
import ReactDOM from 'react-dom'
import { Typography } from "@material-ui/core";
import glasses from '../../assets/img/alianzas/glasses.png';
import arrow from '../../assets/img/alianzas/arrow.png';

export default class Alianzas extends React.Component{
    constructor(props){
        super(props);
        this.body = null;
        this.leftContainer = null;
        this.leftArr = null;
        this.rightContainer = null;
        this.rightArr = null;
        this.leftImageContainer = null;
        this.rightImageContainer = null;
        this.state = {
            leftIndex:0,
            rightIndex:1,
            leftImage: require('../../assets/img/alianzas/mexichem.png'),
            rightImage: require('../../assets/img/alianzas/pavco.png'),
            larrow: require('../../assets/img/alianzas/arrow.png'),
            rarrow: require('../../assets/img/alianzas/arrow.png'),
            images: [require('../../assets/img/alianzas/mexichem.png'),
                     require('../../assets/img/alianzas/pavco.png'),
                    require('../../assets/img/alianzas/natural-light.png'),
                    require('../../assets/img/alianzas/multiempleos.png')],
            leftText : 'MEXICHEM COLOMBIA',
            rightText : 'PAVCO',
            texts:['MEXICHEM COLOMBIA','PAVCO','NATURAL LIGHT','MULTIEMPLEOS']
            
        }
        this.listenForScroll();
        this.setListeners();
    }

    changeText(){
        let leftIndex = this.state.leftIndex
        this.setState({leftText:this.state.texts[leftIndex]});
        leftIndex++;
        this.setState({rightText:this.state.texts[leftIndex]});
    }

    setListeners(){
        setTimeout(()=>{
            let leftArrContainer = ReactDOM.findDOMNode(this.leftContainer)
            let rightArrContainer = ReactDOM.findDOMNode(this.rightContainer)
            let leftImageContainer = ReactDOM.findDOMNode()
            if(leftArrContainer != null){
                leftArrContainer.addEventListener('mouseover',()=>{
                    leftArrContainer.style.transition = '1s';
                    leftArrContainer.style.backgroundColor = '#5D675B';
                    this.setState({larrow:require('../../assets/img/alianzas/arrow-white.png')})
                })
                leftArrContainer.addEventListener('mouseout',()=>{
                    leftArrContainer.style.transition = '1s';
                    leftArrContainer.style.backgroundColor = 'white';
                    this.setState({larrow:require('../../assets/img/alianzas/arrow.png')})
                })
                leftArrContainer.addEventListener('click',()=>{
                    let leftImgCon = ReactDOM.findDOMNode(this.leftImageContainer);
                    leftImgCon.style.transition = '1s';
                    leftImgCon.style.left = '5%';
                    let rightImgCon = ReactDOM.findDOMNode(this.rightImageContainer);
                    rightImgCon.style.transition = '1s';
                    rightImgCon.style.left = '24%';
                    setTimeout(()=>{
                        rightImgCon.style.opacity = '0';
                        leftImgCon.style.opacity = '0';
                    },500)
                    setTimeout(()=>{
                        leftImgCon.style.left = '65%';
                        rightImgCon.style.left = '84%';
                        let leftIndex = this.state.leftIndex;
                        if(leftIndex == 0){
                            leftIndex = this.state.images.length-2;
                        }else{
                            leftIndex -= 2;
                        }
                        let images = this.state.images;
                        this.setState({leftImage:images[leftIndex]});
                        this.setState({leftIndex:leftIndex});
                        this.setState({rightImage:images[++leftIndex]});
                        this.setState({rightIndex:leftIndex++})
                    },1250)
                    setTimeout(()=>{
                        rightImgCon.style.opacity = '1';
                        leftImgCon.style.opacity = '1';
                        leftImgCon.style.left = '33%';
                        rightImgCon.style.left = '52.5%';
                        this.changeText();
                    },1400)
                })
            }

            if(rightArrContainer != null){
                rightArrContainer.addEventListener('mouseover',()=>{
                    rightArrContainer.style.transition = '1s';
                    rightArrContainer.style.backgroundColor = '#5D675B';
                    this.setState({rarrow:require('../../assets/img/alianzas/arrow-white.png')})
                })
                rightArrContainer.addEventListener('mouseout',()=>{
                    rightArrContainer.style.transition = '1s';
                    rightArrContainer.style.backgroundColor = 'white';
                    this.setState({rarrow:require('../../assets/img/alianzas/arrow.png')})
                })
                rightArrContainer.addEventListener('click',()=>{
                    let leftImgCon = ReactDOM.findDOMNode(this.leftImageContainer);
                    leftImgCon.style.transition = '1s';
                    leftImgCon.style.left = '65%';
                    let rightImgCon = ReactDOM.findDOMNode(this.rightImageContainer);
                    rightImgCon.style.transition = '1s';
                    rightImgCon.style.left = '84%';
                    setTimeout(()=>{
                        rightImgCon.style.opacity = '0';
                        leftImgCon.style.opacity = '0';
                    },500)
                    setTimeout(()=>{
                        leftImgCon.style.left = '5%';
                        rightImgCon.style.left = '24%';
                        let leftIndex = this.state.leftIndex;
                        if(leftIndex == this.state.images.length-2){
                            leftIndex = 0;
                        }else{
                            leftIndex += 2;
                        }
                        let images = this.state.images;
                        this.setState({leftImage:images[leftIndex]});
                        this.setState({leftIndex:leftIndex});
                        this.setState({rightImage:images[++leftIndex]});
                        this.setState({rightIndex:leftIndex++})
                    },1250)
                    setTimeout(()=>{
                        rightImgCon.style.opacity = '1';
                        leftImgCon.style.opacity = '1';
                        leftImgCon.style.left = '33%';
                        rightImgCon.style.left = '52.5%';
                        this.changeText();
                    },1400)
                })
            }
        },500)
    }

    listenForScroll(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY>2180 && window.scrollY < 2700){
                var elem = ReactDOM.findDOMNode(this.body);
                if(elem != null){
                    elem.style.transition = '2s';
                    elem.style.backgroundColor = '#F78E69';
                }
            }
            if(window.scrollY<2180 || window.scrollY > 2700){
                var elem = ReactDOM.findDOMNode(this.body);
                if(elem != null){
                    elem.style.transition = '2s';
                    elem.style.backgroundColor = 'white';
                }
            }
        })
    }



    render(){
        return (
            <React.Fragment>
               <div style={{height: '100vh', width:'100%', border:'2em solid #E0E0E0'}} ref={div=>this.body = div}>
                   <Grid className="display" style={{marginTop:'4%'}}>
                       <Cell medium={4} style={{marginLeft:'37%'}}>
                           <Typography component="span" style={this.styles.alianzaTitle}>
                               ALGUNAS DE NUESTRAS ALIANZAS ESTRATEGICAS
                           </Typography>
                       </Cell>
                   </Grid>
                   <Grid className="display">
                       <Cell medium={2} style={{marginTop:'13%'}}>
                           <div style={this.styles.leftArrowContainer} ref={div=>this.leftContainer = div}>
                               <img src={this.state.larrow} style={this.styles.leftArrow} ref={img=>this.leftArr = img}></img>
                           </div>
                       </Cell>
                       <Cell medium={8} style={{marginTop:'-4%'}}>
                           <img src={glasses} style={{height:'34em'}}></img>
                           <div style={this.styles.leftImageContainer} ref={div=>this.leftImageContainer = div}>
                               <img style={this.styles.leftImage} src={this.state.leftImage}></img>
                           </div>
                           <div style={this.styles.rightImageContainer} ref={div=>this.rightImageContainer = div}>
                               <img src={this.state.rightImage} style={this.styles.rightImage}></img>
                           </div>
                       </Cell>
                       <Cell medium={2} style={{marginTop:'13%'}}>
                           <div style={this.styles.rightArrowContainer} ref={div=>this.rightContainer = div}>
                               <img src={this.state.rarrow} style={this.styles.rightArrow} ref={img=>this.rightArr= img}></img>
                           </div>
                       </Cell>
                   </Grid>
                   <Grid className="display" style={{position:'relative',top:'-26%'}}>
                       <Cell medium={2} style={{marginLeft:'35%'}}>
                           <div>
                               <Typography component="span" style={this.styles.alianzaSpan}>
                                   {this.state.leftText}
                               </Typography>
                           </div>
                       </Cell>
                       <Cell medium={2} style={{marginLeft:'6%'}}>
                           <div>
                               <Typography component="span" style={this.styles.alianzaSpan}>
                                   {this.state.rightText}
                               </Typography>
                           </div>
                       </Cell>
                   </Grid>
                </div>
            </React.Fragment>
        )
    }


    styles = {
        alianzaTitle:{
            fontFamily: 'RockWell',
            fontSize: '2vw',
            color: 'white'
        },
        leftArrowContainer:{
            marginLeft:'45%',
            backgroundColor: 'white',
            height: '4em',
            width: '5em',
            borderRadius: '1em',
            cursor: 'pointer'
        },
        rightArrowContainer:{
            backgroundColor: 'white',
            height: '4em',
            width: '5em',
            borderRadius: '1em',
            cursor: 'pointer'
        },
        rightArrow:{
            position:'relative',
            top:'25%',
            left:'11%',
            transform: 'rotate(180deg)',
            cursor: 'pointer'
        },
        leftArrow:{
            position:'relative',
            top:'25%',
            left:'11%',
            cursor: 'pointer'
        },
        leftImageContainer:{
            position: 'absolute',
            top: '438%',
            width: '11.5em',
            left:'33%',       
        },
        leftImage: {
           height:"12.2em"
        },
        rightImageContainer:{
            position: 'absolute',
            top: '438.5%',
            width: '11.5em',
            left:'52.5%',  
        },
        rightImage:{
            height: "12em"
        },
        alianzaSpan:{
            fontFamily: 'RockWell',
            color: 'white',
            fontSize: '1.5vw'
        }
    }
}