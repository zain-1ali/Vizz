import React, { useState } from "react";
import "./About.scss";
import { Switch } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import bgplaceholder from "../../../imgs/coverholder.png";
import prflplaceholder from "../../../imgs/prflplaceholder.png";

const About = () => {
  let [prflimg, setprflimg] = useState(null);
  let [bgimg, setbgimg] = useState(null);
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

  return (
    <div className="about-main">
      <div className="about-upper">
        <div className="lead-direct">
          <div className="lead">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked size="small" />
            {/* </ThemeProvider> */}

            <p>Lead Mode</p>
          </div>
          <div className="direct">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked size="small" />
            {/* </ThemeProvider> */}
            <p>Direct</p>
          </div>
        </div>
        <div className="add-link">
          <AiOutlinePlus
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />{" "}
          Add Links and Contacts
        </div>
      </div>
      <div className="cmplt-prfl-info">Complete your profile</div>
      <div className="select-clr-container">
        <h2>Card Color</h2>
        <div className="clrs">
          <div
            className="single-clr"
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#E70A0A" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#0ED416" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#3076FF" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#F439D6" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#6732FF" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#FCE410" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#1BE4FF" }}
          ></div>
          <div
            className="single-clr"
            style={{ backgroundColor: "#DEA527" }}
          ></div>
        </div>
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

      <div className="first-field">
        <input type="text" className="input1" placeholder="Company Name" />
        <input
          type="text"
          className="input2"
          placeholder="Location / Address"
        />
      </div>

      <div className="second-field">
        <input type="text" className="input1" placeholder="Email" />
        <input type="text" className="input2" placeholder="Phone Number" />
      </div>
      <textarea name="" id="" cols="30" rows="10" placeholder="Bio"></textarea>
      <div className="btns-main">
        <div className="btns-inner">
          <button className="cancel">Cancel</button>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default About;
