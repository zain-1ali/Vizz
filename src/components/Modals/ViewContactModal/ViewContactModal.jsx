import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
// import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import "./ViewContact.scss";

const ViewContactModal = ({ viewModal, handleviewModal, viewData }) => {
  // console.log(iewDate)
  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "white",
    borderRadius: "18px",
    outline: "none",
    // overflow: 'auto',
    // border: '2px solid #000',
    boxShadow: 24,

    // p: linkModal ? "30px" : "2px",
  };

  return (
    <>
      <Modal
        open={viewModal}
        onClose={() => {
          handleviewModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <RxCross2
              style={{
                fontSize: "20px",
                marginTop: "10px",
                marginRight: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleviewModal()}
            />
          </div>
          <div className="view-contact-main">
            <div className="double-fields">
              <div className="single-field">
                <h2>Name</h2>
                <p>{viewData?.name}</p>
              </div>
              <div className="single-field">
                <h2>Email</h2>
                <p>{viewData?.email}</p>
              </div>
            </div>
            <div className="double-fields">
              <div className="single-field">
                <h2>Job Title</h2>
                <p>{viewData?.job}</p>
              </div>
              <div className="single-field">
                <h2>Company</h2>
                <p>{viewData?.company}</p>
              </div>
            </div>
            <div className="double-fields">
              <div className="single-field">
                <h2>Phone</h2>
                <p>{viewData?.phone}</p>
              </div>
              <div className="single-field">
                <h2>Date</h2>
                <p>{viewData?.date}</p>
              </div>
            </div>
            <div className="double-fields">
              <div className="single-field-note">
                <h2>Note</h2>
                <p>{viewData?.note}</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default ViewContactModal;
