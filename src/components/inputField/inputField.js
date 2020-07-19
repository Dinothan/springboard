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
    <div className="fieldItemWrapper">
      <div className="fieldItem">
        <FontAwesomeIcon
          icon={props.icon}
          style={{
            color: "gray",
            position: "absolute",
            zIndex: 999,
            left: 0,
            top: 0,
            bottom: 0,
            height: "100%",
            paddingLeft: 15,
          }}
        />
        <input
          type={props.type}
          placeholder={props.name}
          className={
            props.formIsValid
              ? "inputWrapper fieldBg"
              : "inputWrapper fieldBg errorField"
          }
          // className="inputWrapper fieldBg"
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          required
        />
      </div>
    </div>
  );
};
export default inputField;
