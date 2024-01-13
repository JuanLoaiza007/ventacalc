import React, { Component } from "react";

class Footer extends Component{
  render () {
    const {appVersion} = this.props;

    return(
      <footer class="bg-dark text-white">
        <div 
        className="text-center p-2">
          v {appVersion}
        </div>
      </footer>
    );
  }
}

export default Footer;