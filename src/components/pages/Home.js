import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Breadcrumb from './subComponents/Breadcrumb'

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
           <Breadcrumb />
            {/* start main content area */}
            <div className="main-content-container">
            <main className="main">
              main container
            </main>
            <aside className="sidebar">
              aside container
            </aside>
            </div>
          </div>
      );
    }
  }
);
