import React, { Component } from 'react';
import SideBar from './subComponents/SideBar'
import Breadcrumb from './subComponents/Breadcrumb'
import PageReport from './subComponents/PageReport'
import { KeyPoints } from './subComponents/KeyPoints';
import Comments from './subComponents/Comments'

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
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div className="content-container">
           <Breadcrumb title="Locked Research Overview"/>
            {/* start main content area */}
            <div className="main-content-container">
            <main className="main">
              <i id="video" className="massive grey play circle icon"></i>
              <PageReport />
              <KeyPoints />
              <Comments />
            </main>
              <SideBar />
            </div>
          </div>
    );
  }
}

export default Locked;
