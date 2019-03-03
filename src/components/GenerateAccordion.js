import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

class GenerateAccordion extends React.Component{
  renderList(name){
    return(
      <i className={name}></i>
    );
  }

  renderPics(){
    const picArray = this.props.pictures.map(picture => {
      return <i className={`devicon-${picture}-plain`} style={{paddingRight: 10}}></i>;
    })

    return picArray;
  }

  renderLink(){
    if(this.props.link){
      return <a target="_blank" className="linky" href={this.props.link}>See it live</a>;
    } else if(this.props.reactLink){
      return <Link to={this.props.reactLink} target="_blank" className="linky">See it live</Link>;
    } else {
      return <a target="_blank" href={this.props.gitLink} className="linky">The source code is too big! See it on Github.</a>;
    }
  }



  render(){
    return(
      <div id="accordion">
        <div class="card" style={{width:500}}>
          <div class="card-header">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${this.props.iden}`} aria-expanded="true">
                {this.props.title}
              </button>
            </h5>
            <div>
              {this.renderPics()}
            </div>
          </div>

          <div id={`collapse${this.props.iden}`} class={`collapse ${this.props.show}`} data-parent="#accordion">
            <div class="card-body">
              {this.props.description}
            </div>
            <div className="linky" >
              {this.renderLink()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateAccordion;
