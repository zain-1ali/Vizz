import React from "react";
import "./ContactCard.scss";
import bg from "../../imgs/bg.png";
import prfl from "../../imgs/vizzprfl.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ContactCard = () => {
  const navigate = useNavigate();

  return (
    <div className="contactcard">
      <div className="card-imgs">
        <img src={prfl} alt="" className="prfl" />
        <img src={bg} alt="" className="bg" />
      </div>
      <div className="contact-card-details">
        <h2>Jon Mike</h2>
        <div className="phone-container">
          <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} />
          +10101010110110
        </div>
        <div className="job-container">
          <BiSolidBriefcaseAlt
            style={{ fontSize: "30px", marginRight: "7px" }}
          />
          Keese producer / Company owner / www.rerse.sk / infe@mlke.k
        </div>

        <div className="location-container">
          <MdLocationOn style={{ fontSize: "15px", marginRight: "4px" }} />
          Za Solnou 1064/11
        </div>
      </div>
      <div className="btn-main">
        <button className="editbtn" onClick={() => navigate("/editcard")}>
          <BiSolidPencil
            style={{
              fontSize: "12px",
              marginRight: "3px",
            }}
          />
          Edit Card
        </button>
        <button className="sharebtn">
          <BsShareFill
            style={{
              fontSize: "10px",
              marginRight: "5px",
            }}
          />
          Share Card
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
