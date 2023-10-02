import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";

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
import { addEmployee, getOrganization } from "../../../redux/ApisSlice";
import "./CreateCardModal.scss";

const CreateCardModal = ({ cardModal, handlecardModal }) => {
  const dispatch = useDispatch();

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 200,
    bgcolor: "white",
    borderRadius: "18px",
    outline: "none",
    // overflow: 'auto',
    // border: '2px solid #000',
    boxShadow: 24,

    // p: linkModal ? "30px" : "2px",
  };

  useEffect(() => {
    dispatch(getOrganization());
  }, []);
  let organisation = useSelector((state) => state.ApiSlice.organization);
  //   console.log(linkEditmodal);
  // prvModal,

  let [data, setData] = useState({
    name: "",
    email: "",
  });
  return (
    <>
      <Modal
        open={cardModal}
        onClose={() => {
          handlecardModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div className="form-content">
            <div className="name-fields">
              <div className="singlefield">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="nameinput"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
              </div>

              <div className="singlefield">
                <p>Email</p>{" "}
                <input
                  type="text"
                  placeholder="Email"
                  className="nameinput"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
              </div>
            </div>
            <div></div>

            <div className="btn-main">
              <button className="editbtn" onClick={() => handlecardModal()}>
                Cancel
              </button>
              <button
                className="sharebtn"
                onClick={() => {
                  dispatch(addEmployee(data)), handlecardModal();
                }}
              >
                Create
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default CreateCardModal;
