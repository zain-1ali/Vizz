import React from "react";
import phonecase from "../../../imgs/phonecase.png";
import people from "../../../imgs/images.jpg";
import { FaPhoneAlt, FaRedditAlien } from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";

import "./Mobile.scss";

const Mobile = () => {
  return (
    <div className="mobile-main">
      <div className="mobile-inner">
        <div className="bg-prfl-container">
          <img src={people} alt="" className="prfl-img" />
          <img src="https://placehold.co/186x130" alt="" className="bg-img" />
        </div>

        <div className="contact-card-details">
          <h2>Jon Mike</h2>
          <div className="phone-container">
            <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} />
            +10101010110110
          </div>
          <div className="job-container">
            <BiSolidBriefcaseAlt
              style={{ fontSize: "25px", marginRight: "2px" }}
            />
            Keese producer / Company owner / www.rerse.sk / infe@mlke.k
          </div>

          <div className="location-container">
            <MdLocationOn style={{ fontSize: "15px", marginRight: "4px" }} />
            Za Solnou 1064/11
          </div>
        </div>

        <div className="links-heading">
          <div className="line"></div>
          Your Links
          <div className="line"></div>
        </div>

        <div className="links-main">
          <div className="links-inner">
            <div className="icon-container">
              <FaRedditAlien style={{ color: "white" }} />
            </div>

            <div className="icon-container">
              <FaRedditAlien style={{ color: "white" }} />
            </div>

            <div className="icon-container">
              <FaRedditAlien style={{ color: "white" }} />
            </div>

            <div className="icon-container">
              <FaRedditAlien style={{ color: "white" }} />
            </div>

            <div className="icon-container">
              <FaRedditAlien style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
      <img src={phonecase} alt="" className="phoneimg" />
    </div>
  );
};

export default Mobile;
