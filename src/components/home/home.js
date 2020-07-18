import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./homeStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: props.department ? props.department : [],
      users: props.users.users ? props.users.users : [],
      IT: this.dataFilter(props.users.users, "IT"),
      Finance: this.dataFilter(props.users.users, "Finance"),
      HR: this.dataFilter(props.users.users, "HR"),
      Marketing: this.dataFilter(props.users.users, "Marketing"),
      other: this.dataFilter(props.users.users, "other"),
    };
  }

  dataFilter = (dept, id) => {
    if (dept) {
      return dept.filter(function (therapie) {
        return therapie.department === id;
      });
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { department, users } = nextProps;
    this.setState({
      users: users.users ? users.users : [],
      IT: this.dataFilter(users.users, "IT"),
      Finance: this.dataFilter(users.users, "Finance"),
      HR: this.dataFilter(users.users, "HR"),
      Marketing: this.dataFilter(users.users, "Marketing"),
      other: this.dataFilter(users.users, "other"),
    });
  };

  deleteUser = (fn) => {
    this.props.onDelete(fn);
  };

  viewDept = (firstName, lastName, department, email, roleArray) => {
    return (
      <div className="card">
        <div className="nameBorder">
          <div>
            <div className="firstName">{firstName}</div>
            <div className="lastName">{lastName}</div>
          </div>
          <div className="icon">
            <a onClick={() => this.deleteUser(firstName)}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{
                  color: "gray",
                  // marginLeft: 250,
                  // marginRight: 25,
                }}
              />
            </a>
          </div>
        </div>
        <div className="imageCard">
          <div>
            <img
              src={
                "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
              }
              style={{
                height: 200,
                width: 200,
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.users.length > 0 ? (
          <div className="home">
            {this.state.IT.length > 0 ? (
              <div className="department">
                <div>IT</div>
                {this.state.IT.map(
                  ({ firstName, lastName, department, email, roleArray }) =>
                    this.viewDept(
                      firstName,
                      lastName,
                      department,
                      email,
                      roleArray
                    )
                )}
              </div>
            ) : null}

            {this.state.Finance.length > 0 ? (
              <div className="department">
                <div>Finance</div>
                {this.state.Finance.map(
                  ({ firstName, lastName, department, email, roleArray }) =>
                    this.viewDept(
                      firstName,
                      lastName,
                      department,
                      email,
                      roleArray
                    )
                )}
              </div>
            ) : null}

            {this.state.HR.length > 0 ? (
              <div className="department">
                <div>HR</div>
                {this.state.HR.map(
                  ({ firstName, lastName, department, email, roleArray }) =>
                    this.viewDept(
                      firstName,
                      lastName,
                      department,
                      email,
                      roleArray
                    )
                )}
              </div>
            ) : null}

            {this.state.Marketing.length > 0 ? (
              <div className="department">
                <div>Marketing</div>
                {this.state.Marketing.map(
                  ({ firstName, lastName, department, email, roleArray }) =>
                    this.viewDept(
                      firstName,
                      lastName,
                      department,
                      email,
                      roleArray
                    )
                )}
              </div>
            ) : null}

            {this.state.other.length > 0 ? (
              <div className="department">
                <div>other</div>

                {this.state.other.map(
                  ({ firstName, lastName, department, email, roleArray }) =>
                    this.viewDept(
                      firstName,
                      lastName,
                      department,
                      email,
                      roleArray
                    )
                )}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    department: state.department.departments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (fn) => dispatch(actions.onDelete(fn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
