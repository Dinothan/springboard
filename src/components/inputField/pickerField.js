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
        icon={faUsers}
        style={{
          color: "gray",
          justifyContent: "center",
          marginLeft: 25,
          marginRight: 25,
        }}
      />

      <select
        name="departments"
        id="departments"
        onChange={props.onChange}
        value={props.value}
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
  );
};
export default inputField;
