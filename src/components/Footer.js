import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={this.props.appExecutedOnce ? {position: "relative"} : {position: "absolute"}}>
        <p>Copyright 2017 &copy; <a href="http://datonedoe.com" target="blank">datonedoe.com</a></p>
      </div>
    )
  }
}

export default Footer;
