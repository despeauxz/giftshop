import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SignupForm, LoginForm } from '@components/shared/FormComponents';
import { Logo } from '@base/images';
import './index.scss';


class Auth extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: ''
  };

  getFormTitle = () => {
    switch (this.props.type) {
    case 'signup':
      return 'Sign Up to Dantown';
    default:
      return 'Log In to Dantown';
    }
  }

  getFormField = () => {
    switch (this.props.type) {
    case 'signup':
      return <SignupForm />;
    default:
      return <LoginForm />;
    }
  }

  render() {
    const title = this.getFormTitle();
    const field = this.getFormField();
    // const { from } = this.props.location.state ? this.props.location.state : { from: { pathname: '/' } };
    // const newLocation = this.props.type === 'login' ? from : '/';

    // if (this.props.isAuthenticated) {
    //     return <Redirect to={newLocation} />;
    // }
    return (
      <React.Fragment>
        <div className="font-sans">
          <div className="flex h-screen justify-center items-center">
            <div className="md:flex-1 lg:flex-1 lg:block md:block hidden auth-img">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="Dantown" />
                </Link>
              </div>
              lorem 
            </div>
            <div className="md:flex-1 lg:flex-1">
              <div className="auth-wrapper">
                <h2 className="font-medium mb-4 text-xl text-gray-700">{title}</h2>

                {field}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Auth;
