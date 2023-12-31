import React from "react";
import phonecase from "../../../imgs/phonecase.png";
import people from "../../../imgs/images.jpg";
import { FaPhoneAlt, FaRedditAlien, FaShareSquare } from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";

import "./Mobile.scss";
import { IoMdDownload } from "react-icons/io";
import { useSelector } from "react-redux";
import { returnIcons } from "../../../assets/ReturnSocialIcons";
import FadeLoader from "react-spinners/FadeLoader";

let theBio =
  "Short BIO about our company. Information that describes what we do, what we offer, etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ";
// -----------------------------------------------state from redux----------------------------------------------

const Mobile = ({ mobileData, color, check, linkInfo }) => {
  console.log(mobileData);
  let loading = useSelector((state) => state.ApiSlice.loading);
  let leadMode = useSelector((state) => state.profileInfoSlice.leadMode);
  // let allLinks = useSelector((state) => state.ApiSlice.addedLinks);
  let allLinks =
    check === "user"
      ? useSelector((state) => state.profileInfoSlice.links)
      : useSelector((state) => state.ApiSlice.addedLinks?.data);

  let hexToRGBA = (hex) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba = `rgba(${red}, ${green}, ${blue}, 0.1)`;

    return rgba;
  };
  let formField = ["Name", "Email", "Phone", "Company", "Job", "Note"];

  const formHeader = useSelector((state) => state.profileInfoSlice.formHeader);
  const nameVisible = useSelector(
    (state) => state.profileInfoSlice.nameVisible
  );
  const emailVisible = useSelector(
    (state) => state.profileInfoSlice.emailVisible
  );
  const companyVisible = useSelector(
    (state) => state.profileInfoSlice.companyVisible
  );
  const jobVisible = useSelector((state) => state.profileInfoSlice.jobVisible);
  const noteVisible = useSelector(
    (state) => state.profileInfoSlice.noteVisible
  );
  const phoneVisible = useSelector(
    (state) => state.profileInfoSlice.phoneVisible
  );

  // ------------------------------------states of colors for single employee------------------------------

  const textColor = useSelector((state) => state.profileInfoSlice.textColor);
  const btnColor = useSelector((state) => state.profileInfoSlice.btnColor);
  const shareBtnColor = useSelector(
    (state) => state.profileInfoSlice.shareBtnColor
  );
  const linkBgColor = useSelector(
    (state) => state.profileInfoSlice.linkBgColor
  );
  const linkColor = useSelector((state) => state.profileInfoSlice.linkColor);

  // ------------------------------------states of colors for organization------------------------------

  let orgTextColor = useSelector(
    (state) => state.profileInfoSlice.orgTextColor
  );

  let orgColor = useSelector((state) => state.profileInfoSlice.orgColor);

  let orgBtnColor = useSelector((state) => state.profileInfoSlice.orgBtnColor);
  let orgShareBtnColor = useSelector(
    (state) => state.profileInfoSlice.orgShareBtnColor
  );

  let orgLinkBgColor = useSelector(
    (state) => state.profileInfoSlice.orgLinkBgColor
  );

  let orgLinkColor = useSelector(
    (state) => state.profileInfoSlice.orgLinkColor
  );

  let returnSplitString = (string, num) => {
    if (string) {
      if (string?.length <= num) {
        return string;
      } else {
        return string?.slice(0, num) + "...";
      }
    }
  };

  // ----------------------------method for lead form fields show and hide--------------------------------------

  let ifHideField = (name) => {
    if (name === "Name") {
      return nameVisible === 1 ? true : null;
    }
    if (name === "Email") {
      return emailVisible === 1 ? true : null;
    }
    if (name === "Phone") {
      return phoneVisible === 1 ? true : null;
    }
    if (name === "Company") {
      return companyVisible === 1 ? true : null;
    }
    if (name === "Job") {
      return jobVisible === 1 ? true : null;
    }
    if (name === "Note") {
      return noteVisible === 1 ? true : null;
    }
  };
  console.log(allLinks);

  let returnNewLinkOrNot = () => {
    return allLinks?.some((elm) => {
      return elm?.linkId === linkInfo?.id;
    });
  };

  const poweredVizz = useSelector(
    (state) => state.profileInfoSlice.poweredVizz
  );

  let colorForLinks = check === "user" ? linkColor : orgLinkColor;

  return (
    <div className="mobile-main">
      {leadMode === 1 && (
        <div
          className="form-container"
          style={{ display: check === "organization" ? "none" : "flex" }}
        >
          <div className="form-main">
            <div className="form-inner">
              <div className="form-header">
                {returnSplitString(formHeader, 27)}
              </div>
              {formField?.map((elm) => {
                return (
                  ifHideField(elm) && (
                    <div className="form-single-field">{elm}</div>
                  )
                );
              })}
              <div className="btns-container">
                <button className="form-btn1">Cancel</button>

                <button className="form-btn2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="mobile-inner"
        style={{ backgroundColor: hexToRGBA(color) }}
      >
        {
          //
          mobileData?.name?.length >= 0 ? (
            <>
              <div className="bg-prfl-container">
                <img
                  src={
                    check === "user"
                      ? mobileData?.profileUrl
                        ? mobileData?.profileUrl
                        : "https://placehold.co/63x63"
                      : mobileData?.logoUrl
                      ? mobileData?.logoUrl
                      : "https://placehold.co/63x63"
                  }
                  alt=""
                  className="prfl-img"
                />
                <img
                  src={
                    mobileData?.coverUrl
                      ? mobileData?.coverUrl
                      : "https://placehold.co/186x130"
                  }
                  alt=""
                  className="bg-img"
                />
              </div>

              <div className="contact-card-details">
                <div className="contact-card-details-inner">
                  <h2
                    style={{
                      color: check === "user" ? textColor : orgTextColor,
                    }}
                  >
                    {mobileData?.name}
                  </h2>
                  <div
                    className="primary-info-container"
                    style={
                      mobileData?.organizationName ||
                      mobileData?.bio ||
                      mobileData?.organizationName ||
                      mobileData?.designation ||
                      mobileData?.orgPhone
                        ? { borderLeft: `2px solid ${color}` }
                        : null
                    }
                  >
                    {/* <div
                      className="border-line"
                      style={{ backgroundColor: color }}
                    ></div> */}
                    <div className="primary-info">
                      <div
                        className="phone-container"
                        style={{
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      >
                        {/* <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} /> */}
                        {returnSplitString(mobileData?.designation, 47)}
                      </div>
                      <div
                        className="job-container"
                        style={{
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      >
                        {/* <BiSolidBriefcaseAlt
                  style={{ fontSize: "25px", marginRight: "2px" }}
                /> */}
                        {returnSplitString(mobileData?.organizationName, 47)}
                      </div>
                      <div
                        className="location-container"
                        style={{
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      >
                        {returnSplitString(mobileData?.orgPhone, 96)}
                      </div>
                      <div
                        className="location-container"
                        style={{
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      >
                        {returnSplitString(mobileData?.bio, 96)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {check != "organization" && (
                <div className="btns-div">
                  <div className="btns-inner">
                    <div
                      className="btn1"
                      style={{
                        backgroundColor:
                          check === "user" ? btnColor : orgBtnColor,
                        color: check === "user" ? textColor : orgTextColor,
                      }}
                    >
                      <IoMdDownload
                        style={{ marginRight: "3px", fontSize: "13px" }}
                      />
                      Save Contact
                    </div>
                    <div
                      className="btn2"
                      style={{
                        color: check === "user" ? textColor : orgTextColor,
                        backgroundColor:
                          check === "user" ? shareBtnColor : orgShareBtnColor,
                      }}
                    >
                      <FaShareSquare
                        style={{
                          marginRight: "3px",
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      />{" "}
                      Share
                    </div>
                  </div>
                </div>
              )}
              {/* <div className="links-heading">
          <div className="line"></div>
          Your Links
          <div className="line"></div>
        </div> */}

              <div className="links-main">
                <div className="links-inner">
                  {allLinks?.map((elm) => {
                    return (
                      <div className="icon-container-upper">
                        <div
                          className="icon-container"
                          style={{
                            backgroundColor:
                              check === "user" ? linkBgColor : orgLinkBgColor,
                          }}
                        >
                          {/* <FaRedditAlien style={{ color: "white" }} />
                           */}
                          {returnIcons(elm.name, 14, colorForLinks)}
                        </div>
                        <p
                          style={{
                            color: check === "user" ? textColor : orgTextColor,
                          }}
                        >
                          {elm?.name}
                        </p>
                      </div>
                    );
                  })}
                  {linkInfo && (
                    <div
                      className="icon-container-upper"
                      style={returnNewLinkOrNot() ? { display: "none" } : null}
                    >
                      <div
                        className="icon-container"
                        style={{ backgroundColor: color }}
                      >
                        {/* <FaRedditAlien style={{ color: "white" }} />
                         */}
                        {returnIcons(linkInfo?.name, 14, colorForLinks)}
                      </div>
                      <p
                        style={{
                          color: check === "user" ? textColor : orgTextColor,
                        }}
                      >
                        {linkInfo?.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {check === "organization" ? (
                <div className="prfl-btm">
                  <div className="btm-inner">
                    <p style={{ color: orgTextColor }}>
                      Powered by <span>VIZZ</span>
                    </p>
                    <div
                      className="web-address"
                      style={{ color: orgTextColor }}
                    >
                      www.vizz.store
                    </div>
                  </div>
                </div>
              ) : poweredVizz === 1 ? (
                <div className="prfl-btm">
                  <div className="btm-inner">
                    <p style={{ color: textColor }}>
                      Powered by <span>VIZZ</span>
                    </p>
                    <div className="web-address" style={{ color: textColor }}>
                      www.vizz.store
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="progress-container">
              <FadeLoader color="rgba(222, 165, 39, 1)" size={10} />
            </div>
          )
        }
      </div>
      <img src={phonecase} alt="" className="phoneimg" />
    </div>
  );
};

export default Mobile;
