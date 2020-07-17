import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../store/actions/index";
import styles from "./createStyles";
import "./createUserStyles.css";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      department: "IT",
      roleArray: [],
      role: "",
    };
  }

  onChangeEmailText = (e) => {
    if (e.target.value.trim()) {
      this.setState({ role: e.target.value });
    }
  };

  onBlur = (e) => {
    if (this.state.role) {
      const roleArray = [...this.state.roleArray];
      roleArray.push({ role: this.state.role });
      if (roleArray.length === 50) {
        this.setState({ editable: false });
      }
      this.setState({ role: "", roleArray: roleArray }, () => {
        if (this.textInput) {
          this.textInput.focus();
        }
      });
    }
  };

  remove = (role) => {
    const roleArray = [...this.state.roleArray];
    this.setState({
      roleArray: roleArray.filter((res) => res.role !== role),
    });
  };

  onKeyPress = (e) => {
    if (this.state.role) {
      if (e.nativeEvent.key === "Enter" || e.nativeEvent.key === " ") {
        const roleArray = [...this.state.roleArray];
        roleArray.push({
          role: this.state.role,
        });
        setTimeout(() => {
          this.setState({ role: "", roleArray: roleArray }, () => {
            if (this.textInput) {
              this.textInput.focus();
            }
          });
        }, 500);
      }
    }
  };

  onChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  onChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeDept = (e) => {
    console.log("e.target.value :", e.target.value);
    this.setState({ department: e.target.value });
  };

  onClickButton = () => {
    const { firstName, lastName, email, department, roleArray } = this.state;
    if (firstName && lastName && email && department && roleArray) {
      this.props.OnCreateUser(
        firstName,
        lastName,
        email,
        department,
        roleArray,
        () => {
          this.props.history.push("/");
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className="h2">
            <h2>Create User </h2>
          </div>
          <div className="header"> Add users into springboard plateform</div>
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
              placeholder="First Name"
              className="form-control"
              name="uname"
              onChange={this.onChangeFirstName}
              value={this.state.firstName}
              required
            />
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
              placeholder="Last Name"
              className="form-control"
              name="uname"
              onChange={this.onChangeLastName}
              value={this.state.lastName}
              required
            />
          </div>
          <div className="username">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                color: "gray",
                justifyContent: "center",
                marginLeft: 23,
                marginRight: 25,
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="form-control"
              onChange={this.onChangeEmail}
              value={this.state.email}
              required
            />
            <FontAwesomeIcon
              icon={faUsers}
              style={{
                color: "gray",
                justifyContent: "center",
                marginLeft: 19,
                marginRight: 25,
              }}
            />

            <select
              name="departments"
              id="departments"
              onChange={this.onChangeDept}
              value={this.state.department}
              className="form-control"
              required
            >
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* <button type="submit">Login</button> */}
          <div className="content">
            <div className="box">A</div>
            <div className="box">B</div>
            <div className="box">C</div>
          </div>
          <div className="userRole">
            <div>User Roles : </div>
            <div style={styles.listEmailScrollWrap}>
              {this.state.roleArray.map((res, index) => (
                <div style={styles.listEmailSingle} className="content">
                  <div style={styles.textPrimeSm}>{res.role}</div>

                  <button onClick={() => this.remove(res.role)}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{
                        color: "gray",
                        justifyContent: "center",
                        marginLeft: 25,
                        marginRight: 25,
                      }}
                    />
                  </button>
                </div>
              ))}

              <div style={styles.textFieldEmailView}>
                <input
                  type="text"
                  placeholder="User Roles"
                  name="psw"
                  className="form-control"
                  value={this.state.role}
                  onChange={this.onChangeEmailText}
                  onKeyPress={this.onKeyPress}
                  onBlur={this.onBlur}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="createbutton" onClick={this.onClickButton}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    department: state.department.departments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnCreateUser: (
      firstName,
      lastName,
      email,
      department,
      roleArray,
      callBack
    ) =>
      dispatch(
        actions.createUser(
          firstName,
          lastName,
          email,
          department,
          roleArray,
          callBack
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
