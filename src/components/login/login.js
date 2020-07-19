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
        <div className="container containerFull contentLayoutCenter">
          <div className="contentLayout">
            <header>
              <h2>Welcome to Springboard</h2>
              <div className="header1"> Please Login to continue</div>
            </header>

            <div className="loginWrapper">
              <div className="fieldItemWrapper">
                <div className="fieldItem">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "gray",
                      position: "absolute",
                      zIndex: 999,
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      paddingLeft: 15,
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="inputWrapper inputRad"
                    name="uname"
                    value={this.state.email}
                    required
                  />
                </div>
              </div>

              <div className="fieldItemWrapper">
                <div className="fieldItem">
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      color: "gray",
                      position: "absolute",
                      zIndex: 999,
                      left: 0,
                      top: 0,
                      bottom: 0,
                      height: "100%",
                      paddingLeft: 15,
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="psw"
                    className="inputWrapper inputRad"
                    value={this.state.password}
                    required
                  />
                </div>
              </div>

              <div className="fieldItemWrapper">
                <div className="detailsSec">
                  <div className="checkSec">
                    <label>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="remember"
                      />
                      Remember me
                    </label>
                  </div>
                  <div className="forgetSec">
                    <a href="#" className="linkText">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="btnWrapper">
                <button className="button" onClick={this.onClickButton}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p style={{ marginTop: 5 }}>Design and powered by Trabeya</p>
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
