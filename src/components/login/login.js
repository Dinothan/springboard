import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./loginStyle.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  }
  onClickButton = () => {
    if (this.state.email != null && this.state.password != null) {
      this.props.onAuth(this.state.email, this.state.password, () => {
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <header className="App-header">
        <div className="container">
          <header>
            <h2>Welcome to Springboard</h2>
            <div className="header"> Please Login to continue</div>
          </header>
          <div className="label">
            <div className="username">
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  color: "gray",
                  justifyContent: "center",
                  marginLeft: 25,
                  marginRight: 25,
                }}
              />
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="uname"
                value={this.state.email}
                required
              />
            </div>
            <div className="username">
              <FontAwesomeIcon
                icon={faLock}
                style={{
                  color: "gray",
                  justifyContent: "center",
                  marginLeft: 25,
                  marginRight: 25,
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name="psw"
                className="form-control"
                value={this.state.password}
                required
              />
            </div>
            <div>
              <div className="check">
                <label>
                  <input type="checkbox" checked="checked" name="remember" />
                  Remember me
                </label>
              </div>
              <div className="forget">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div>
              <button className="button" onClick={this.onClickButton}>
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, callBack) =>
      dispatch(actions.auth(email, password, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
