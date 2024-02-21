import React from "react";
import "./topbar.css";
import { IoIosNotificationsOutline, IoIosSettings } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NutiHub Admin</span>
        </div>
      </div>
    </div>
  );
}
