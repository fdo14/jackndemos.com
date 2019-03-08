import React from 'react';
import GenerateAccordion from '../GenerateAccordion';
import {TimelineMax, TweenLite, TweenMax} from "gsap/TweenMax";
import {Elastic, Back, Power1, Power2, Linear, Bounce} from "gsap/all";

const projects = [
  {iden: 1, title: "Jackn.org", description: "My personal website that highlights my best work using animations and a React physics template.", pictures: ['javascript', 'bootstrap', 'jquery', 'html5', 'react'], show: "show", link:"https://www.jackn.org"},
  {iden: 1, title: "Mean Gym", description: "An awesome landing page for any gym that wants a smoothly animated workout-scene as their home page. Using advanced SVG and CSS animations, this mean gym will taunt you into buying a membership.", pictures: ['javascript', 'bootstrap', 'jquery', 'html5', 'react'], show: "show", link:"https://nichols-mean-gym.herokuapp.com/"},
  {iden: 2, title: "Portfolio", description: "A cutomizable portfolio template that artists and creatives can use to showcase their work.", pictures: ['javascript', 'bootstrap', 'jquery', 'html5'], show: "show", link:"frontendSites/portfolio"},
  {iden: 3, title: "TheHiveNet.com", description: "A website to showcase my start-up, TheHive. The website provides details on the company and highlights our win at the Social Venture Innovation Challenge.", pictures: ['javascript', 'bootstrap', 'html5'], link:"http://www.thehivenet.org"},
  {iden: 4, title: "Streamy", description: "A React-Redux app that uses an RTMP media server to stream videos from your OBS account", pictures: ['react', ,'redux', 'javascript', 'html5', 'css3'], gitLink:"https://github.com/fdo14/twitch-clone"},
  {iden: 5, title: "SigmaChiUMass.com", description: "A website I created as the first Web Master for the Sigma Chi chapter at UMass. The website has now moved on to a new Web Master.", pictures: ['javascript', 'bootstrap', 'jquery', 'html5'], link:"https://www.sigmachiumass.com"},
  {iden: 6, title: "PlinkoML", description: "A JavaScript Machine Learning example that uses a K-Nearest Neighbors Algorithm (k-NN) to determine the result of the popular Family Feud game Plinko using lodash.", pictures: ['javascript', 'html5', 'css3'], link:"frontendSites/plinko"},
  {iden: 7, title: "Greedy", description: "A JavaScript based dice game that allows two users to go head-to-head in a battle of wits.", pictures: ['javascript', 'html5', 'css3'], link:"frontendSites/greedy"},
  {iden: 8, title: "Youtube Clone", description: "A React project using the Youtube API to create a video searching clone.", pictures: ['react', 'javascript', 'html5', 'css3'], reactLink:"/frontend/youtube"},
  {iden: 9, title: "Landing Page", description: "The perfectly styled landing page for any start-up", pictures: ['bootstrap', 'javascript', 'html5', 'css3'], link:"frontendSites/landingPage"},
  {iden: 10, title: "Season Display", description: "A React project using location tracking and React Hooks", pictures: ['react', 'javascript', 'html5', 'css3'], reactLink:"/frontend/seasons"}

]

class CreateAccordions extends React.Component{
  renderAccordions(){
    const accordions = projects.map(accordion => {
      const{title, description, pictures, iden, show, link, reactLink, gitLink} = accordion;
      return <GenerateAccordion iden={iden} pictures={pictures} title={title} description={description} show={show} link={link} reactLink={reactLink} gitLink={gitLink}/>
    })
    return accordions;
  }

  onClick = () => {
    this.props.onHomeClick();
    document.body.style.backgroundColor = "#1a2128";
    const array = ["#panel1", "#panel2", "#panel3", "#text"];
    const tl = new TimelineMax();
        tl.to(array,1,{scale: 1,opacity: 1, x: 0, y:0});
  }

  render(){
    return(
      <div>
        <p className="smallHeader">Here's what I can do on the Front-End!</p>
        {this.renderAccordions()}
        < p className="smallHeader clicky" onClick={this.onClick}>What else can I do?</p>
      </div>
    );
  }
}

export default CreateAccordions;
