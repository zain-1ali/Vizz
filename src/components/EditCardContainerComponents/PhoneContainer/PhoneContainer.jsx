import React from "react";
import "./PhoneContainer.scss";
import Mobile from "../Mobile/Mobile";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";
const PhoneContainer = () => {
  const name = useSelector((state) => state.profileInfoSlice.name);
  const email = useSelector((state) => state.profileInfoSlice.email);
  const color = useSelector((state) => state.profileInfoSlice.color);
  const phone = useSelector((state) => state.profileInfoSlice.phone);
  const cover = useSelector((state) => state.profileInfoSlice.coverUrl);
  const profile = useSelector((state) => state.profileInfoSlice.profileUrl);
  const address = useSelector((state) => state.profileInfoSlice.address);
  const bio = useSelector((state) => state.profileInfoSlice.bio);
  const links = useSelector((state) => state.profileInfoSlice.links);
  let mobileData = {
    name,
    email,
    color,
    phone,
    cover,
    profile,
    address,
    bio,
    links,
  };
  return (
    <div className="phone-container-main">
      <div className="view-card-btn">
        <FiExternalLink
          style={{ color: "#FFFFFF", marginRight: "4px", fontSize: "15px" }}
        />
        View Card
      </div>
      <Mobile mobileData={mobileData} />
    </div>
  );
};

export default PhoneContainer;
