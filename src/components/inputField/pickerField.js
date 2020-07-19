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
    // <div className="username">
    <div className="fieldItemWrapper">
    <div className="fieldItem">
      <FontAwesomeIcon
        icon={faUsers}
        style={{
          color: "gray",
          position: 'absolute',
          zIndex: 999,
          left: 0,
          top: 0,
          bottom: 0,
          height: '100%',
          paddingLeft: 15
        }}
      />

      <select
        name="departments"
        id="departments"
        onChange={props.onChange}
        value={props.value}
        // className="form-control"
        className = "inputWrapper fieldBg selectWrapper"
        required
      >
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="other">other</option>
      </select>
    {/* // </div> */}
    </div>
    </div>
  );
};
export default inputField;
