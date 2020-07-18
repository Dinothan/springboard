import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./inputFieldStyles.css";

const inputField = (props) => {
  return (
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
        type={props.type}
        placeholder={props.name}
        className="form-control"
        name="uname"
        onChange={props.onChange}
        value={props.value}
        required
      />
    </div>
  );
};
export default inputField;