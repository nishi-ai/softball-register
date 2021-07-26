import React, { Component } from 'react';
class Header extends Component {
    render() {
  
      if(this.props.data){
        var homepic = "./images/"+this.props.data.image;
      }
  
      return (
        <header id="home">
        <div className="row banner">
           <div className="banner-text">
                <img className="profile-pic"  src={homepic} alt="" />
           </div>
        </div>
        </header>
      );
    }
  }
  
  export default Header;
  