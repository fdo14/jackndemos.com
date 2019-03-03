import React from 'react';
import GenerateAccordion from '../GenerateAccordion';
import {TimelineMax, TweenLite, TweenMax} from "gsap/TweenMax";
import {Elastic, Back, Power1, Power2, Linear, Bounce} from "gsap/all";

const projects = [
  {iden: 1, title: "TheHive.", description: "A hardware and software start-up that can instantly create a full-scale communication network. Winner of the Social Venture Innovation Challenge at UNH", pictures: ['javascript', 'bootstrap', 'jquery', 'php', 'linux', 'css3', 'html5'], show: "show", gitLink:"https://github.com/fdo14/TheHive"},
  {iden: 2, title: "ConcussionCompetencies.com", description: "The official website for Concussion Competencies. My first client as a Full Stack Developer!", pictures: ['mongodb', 'express', 'react', 'nodejs', 'javascript', 'css3', 'html5'], link:"http://concussioncompetencies.com"},
  {iden: 3, title: "PoliTweet.us", description: "PoliTweet streams in tweets about current presidential candidates and runs them through Indico's sentiment analysis algorithm. The user can then cycle through a collection of data about the tweets, and even see real time updates! Won best site design at Hack Beanpot", pictures: ['mongodb', 'express', 'react', 'nodejs', 'javascript', 'css3', 'html5'], gitLink:"https://github.com/fdo14/politweet"},
  {iden: 4, title: "Campus.forsale", description: "A fullstack web app to easily buy and sell items on the UMass campus. Placed in the top 8 at Hack UMass.", pictures: ['mongodb', 'express', 'angular', 'nodejs', 'javascript', 'css3', 'html5'], gitLink:"https://github.com/fdo14/campus-forsale"},
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
        <p className="smallHeader">Here's what I can do as a Full Stack Developer!</p>
        {this.renderAccordions()}
        <p className="smallHeader clicky" onClick={this.onClick}>What else can I do?</p>
      </div>
    );
  }
}

export default CreateAccordions;
