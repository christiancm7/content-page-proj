import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import SideBarUnlocked from './subComponents/SideBarUnlocked'
import Breadcrumb from './subComponents/Breadcrumb'
import PageReport from './subComponents/PageReport'
import { KeyPoints } from './subComponents/KeyPoints';
import Comments from './subComponents/Comments'

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      return (
        <div className="content-container">
           <Breadcrumb title="Research Overview"/>
           <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
            <div className="main-content-container">
            <main className="main">
              <i id="video" className="massive grey play circle icon"></i>
              <PageReport />
              <KeyPoints />
              <Comments />
            </main>
              <SideBarUnlocked />
            </div>
          </div>
      );
    }
  }
);
