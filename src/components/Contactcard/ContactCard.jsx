import React, { useState } from "react";
import "./ContactCard.scss";
import bg from "../../imgs/bg.png";
import prfl from "../../imgs/vizzprfl.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiDotsVerticalRounded, BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { BsFillTrashFill, BsShareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { setAllNull } from "../../redux/profileInfoSlice";
import { useDispatch } from "react-redux";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { AiFillEye } from "react-icons/ai";
import DeleteCardModal from "../Modals/DeleteCardModal/DeleteCardModal";
import { deleteEmployee } from "../../redux/ApisSlice";
import ShareCardModal from "../Modals/ShareCardModal/ShareCardModal";

const ContactCard = ({ data }) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let returnString = (str, numVal) => {
    if (str?.length <= numVal) {
      return str;
    } else {
      return str?.slice(0, numVal) + "...";
    }
  };

  let [deletemodal, setDeleteModal] = useState(false);

  let handledeleteModal = () => {
    setDeleteModal(!deletemodal);
  };

  // let [openMenu, setOpenMenu] = useState(false);
  // let handleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let profileUrl = import.meta.env.VITE_PROFILE_URL;
  console.log(profileUrl);
  let OpenProfile = (id) => {
    window.open(profileUrl + id);
  };
  let [shareModal, setShareModal] = useState(false);
  let handleShareModal = () => {
    setShareModal(!shareModal);
  };

  return (
    <div className="contactcard">
      <ShareCardModal
        handleShareModal={handleShareModal}
        shareModal={shareModal}
        userId={data?.id}
      />
      <DeleteCardModal
        handledeleteModal={handledeleteModal}
        deletemodal={deletemodal}
        deleteEmployee={() => {
          dispatch(deleteEmployee(data?.id)), handledeleteModal();
        }}
      />

      <div className="card-imgs">
        <div
          className="menu-icon"
          id="basic-menu"
          //  onClick={() => handleMenu()}
        >
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            // aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // sx={{ height: 20, maxWidth: 20, borderRadius: "100%" }}
          >
            <BiDotsVerticalRounded
              style={{ fontSize: "25px", cursor: "pointer", color: "#eba21e" }}
            />
          </IconButton>
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose(), OpenProfile(data?.id);
            }}
            sx={{ color: "#eba21e" }}
          >
            <AiFillEye style={{ marginRight: "7px" }} />
            View
          </MenuItem>
          <MenuItem
            onClick={() => {
              handledeleteModal(), handleClose;
            }}
            sx={{ color: "red" }}
          >
            <BsFillTrashFill style={{ marginRight: "7px", color: "red" }} />
            Delete
          </MenuItem>
        </Menu>

        <img
          src={
            data?.profileUrl ? data?.profileUrl : "https://placehold.co/75x75"
          }
          alt=""
          className="prfl"
        />
        <img
          src={data?.coverUrl ? data?.coverUrl : "https://placehold.co/265x123"}
          alt=""
          className="bg"
        />
      </div>
      <div className="contact-card-details">
        <h2>{returnString(data?.name, 20)}</h2>
        {data?.phone && (
          <div className="phone-container">
            <FaPhoneAlt style={{ fontSize: "12px", marginRight: "4px" }} />
            <p className="phone-text">{returnString(data?.phone, 52)}</p>
          </div>
        )}
        {data?.bio && (
          <div className="job-container" style={{ display: "flex" }}>
            <BiSolidBriefcaseAlt
              style={
                // data?.bio.length >= 28
                //   ?
                { fontSize: "15px" }
                // : { fontSize: "30px", marginRight: "7px" }
              }
            />
            <p className="job-text">{returnString(data?.bio, 52)}</p>
          </div>
        )}

        {data?.address && (
          <div className="location-container">
            <MdLocationOn style={{ fontSize: "15px", marginRight: "4px" }} />
            <p className="location-text">{returnString(data?.address, 52)}</p>
          </div>
        )}
      </div>
      <div className="btn-main">
        <button
          className="editbtn"
          onClick={() => {
            navigate(`/editcard/${data?.id}`);
            // dispatch(setAllNull());
          }}
        >
          <BiSolidPencil
            style={{
              fontSize: "12px",
              marginRight: "3px",
            }}
          />
          Edit Card
        </button>
        <button className="sharebtn" onClick={() => handleShareModal()}>
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
