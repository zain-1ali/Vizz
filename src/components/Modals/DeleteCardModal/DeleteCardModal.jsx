import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./DeleteCardModal.scss";
import { closeCustomModal } from "../../../redux/Modalslice";
import { Box } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import Linkeditmodal from "./Linkeditmodal";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import LinkupdateModal from "./LinkupdateModal";
// import { setLinkDescription, setLinkHighlight } from "../Redux/UserinfoSlice";
// import { useMediaQuery } from "react-responsive";

// import { removeLink } from "../Redux/Singlelinkslice";

const DeleteCardModal = ({
  handledeleteModal,
  deletemodal,
  deleteEmployee,
  deleteOrg,
  vizzRole,
}) => {
  // console.log(link);

  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  // let deleteTheLead = () => {
  //   deleteSingleLead()
  // };

  let returnDel = () => {
    if (vizzRole === "admin") {
      deleteOrg();
    } else {
      deleteEmployee();
    }
  };

  return (
    <>
      <Modal
        open={deletemodal}
        onClose={() => {
          handledeleteModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <>
            <div className="logout-warn">
              <h2>Are you sure you want to delete this card?</h2>
              <div className="btn-main">
                <button className="editbtn" onClick={() => handledeleteModal()}>
                  Cancel
                </button>
                <button className="sharebtn" onClick={() => returnDel()}>
                  Sure
                </button>
              </div>
            </div>
          </>
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default DeleteCardModal;
