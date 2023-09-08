import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditCard.scss";
import { BsShareFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import EditCradContainer from "../../components/EditCardContainer/EditCradContainer";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../redux/ApisSlice";
import { useParams } from "react-router-dom";
import {
  setName,
  setEmail,
  setColor,
  setPhone,
  setCoverUrl,
  setProfileurl,
  setDesignation,
  setAddress,
  setBio,
} from "../../redux/profileInfoSlice.js";

const EditCard = () => {
  let { id } = useParams();
  console.log(id);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee(id));
  }, []);
  let singleProfile = useSelector((state) => state.ApiSlice.singleEmployee);

  console.log(singleProfile);

  useEffect(() => {
    dispatch(setName(singleProfile?.data?.name));
    dispatch(setEmail(singleProfile?.data?.email));
    dispatch(setColor(singleProfile?.data?.color));
    dispatch(setPhone(singleProfile?.data?.phone));
    // dispatch(setCoverUrl(singleProfile?.coverUrl));
    dispatch(setProfileurl(singleProfile?.data?.profileUrl));
    dispatch(setDesignation(singleProfile?.data?.designation));
    dispatch(setAddress(singleProfile?.data?.address));
    dispatch(setBio(singleProfile?.data?.bio));
  }, [singleProfile]);

  return (
    <div className="edit-main">
      <Sidebar />
      <div className="edit-inner">
        <div className="edit-header">
          <button className="editbtn1">
            <MdKeyboardArrowLeft
              style={{
                fontSize: "26px",
                marginRight: "4px",
              }}
            />
            {singleProfile?.data?.name}
            {/* Jone Mike */}
          </button>
          <button className="editbtn2">
            <BsShareFill
              style={{
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            Share Card
          </button>
        </div>

        <EditCradContainer id={id} />
      </div>
    </div>
  );
};

export default EditCard;
