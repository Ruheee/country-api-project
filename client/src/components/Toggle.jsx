import React from "react";
import { BsMoon } from "react-icons/bs";

import "../styles/Toggle.scss"

export const Toggle = (props) => {

  return (
    <div className="span" onClick={() => props.setWebTheme()}>
        <BsMoon />
        Dark Mode
    </div>
  );
};
