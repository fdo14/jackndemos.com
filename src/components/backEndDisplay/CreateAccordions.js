import React from 'react';
import GenerateAccordion from '../GenerateAccordion';
import {TimelineMax, TweenLite, TweenMax} from "gsap/TweenMax";
import {Elastic, Back, Power1, Power2, Linear, Bounce} from "gsap/all";

const projects = [
  {iden: 1, title: "Task-App API", description: "A full REST API that allows users to create/read/update/delete an account with user profile images. Full authentication is provided. Logged in users can create/read/update/delete their very own tasks.", pictures: ['javascript', 'nodejs', 'mongodb', 'heroku'], gitLink:"https://github.com/fdo14/task-manager-api"},
  {iden: 2, title: "PlinkoML with TensorFlow", description: "A JavaScript Machine Learning example that uses a K-Nearest Neighbors Algorithm (k-NN) to determine the result of the popular Family Feud game Plinko using TensorFlow and Nodejs.", pictures: ['javascript', 'nodejs'], show: "show", gitLink:"frontendSites/portfolio"},
  {iden: 3, title: "Forecast App", description: "A complete NodeJS app that uses the DarkSky.net API to allow users to enter any location and instantly receive a forecast. ", pictures: ['javascript', 'nodejs', 'heroku'],link:"https://fast-anchorage-95119.herokuapp.com/"},
  {iden: 4, title: "Bulls and Cows", description: "A C++ command line game. A fully functioning model of the famous Bull Cow Game - complete with ASCII graphics.", pictures: ['cplusplus'],gitLink:"https://github.com/fdo14?tab=repositories"},
  {iden: 3, title: "Lissen", description: "An Android app designed to let you freely switch between your wifi and the network offered by TheHive.", pictures: ['java', 'android'],link:"https://github.com/fdo14/WifiChangerApp"},
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
        <p className="smallHeader">Here's what I can do on the Back-End!</p>
        {this.renderAccordions()}
        <p className="smallHeader clicky" onClick={this.onClick}>What else can I do?</p>
      </div>
    );
  }
}

export default CreateAccordions;
