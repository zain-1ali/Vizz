import React from "react";
import "./PhoneContainer.scss";
import Mobile from "../Mobile/Mobile";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";
const PhoneContainer = ({ userId }) => {
  const name = useSelector((state) => state.profileInfoSlice.name);
  const email = useSelector((state) => state.profileInfoSlice.email);
  const color = useSelector((state) => state.profileInfoSlice.color);
  const phone = useSelector((state) => state.profileInfoSlice.phone);
  const coverUrl = useSelector((state) => state.profileInfoSlice.coverUrl);
  const profileUrl = useSelector((state) => state.profileInfoSlice.profileUrl);
  const address = useSelector((state) => state.profileInfoSlice.address);
  const bio = useSelector((state) => state.profileInfoSlice.bio);
  const designation = useSelector(
    (state) => state.profileInfoSlice.designation
  );
  const links = useSelector((state) => state.profileInfoSlice.links);
  let mobileData = {
    name,
    email,
    color,
    phone,
    coverUrl,
    profileUrl,
    address,
    bio,
    links,
    designation,
  };
  let cardUrl = import.meta.env.VITE_PROFILE_URL;
  return (
    <div className="phone-container-main">
      <div
        className="view-card-btn"
        onClick={() => window.open(`${cardUrl}${userId}`)}
      >
        <FiExternalLink
          style={{ color: "#FFFFFF", marginRight: "4px", fontSize: "15px" }}
        />
        View Card
      </div>
      <Mobile mobileData={mobileData} color={color} check="user" />
    </div>
  );
};

export default PhoneContainer;
