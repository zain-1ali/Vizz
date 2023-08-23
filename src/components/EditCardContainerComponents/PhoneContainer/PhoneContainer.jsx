import React from "react";
import "./PhoneContainer.scss";
import Mobile from "../Mobile/Mobile";
import { FiExternalLink } from "react-icons/fi";
const PhoneContainer = () => {
  return (
    <div className="phone-container-main">
      <div className="view-card-btn">
        <FiExternalLink
          style={{ color: "#FFFFFF", marginRight: "4px", fontSize: "15px" }}
        />
        View Card
      </div>
      <Mobile />
    </div>
  );
};

export default PhoneContainer;
