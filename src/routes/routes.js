import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "../components/home/home";
import Login from "../components/login/login";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import Nativation from "../routes/navigation";
import CreateUser from "../components/createUser/createUser";
import Cookies from "js-cookie";

class router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: props.isAuthenticated,
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { isAuthenticated } = nextProps;
    console.log("isAuthenticated :", nextProps);
    this.setState({ Auth: isAuthenticated });
  };

  render() {
    return (
      <Router>
        {!this.state.Auth ? (
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </div>
        ) : (
          <div>
            <Nativation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/createuser" component={CreateUser} />
              <Redirect to="/" />
            </Switch>
          </div>
        )}
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.token,
    isAuthenticated: Cookies.get("auth") !== undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(router);
