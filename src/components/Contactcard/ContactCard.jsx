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

const ContactCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="contactcard">
      <div className="card-imgs">
        <img src={prfl} alt="" className="prfl" />
        <img src={bg} alt="" className="bg" />
      </div>
      <div className="contact-card-details">
        <h2>{data?.name}</h2>
        {data?.phone && (
          <div className="phone-container">
            <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} />
            {data?.phone}
          </div>
        )}
        {data?.bio && (
          <div className="job-container">
            <BiSolidBriefcaseAlt
              style={
                data?.bio.length <= 28
                  ? { fontSize: "15px", marginRight: "4px" }
                  : { fontSize: "30px", marginRight: "7px" }
              }
            />
            {data?.bio}
          </div>
        )}

        {data?.address && (
          <div className="location-container">
            <MdLocationOn style={{ fontSize: "15px", marginRight: "4px" }} />
            {data?.address}
          </div>
        )}
      </div>
      <div className="btn-main">
        <button
          className="editbtn"
          onClick={() => navigate(`/editcard/${data?.id}`)}
        >
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
