import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "./navigationStyles.css";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt,
  faFileAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true,
      count: this.props.isAuthenticated.users
        ? this.props.isAuthenticated.users.length
        : 0,
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {isAuthenticated} = nextProps
    this.setState({ count: isAuthenticated.users.length });
  };

  menuClick = () => {
    const { showing } = this.state;
    this.setState({ showing: !showing });
  };

  render() {
    const { showing, count } = this.state;
    const Badge = ({ count }) => (
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 8, //half radius will make it cirlce,
          backgroundColor: "red",
          marginLeft: 7,
        }}
      >
        <div style={{ color: "#FFF", textAlign: "center" }}>{count}</div>
      </div>
    );
    return (
      <div>
        <div className="topnav">
          <div className="menu">
            <a onClick={this.menuClick}>
              <FontAwesomeIcon
                icon={faFileAlt}
                style={{
                  color: "black",
                  fontSize: 25,
                  // marginLeft: 250,
                  // marginRight: 25,
                }}
              />
            </a>
          </div>
          <div className="search">
            <input type="text" placeholder="Search.." />
          </div>
          <div className="bell">
            <Badge count={count} />
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: "white",
                // marginTop: -15
                // marginLeft: 250,
                // marginRight: 25,
              }}
            />
            <div>John Wick</div>
          </div>
        </div>
        {showing ? (
          <div id="mySidenav" className="sidenav">
            <div className="sideText">
              <Link style={{ fontSize: 18 }} to="/">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{
                    color: "black",
                    // marginLeft: 250,
                    marginRight: 25,
                  }}
                />{" "}
                Home
              </Link>
            </div>
            <div className="sideText">
              <Link style={{ fontSize: 18 }} to="/createuser">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{
                    color: "black",
                    // marginLeft: 250,
                    marginRight: 25,
                  }}
                />
                Create User
              </Link>
            </div>
            <div className="sideText">
              <Link
                onClick={() => {
                  this.props.Logout();
                }}
                style={{ fontSize: 18 }}
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{
                    color: "black",
                    // marginLeft: 250,
                    marginRight: 25,
                  }}
                />
                Logout
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
