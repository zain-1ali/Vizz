import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import "./Contact.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { PiWarningCircleThin } from "react-icons/pi";
import people from "../../imgs/images.jpg";
import { AiFillEye } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { colors } from "@mui/material";

const Contacts = () => {
  //   console.log(screen.width);
  return (
    <div className="contact-main">
      <Sidebar />
      <div className="contact-inner">
        {/*-------------------------------header section-------------------------------------*/}
        <div className="contact-header">
          <div className="profilebtn">
            <p>Contacts</p>
          </div>

          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <BiSearchAlt className="searchicon" />
          </div>
          <div className="csvbtn">
            <AiOutlineDownload
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            Export via CVS
          </div>
        </div>

        {/*-------------------------------info section-------------------------------------*/}

        <div className="contact-info-container">
          <div className="info-inner">
            <div className="info">
              <div className="info-inner">
                <div className="icon-container">
                  <RiErrorWarningLine style={{ fontSize: "27px" }} />
                </div>
                <div className="text-container">
                  <h2 className="main-heading">
                    Ensure you have enabled contact exchange
                  </h2>
                  <p className="para-info">
                    These are the contacts you have received if contact exchange
                    is enabled on your profile.
                  </p>
                  <h2 className="learn-more">Learn more</h2>
                </div>
              </div>
            </div>
            <div className="lead-stats">
              <div className="lead-stats-inner">
                <div className="total-leads">
                  <span>
                    Leads Generated{" "}
                    <PiWarningCircleThin
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                  </span>
                  <h2>75</h2>
                </div>
                <div className="pi-chart">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------table section-------------------------------------*/}

        <div className="tableContainer">
          <div className="table-head">
            <h2 className="col-heading">Contact</h2>
            <h2 className="col-heading">Email</h2>
            <h2 className="col-heading">Contacted with</h2>
            <h2 className="col-heading">Date</h2>
            <h2 className="col-heading">Actions</h2>
          </div>
          <div className="table-rows">
            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
