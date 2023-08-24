import React from "react";
import "./Settings.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings-main">
      <Sidebar />
      <div className="settings-inner"></div>
    </div>
  );
};

export default Settings;
