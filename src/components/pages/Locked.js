import React, { Component } from 'react';
import SideBarLocked from './subComponents/SideBarLocked'
import Breadcrumb from './subComponents/Breadcrumb'
import PageReport from './subComponents/PageReport'
import { KeyPoints } from './subComponents/KeyPoints';
import Reviews from './subComponents/Reviews';

class Locked extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {

    return (
      <div className="content-container">
           <Breadcrumb title="Locked Research Overview"/>
            <div className="main-content-container">
            <main className="main">
              <div className="text-container">
                <PageReport />
                <hr class="ui dividing header"></hr>
                <KeyPoints />
              </div>
              <Reviews />
            </main>
              <SideBarLocked />
            </div>
          </div>
    );
  }
}

export default Locked;
