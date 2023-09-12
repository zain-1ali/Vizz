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

let returnSplitString = (string) => {
  if (string.length <= 96) {
    return string;
  } else {
    return string?.slice(0, 95) + "...";
  }
};

let theBio =
  "Short BIO about our company. Information that describes what we do, what we offer, etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ";
const Mobile = () => {
  return (
    <div className="mobile-main">
      <div className="mobile-inner">
        <div className="bg-prfl-container">
          <img src={people} alt="" className="prfl-img" />
          <img src="https://placehold.co/186x130" alt="" className="bg-img" />
        </div>

        <div className="contact-card-details">
          <div className="contact-card-details-inner">
            <h2>Jon Mike</h2>
            <div className="primary-info-container">
              <div className="border-line"></div>
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
                  {returnSplitString(theBio)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns-div">
          <div className="btns-inner">
            <div className="btn1">
              <IoMdDownload style={{ marginRight: "3px", fontSize: "13px" }} />
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
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Facebook</p>
            </div>
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Instagram asdfdd</p>
            </div>
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>
            <div className="icon-container-upper">
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>
          </div>
        </div>
        <div className="prfl-btm">
          <div className="btm-inner">
            <p>
              Powered by <span>VIZZ</span>
            </p>
            <div className="web-address">www.vizz.store</div>
          </div>
        </div>
      </div>
      <img src={phonecase} alt="" className="phoneimg" />
    </div>
  );
};

export default Mobile;
