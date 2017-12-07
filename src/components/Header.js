import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <div className="container">

            <div className="row">
              <div className="col">
                <div className="col-xs-6 col-md-4 col-lg-1 vcenter">
                    <div><i className="fa fa-youtube-play fa-5x" aria-hidden="true"></i></div>
                </div><div className="col-xs-6 col-md-8 col-lg-8 vcenter">
                    <h1>WHAT IS TRENDING WORLDWIDE?</h1>
                </div>
              </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Header;
