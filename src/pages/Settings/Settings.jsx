import React, { useEffect, useState } from "react";
import "./Settings.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiHelpCircle } from "react-icons/bi";
import bgplaceholder from "../../imgs/coverholder.png";
import prflplaceholder from "../../imgs/prflplaceholder.png";
import { CgColorPicker } from "react-icons/cg";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { Switch } from "@mui/material";
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
import { getOrganization, getOrganizationLinks } from "../../redux/ApisSlice";

const Settings = () => {
  let [prflimg, setprflimg] = useState(null);
  let [bgimg, setbgimg] = useState(null);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrganization());
  }, []);

  let organization = useSelector((state) => state.ApiSlice.organization);
  console.log(organization);

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

        // setcropModal(true);
      });
    }
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

        // setBgcropModal(true);
      });
    }
  };
  return (
    <div className="settings-main">
      <Sidebar />
      <div className="settings-inner">
        <LinksModal />
        <div className="settings-innerII">
          <div className="settings-header">
            <div className="profilebtn">
              <p>Settings</p>
            </div>

            <div className="sortbtn">
              <BiHelpCircle
                style={{
                  color: "#353535",
                  fontSize: "22px",
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
                  First name
                  <input type="text" className="nameinput" />
                </div>

                <div className="singlefield">
                  Last name
                  <input type="text" className="nameinput" />
                </div>
              </div>

              <div className="email-field">
                <div className="singlefieldII">
                  Email
                  <input type="text" className="emailinput" />
                </div>
              </div>

              <div className="account-security">
                <div className="singlefieldIII">
                  Account Security
                  <div className="reset-btn">Reset</div>
                  <input type="text" className="emailinput" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-heading">Account Links</div>
          <div className="account-links">
            <Content
              check="organization"
              userId="null"
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
                    <select name="" id="" className="emailinput">
                      <option value="">Admin</option>
                    </select>
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
                    src={prflplaceholder}
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
                  <img src={bgplaceholder} alt="" className="bg-img" />
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
                </div>

                <div className="twice-colors">
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
                </div>
              </div>
              <div className="btns">
                <div className="preview">
                  Preview
                  <AiFillEye
                    style={{
                      fontSize: "25px",
                      color: "#DEA527",
                      marginLeft: "5px",
                    }}
                  />
                </div>
                <div className="save">Save</div>
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
