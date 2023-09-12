import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./CustomModal.scss";
import { closeCustomModal } from "../../../redux/Modalslice";
import { Box } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

import { BsPlusLg } from "react-icons/bs";
// import {
//   contactIcons,
//   returnIcons,
//   socialIcons,
// } from "../../assets/ReturnSocialIcons";
import {
  getAllSocialLinks,
  getOrganizationLinks,
  signOutUser,
} from "../../../redux/ApisSlice";
import { AiOutlineArrowRight, AiOutlineMinus } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import Linkeditmodal from "./Linkeditmodal";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import LinkupdateModal from "./LinkupdateModal";
// import { setLinkDescription, setLinkHighlight } from "../Redux/UserinfoSlice";
// import { useMediaQuery } from "react-responsive";

// import { removeLink } from "../Redux/Singlelinkslice";

const CustomModal = ({ name }) => {
  // console.log(link);

  const modal = useSelector((state) => state.modalHandeler.CustomModal);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let navigateToLogin = () => {
    navigate("/");
  };

  let allLinks = useSelector((state) => state.ApiSlice.allLinks);

  let addedLinks = useSelector((state) => state.ApiSlice.addedLinks);

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    height: 170,
    bgcolor: "white",
    borderRadius: "18px",
    // overflow: 'auto',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: linkModal ? "30px" : "2px",
  };

  return (
    <>
      <Modal
        open={modal}
        onClose={() => {
          dispatch(closeCustomModal());
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          {name === "logoutWarning" && (
            <>
              <div className="logout-warn">
                <h2>Are You Sure to Logout From This Devise ?</h2>
                <div className="btn-main">
                  <button
                    className="editbtn"
                    onClick={() => dispatch(closeCustomModal())}
                  >
                    Cancel
                  </button>
                  <button
                    className="sharebtn"
                    onClick={() => {
                      dispatch(signOutUser(navigateToLogin)),
                        dispatch(closeCustomModal());
                    }}
                  >
                    Sure
                  </button>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default CustomModal;
