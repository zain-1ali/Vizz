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

let returnSplitString = (string) => {
  if (string) {
    if (string?.length <= 96) {
      return string;
    } else {
      return string?.slice(0, 95) + "...";
    }
  }
};

let theBio =
  "Short BIO about our company. Information that describes what we do, what we offer, etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ";
// -----------------------------------------------state from redux----------------------------------------------

const Mobile = ({ mobileData, color }) => {
  // console.log(mobileData);
  let loading = useSelector((state) => state.ApiSlice.loading);

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
  return (
    <div className="mobile-main">
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
                    mobileData?.profileUrl
                      ? mobileData?.profileUrl
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
                  <h2 style={{ color }}>{mobileData?.name}</h2>
                  <div className="primary-info-container">
                    <div
                      className="border-line"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="primary-info">
                      <div className="phone-container">
                        {/* <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} /> */}
                        Job Title
                      </div>
                      <div className="job-container">
                        {/* <BiSolidBriefcaseAlt
                  style={{ fontSize: "25px", marginRight: "2px" }}
                /> */}
                        Company Name
                      </div>

                      <div className="location-container">
                        {returnSplitString(mobileData?.bio)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns-div">
                <div className="btns-inner">
                  <div className="btn1" style={{ backgroundColor: color }}>
                    <IoMdDownload
                      style={{ marginRight: "3px", fontSize: "13px" }}
                    />
                    Save Contact
                  </div>
                  <div className="btn2">
                    <FaShareSquare style={{ marginRight: "3px" }} /> Share
                  </div>
                </div>
              </div>

              {/* <div className="links-heading">
          <div className="line"></div>
          Your Links
          <div className="line"></div>
        </div> */}

              <div className="links-main">
                <div className="links-inner">
                  {mobileData?.links?.map((elm) => {
                    return (
                      <div className="icon-container-upper">
                        <div
                          className="icon-container"
                          style={{ backgroundColor: color }}
                        >
                          {/* <FaRedditAlien style={{ color: "white" }} />
                           */}
                          {returnIcons(elm.name, 14)}
                        </div>
                        <p>{elm?.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="prfl-btm">
                <div className="btm-inner">
                  <p style={{ color }}>
                    Powered by <span>VIZZ</span>
                  </p>
                  <div className="web-address" style={{ color }}>
                    www.vizz.store
                  </div>
                </div>
              </div>
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
