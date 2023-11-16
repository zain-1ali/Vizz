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
  adminAccess,
  getOrganization,
  getOrganizationLinks,
  updateOrganization,
} from "../../redux/ApisSlice";
import Cropper from "../../components/Cropper/Cropper";
import PrflPreviwModal from "../../components/Modals/PrflPreviewModal/PrflPreviewModal";
import { toast } from "react-toastify";
import {
  setOrgLogo,
  setOrgTextColor,
  setOrgColor,
  setOrglinkColor,
  setOrglinkBgColor,
  setOrgbtnColor,
  setOrgSharebtnColor,
  // setOrgShareBtnColor
  setOrganizationCover,
} from "../../redux/profileInfoSlice";
import HelpModal from "../../components/Modals/HelpModal/HelpModal";
import { GrAddCircle } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

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
  });
  let [requestEmail, setRequestEmail] = useState("");
  let [fontClr, setFontClr] = useState("black");
  let [showprfl, setshowprfl] = useState(null);
  let [showbgimg, setshowbgimg] = useState(null);
  let organisation = useSelector((state) => state.ApiSlice.organization);
  let organizationLogo = useSelector(
    (state) => state.profileInfoSlice.organizationLogo
  );
  let orgTextColor = useSelector(
    (state) => state.profileInfoSlice.orgTextColor
  );

  let orgColor = useSelector((state) => state.profileInfoSlice.orgColor);

  let orgBtnColor = useSelector((state) => state.profileInfoSlice.orgBtnColor);
  let orgShareBtnColor = useSelector(
    (state) => state.profileInfoSlice.orgShareBtnColor
  );

  let orgLinkBgColor = useSelector(
    (state) => state.profileInfoSlice.orgLinkBgColor
  );

  let orgLinkColor = useSelector(
    (state) => state.profileInfoSlice.orgLinkColor
  );

  let orgCover = useSelector(
    (state) => state.profileInfoSlice.organizationCover
  );

  console.log(organisation?.data);
  useEffect(() => {
    setData({
      name: organisation?.data?.name,
      email: organisation?.data?.email,
      phone: organisation?.data?.phone,
      address: organisation?.data?.address,
      bio: organisation?.data?.bio,
      // textColor: orgTextColor,
      // profileUrl: organisation?.data?.profileUrl,
      // coverUrl: organisation?.data?.coverUrl,
      color: organisation?.data?.color,
    });
    dispatch(setOrgLogo(organisation?.data?.logoUrl));
    dispatch(setOrgTextColor(organisation?.data?.textColor));

    dispatch(setOrgbtnColor(organisation?.data?.saveBtnColor));
    dispatch(setOrgSharebtnColor(organisation?.data?.shareBtnColor));
    dispatch(setOrgColor(organisation?.data?.color));
    dispatch(setOrglinkColor(organisation?.data?.linkColor));
    dispatch(setOrglinkBgColor(organisation?.data?.linkBgColor));
    dispatch(setOrganizationCover(organisation?.data?.coverUrl));

    // setshowbgimg(organisation?.data?.coverUrl);
  }, [organisation?.data]);
  // console.log(orgTextColor);
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
        // dispatch(setOrgLogo(reader.result));
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

  orgCover?.slice(0, 8) === "https://"
    ? null
    : (organizationBtmData.coverUrl = orgCover?.split("base64,")[1]);

  organizationLogo?.slice(0, 8) === "https://"
    ? null
    : (organizationBtmData.logoUrl = organizationLogo?.split("base64,")[1]);

  let [prvModal, setprvModal] = useState(false);

  let handlePrvModal = () => {
    setprvModal(!prvModal);
  };

  let profileUrl = import.meta.env.VITE_PROFILE_URL;
  let [helpmodal, sethelpmodal] = useState(false);
  let handlehelpModal = () => {
    sethelpmodal(!helpmodal);
  };

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
          setReduxState={setOrgLogo}
          isCircle={true}
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
          aspect={186 / 130}
          setReduxState={setOrganizationCover}
          // isSettings={true}
          isCircle={false}
        />
        <LinksModal />
        <HelpModal handlehelpModal={handlehelpModal} helpmodal={helpmodal} />
        <PrflPreviwModal handlePrvModal={handlePrvModal} prvModal={prvModal} />
        <div className="settings-innerII">
          <div className="settings-header">
            <div className="profilebtn">
              <p>Settings</p>
            </div>

            <div className="sortbtn" onClick={() => handlehelpModal()}>
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
              <div className="admin-accounts">
                <h2 className="heading">Admin accounts</h2>
                <p className="para">
                  You can assign accounts as administrative accounts.
                </p>
                <div className="accounts">
                  {organisation?.data?.admins?.map((elm) => {
                    return (
                      <div className="single-account">
                        <div className="single-account-inner">
                          <div className="name-email">
                            <h2 className="name">{elm?.name}</h2>
                            <p className="email">{elm?.email}</p>
                          </div>
                          <div className="options">
                            {/* <select name="" id="">
      <option value="">Admin</option>
    </select> */}{" "}
                            Admin
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="single-account">
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
                  </div> */}
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
                    <input
                      type="text"
                      className="emailinput"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="oraganization-name">
                  <div className="singlefieldIII">
                    {/* Organization Settings */}
                    <div
                      className="reset-btn"
                      onClick={() =>
                        dispatch(adminAccess({ email: requestEmail }))
                      }
                    >
                      {loading ? (
                        <Box sx={{ color: "white" }}>
                          <CircularProgress color="inherit" size={27} />{" "}
                        </Box>
                      ) : (
                        "Invite"
                      )}
                    </div>
                    <div className="emailinput"></div>
                    {/* <input type="text" className="emailinput" /> */}
                  </div>
                </div>
                {/* <div className="role-field">
                  <div className="singlefieldII">
                    Role
                    <div className="role-select-main">
                      <select name="" id="" className="role-select">
                        <option value="">Admin</option>
                      </select>
                    </div>
                  </div>
                </div> */}
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
                <div htmlFor="prflImg" className="prfl-main">
                  {organizationLogo ? (
                    <MdOutlineCancel
                      style={{ fontSize: "25px" }}
                      className="prfl-img-label"
                      onClick={() => dispatch(setOrgLogo(""))}
                    />
                  ) : (
                    <label htmlFor="prflImg" className="prfl-img-label">
                      {<GrAddCircle style={{ fontSize: "25px" }} />}
                      <input
                        type="file"
                        name="prflImg"
                        id="prflImg"
                        style={{ opacity: 0, width: "0px", height: "0px" }}
                        onChange={handlePrflImageChange}
                      />
                    </label>
                  )}
                  <img
                    src={organizationLogo ? organizationLogo : prflplaceholder}
                    alt=""
                    className="prfl-img"
                  />
                </div>

                {orgCover ? (
                  <MdOutlineCancel
                    style={{ fontSize: "25px" }}
                    className="coverImg-label"
                    onClick={() => dispatch(setOrganizationCover(""))}
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
                <div htmlFor="coverImg">
                  <img
                    src={orgCover ? orgCover : bgplaceholder}
                    alt=""
                    className="bg-img"
                  />
                </div>
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
                          orgColor
                            ? { backgroundColor: orgColor }
                            : { backgroundColor: "black" }
                        }
                      ></div>
                      {orgColor}
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
                            dispatch(setOrgColor(e.target.value))
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
                        style={{ backgroundColor: orgTextColor }}
                      ></div>
                      {orgTextColor}
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
                          onChange={(e) =>
                            dispatch(setOrgTextColor(e.target.value))
                          }
                          value={orgTextColor}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="twice-colors">
                  <div className="single-color-field-upper">
                    Save button color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: orgBtnColor }}
                      ></div>
                      {orgBtnColor}
                      <label htmlFor="btnclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="btnclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) =>
                            dispatch(setOrgbtnColor(e.target.value))
                          }
                          value={orgBtnColor}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="single-color-field-upper">
                    Share button color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: orgShareBtnColor }}
                      ></div>
                      {orgShareBtnColor}
                      <label
                        htmlFor="sharebtnclr"
                        className="color-picker-circle"
                      >
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="sharebtnclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) =>
                            dispatch(setOrgSharebtnColor(e.target.value))
                          }
                          value={orgShareBtnColor}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="twice-colors">
                  <div className="single-color-field-upper">
                    Link background color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: orgLinkBgColor }}
                      ></div>
                      {orgLinkBgColor}
                      <label
                        htmlFor="linkbgclr"
                        className="color-picker-circle"
                      >
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="linkbgclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) =>
                            dispatch(setOrglinkBgColor(e.target.value))
                          }
                          value={orgLinkBgColor}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="single-color-field-upper">
                    Link color
                    <div className="single-color-field">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: orgLinkColor }}
                      ></div>
                      {orgLinkColor}
                      <label htmlFor="linkclr" className="color-picker-circle">
                        <div>
                          <CgColorPicker style={{ fontSize: "20px" }} />
                        </div>
                        <input
                          type="color"
                          id="linkclr"
                          style={{
                            opacity: "0px",
                            height: "0px",
                            width: "0px",
                          }}
                          onChange={(e) =>
                            dispatch(setOrglinkColor(e.target.value))
                          }
                          value={orgLinkColor}
                        />
                      </label>
                    </div>
                  </div>
                </div>
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
                      updateOrganization({
                        ...organizationBtmData,
                        ...data,
                        color: orgColor,
                        textColor: orgTextColor,
                        linkBgColor: orgLinkBgColor,
                        linkColor: orgLinkColor,
                        saveBtnColor: orgBtnColor,
                        shareBtnColor: orgShareBtnColor,
                      })
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
