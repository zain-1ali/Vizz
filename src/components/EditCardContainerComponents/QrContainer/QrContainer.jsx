import React, { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import "./QrContainer.scss";
import { QRCode } from "react-qrcode-logo";
// import ReactDOM from "react-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { useSelector } from "react-redux";

const QrContainer = ({ userId }) => {
  const qrLogo = useSelector((state) => state.profileInfoSlice.qrLogo);
  const qrColor = useSelector((state) => state.profileInfoSlice.qrColor);

  // download QR code
  // const downloadQRCode = () => {
  //   const qrCodeURL = document
  //     .getElementById("qrCodeEl")
  //     .toDataURL("image/png")
  //     .replace("image/png", "image/octet-stream");
  //   let aEl = document.createElement("a");
  //   aEl.href = qrCodeURL;
  //   aEl.download = "QR_Code.png";
  //   document.body.appendChild(aEl);
  //   aEl.click();
  //   document.body.removeChild(aEl);
  // };
  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCodeEl");
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `QR_Code.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  let cardUrl = import.meta.env.VITE_PROFILE_URL;
  return (
    <div className="qr-container-main">
      <h2>User's QR Code</h2>
      {/* <img src={image} alt={"Screenshot"} />
      <div ref={ref}> */}
      <QRCode
        value={cardUrl + userId}
        size="171"
        logoImage={qrLogo}
        fgColor={qrColor ? qrColor : "black"}
        logoOpacity="0.9"
        logoWidth="90"
        logoHeight="90"
        // eyeRadius={10}
      />
      {/* </div> */}

      <div style={{ display: "none" }}>
        <QRCode
          id="qrCodeEl"
          value={cardUrl + userId}
          size="171"
          logoImage={qrLogo}
          enableCORS={true}
          // fgColor={qrColor ? qrColor : "black"}
          logoOpacity={1}
          logoWidth={90}
          logoHeight={90}
          // eyeRadius={10}
        />
      </div>

      <button
        className="update"
        // onClick={getImage}
        onClick={() => downloadQRCode()}
      >
        <AiOutlineDownload
          style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
        />{" "}
        Download QR Code
      </button>
    </div>
  );
};

export default QrContainer;
