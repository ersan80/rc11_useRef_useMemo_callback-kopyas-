import React,{memo} from "react";
import cw from "../assets/cw_logo.png";

const Header = ({ img }) => {
  console.log("header");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt=""
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);
