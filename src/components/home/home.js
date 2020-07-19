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
      <div className="card cardShadow">
        <div className="nameBorder">
          <div className="nameDet">
            <div className="firstName nameLabel">{firstName}</div>
            <div className="lastName  nameLabelBold">{lastName}</div>
          </div>
          <div className="icon iconDet">
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
                // "https://www.iconninja.com/files/904/826/370/human-speak-communicate-humans-icon.png"
              }
              style={{
                // height: 200,
                // width: 200,
                // borderRadius: 200,
                // backgroundColor: '#60ba96'
                height: "100%",
                width: "100%",
                borderRadius: "100%",
                border: "1px solid #60ba96",
                backgroundColor: "#60ba96",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container contentLayoutCenter">
        <div className="contentLayout">
          <div className="pageContent">
            <div>
              {this.state.users.length > 0 ? (
                <div className="homeWrapper">
                  {this.state.IT.length > 0 ? (
                    <div className="department">
                      <div>IT</div>

                      <div className="listRow">
                        {this.state.IT.map(
                          ({
                            firstName,
                            lastName,
                            department,
                            email,
                            roleArray,
                          }) =>
                            this.viewDept(
                              firstName,
                              lastName,
                              department,
                              email,
                              roleArray
                            )
                        )}
                      </div>
                    </div>
                  ) : null}

                  {this.state.Finance.length > 0 ? (
                    <div className="department">
                      <div>Finance</div>
                      <div className="listRow">
                        {this.state.Finance.map(
                          ({
                            firstName,
                            lastName,
                            department,
                            email,
                            roleArray,
                          }) =>
                            this.viewDept(
                              firstName,
                              lastName,
                              department,
                              email,
                              roleArray
                            )
                        )}
                      </div>
                    </div>
                  ) : null}

                  {this.state.HR.length > 0 ? (
                    <div className="department">
                      <div>HR</div>
                      <div className="listRow">
                        {this.state.HR.map(
                          ({
                            firstName,
                            lastName,
                            department,
                            email,
                            roleArray,
                          }) =>
                            this.viewDept(
                              firstName,
                              lastName,
                              department,
                              email,
                              roleArray
                            )
                        )}
                      </div>
                    </div>
                  ) : null}

                  {this.state.Marketing.length > 0 ? (
                    <div className="department">
                      <div>Marketing</div>
                      <div className="listRow">
                        {this.state.Marketing.map(
                          ({
                            firstName,
                            lastName,
                            department,
                            email,
                            roleArray,
                          }) =>
                            this.viewDept(
                              firstName,
                              lastName,
                              department,
                              email,
                              roleArray
                            )
                        )}
                      </div>
                    </div>
                  ) : null}

                  {this.state.other.length > 0 ? (
                    <div className="department">
                      <div>other</div>
                      <div className="listRow">
                        {this.state.other.map(
                          ({
                            firstName,
                            lastName,
                            department,
                            email,
                            roleArray,
                          }) =>
                            this.viewDept(
                              firstName,
                              lastName,
                              department,
                              email,
                              roleArray
                            )
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
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
