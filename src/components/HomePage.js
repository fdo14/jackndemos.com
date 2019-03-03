import React from 'react';
import {TimelineMax, TweenLite, TweenMax} from "gsap/TweenMax";
import {Elastic, Back, Power1, Power2, Linear, Bounce} from "gsap/all";
import CreateAccordions from './frontEndDisplay/CreateAccordions';
import CreateAccordionsBack from './backEndDisplay/CreateAccordions';
import CreateAccordionsFull from './fullStackDisplay/CreateAccordions';
import $ from "jquery";

import './styles.css';

//JS Node React Front Back Full

class HomePage extends React.Component{
  state = {frontClick: false, backClick: false, fullClick: false}
  componentDidMount(){
    var bgd = $('#background rect');

    var tl = new TimelineMax();
    tl.from(bgd, 0.1, {opacity:0, scale:0, transformOrigin: 'center center'})
    .staggerFrom("#text", .9, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Bounce.easeOut}, .2)
    .staggerFrom("#panel1", .9, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Elastic.easeOut}, .2)
    .staggerFrom("#panel2", .9, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Elastic.easeOut}, .2)
    .staggerFrom("#panel3", .9, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Elastic.easeOut}, .2)
  }

  onMouseOver = (id) => {
      var tl = new TimelineMax()
      .to(id,0.4,{rotation:10, scaleX:1.2, scaleY:1.2})
      .to(id,7,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});
  }

  onMouseExit = (id) => {
    var tl = new TimelineMax()
      .to(id, .5, { scaleX:1, scaleY:1})
  }

  onClick = (id) => {
    document.body.style.backgroundColor = "#FB5829";
    const array = ["#panel1", "#panel2", "#panel3", "#text"];
    const tl = new TimelineMax();
        tl.to(array,1,{scale: 0,opacity: 0, x: 0, y:-2500});
    if(id === 'front'){
      this.setState({frontClick: true})
    } else if(id === 'back'){
      this.setState({backClick: true})
    } else{
      this.setState({fullClick: true})
    }

  }

  returnFromFront = () => {
    this.setState({frontClick: false})
  }
  returnFromBack = () => {
    this.setState({backClick: false})
  }
  returnFromFull = () => {
    this.setState({fullClick: false})
  }

  renderFront(){
    if(this.state.frontClick === true){
      return <div ><CreateAccordions onHomeClick={this.returnFromFront}/></div>;
    }
  }

  renderBack(){
    if(this.state.backClick === true){
      return <div><CreateAccordionsBack onHomeClick={this.returnFromBack}/></div>;
    }
  }

  renderFull(){
    if(this.state.fullClick === true){
      return <div><CreateAccordionsFull onHomeClick={this.returnFromFull}/></div>;
    }
  }

  render(){
    return(
      <div className="outer">

        <div className="middle">
          <div className="inner">
          {this.renderFront()}
          {this.renderBack()}
          {this.renderFull()}
            <p className="headerDesc" id="text">What kind of developer do you need?</p>
            <div className="container">
              <div className="row" style={{textAlign:"center"}}>
                <div className="col-lg panel panel1" id="panel1" onMouseEnter={() => this.onMouseOver('#panel1')} onMouseLeave={() => this.onMouseExit('#panel1')} onClick={() => this.onClick('front')}>

                </div>
                <div className="col-lg panel panel2" id="panel2" onMouseEnter={() => this.onMouseOver('#panel2')} onMouseLeave={() => this.onMouseExit('#panel2')} onClick={() => this.onClick('back')}>

                </div>
                <div className="col-lg panel panel3" id="panel3" onMouseEnter={() => this.onMouseOver('#panel3')} onMouseLeave={() => this.onMouseExit('#panel3')} onClick={this.onClick}>

                </div>



              </div>

            </div>

          </div>
        </div>

      </div>

    );
  }


}

export default HomePage;
