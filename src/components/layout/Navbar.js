import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/logo2.png'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="ui top fixed menu">
          <div className="ui secondary pointing menu">
            <Link  to="/" className="item">
              <img src={mainLogo} alt="Logo" className="mainLogo"/>
            </Link>
            <a  className="item">Menu 1</a>
            <a  className="item">Menu 2</a>
            <a  className="item">Menu 3</a>
          </div>
          <div class="right menu">
          <Link  to="/login" className="item">Login</Link>
            <div class="item">
                <div class="ui button green">Sign Up</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
