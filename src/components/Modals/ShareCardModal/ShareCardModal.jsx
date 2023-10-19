import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./ShareCard.scss";

import { Box } from "@mui/material";

import { RxCross2 } from "react-icons/rx";
import { HiBadgeCheck } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import {
  contactIcons,
  returnIcons,
  socialIcons,
} from "../../../assets/ReturnSocialIcons";
import { AiOutlineArrowRight, AiOutlineMinus } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import Mobile from "../../EditCardContainerComponents/Mobile/Mobile";
import { getOrganization } from "../../../redux/ApisSlice";
import { MdArrowBackIos } from "react-icons/md";
import { BiSolidCopy } from "react-icons/bi";
import { PiShare } from "react-icons/pi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import { toast } from "react-toastify";

const ShareCardModal = ({ shareModal, handleShareModal, userId }) => {
  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 484,
    height: 310,
    backgroundColor: "white",
    borderRadius: "36px",
    outline: "none",
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let sliceString = (str) => {
    if (str?.length > 40) {
      return str?.slice(0, 40) + "...";
    } else {
      return str;
    }
  };

  let profileUrl = import.meta.env.VITE_PROFILE_URL;
  let shareUrl = profileUrl + userId;
  return (
    <>
      <Modal
        open={shareModal}
        onClose={() => handleShareModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div className="share-main">
            <div className="go-back" onClick={() => handleShareModal()}>
              <MdArrowBackIos style={{ fontSize: "14px" }} />
              <p>Go back</p>
            </div>

            <h2>Copy Link</h2>
            <div className="url-container">
              <p className="url">{sliceString(profileUrl + userId)}</p>
              <div
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText(profileUrl + userId),
                    toast.success("Copied to clipboard");
                }}
              >
                <BiSolidCopy style={{ color: "white", fontSize: "18px" }} />
                <p>Copy</p>
              </div>
            </div>

            <h2>Share Card</h2>
            <div className="link-container">
              <WhatsappShareButton
                id="whatsapp"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Whatsapp", 15)}
                    </div>
                    <p>Whatsapp</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </WhatsappShareButton>

              <TelegramShareButton
                id="telegram"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Telegram", 15)}
                    </div>
                    <p>Telegram</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </TelegramShareButton>
              <EmailShareButton
                id="email"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Email", 15)}
                    </div>
                    <p>Email</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </EmailShareButton>
            </div>
            <div className="link-container">
              <FacebookShareButton
                id="facebook"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Facebook", 15)}
                    </div>
                    <p>Facebook</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </FacebookShareButton>
              <LinkedinShareButton
                id="linkedin"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Linkedin", 15)}
                    </div>
                    <p>Linkedin</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </LinkedinShareButton>
              <TwitterShareButton
                id="twitter"
                url={"quote" + "\n" + shareUrl}
                text={"Please find my Profile Link below:"}
                hashtag="#React"
              >
                <div className="single-link">
                  <div className="link-inner">
                    <div className="icon-container">
                      {" "}
                      {returnIcons("Twitter", 15)}
                    </div>
                    <p>Twitter</p>
                    <PiShare style={{ color: "white", fontSize: "18px" }} />
                  </div>
                </div>
              </TwitterShareButton>
            </div>
          </div>
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default ShareCardModal;
