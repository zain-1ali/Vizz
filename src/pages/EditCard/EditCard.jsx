import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditCard.scss";
import { BsShareFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import EditCradContainer from "../../components/EditCardContainer/EditCradContainer";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../redux/ApisSlice";
import { useNavigate, useParams } from "react-router-dom";
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
  setLinks,
  setDirect,
  setQrLogo,
  setQrColor,
  setFormHeader,
  setNameVisible,
  setEmailVisible,
  setPhoneVisible,
  setJobVisible,
  setCompanyVisible,
  setNoteVisible,
  setLead,
  setPoweredVizz,
} from "../../redux/profileInfoSlice.js";
import { ToastContainer } from "react-toastify";
import ShareCardModal from "../../components/Modals/ShareCardModal/ShareCardModal";

const EditCard = () => {
  let { id } = useParams();
  console.log(id);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getEmployee(id));
  }, []);
  console.log("big parent");
  let singleProfile = useSelector((state) => state.ApiSlice.singleEmployee);

  console.log(singleProfile);

  useEffect(() => {
    dispatch(setName(singleProfile?.data?.name));
    dispatch(setEmail(singleProfile?.data?.email));
    dispatch(setColor(singleProfile?.data?.color));
    dispatch(setPhone(singleProfile?.data?.phone));
    dispatch(setCoverUrl(singleProfile?.data?.coverUrl));
    dispatch(setProfileurl(singleProfile?.data?.profileUrl));
    dispatch(setDesignation(singleProfile?.data?.designation));
    dispatch(setAddress(singleProfile?.data?.address));
    dispatch(setBio(singleProfile?.data?.bio));
    dispatch(setLinks(singleProfile?.data?.links));
    dispatch(
      setDirect({
        status: singleProfile?.data?.directMode,
        linkId: singleProfile?.data?.directLinkId,
      })
    );
    dispatch(setQrLogo(singleProfile?.data?.qrLogoUrl));
    dispatch(setQrColor(singleProfile?.data?.qrColor));
    dispatch(setLead(singleProfile?.data?.leadMode));
    dispatch(setFormHeader(singleProfile?.data?.leadFields?.formHeader));
    dispatch(setNameVisible(singleProfile?.data?.leadFields?.nameVisible));
    dispatch(setEmailVisible(singleProfile?.data?.leadFields?.emailVisible));
    dispatch(setPhoneVisible(singleProfile?.data?.leadFields?.phoneVisible));
    dispatch(setJobVisible(singleProfile?.data?.leadFields?.jobVisible));
    dispatch(
      setCompanyVisible(singleProfile?.data?.leadFields?.companyVisible)
    );
    dispatch(setNoteVisible(singleProfile?.data?.leadFields?.noteVisible));
    dispatch(setPoweredVizz(singleProfile?.data?.poweredVizz));
  }, [singleProfile]);

  let splitString = (string) => {
    if (string?.length <= 10) {
      return string;
    } else {
      return string?.slice(0, 10) + "...";
    }
  };

  let [shareModal, setShareModal] = useState(false);
  let handleShareModal = () => {
    setShareModal(!shareModal);
  };
  return (
    <div className="edit-main">
      <Sidebar />
      <div className="edit-inner">
        <ShareCardModal
          handleShareModal={handleShareModal}
          shareModal={shareModal}
          userId={id}
        />
        <div className="edit-header">
          <button className="editbtn1" onClick={() => navigate(-1)}>
            <MdKeyboardArrowLeft
              style={{
                fontSize: "26px",
                marginRight: "4px",
              }}
            />
            {splitString(singleProfile?.data?.name)}

            {/* Jone Mike */}
          </button>
          <button className="editbtn2" onClick={() => handleShareModal()}>
            <BsShareFill
              style={{
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            Share Card
          </button>
        </div>
        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          
          pauseOnFocusLoss
          draggable
          pauseOnHover
          
        /> */}
        <EditCradContainer id={id} />
      </div>
    </div>
  );
};

export default EditCard;
