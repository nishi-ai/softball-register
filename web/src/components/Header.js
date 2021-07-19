import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
  
      if(this.props.data){
        var name = this.props.data.name;
        var occupation= this.props.data.occupation;
        var profilePic = "./images/"+this.props.data.image;
        var city= this.props.data.city;
        var networks= this.props.data.social.map(function(network){
          return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={network.className} /></a></li>
        })
      }
  
      return (
        <header id="home">
  
        <div className="row banner">
           <div className="banner-text">
                <img className="profile-pic"  src={profilePic} alt="" />
                <h2 className="responsive-headline">Hello! I'm {name}.</h2>
                <h3>A {city} based <span>{occupation}</span></h3>
                <hr />
                <ul className="social">
                    {networks}
                </ul>
           </div>
        </div>
  
       
  
        </header>
      );
    }
  }
  
  export default Header;
  