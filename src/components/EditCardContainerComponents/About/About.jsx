import React, { useEffect, useState } from "react";
import "./About.scss";
import { Box, CircularProgress, Switch } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import bgplaceholder from "../../../imgs/coverholder.png";
import prflplaceholder from "../../../imgs/prflplaceholder.png";
import { useDispatch } from "react-redux";
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
  setPoweredVizz,
} from "../../../redux/profileInfoSlice.js";
import { useSelector } from "react-redux";
import Cropper from "../../Cropper/Cropper";
import { submitAbout } from "../../../redux/ApisSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CgColorPicker } from "react-icons/cg";
import { GrAddCircle } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

const About = ({ id }) => {
  let date = Date.now();
  let dispatch = useDispatch();
  let singleProfile = useSelector((state) => state.ApiSlice.singleEmployee);
  const name = useSelector((state) => state.profileInfoSlice.name);
  const email = useSelector((state) => state.profileInfoSlice.email);
  const color = useSelector((state) => state.profileInfoSlice.color);
  const phone = useSelector((state) => state.profileInfoSlice.phone);
  const cover = useSelector((state) => state.profileInfoSlice.coverUrl);
  const profile = useSelector((state) => state.profileInfoSlice.profileUrl);
  const address = useSelector((state) => state.profileInfoSlice.address);
  const bio = useSelector((state) => state.profileInfoSlice.bio);
  const poweredVizz = useSelector(
    (state) => state.profileInfoSlice.poweredVizz
  );

  const designation = useSelector(
    (state) => state.profileInfoSlice.designation
  );
  const responce = useSelector((state) => state.ApiSlice.response);

  console.log(cover);

  let handleCancel = () => {
    dispatch(setName(singleProfile?.data?.name));
    dispatch(setEmail(singleProfile?.data?.email));
    dispatch(setColor(singleProfile?.data?.color));
    dispatch(setPhone(singleProfile?.data?.phone));
    dispatch(setCoverUrl(singleProfile?.data?.coverUrl));
    dispatch(setProfileurl(singleProfile?.data?.profileUrl));
    dispatch(setDesignation(singleProfile?.data?.designation));
    dispatch(setAddress(singleProfile?.data?.address));
    dispatch(setBio(singleProfile?.data?.bio));
    dispatch(setDesignation(singleProfile?.data?.designation));
  };

  console.log(bio);

  let [prflimg, setprflimg] = useState(null);

  // ----------------------------------------------------State setup for profile img crop---------------------------------------------

  let [cropModal, setcropModal] = useState(false);
  let [myprflimg, setmyprflimg] = useState(null);
  let [cropPrfl, setCropPrfl] = useState({
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
    setprflimg("");
    const { files } = event.target;

    // setKey(key + 1);
    if (files && files?.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setprflimg(reader.result);
        // dispatch(setProfileImg(reader.result))

        setcropModal(true);
      });
    }
  };

  // ----------------------------------------------------State setup for bg img crop---------------------------------------------

  let [bgimg, setbgimg] = useState(null);
  let [bgCropModal, setBgcropModal] = useState(false);
  let [mybgimg, setmybgimg] = useState(null);
  let [cropbg, setCropbg] = useState({
    unit: "%",
    x: 50,
    y: 50,
    width: 25,
    height: 25,
  });

  let handleclosebgcropper = () => {
    setBgcropModal(false);
  };

  let handlebgImageChange = (event) => {
    // profileImage
    setbgimg("");
    const { files } = event.target;

    // setKey(key + 1);
    if (files && files?.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setbgimg(reader.result);
        // dispatch(setProfileImg(reader.result))

        setBgcropModal(true);
      });
    }
  };
  // let splitCover = cover?.split("base64,");
  // let splitProfile = bas?.split("base64,");

  let aboutData = {
    id,
    name,
    email,
    color,
    address,
    bio,
    designation,
  };

  cover?.slice(0, 8) === "https://"
    ? null
    : (aboutData.coverUrl = cover?.split("base64,")[1]);

  profile?.slice(0, 8) === "https://"
    ? null
    : (aboutData.profileUrl = profile?.split("base64,")[1]);

  // let profileAdded = profile.slice(0, 8) === "https://" ? true : false;

  // console.log(cover?.slice(0, 8));

  //   coverUrl: cover?.includes('https://') || cover==='',
  //   profileUrl: profile,
  // };
  // new FormData();
  // aboutData.append("id", id);
  // aboutData.append("coverUrl", cover);
  // aboutData.append("profileUrl", profile);
  // aboutData.append("name", name);
  // aboutData.append("bio", bio);
  // aboutData.append("email", email);
  // aboutData.append("address", address);
  // aboutData.append("color", "#000000");
  // aboutData.append("phone", phone);
  // console.log(aboutData);
  // console.log("name", name);

  // console.log(aboutData.get("coverUrl"));

  // useEffect(() => {

  // }, []);
  let loading = useSelector((state) => state.ApiSlice.submitLoading);
  let handleBottomTextToggle = (value) => {
    if (value === 1) {
      dispatch(submitAbout({ id, poweredVizz: 0 }));
      dispatch(setPoweredVizz(0));
    } else {
      dispatch(submitAbout({ id, poweredVizz: 1 }));
      dispatch(setPoweredVizz(1));
    }
  };

  console.log(poweredVizz);
  return (
    <div className="about-main">
      {/* --------------------------------------------croper for profile image------------------------------------------------  */}
      <Cropper
        cropModal={cropModal}
        handleclosecropper={handleclosecropper}
        theimg={prflimg}
        myimg={myprflimg}
        setmyimg={setmyprflimg}
        setcrop={setCropPrfl}
        crop={cropPrfl}
        aspect={1 / 1}
        setReduxState={setProfileurl}
      />

      {/* --------------------------------------------croper for Cover image------------------------------------------------  */}
      <Cropper
        cropModal={bgCropModal}
        handleclosecropper={handleclosebgcropper}
        theimg={bgimg}
        myimg={mybgimg}
        setmyimg={setmybgimg}
        setcrop={setCropbg}
        crop={cropbg}
        aspect={4 / 2}
        setReduxState={setCoverUrl}
      />
      {/* <div className="about-upper">
        <div className="lead-direct">
          <div className="lead">
            
            <Switch defaultChecked size="small" />
            

            <p>Lead Mode</p>
          </div>
          <div className="direct">
        
       
            <p>Direct</p>
          </div>
        </div>
        <div className="add-link">
          <AiOutlinePlus
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />{" "}
          Add Links and Contacts
        </div>
      </div> */}
      <div className="cmplt-prfl-info">Complete your profile</div>
      <div className="select-clr-container">
        <h2>Card Color</h2>
        <div className="clrs">
          <div className="single-clr" style={{ border: "1px solid black" }}>
            <label
              htmlFor="textclr"
              // style={{ height: "0px", width: "0px", opacity: "0px" }}
            >
              <CgColorPicker style={{ fontSize: "15px" }} />

              <input
                type="color"
                id="textclr"
                style={{
                  opacity: "0px",
                  height: "0px",
                  width: "0px",
                  // display: "none",
                }}
                onChange={(e) => dispatch(setColor(e.target.value))}
                value={color}
              />
            </label>
          </div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#E70A0A" }}
            onClick={() => dispatch(setColor("#E70A0A"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#0ED416" }}
            onClick={() => dispatch(setColor("#0ED416"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#3076FF" }}
            onClick={() => dispatch(setColor("#3076FF"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#F439D6" }}
            onClick={() => dispatch(setColor("#F439D6"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#6732FF" }}
            onClick={() => dispatch(setColor("#6732FF"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#FCE410" }}
            onClick={() => dispatch(setColor("#FCE410"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#1BE4FF" }}
            onClick={() => dispatch(setColor("#1BE4FF"))}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#DEA527" }}
            onClick={() => dispatch(setColor("#DEA527"))}
          ></div>
        </div>
      </div>

      <div className="show-hide-main">
        <h2>Show or hide text at the bottom of profile</h2>
        <Switch
          size="small"
          checked={poweredVizz}
          onChange={() => handleBottomTextToggle(poweredVizz)}
        />
      </div>

      <div className="imgs-input">
        <div className="prfl-container">
          <div className="prfl-inner">
            {profile ? (
              <MdOutlineCancel
                style={{ fontSize: "25px" }}
                className="prflImg-label"
                onClick={() => dispatch(setProfileurl(null))}
              />
            ) : (
              <label
                htmlFor="prflImg"
                className="prflImg-label"
                // style={{ border: "1px solid black" }}

                // className="prfl-img"
              >
                <GrAddCircle style={{ fontSize: "25px" }} />

                <input
                  type="file"
                  id="prflImg"
                  style={{ opacity: 0, width: "0px", height: "0px" }}
                  onChange={handlePrflImageChange}
                />
              </label>
            )}

            <img
              src={profile ? profile : "https://placehold.co/112x112"}
              alt=""
              className="prfl-img"
              // style={{ border: "1px solid black" }}
            />
          </div>
        </div>
        <div className="cover-container">
          <div className="cover-inner">
            {cover ? (
              <MdOutlineCancel
                style={{ fontSize: "25px" }}
                className="coverImg-label"
                onClick={() => dispatch(setCoverUrl(null))}
              />
            ) : (
              <label htmlFor="coverImg" className="coverImg-label">
                {<GrAddCircle style={{ fontSize: "25px" }} />}
                <input
                  type="file"
                  name="coverImg"
                  id="coverImg"
                  // className="opacity-0 w-[0px] h-[0px]"
                  style={{ opacity: 0, width: "0px", height: "0px" }}
                  onChange={handlebgImageChange}
                  //   ,setlogoImg,setBgImg
                />
              </label>
            )}

            <img
              src={cover ? cover : "https://placehold.co/600x180"}
              alt=""
              className="bg-img"
            />
          </div>
        </div>
      </div>

      <div className="first-field">
        <input
          type="text"
          className="input1"
          placeholder="Name"
          onChange={(e) => dispatch(setName(e.target.value))}
          value={name}
        />
        <input
          type="text"
          className="input2"
          placeholder="Location / Address"
          onChange={(e) => dispatch(setAddress(e.target.value))}
          value={address}
        />
      </div>

      <div className="second-field">
        <input
          type="text"
          className="input1"
          placeholder="Email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
          value={email}
        />
        <input
          type="text"
          className="input2"
          placeholder="Phone Number"
          onChange={(e) => dispatch(setPhone(e.target.value))}
          value={phone}
        />
      </div>

      <div className="second-field">
        <input
          type="text"
          className="designation"
          placeholder="Designation"
          onChange={(e) => dispatch(setDesignation(e.target.value))}
          value={designation}
        />
        {/* <input
          type="text"
          className="input2"
          placeholder="Phone Number"
          onChange={(e) => dispatch(setPhone(e.target.value))}
          value={phone}
        /> */}
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Bio"
        onChange={(e) => dispatch(setBio(e.target.value))}
        value={bio}
      ></textarea>
      <div className="btns-main">
        <div className="btns-inner">
          <button className="cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
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
        </div>
      </div>
      <br />
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </div>
  );
};

export default About;
