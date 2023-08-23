import React from "react";
import "./Lead.scss";
import { Switch } from "@mui/material";

const Lead = () => {
  return (
    <div className="lead-main">
      <div className="lead-inner">
        <div className="lead-direct">Lead Capture</div>
        <div className="disc-toggle">
          <div className="description">
            <h2>Lead Capture Mode</h2>
            <p>
              When lead capture mode is enabled, the lead form will popup as
              soon as your profile is shared
            </p>
          </div>
          <div className="toggle">
            <Switch defaultChecked size="large" />
          </div>
        </div>
        <div className="form-header">
          <h2 className="heading">Form Header</h2>
          <input type="text" />
        </div>
        <div className="description2">
          <h2 className="heading2">Input Fields</h2>
          <p className="paragraph">
            When lead capture mode is enabled, the lead form will popup as soon
            as your profile is shared
          </p>
        </div>
        <div className="form-input-options"></div>
      </div>
    </div>
  );
};

export default Lead;
