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
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoIosNotificationsOutline />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoIosSettings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
