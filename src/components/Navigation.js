import React, { Component } from "react";

class Navigation extends Component{
  render () {
    const {appName, logoApp} = this.props;

    return (
      <nav className='navbar  navbar-dark bg-dark px-2'> 
      <img src={logoApp} width="30" height="30" className="mx-2"/>  
        <a class="navbar-brand h4 text-white me-auto"> {appName} </a>
        {/* Boton de settings en una proxima rama
        <button type="button" className="btn btn-warning rounded-5 mx-2 btn-sm"> 
          <i className="bi bi-sliders"/>
        </button>
        */}    
      </nav>
    );
  }
  
}

export default Navigation;