import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {LoginForm} from "../login-form/login-form";
import {Footer} from "../footer/footer";

import {withLoginForm} from "../../hocs/with-login-form/with-login-form";

const LoginFormWrapped = withLoginForm(LoginForm);

export class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {isAuthorized, history} = this.props;

    if (isAuthorized) {
      history.push(`/`);
    }
  }

  render() {
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <LoginFormWrapped />
      </div>

      <Footer />
    </div>;
  }
}

LoginPage.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(LoginPage);
