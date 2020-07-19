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
import InputField from "../inputField/inputField";
import PickerField from "../inputField/pickerField";

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
      validfn: true,
      validln: true,
      validemail: true,
      validrole: true,
    };
  }

  onChangeEmailText = (e) => {
    if (e.target.value.trim()) {
      this.setState({ role: e.target.value });
    } else {
      this.setState({ role: "" });
    }
  };

  onBlur = (e) => {
    if (this.state.role) {
      const roleArray = [...this.state.roleArray];
      roleArray.push({ role: this.state.role });
      if (roleArray.length === 50) {
        this.setState({ editable: false });
      }
      this.setState({ role: "", roleArray: roleArray, validrole: true }, () => {
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
    if (!e.target.value.match(/^[a-zA-Z]+$/)) {
      this.setState({ validfn: false });
    } else {
      this.setState({ validfn: true });
    }
    this.setState({ firstName: e.target.value });
  };

  onChangeLastName = (e) => {
    if (!e.target.value.match(/^[a-zA-Z]+$/)) {
      this.setState({ validln: false });
    } else {
      this.setState({ validln: true });
    }
    this.setState({ lastName: e.target.value });
  };

  onChangeEmail = (e) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = re.test(String(e.target.value).toLowerCase());
    if (testEmail === true) {
      this.setState({ validemail: true });
    } else {
      this.setState({ validemail: false });
    }
    this.setState({ email: e.target.value });
  };

  onChangeDept = (e) => {
    this.setState({ department: e.target.value });
  };

  onClickButton = () => {
    const { firstName, lastName, email, department, roleArray } = this.state;
    if (
      firstName &&
      lastName &&
      email &&
      department &&
      roleArray &&
      roleArray.length > 0
    ) {
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
    } else {
      if (firstName === "") {
        this.setState({ validfn: false });
      }
      if (lastName === "") {
        this.setState({ validln: false });
      }
      if (email === "") {
        this.setState({ validemail: false });
      }
      if (roleArray === [] || roleArray.length === 0) {
        this.setState({ validrole: false });
      }
    }
  };

  roles = (role) => {
    return (
      <a onClick={() => this.remove(role)}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            color: "gray",
            justifyContent: "center",
            marginLeft: 25,
            marginRight: 25,
          }}
        />
      </a>
    );
  };

  render() {
    return (
      <div className="container contentLayoutCenter">
        {/* <div className="contentWrapper"> */}
        <div className="contentLayout">
          <div className="pageTitle">
            <div className="h2">
              <h2>Create User </h2>
            </div>
            <div className="subText1">Add users into springboard plateform</div>
          </div>
          <div className="pageContent">
            <div className="formBg">
              <div className="fieldRow">
                <div className="fieldCol">
                  <InputField
                    name={"First Name"}
                    onChange={this.onChangeFirstName}
                    value={this.state.firstName}
                    type={"text"}
                    icon={faUser}
                    formIsValid={this.state.validfn}
                  />
                </div>
                <div className="fieldCol">
                  <InputField
                    name={"Last Name"}
                    onChange={this.onChangeLastName}
                    value={this.state.lastName}
                    type={"text"}
                    icon={faUser}
                    formIsValid={this.state.validln}
                  />
                </div>
              </div>

              <div className="fieldRow">
                <div className="fieldCol">
                  <InputField
                    name={"Email Address"}
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                    type={"email"}
                    icon={faEnvelope}
                    formIsValid={this.state.validemail}
                  />
                </div>
                <div className="fieldCol">
                  <PickerField
                    onChange={this.onChangeDept}
                    value={this.state.department}
                  />
                </div>
              </div>

              <div className="fieldRow fielSep">
                <div className="fieldColFull">
                  <div className="fieldItemWrapper">
                    <div className="fieldItem">
                      <div class="subText">User Roles : </div>

                      <div className="content">
                        {this.state.roleArray.map((res, index) => (
                          <div className="content1">
                            <div style={styles.textPrimeSm}>{res.role}</div>
                            {this.roles(res.role)}
                          </div>
                        ))}
                      </div>

                      <input
                        type="text"
                        name="psw"
                        className={
                          this.state.validrole
                            ? "inputLgWrapper"
                            : "inputLgWrapper errorField"
                        }
                        value={this.state.role}
                        onChange={this.onChangeEmailText}
                        onKeyPress={this.onKeyPress}
                        onBlur={this.onBlur}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="fieldRow noMg">
                <div className="fieldColFull">
                  <div className="fieldItemWrapper">
                    <div className="fieldItem">
                      <button
                        className="createbutton"
                        onClick={this.onClickButton}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
