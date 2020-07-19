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
  faBars,
  faSearch,
  faCaretDown,
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
    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { isAuthenticated } = nextProps;
    this.setState({ count: isAuthenticated.users.length });
  };

  menuClick = () => {
    const { showing } = this.state;
    this.setState({ showing: !showing });
  };

  update = () => {
    this.setState(
      {
        width: window.innerWidth,
      },
      () => {
        if (this.state.width < 600) {
          this.setState({ showing: false });
        } else {
          this.setState({ showing: true });
        }
      }
    );
  };

  render() {
    console.log(window.innerWidth);
    const { showing, count } = this.state;
    const Badge = ({ count }) => (
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 8, //half radius will make it cirlce,
          backgroundColor: "red",
          marginLeft: 0,
          position: "absolute",
          top: 10,
          left: 7,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#FFF",
            textAlign: "center",
            marginTop: -2,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {count}
        </div>
      </div>
    );
    return (
      // <div>
      <React.Fragment>
        <div className="topnav">
          <div className="topnavBar">
            <div className="menuBar">
              <a onClick={this.menuClick}>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{
                    color: "white",
                    fontSize: 25,
                  }}
                />
              </a>
            </div>
            <div className="searchBar">
              <div className="searchWrapper">
                <input
                  type="text"
                  className="searchField"
                  placeholder="Search.."
                />
                <div className="searchIcon">
                  <div className="searchIconSm">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bellBar">
              <div className="bellIcon">
                <Badge count={count} />
                <FontAwesomeIcon
                  icon={faBell}
                  style={{
                    color: "white",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="nameWrapper">John Wick</div>
                <div className="circle"></div>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{
                    color: "white",
                    marginTop: 5,
                    marginLeft: 15,
                  }}
                />
              </div>
            </div>
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
                />
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
        <div class="footer">
          <p style={{marginTop:5}}>Design and powered by Trabeya</p>
        </div>
      </React.Fragment>
      // {/* </div> */}
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
