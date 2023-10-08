import React, { useState } from "react";
import "./Qr.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { setQrColor, setQrLogo } from "../../../redux/profileInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import Cropper from "../../Cropper/Cropper";
import { submitAbout } from "../../../redux/ApisSlice";
import { Box, CircularProgress } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";

const Qr = ({ userId }) => {
  let dispatch = useDispatch();

  // ----------------------------------------------------State setup for profile img crop---------------------------------------------
  let [logoimg, setlogoimg] = useState(null);
  let [cropModal, setcropModal] = useState(false);
  let [mylogoimg, setmylogoimg] = useState(null);
  let [cropLogo, setCropLogo] = useState({
    unit: "%",
    x: 50,
    y: 50,
    width: 25,
    height: 25,
  });

  let handleclosecropper = () => {
    setcropModal(false);
    // settheimg(null)
  };

  let handlePrflImageChange = (event) => {
    // profileImage
    setlogoimg("");
    const { files } = event.target;

    // setKey(key + 1);
    if (files && files?.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setlogoimg(reader.result);
        // dispatch(setProfileImg(reader.result))

        setcropModal(true);
      });
    }
  };

  let singleProfile = useSelector((state) => state.ApiSlice.singleEmployee);

  const qrLogo = useSelector((state) => state.profileInfoSlice.qrLogo);
  const qrColor = useSelector((state) => state.profileInfoSlice.qrColor);
  let loading = useSelector((state) => state.ApiSlice.submitLoading);

  let handleCancel = () => {
    dispatch(setQrLogo(singleProfile?.data?.qrLogoUrl));
    dispatch(setQrColor(singleProfile?.data?.qrColor));
  };

  let aboutData = {
    id: userId,
    qrColor,
  };

  qrLogo?.slice(0, 8) === "https://"
    ? null
    : (aboutData.qrLogoUrl = qrLogo?.split("base64,")[1]);
  return (
    <div className="Qr-main">
      <Cropper
        cropModal={cropModal}
        handleclosecropper={handleclosecropper}
        theimg={logoimg}
        myimg={mylogoimg}
        setmyimg={setmylogoimg}
        setcrop={setCropLogo}
        crop={cropLogo}
        aspect={1 / 1}
        setReduxState={setQrLogo}
      />
      <div className="Qr-upper">
        <div className="lead-direct">QR Code</div>
        <div className="add-link">
          <AiOutlineDownload
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />{" "}
          Download Event badge
        </div>
      </div>

      <div className="qr-content">
        <div className="inner">
          <div className="qrlogo-inner">
            {qrLogo ? (
              <MdOutlineCancel
                style={{ fontSize: "25px" }}
                className="logoImg-label"
                onClick={() => dispatch(setQrLogo(null))}
              />
            ) : (
              <label
                htmlFor="logoImg"
                className="logoImg-label"
                // style={{ border: "1px solid black" }}

                // className="prfl-img"
              >
                <GrAddCircle style={{ fontSize: "25px" }} />

                <input
                  type="file"
                  id="logoImg"
                  style={{ opacity: 0, width: "0px", height: "0px" }}
                  onChange={handlePrflImageChange}
                />
              </label>
            )}
            <img
              src={qrLogo ? qrLogo : "https://placehold.co/100x100"}
              alt=""
              className="qr-img"
              // style={{ border: "1px solid black" }}
            />
          </div>

          {/* <label
            htmlFor="qrlogo"
           
          >
            <img
              src={qrLogo ? qrLogo : "https://placehold.co/100x100"}
              alt=""
              className="qr-img"
            
            />
            <input
              type="file"
              name="qrlogo"
              id="qrlogo"
              style={{ opacity: 0, width: "0px", height: "0px" }}
              onChange={handlePrflImageChange}
            />
          </label> */}
          <h2>Add Custom Logo</h2>
          <p>Add custom logo to be displayed in the middle of the Qr Code.</p>
          <div className="select-clr-container">
            <h1>Card Color</h1>
            <div className="clrs">
              <div
                className="single-clr"
                style={{ backgroundColor: "black" }}
                onClick={() => dispatch(setQrColor("black"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#E70A0A" }}
                onClick={() => dispatch(setQrColor("#E70A0A"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#0ED416" }}
                onClick={() => dispatch(setQrColor("#0ED416"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#3076FF" }}
                onClick={() => dispatch(setQrColor("#3076FF"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#F439D6" }}
                onClick={() => dispatch(setQrColor("#F439D6"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#6732FF" }}
                onClick={() => dispatch(setQrColor("#6732FF"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#FCE410" }}
                onClick={() => dispatch(setQrColor("#FCE410"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#1BE4FF" }}
                onClick={() => dispatch(setQrColor("#1BE4FF"))}
              ></div>
              <div
                className="single-clr"
                style={{ backgroundColor: "#DEA527" }}
                onClick={() => dispatch(setQrColor("#DEA527"))}
              ></div>
            </div>
          </div>
          <div className="chs-clr">Choose Color</div>
          <div className="qr-btns">
            <button
              className="update"
              onClick={() => {
                !loading ? dispatch(submitAbout(aboutData)) : null;
              }}
            >
              {loading ? (
                <Box sx={{ color: "white" }}>
                  <CircularProgress color="inherit" size={27} />{" "}
                </Box>
              ) : (
                " Update"
              )}
            </button>
            <button
              className="cancel"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
