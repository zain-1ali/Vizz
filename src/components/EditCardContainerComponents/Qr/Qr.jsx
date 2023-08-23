import React, { useState } from "react";
import "./Qr.scss";
import { AiOutlineDownload } from "react-icons/ai";

const Qr = () => {
  let [prflimg, setprflimg] = useState(null);

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
  return (
    <div className="Qr-main">
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
          <label
            htmlFor="qrlogo"
            // style={{ border: "1px solid black" }}

            // className="prfl-img"
          >
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="qr-img"
              // style={{ border: "1px solid black" }}
            />
            <input
              type="file"
              name="qrlogo"
              id="qrlogo"
              style={{ opacity: 0, width: "0px", height: "0px" }}
              onChange={handlePrflImageChange}
            />
          </label>
          <h2>Add Custom Logo</h2>
          <p>Add custom logo to be displayed in the middle of the Qr Code.</p>
          <div className="select-clr-container">
            <h1>Card Color</h1>
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
          <div className="chs-clr">Choose Color</div>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Qr;
