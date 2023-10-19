import React, { useEffect, useState } from "react";
import "./Settings.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiHelpCircle, BiSolidCopy } from "react-icons/bi";
import bgplaceholder from "../../imgs/coverholder.png";
import prflplaceholder from "../../imgs/prflplaceholder.png";
import { CgColorPicker } from "react-icons/cg";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { Box, CircularProgress, Switch } from "@mui/material";
import LinksModal from "../../components/LinksModal/LinksModal";
import {
  openLinkModal,
  openLinkEditModal,
  openLinkUpdateModal,
  openModal,
  closeAllModal,
} from "../../redux/Modalslice";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/EditCardContainerComponents/Content/Content";
import {
  getOrganization,
  getOrganizationLinks,
  updateOrganization,
} from "../../redux/ApisSlice";
import Cropper from "../../components/Cropper/Cropper";
import PrflPreviwModal from "../../components/Modals/PrflPreviewModal/PrflPreviewModal";
import { toast } from "react-toastify";

const Settings = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrganization());
  }, []);
  let loading = useSelector((state) => state.ApiSlice.submitLoading);
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    color: "",
  });
  let [fontClr, setFontClr] = useState("black");
  let [showprfl, setshowprfl] = useState(null);
  let [showbgimg, setshowbgimg] = useState(null);
  let organisation = useSelector((state) => state.ApiSlice.organization);
  console.log(organisation?.data);
  useEffect(() => {
    setData({
      name: organisation?.data?.name,
      email: organisation?.data?.email,
      phone: organisation?.data?.phone,
      address: organisation?.data?.address,
      bio: organisation?.data?.bio,
      // profileUrl: organisation?.data?.profileUrl,
      // coverUrl: organisation?.data?.coverUrl,
      color: organisation?.data?.color,
    });
    setshowprfl(organisation?.data?.logoUrl);
    setshowbgimg(organisation?.data?.coverUrl);
  }, [organisation?.data]);

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

  let organizationBtmData = {
    // color: data.color,
  };
  const responce = useSelector((state) => state.ApiSlice.response);
  console.log(responce);

  showbgimg?.slice(0, 8) === "https://"
    ? null
    : (organizationBtmData.coverUrl = showbgimg?.split("base64,")[1]);

  showprfl?.slice(0, 8) === "https://"
    ? null
    : (organizationBtmData.logoUrl = showprfl?.split("base64,")[1]);

  let [prvModal, setprvModal] = useState(false);

  let handlePrvModal = () => {
    setprvModal(!prvModal);
  };

  let profileUrl = import.meta.env.VITE_PROFILE_URL;

  return (
    <div className="settings-main">
      <Sidebar />
      <div className="settings-inner">
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
          setReduxState={setshowprfl}
          isSettings={true}
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
          setReduxState={setshowbgimg}
          isSettings={true}
        />
        <LinksModal />
        <PrflPreviwModal handlePrvModal={handlePrvModal} prvModal={prvModal} />
        <div className="settings-innerII">
          <div className="settings-header">
            <div className="profilebtn">
              <p>Settings</p>
            </div>

            <div className="sortbtn">
              <BiHelpCircle
                style={{
                  color: "#353535",
                  fontSize: "18px",
                  marginRight: "6px",
                }}
              />
              Help
            </div>
          </div>

          <div className="custom-heading">Account Settings</div>

          <div className="account-setting-form">
            <div className="form-content">
              {/* <div className="about-upper">
                <div className="lead-direct">
                  <div className="lead">
                    
                    <Switch defaultChecked size="small" />
             

                    <p>Lead Mode</p>
                  </div>
                  <div className="direct">
                    
                    <Switch defaultChecked size="small" />
                  
                    <p>Direct</p>
                  </div>
                </div>
                <div
                  className="add-link"
                  onClick={() => {
                    dispatch(openModal()), dispatch(openLinkModal());
                  }}
                >
                  <AiOutlinePlus
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />{" "}
                  Add Links and Contacts
                </div>
              </div> */}
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
                  <p>Location</p>{" "}
                  <input
                    type="text"
                    placeholder="Address"
                    className="nameinput"
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                    value={data.address}
                  />
                </div>
              </div>
              <div className="name-fields" style={{ marginTop: "10px" }}>
                <div className="singlefield">
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder="Email"
                    className="nameinput"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    value={data.email}
                  />
                </div>

                <div className="singlefield">
                  <p>Phone</p>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="nameinput"
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    value={data.phone}
                  />
                </div>
              </div>

              {/* <div className="name-fields" style={{ marginTop: "10px" }}>
                <div className="singlefield">
                  <p>Job</p>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="nameinput"
                  />
                </div>

                <div className="singlefield">
                  <p>Company</p>
                  <input
                    type="text"
                    placeholder="Company"
                    className="nameinput"
                  />
                </div>
              </div> */}

              <div className="email-field">
                <div className="singlefieldII">
                  <p>Description</p>
                  <textarea
                    className="emailinput"
                    onChange={(e) => setData({ ...data, bio: e.target.value })}
                    value={data.bio}
                  ></textarea>
                  {/* <input type="text" /> */}
                </div>
              </div>

              <div className="account-security">
                <div className="singlefieldIII">
                  {/* Account Security */}
                  <div
                    className="reset-btn"
                    onClick={() => dispatch(updateOrganization(data))}
                  >
                    {loading ? (
                      <Box sx={{ color: "white" }}>
                        <CircularProgress color="inherit" size={27} />{" "}
                      </Box>
                    ) : (
                      "Save"
                    )}
                  </div>
                  {/* <input type="text" className="emailinput" /> */}
                  <div className="emailinput"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-heading">Account Links</div>
          <div className="account-links">
            <Content
              check="organization"
              userId="null"
              directmode={{ status: 0, linkId: "" }}
              getLinkFunc={getOrganizationLinks}
            />
          </div>
          <div className="custom-heading">Organization</div>

          <div className="organization-setting-form">
            <div className="form-content">
              <div className="oraganization-name">
                <div className="singlefieldIII">
                  Organization Settings
                  <div className="reset-btn">Save</div>
                  <input type="text" className="emailinput" />
                </div>
              </div>

              <div className="admin-accounts">
                <h2 className="heading">Admin accounts</h2>
                <p className="para">
                  You can assign accounts as administrative accounts.
                </p>
                <div className="accounts">
                  <div className="single-account">
                    <div className="single-account-inner">
                      <div className="name-email">
                        <h2 className="name">Jhon Mike</h2>
                        <p className="email">Johnmike@gmail.com</p>
                      </div>
                      <div className="options">
                        <select name="" id="">
                          <option value="">Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="single-account">
                    <div className="single-account-inner">
                      <div className="name-email">
                        <h2 className="name">Jhon Mike</h2>
                        <p className="email">Johnmike@gmail.com</p>
                      </div>
                      <div className="options">
                        <select name="" id="">
                          <option value="">Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="invite-user">
                <div className="heading">Invite user</div>
                <div className="para">
                  Admins have full access to the entire dashboard and all other
                  accounts.
                </div>
                <div className="email-field">
                  <div className="singlefieldII">
                    Email
                    <input type="text" className="emailinput" />
                  </div>
                </div>
                <div className="role-field">
                  <div className="singlefieldII">
                    Role
                    <div className="role-select-main">
                      <select name="" id="" className="role-select">
                        <option value="">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-heading">Profile</div>

          <div className="profile-settings-form">
            <div className="form-content">
              <div className="prfl-cover">
                <h2 className="heading">Cover Image</h2>
                <p className="para">
                  Choose an image to display at the top of cardholder profile
                  pages.
                </p>
              </div>

              <div className="imgs-input">
                <label
                  htmlFor="prflImg"
                  // style={{ border: "1px solid black" }}

                  // className="prfl-img"
                >
                  <img
                    src={showprfl ? showprfl : prflplaceholder}
                    alt=""
                    className="prfl-img"
                    // style={{ border: "1px solid black" }}
                  />
                  <input
                    type="file"
                    name="prflImg"
                    id="prflImg"
                    style={{ opacity: 0, width: "0px", height: "0px" }}
                    onChange={handlePrflImageChange}
                  />
                </label>

                <label htmlFor="coverImg">
                  <img
                    src={showbgimg ? showbgimg : bgplaceholder}
                    alt=""
                    className="bg-img"
                  />
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
              </div>

              <div className="page-appearence">
                <h2 className="heading">Profile page appearance</h2>
                <p className="para">
                  Customise the look of the profile pages of your cardholders.
                  Changes will apply to all profile pages belonging to your
                  organisation.
                </p>
              </div>
            </div>
            <div className="colors-selection">
              <div className="colors">
                <h2 className="heading">Colors</h2>
                <p className="para">
                  Create a custom theme for cardholder profile pages. Maintain
                  good readability by ensuring there is sufficient contrast
                  between text and background colours.
                </p>
              </div>
              <div className="all-colors">
                <div className="twice-colors">
                  <div className="single-color-field-upper">
                    Page background color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={
                          data.color
                            ? { backgroundColor: data.color }
                            : { backgroundColor: "black" }
                        }
                      ></div>
                      {data?.color}
                      <label htmlFor="bgclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="bgclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) =>
                            setData({ ...data, color: e.target.value })
                          }
                          value={data.color}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="single-color-field-upper">
                    Text color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: fontClr }}
                      ></div>
                      {fontClr}
                      <label htmlFor="textclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="textclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) => setFontClr(e.target.value)}
                          value={fontClr}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* <div className="twice-colors">
                  <div className="single-color-field-upper">
                    Page background color
                    <div className="single-color-field">
                      <div className="color-circle"></div>
                      #dea527
                      <label htmlFor="bgclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="bgclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="single-color-field-upper">
                    Text color
                    <div className="single-color-field">
                      <div className="color-circle"></div>
                      #dea527
                      <label htmlFor="bgclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="bgclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="btns">
                <div
                  className="preview"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      profileUrl + organisation?.data?.id
                    ),
                      toast.success("Profile url copied to clipboard");
                  }}
                >
                  Copy Link
                  <BiSolidCopy
                    style={{
                      fontSize: "25px",
                      color: "#DEA527",
                      marginLeft: "5px",
                    }}
                  />
                </div>
                <div className="preview" onClick={() => handlePrvModal()}>
                  Preview
                  <AiFillEye
                    style={{
                      fontSize: "25px",
                      color: "#DEA527",
                      marginLeft: "5px",
                    }}
                  />
                </div>
                <div
                  className="save"
                  onClick={() =>
                    dispatch(
                      updateOrganization({ ...organizationBtmData, ...data })
                    )
                  }
                >
                  {loading ? (
                    <Box sx={{ color: "white" }}>
                      <CircularProgress color="inherit" size={27} />{" "}
                    </Box>
                  ) : (
                    "Save"
                  )}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
