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
import { getOrganization } from "../../../redux/ApisSlice";

const PrflPreviwModal = ({ prvModal, handlePrvModal }) => {
  // console.log(link);
  //   const linkModal = useSelector((state) => state.modalHandeler.linkmodal);
  //   const linkEditmodal = useSelector(
  //     (state) => state.modalHandeler.linkeditmodal
  //   );
  //   const linkupdateModal = useSelector(
  //     (state) => state.modalHandeler.linkupdateModal
  //   );
  //   const modal = useSelector((state) => state.modalHandeler.modal);
  const dispatch = useDispatch();

  // getting all social links from backend

  //   useEffect(() => {
  //     dispatch(getAllSocialLinks());
  //     if (check === "user") {
  //       dispatch(getUserLinks(userId));
  //     } else {
  //       dispatch(getOrganizationLinks());
  //     }
  //   }, []);

  //   let allLinks = useSelector((state) => state.ApiSlice.allLinks);
  //   // console.log(allLinks.data);

  //   let addedLinks = useSelector((state) => state.ApiSlice.addedLinks);
  //   // console.log(addedLinks.data);

  //   let [linkInfo, setLinkInfo] = useState("");
  //   let addedOrNot = (id) => {
  //     let ifadded = addedLinks?.data?.some((elm) => {
  //       return elm?.linkId === id;
  //     });

  //     return ifadded;
  //   };

  //   let getAddedLink = (id) => {
  //     let theLink = addedLinks?.data?.find((elm) => {
  //       return elm?.linkId === id;
  //     });
  //     setLinkInfo(theLink?.value);
  //   };

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 500,
    bgcolor: "white",
    borderRadius: "18px",
    // overflow: 'auto',
    // border: '2px solid #000',
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // p: linkModal ? "30px" : "2px",
  };

  useEffect(() => {
    dispatch(getOrganization());
  }, []);
  let organisation = useSelector((state) => state.ApiSlice.organization);
  //   console.log(linkEditmodal);
  // prvModal,
  let mobileData = {};
  return (
    <>
      <Modal
        open={prvModal}
        onClose={() => {
          handlePrvModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Mobile mobileData={organisation?.data} />
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default PrflPreviwModal;
