import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import SideBar from './subComponents/SideBar'
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
);
