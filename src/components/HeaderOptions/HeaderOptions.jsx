import React from "react";
import "../HeaderOptions/HeaderOptions.css";
import { Avatar } from "@mui/material";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOpt__icon" />}
      {avatar && <Avatar className="headerOpt__icon" src={avatar} />}
      <h3 className="headerOpt__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
